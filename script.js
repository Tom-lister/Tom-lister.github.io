let frame = 1;
let finished = false;
let selected = 1;
let daily = {
    "3-4":["Anti-Sugar PSA","&#x1F36C ","1"],
    "4-4":["Looped","&#x267B ","2"],
    "5-4":["The MadD G Documentary","&#x1F4FD ","3"],
    "6-4":["Chairs","&#x1FA91 ","4"],
    "7-4":["Vaccines & Violence (An In-Depth Documentary)","&#x1F489 ","5"],
    "8-4":["Poop Show","&#x1F4A9 ","6"],
    "9-4":["The Final Accommodation","&#x1F3E0 ","7"],
    "10-4":["How To Stop Diseases","&#x1F9EC ","8"],
    "11-4":["Every Teen Movie Opening","&#x1F39E ","9"],
    "12-4":["Supernova","&#x1F320 ","10"],
    "13-4":["Underground Fight","&#x1F44A ","11"],
    "14-4":["Is Chicken Even Real (An In-Depth Documentary)","&#x1F414 ","12"],
    "15-4":["Family Guy Intro (HD)","&#x1F9CD ","13"],
    "16-4":["100 Subscriber Special (Again)","&#x1F4B9 ","14"],
    "17-4":["Anti-Sugar PSA (5th Anniversary Edition)","&#x1F36D ","15"]
}
let congrats = {
    1:"Gyro Genius (1/6)",
    2:"Machiavellian Master (2/6)",
    3:"Argon Average (3/6)",
    4:"MediaCorp Middling (4/6)",
    5:"Plutonium Poor (5/6)",
    6:"TLPlays Terrible (6/6)"
};

const d = new Date( new Date().getTime())
let day = d.getDate() + "-" + (d.getMonth()+1);

let answer = daily[day][0];
let emoji = daily[day][1];
let number = daily[day][2];

function check(e) {
    let field = document.getElementById("film-guess");
    if (field.value != "") {
        field.setAttribute("list","film-titles")
    } else {
        field.setAttribute("list","")
    }
    if(e.keyCode == 13 && !finished) {
        field.setAttribute("list","")
        let guess = field.value;
        field.value = "";
        let guessbox = document.createElement("div");
        guessbox.classList.add("guess");
        let guesstext = document.createElement("p");
        
        if (guess == answer) {
            goodEnding(frame);
            document.getElementById("display").style.borderColor = "lawngreen";
            guesstext.innerHTML = emoji;
            finished = true;
        } else {
            guesstext.innerHTML = "&#10060 ";
            frame += 1
            if (frame == 7) {
                finished = true;
                document.getElementById("display").style.borderColor = "red";
                badEnding();
            }
            if (!finished) {
                let numberbox = document.createElement("div");
                numberbox.classList.add("number");
                numberbox.id = String(frame);
                numberbox.setAttribute("onclick","selectFrame(id)")
                let numbertext = document.createElement("p");
                numbertext.innerHTML = frame;
                numberbox.append(numbertext)
                
                let numbers = document.getElementById("numbers");
                numbers.append(numberbox);
            }
        }

        guesstext.innerHTML += guess;
        guessbox.append(guesstext);
        let newline = document.createElement("br");

        let guesses = document.getElementById("guesses");
        guesses.append(guessbox);
        guesses.append(newline);

        if (frame < 7) {selectFrame(frame)};
    }
};

function selectFrame(id) {
    if (id != selected) {
        selection = parseInt(id);
        document.getElementById(id).style.backgroundColor = "#212121";
        document.getElementById(id).style.borderColor = "#212121";
        document.getElementById("display").src = answer+"/"+id+".png";
        document.getElementById(selected).style.backgroundColor = "dimgray";
        document.getElementById(selected).style.borderColor = "dimgray";
        selected = id;
    }
};

function goodEnding(frame) {
    for (let i = frame+1; i < 7; i += 1) {
        let numberbox = document.createElement("div");
        numberbox.classList.add("number");
        numberbox.id = i;
        numberbox.setAttribute("onclick","selectFrame(id)");
        let numbertext = document.createElement("p");
        numbertext.innerHTML = String(i);
        numberbox.append(numbertext);

        let numbers = document.getElementById("numbers");
        numbers.append(numberbox);
    }
    
    let entry = document.getElementById("entry");
    let congratsbox = document.createElement("div");
    congratsbox.classList.add("guess");
    let congratstext = document.createElement("p");
    let congratsbold = document.createElement("strong");
    congratsbold.innerHTML = congrats[frame];
    congratstext.append(congratsbold)
    congratstext.style.lineHeight = "normal";
    congratsbox.append(congratstext);
    let newline = document.createElement("br");

    entry.innerHTML = "";
    entry.append(congratsbox);
    entry.append(newline);

    copyBox();
};

function badEnding() {
    let entry = document.getElementById("entry");
    let failurebox = document.createElement("div");
    failurebox.classList.add("guess");
    failurebox.style.marginTop = "12px";
    let failuretext = document.createElement("p");
    let failurebold = document.createElement("strong");
    failurebold.innerHTML = answer;
    failuretext.append(failurebold)
    failuretext.style.lineHeight = "90%";
    failuretext.style.color = "red";
    failurebox.append(failuretext);
    let newline = document.createElement("br");

    entry.innerHTML = "";
    entry.append(failurebox);
    entry.append(newline);

    copyBox();
}

function copyBox() {
    let copybox = document.createElement("div");
    copybox.classList.add("number");
    copybox.setAttribute("onclick","copyText()")
    copybox.id = "copy-box";
    let copytext = document.createElement("p");
    copytext.id = "copy-text";
    copytext.innerHTML = "Copy results";
    copybox.append(copytext)
    copybox.style.width = "90px";

    let numbers = document.getElementById("numbers");
    numbers.append(copybox)
}

function copyText() {
    if (frame < 7) {
        navigator.clipboard.writeText("Unethiverse Framed #"+number+"\n🎥 "+"🟥 ".repeat(frame-1)+"🟩"+" ⬛".repeat(6-frame)+"\nhttps://tom-lister.github.io/");
    } else {
        navigator.clipboard.writeText("Unethiverse Framed #"+number+"\n🎥"+"🟥 🟥 🟥 🟥 🟥 🟥\nhttps://tom-lister.github.io/");
    };
    document.getElementById("copy-text").innerHTML = "Copied!";
    box = document.getElementById("copy-box");
    box.setAttribute("onclick","");
    box.style.cursor = "default";

}

document.getElementById("display").src = answer+"/1.png"
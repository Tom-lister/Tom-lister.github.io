let frame = 1;
let finished = false;
let selected = 1;
let daily = {
    "4-3":["The Unethicals","&#128184 "]
}
let congrats = {
    1:"Gyro Genius (1/6)",
    2:"Machiavellian Master (2/6)",
    3:"Argon Average (3/6)",
    4:"MediaCorp Middling (4/6)",
    5:"Plutonium Poor (5/6)",
    6:"TLPlays Terrible (6/6)"
};
const d = new Date( new Date().getTime() + 24 * 3600 * 1000)
let day = d.getDate() + "-" + d.getMonth();

let answer = daily[day][0];
let emoji = daily[day][1];

function check(e) {
    if(e.keyCode == 13 && !finished) {
        let field = document.getElementById("film-guess");
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

        selectFrame(frame)
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
        numberbox.id = i
        numberbox.setAttribute("onclick","selectFrame(id)")
        let numbertext = document.createElement("p");
        numbertext.innerHTML = String(i);
        numberbox.append(numbertext)

        let numbers = document.getElementById("numbers");
        numbers.append(numberbox)
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

};

function badEnding() {
    let entry = document.getElementById("entry");
    let failurebox = document.createElement("div");
    failurebox.classList.add("guess");
    let failuretext = document.createElement("p");
    let failurebold = document.createElement("strong");
    failurebold.innerHTML = answer;
    failuretext.append(failurebold)
    failuretext.style.lineHeight = "normal";
    failuretext.style.color = "red";
    failurebox.append(failuretext);
    let newline = document.createElement("br");

    entry.innerHTML = "";
    entry.append(failurebox);
    entry.append(newline);
}

document.getElementById("display").src = answer+"/1.png"
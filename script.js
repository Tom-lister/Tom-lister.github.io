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
    "17-4":["Anti-Sugar PSA (5th Anniversary Edition)","&#x1F36D ","15"],
    "18-4":["Permanent Accommodation","&#x1F6B9 ","16"],
    "19-4":["Nova Blanc","&#x1F64C ","17"],
    "20-4":["Macbeth on a Budget","&#x1F4D6 ","18"],
    "21-4":["Brutal Fight Scene","&#x2620 ","19"],
    "22-4":["The House of the Future","&#x1F3DA ","20"],
    "29-12":["SwaggyWhiteBoy","&#x1F60E ","21"],
    "30-12":["Who's that Weird Guy over there","&#x1F574 ","22"],
    "31-12":["Spliced","&#x1F3A5","23"],
    "1-1":["What if Evangelion was Real","&#x1F34A ","24"],
    "2-1":["Swamp Man","&#x1F9B8 ","25"],
    "3-1":["Anti-Sugar PSA (5th Anniversary Edition)","&#x1F36D ","26"],
    "4-1":["The Slob","&#x1F4A4 ","27"],
    "5-1":["The Three Jakes","&#x1F451 ","28"],
    "6-1":["We're out of Video Ideas","&#x1F4A1 ","29"],
    "7-1":["Amateur Labs (Interview with Map Creator)","&#x1FAC3 ","30"],
    "8-1":["QueenAI","&#x1F5A5 ","31"],
    "9-1":["Seinfeld Lore","&#x1F3A4 ","32"],
    "10-1":["Running Late","&#x1F4F1 ","33"],
    "11-1":["Looking for Cryptids","&#x1F9DF ","34"],
    "12-1":["Rookie","&#x1F694 ","35"],
    "13-1":["Tiny Eminem","&#x1F3B5 ","36"],
    "14-1":["You Should Jump","&#x26F0 ","37"],
    "15-1":["Poop Show","&#x1F4A9 ","38"],
    "16-1":["Finding a Cool Rock in the Woods","&#x1FAA8 ","39"],
    "17-1":["#GoneViral","&#x1F98C ","40"],
    "18-1":["Percy's Birthday Extravaganza","&#x1F382 ","41"],
    "19-1":["Rap Snacks","&#x1F954 ","42"],
    "20-1":["The Ultimate Pimp","&#x1F4B8 ","43"],
    "21-1":["20 Guys","&#x1F468	","44"],
    "22-1":["The Co-Worker who tells Awful Stories","&#x1F6CD ","45"],
    "23-1":["Illuminati Confirmed (The MadD G Show)","&#x1F441 ","46"],
    "24-1":["Welcome to Argon Films","&#x1F35E ","47"],
    "25-1":["Top 7 Places in London","&#x1F3D9 ","48"],
    "26-1":["Regenerations (The Depraved Adventures of Bob & Mike)","&#x1F46C ","49"],
    "27-1":["Piss Show","&#x1F6BD ","50"],
    "28-1":["The Visitor","&#x1F6AA ","51"],
    "29-1":["MadD G - The Inside Story","&#x1F44A ","52"],
    "30-1":["What to do if a Shadow Man is following you","&#x1F31A	","53"],
    "31-1":["Watching the Truman Show for the First Time","&#x1F4FA	","54"],
    "1-2":["Percy Manthey's Outside","&#x1F3DE ","55"],
    "2-2":["How to Check if your House is Haunted","&#x1F47B ","56"],
    "3-2":["Trying Cigarettes for the First Time","&#x1F6AC	","57"],
    "4-2":["Scariest GMOD Nextbot Ever","&#x1F631 ","58"],
    "5-2":["The Bunny","&#x1F407 ","59"],
    "6-2":["Imagine (MadD G)","&#x1F476	","60"],
    "7-2":["Halloween III - Season of the Witch (1982)"]
}
let congrats = {
    1:"Gyro Genius (1/6)",
    2:"Machiavellian Master (2/6)",
    3:"Argon Average (3/6)",
    4:"MediaCorp Middling (4/6)",
    5:"Plutonium Poor (5/6)",
    6:"TLPlays Terrible (6/6)"
};

const d = new Date( new Date().getTime());
let day = d.getDate() + "-" + (d.getMonth()+1);
let currentday = d.getDate() + "-" + (d.getMonth()+1);

const lengths = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
//Code does not account for leap years!

let answer = daily[day][0];
let emoji = daily[day][1];
let number = daily[day][2];

let archived = false;
let refreshed = false;

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
        if (!refreshed || selected == 1) {
            document.getElementById(selected).style.backgroundColor = "dimgray";
            document.getElementById(selected).style.borderColor = "dimgray";
        }
        refreshed = false;
        selected = id;
    }
    document.getElementById("display").src = "unethiverseframes/"+answer.replace("#","")+"/"+id+".png";
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
    copybox.id = "7";
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
        navigator.clipboard.writeText("Unethiverse Framed #"+number+(archived?" (Replay)":"")+"\n🎥 "+"🟥 ".repeat(frame-1)+"🟩"+" ⬛".repeat(6-frame)+"\n\nhttps://tom-lister.github.io/");
    } else {
        navigator.clipboard.writeText("Unethiverse Framed #"+number+(archived?" (Replay)":"")+"\n🎥"+"🟥 🟥 🟥 🟥 🟥 🟥\n\nhttps://tom-lister.github.io/");
    };
    document.getElementById("copy-text").innerHTML = "Copied!";
    box = document.getElementById("7");
    box.setAttribute("onclick","");
    box.style.cursor = "default";

}

function previous() {
    if (day == "29-12") {
        day = "22-4";
        document.getElementById("rightarrow").style.opacity = 1;
        archived = true;
    } else if (day != "3-4") {
        if (day == "1-1") {
            day = "31-12";
        } else if (day.split("-")[0] == "1") {
            if (day.split("-")[1] == "1") {
                day = String(lengths[day.split("-")[1] - 1]) + "-12";
            } else day = String(lengths[day.split("-")[1] - 1]) + "-" + String(parseInt(day.split("-")[1]) - 1);
        } else {
            day = String(parseInt(day.split("-")[0]) - 1) + "-" + day.split("-")[1];
        }
        document.getElementById("rightarrow").style.opacity = 1;
        archived = true;
    }
    if (day == "3-4") {
        document.getElementById("leftarrow").style.opacity = 0.3;
    }
    refresh();
}

function next() {
    if (day == "22-4") {
        day = "29-12";
    } else if (day != currentday) {
        if (day == "31-12") {
            day = "1-1";
        } else if (parseInt(day.split("-")[0]) == lengths[day.split("-")[1]]) {
            day = "1-" + String(parseInt(day.split("-")[1]) + 1);
        } else {
            day = String(parseInt(day.split("-")[0]) + 1) + "-" + day.split("-")[1];
        }
        document.getElementById("leftarrow").style.opacity = 1;
    }
    if (day == currentday) {
        document.getElementById("rightarrow").style.opacity = 0.3;
        archived = false;
    }
    refresh();
}

function refresh() {
    console.log(day);
    answer = daily[day][0];
    emoji = daily[day][1];
    number = daily[day][2];
    if (finished) {
        for (let i = 2; i < 8; i += 1) {
            document.getElementById(i).remove();
        }
        frame = 1;
        let entry = document.getElementById("entry");
        entry.innerHTML = "";
        let input = document.createElement("input");
        input.id = "film-guess";
        input.name = "film-guess";
        input.placeholder = "Search for a movie";
        input.setAttribute("onkeyup","check(event)");
        entry.append(input);
        entry.append(document.createElement("br"))
    } else if (frame != 1) {
        for (let i = 2; i < frame+1; i += 1) {
            document.getElementById(i).remove();
        }
        frame = 1;
    }
    document.getElementById("guesses").innerHTML = "";
    document.getElementById("display").style.borderColor = "white";
    refreshed = true;
    finished = false;
    selectFrame(String(frame));
}

document.getElementById("display").src = "unethiverseframes/"+answer.replace("#","")+"/1.png"

for (i = 2; i < 7; i++)
{
    var img = new Image();
    img.src = "unethiverseframes/"+answer.replace("#","")+"/" + i.toString() + ".png";
}
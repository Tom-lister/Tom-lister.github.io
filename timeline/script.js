const years = [
  {
    year: 2010,
    height: 150,
  },
  {
    year: 2011,
    height: 400,
  },
  {
    year: 2012,
    height: 200,
  },
  {
    year: 2013,
    height: 250,
  },
  {
    year: 2014,
    height: 1000,
  },
  {
    year: 2015,
    height: 320,
  },
  {
    year: 2016,
    height: 100,
  },
  {
    year: 2017,
    height: 400,
  },
  {
    year: 2018,
    height: 150,
  },
  {
    year: 2019,
    height: 400,
  },
  {
    year: 2020,
    height: 350,
  },
  {
    year: 2021,
    height: 300,
  },
  {
    year: 2022,
    height: 300,
  },
  {
    year: 2023,
    height: 300,
  },
  {
    year: 2024,
    height: 360,
  },
  {
    year: 2025,
    height: 300,
  },
];

const groups = [
  {
    name: "Scouts",
    year: 2013,
    y: 0,
    x: 24,
  },
  {
    name: "Bus",
    year: 2014,
    y: 0,
    x: -25,
  },
  {
    name: "The Sketch 7(p)",
    year: 2014,
    y: 300,
    x: 25,
  },
  {
    name: "Puzzle Soc",
    year: 2014,
    y: 620,
    x: -24,
  },
  {
    name: "BFI Filmmaking",
    year: 2015,
    y: 0,
    x: 24,
  },
  {
    name: "The Corridor",
    year: 2021,
    y: 0,
    x: 24,
  },
  {
    name: "CompSci Crew",
    year: 2022,
    y: 0,
    x: -22,
  },
  {
    name: "The Brighton Gang",
    year: 2024,
    y: 210,
    x: 22,
  },
  {
    name: "Worldover",
    year: 2025,
    y: 50,
    x: -24,
  },
];

const people = [
  {
    name: "Liv",
    year: 2010,
    y: 150,
    x: -15,
  },
  {
    name: "Matthew",
    year: 2012,
    y: 120,
    x: 18,
  },
  {
    name: "Adam",
    year: 2012,
    y: 250,
    x: -15,
  },
  {
    name: "Ash",
    year: 2013,
    y: 190,
    x: 12,
  },
  {
    name: "Rex",
    year: 2013,
    y: 190,
    x: 24,
  },
  {
    name: "Josef",
    year: 2013,
    y: 190,
    x: 36,
  },
  {
    name: "Rahil",
    year: 2014,
    y: 200,
    x: -40,
  },
  {
    name: "Felix",
    year: 2014,
    y: 200,
    x: -28,
  },
  {
    name: "Jolie",
    year: 2014,
    y: 200,
    x: -16,
  },
  {
    name: "Cameron",
    year: 2014,
    y: 500,
    x: 10,
  },
  {
    name: "Sameer",
    year: 2014,
    y: 500,
    x: 22,
  },
  {
    name: "Kerim",
    year: 2014,
    y: 500,
    x: 34,
  },
  {
    name: "Kieran",
    year: 2014,
    y: 690,
    x: 16,
  },
  {
    name: "Dami",
    year: 2014,
    y: 690,
    x: 28,
  },
  {
    name: "Trix",
    year: 2014,
    y: 820,
    x: -38,
  },
  {
    name: "Emerson",
    year: 2014,
    y: 820,
    x: -24,
  },
  {
    name: "Meigan",
    year: 2014,
    y: 820,
    x: -10,
  },
  {
    name: "Will",
    year: 2014,
    y: 1010,
    x: -31,
  },
  {
    name: "Cosmo",
    year: 2014,
    y: 1010,
    x: -17,
  },
  {
    name: "Percy",
    year: 2015,
    y: 210,
    x: 10,
  },
  {
    name: "Jake",
    year: 2015,
    y: 210,
    x: 24,
  },
  {
    name: "Riley",
    year: 2015,
    y: 210,
    x: 38,
  },
  {
    name: "Joseph",
    year: 2015,
    y: 400,
    x: 17,
  },
  {
    name: "Angus",
    year: 2015,
    y: 400,
    x: 31,
  },
  {
    name: "Duja",
    year: 2018,
    y: 150,
    x: 18,
  },
  {
    name: "Jai",
    year: 2019,
    y: 180,
    x: 12,
  },
  {
    name: "Chanan",
    year: 2019,
    y: 370,
    x: -12,
  },
  {
    name: "Hannah K",
    displayName: "Hannah",
    year: 2019,
    y: 440,
    x: 22,
  },
  {
    name: "Ryan",
    year: 2020,
    y: 100,
    x: -22,
  },
  {
    name: "Bex",
    year: 2020,
    y: 450,
    x: -15,
  },
  {
    name: "Michael",
    year: 2021,
    y: 190,
    x: 10,
  },
  {
    name: "Catherine",
    year: 2021,
    y: 190,
    x: 24,
  },
  {
    name: "Isabelle",
    year: 2021,
    y: 190,
    x: 38,
  },
  {
    name: "MJ",
    year: 2021,
    y: 380,
    x: 17,
  },
  {
    name: "Elisha",
    year: 2021,
    y: 380,
    x: 31,
  },
  {
    name: "Isi",
    year: 2022,
    y: 190,
    x: -33,
  },
  {
    name: "Faiza",
    year: 2022,
    y: 190,
    x: -19,
  },
  {
    name: "Andy",
    year: 2022,
    y: 380,
    x: -26,
  },
  {
    name: "Sam",
    year: 2022,
    y: 380,
    x: -12,
  },
  {
    name: "Jacob",
    year: 2023,
    y: 140,
    x: 14,
  },
  {
    name: "Milo",
    year: 2023,
    y: 260,
    x: 28,
  },
  {
    name: "Val",
    year: 2023,
    y: 320,
    x: -18,
  },
  {
    name: "Josh",
    year: 2024,
    y: 160,
    x: -28,
  },
  {
    name: "Lucas",
    year: 2024,
    y: 270,
    x: -16,
  },
  {
    name: "Billie",
    year: 2024,
    y: 400,
    x: 12,
  },
  {
    name: "Theo",
    year: 2024,
    y: 400,
    x: 22,
  },
  {
    name: "Wren",
    year: 2024,
    y: 400,
    x: 32,
  },
  {
    name: "Tom",
    year: 2025,
    y: 240,
    x: -36,
  },
  {
    name: "Corey",
    year: 2025,
    y: 240,
    x: -24,
  },
  {
    name: "Sean",
    year: 2025,
    y: 240,
    x: -12,
  },
  {
    name: "Hannah",
    year: 2025,
    y: 400,
    x: 15,
  },
];

window.onload = () => {
  addYears();
  addGroups();
  addPeople();
};

function addYears() {
  const lineDiv = document.getElementById("line");
  years.forEach((yearInfo) => {
    const yearDiv = document.createElement("div");
    yearDiv.classList.add("yearDiv");
    yearDiv.style.marginBottom = `${yearInfo.height}px`;
    yearDiv.id = yearInfo.year.toString();

    const year = document.createElement("p");
    year.classList.add("year");
    year.innerHTML = yearInfo.year.toString();
    yearDiv.appendChild(year);

    lineDiv.appendChild(yearDiv);
  });
}

function addGroups() {
  groups.forEach((group) => {
    let topDistance = 40;
    for (const yearInfo of years) {
      if (group.year === yearInfo.year) {
        break;
      }
      const yearDiv = document.getElementById(yearInfo.year.toString());
      topDistance += yearDiv.clientHeight;
      topDistance += 10; //padding
      topDistance += yearInfo.height;
    }
    topDistance += group.y;

    const groupDiv = document.createElement("div");
    groupDiv.classList.add("group");
    groupDiv.style.top = `${topDistance}px`;
    groupDiv.style.left = `calc(${group.x}%)`;

    const groupText = document.createElement("p");
    groupText.innerHTML = group.name;
    groupDiv.appendChild(groupText);

    document.body.appendChild(groupDiv);
  });
}

function addPeople() {
  people.forEach((person) => {
    let topDistance = 40;
    for (const yearInfo of years) {
      if (person.year === yearInfo.year) {
        break;
      }
      const yearDiv = document.getElementById(yearInfo.year.toString());
      topDistance += yearDiv.clientHeight;
      topDistance += 10; //padding
      topDistance += yearInfo.height;
    }
    topDistance += person.y;

    const personDiv = document.createElement("div");
    personDiv.classList.add("person");
    personDiv.style.top = `${topDistance}px`;
    personDiv.style.left = `calc(50% - 70px + ${person.x}%)`;

    const image = document.createElement("img");
    image.src = `images/sketches/${person.name}.png`;
    image.style.cursor = "pointer";

    function swapImage() {
      if (image.src.includes("sketches")) {
        image.src = `images/photos/${person.name}.jpg`;
        image.style.borderRadius = "50%";
      } else {
        image.src = `images/sketches/${person.name}.png`;
        image.style.borderRadius = 0;
      }
    }

    image.onclick = swapImage;
    personDiv.appendChild(image);

    const name = document.createElement("p");
    name.innerHTML = person.displayName ?? person.name;
    personDiv.appendChild(name);

    document.body.appendChild(personDiv);
  });
}

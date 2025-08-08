const years = [
  {
    year: 2010,
    height: 400,
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
    height: 300,
  },
  {
    year: 2014,
    height: 700,
  },
  {
    year: 2015,
    height: 400,
  },
  {
    year: 2016,
    height: 400,
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
    height: 250,
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
    height: 400,
  },
  {
    year: 2024,
    height: 400,
  },
  {
    year: 2025,
    height: 400,
  },
];

const groups = [
  {
    name: "Bus",
    year: 2014,
    y: 0,
    x: -18,
  },
  {
    name: "The Sketch 7(p)",
    year: 2014,
    y: 300,
    x: 24,
  },
  {
    name: "The Corridor",
    year: 2021,
    y: 0,
    x: 24,
  },
];

const people = [
  {
    name: "Adam",
    year: 2012,
    y: 250,
    x: -15,
  },
  {
    name: "Jamie",
    year: 2013,
    y: 100,
    x: 12,
  },
  {
    name: "Josef",
    year: 2013,
    y: 380,
    x: 18,
  },
  {
    name: "Rahil",
    year: 2014,
    y: 200,
    x: -30,
  },
  {
    name: "Jolie",
    year: 2014,
    y: 200,
    x: -12,
  },
  {
    name: "Dami",
    year: 2014,
    y: 500,
    x: 38,
  },
  {
    name: "Duja",
    year: 2018,
    y: 130,
    x: 15,
  },
  {
    name: "Bex",
    year: 2020,
    y: 270,
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
    y: 220,
    x: 10,
  },
  {
    name: "Val",
    year: 2023,
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
    name.innerHTML = person.name;
    personDiv.appendChild(name);

    document.body.appendChild(personDiv);
  });
}

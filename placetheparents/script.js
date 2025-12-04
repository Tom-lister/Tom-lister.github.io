let stage = 1;
let finished = false;
let selected = 1;
let daily = {
  "19-11": ["portugal1.jpeg", "1", "Portugal"],
  "20-11": ["algeria1.jpg", "2", "Algeria"],
  "21-11": ["namibia1.jpg", "3", "Namibia"],
  "22-11": ["france1.webp", "4", "France"],
  "23-11": ["tunisia.jpg", "5", "Tunisia"],
  "24-11": ["unitedStates1.jpg", "6", "United States"],
  "25-11": ["norway1.jpg", "6", "Norway"],
  "26-11": ["switzerland1.jpg", "7", "Switzerland"],
  "27-11": ["morocco1.jpg", "8", "Morocco"],
  "28-11": ["italy1.jpg", "9", "Italy"],
  "29-11": ["portugal2.jpg", "10", "Portugal"],
  "30-11": ["unitedStates2.jpg", "11", "United States"],
  "1-12": ["ladakh1.jpg", "12", "India"],
  "2-12": ["zambia1.jpg", "13", "Zambia"],
  "3-12": ["canada1.jpg", "14", "Canada"],
  "4-12": ["oman1.jpg", "15", "Oman"],
  "5-12": ["norway2.jpg", "16", "Norway"],
  "6-12": ["namibia2.jpg", "17", "Namibia"],
  "7-12": ["england1.jpg", "18", "United Kingdom"],
  "8-12": ["morocco2.jpg", "19", "Morocco"],
  "9-12": ["spain1.jpg", "20", "Spain"],
  "10-12": ["oman2.jpg", "21", "Oman"],
  "11-12": ["canada2.jpg", "22", "Canada"],
  "12-12": ["namibia3.jpg", "23", "Namibia"],
  "13-12": ["england2.jpg", "24", "United Kingdom"],
};
let blurPerStage = {
  1: 50,
  2: 25,
  3: 10,
  4: 3,
  5: 0,
};
let countries = [
  {
    country: "Afghanistan",
    latitude: 33,
    longitude: 65,
  },
  {
    country: "Albania",
    latitude: 41,
    longitude: 20,
  },
  {
    country: "Algeria",
    latitude: 28,
    longitude: 3,
  },
  {
    country: "American Samoa",
    latitude: -14.3333,
    longitude: -170,
  },
  {
    country: "Andorra",
    latitude: 42.5,
    longitude: 1.6,
  },
  {
    country: "Angola",
    latitude: -12.5,
    longitude: 18.5,
  },
  {
    country: "Anguilla",
    latitude: 18.25,
    longitude: -63.1667,
  },
  {
    country: "Antarctica",
    latitude: -90,
    longitude: 0,
  },
  {
    country: "Antigua and Barbuda",
    latitude: 17.05,
    longitude: -61.8,
  },
  {
    country: "Argentina",
    latitude: -34,
    longitude: -64,
  },
  {
    country: "Armenia",
    latitude: 40,
    longitude: 45,
  },
  {
    country: "Aruba",
    latitude: 12.5,
    longitude: -69.9667,
  },
  {
    country: "Australia",
    latitude: -27,
    longitude: 133,
  },
  {
    country: "Austria",
    latitude: 47.3333,
    longitude: 13.3333,
  },
  {
    country: "Azerbaijan",
    latitude: 40.5,
    longitude: 47.5,
  },
  {
    country: "Bahamas",
    latitude: 24.25,
    longitude: -76,
  },
  {
    country: "Bahrain",
    latitude: 26,
    longitude: 50.55,
  },
  {
    country: "Bangladesh",
    latitude: 24,
    longitude: 90,
  },
  {
    country: "Barbados",
    latitude: 13.1667,
    longitude: -59.5333,
  },
  {
    country: "Belarus",
    latitude: 53,
    longitude: 28,
  },
  {
    country: "Belgium",
    latitude: 50.8333,
    longitude: 4,
  },
  {
    country: "Belize",
    latitude: 17.25,
    longitude: -88.75,
  },
  {
    country: "Benin",
    latitude: 9.5,
    longitude: 2.25,
  },
  {
    country: "Bermuda",
    latitude: 32.3333,
    longitude: -64.75,
  },
  {
    country: "Bhutan",
    latitude: 27.5,
    longitude: 90.5,
  },
  {
    country: "Bolivia, Plurinational State of",
    latitude: -17,
    longitude: -65,
  },
  {
    country: "Bosnia and Herzegovina",
    latitude: 44,
    longitude: 18,
  },
  {
    country: "Botswana",
    latitude: -22,
    longitude: 24,
  },
  {
    country: "Bouvet Island",
    latitude: -54.4333,
    longitude: 3.4,
  },
  {
    country: "Brazil",
    latitude: -10,
    longitude: -55,
  },
  {
    country: "British Indian Ocean Territory",
    latitude: -6,
    longitude: 71.5,
  },
  {
    country: "Brunei Darussalam",
    latitude: 4.5,
    longitude: 114.6667,
  },
  {
    country: "Bulgaria",
    latitude: 43,
    longitude: 25,
  },
  {
    country: "Burkina Faso",
    latitude: 13,
    longitude: -2,
  },
  {
    country: "Burundi",
    latitude: -3.5,
    longitude: 30,
  },
  {
    country: "Cambodia",
    latitude: 13,
    longitude: 105,
  },
  {
    country: "Cameroon",
    latitude: 6,
    longitude: 12,
  },
  {
    country: "Canada",
    latitude: 60,
    longitude: -95,
  },
  {
    country: "Cape Verde",
    latitude: 16,
    longitude: -24,
  },
  {
    country: "Cayman Islands",
    latitude: 19.5,
    longitude: -80.5,
  },
  {
    country: "Central African Republic",
    latitude: 7,
    longitude: 21,
  },
  {
    country: "Chad",
    latitude: 15,
    longitude: 19,
  },
  {
    country: "Chile",
    latitude: -30,
    longitude: -71,
  },
  {
    country: "China",
    latitude: 35,
    longitude: 105,
  },
  {
    country: "Christmas Island",
    latitude: -10.5,
    longitude: 105.6667,
  },
  {
    country: "Cocos (Keeling) Islands",
    latitude: -12.5,
    longitude: 96.8333,
  },
  {
    country: "Colombia",
    latitude: 4,
    longitude: -72,
  },
  {
    country: "Comoros",
    latitude: -12.1667,
    longitude: 44.25,
  },
  {
    country: "Congo",
    latitude: -1,
    longitude: 15,
  },
  {
    country: "Congo, the Democratic Republic of the",
    latitude: 0,
    longitude: 25,
  },
  {
    country: "Cook Islands",
    latitude: -21.2333,
    longitude: -159.7667,
  },
  {
    country: "Costa Rica",
    latitude: 10,
    longitude: -84,
  },
  {
    country: "Côte d'Ivoire",
    latitude: 8,
    longitude: -5,
  },
  {
    country: "Croatia",
    latitude: 45.1667,
    longitude: 15.5,
  },
  {
    country: "Cuba",
    latitude: 21.5,
    longitude: -80,
  },
  {
    country: "Cyprus",
    latitude: 35,
    longitude: 33,
  },
  {
    country: "Czech Republic",
    latitude: 49.75,
    longitude: 15.5,
  },
  {
    country: "Denmark",
    latitude: 56,
    longitude: 10,
  },
  {
    country: "Djibouti",
    latitude: 11.5,
    longitude: 43,
  },
  {
    country: "Dominica",
    latitude: 15.4167,
    longitude: -61.3333,
  },
  {
    country: "Dominican Republic",
    latitude: 19,
    longitude: -70.6667,
  },
  {
    country: "Ecuador",
    latitude: -2,
    longitude: -77.5,
  },
  {
    country: "Egypt",
    latitude: 27,
    longitude: 30,
  },
  {
    country: "El Salvador",
    latitude: 13.8333,
    longitude: -88.9167,
  },
  {
    country: "Equatorial Guinea",
    latitude: 2,
    longitude: 10,
  },
  {
    country: "Eritrea",
    latitude: 15,
    longitude: 39,
  },
  {
    country: "Estonia",
    latitude: 59,
    longitude: 26,
  },
  {
    country: "Ethiopia",
    latitude: 8,
    longitude: 38,
  },
  {
    country: "Falkland Islands (Malvinas)",
    latitude: -51.75,
    longitude: -59,
  },
  {
    country: "Faroe Islands",
    latitude: 62,
    longitude: -7,
  },
  {
    country: "Fiji",
    latitude: -18,
    longitude: 175,
  },
  {
    country: "Finland",
    latitude: 64,
    longitude: 26,
  },
  {
    country: "France",
    latitude: 46,
    longitude: 2,
  },
  {
    country: "French Guiana",
    latitude: 4,
    longitude: -53,
  },
  {
    country: "French Polynesia",
    latitude: -15,
    longitude: -140,
  },
  {
    country: "French Southern Territories",
    latitude: -43,
    longitude: 67,
  },
  {
    country: "Gabon",
    latitude: -1,
    longitude: 11.75,
  },
  {
    country: "Gambia",
    latitude: 13.4667,
    longitude: -16.5667,
  },
  {
    country: "Georgia",
    latitude: 42,
    longitude: 43.5,
  },
  {
    country: "Germany",
    latitude: 51,
    longitude: 9,
  },
  {
    country: "Ghana",
    latitude: 8,
    longitude: -2,
  },
  {
    country: "Gibraltar",
    latitude: 36.1833,
    longitude: -5.3667,
  },
  {
    country: "Greece",
    latitude: 39,
    longitude: 22,
  },
  {
    country: "Greenland",
    latitude: 72,
    longitude: -40,
  },
  {
    country: "Grenada",
    latitude: 12.1167,
    longitude: -61.6667,
  },
  {
    country: "Guadeloupe",
    latitude: 16.25,
    longitude: -61.5833,
  },
  {
    country: "Guam",
    latitude: 13.4667,
    longitude: 144.7833,
  },
  {
    country: "Guatemala",
    latitude: 15.5,
    longitude: -90.25,
  },
  {
    country: "Guernsey",
    latitude: 49.5,
    longitude: -2.56,
  },
  {
    country: "Guinea",
    latitude: 11,
    longitude: -10,
  },
  {
    country: "Guinea-Bissau",
    latitude: 12,
    longitude: -15,
  },
  {
    country: "Guyana",
    latitude: 5,
    longitude: -59,
  },
  {
    country: "Haiti",
    latitude: 19,
    longitude: -72.4167,
  },
  {
    country: "Heard Island and McDonald Islands",
    latitude: -53.1,
    longitude: 72.5167,
  },
  {
    country: "Holy See (Vatican City State)",
    latitude: 41.9,
    longitude: 12.45,
  },
  {
    country: "Honduras",
    latitude: 15,
    longitude: -86.5,
  },
  {
    country: "Hong Kong",
    latitude: 22.25,
    longitude: 114.1667,
  },
  {
    country: "Hungary",
    latitude: 47,
    longitude: 20,
  },
  {
    country: "Iceland",
    latitude: 65,
    longitude: -18,
  },
  {
    country: "India",
    latitude: 20,
    longitude: 77,
  },
  {
    country: "Indonesia",
    latitude: -5,
    longitude: 120,
  },
  {
    country: "Iran, Islamic Republic of",
    latitude: 32,
    longitude: 53,
  },
  {
    country: "Iraq",
    latitude: 33,
    longitude: 44,
  },
  {
    country: "Ireland",
    latitude: 53,
    longitude: -8,
  },
  {
    country: "Isle of Man",
    latitude: 54.23,
    longitude: -4.55,
  },
  {
    country: "Israel",
    latitude: 31.5,
    longitude: 34.75,
  },
  {
    country: "Italy",
    latitude: 42.8333,
    longitude: 12.8333,
  },
  {
    country: "Jamaica",
    latitude: 18.25,
    longitude: -77.5,
  },
  {
    country: "Japan",
    latitude: 36,
    longitude: 138,
  },
  {
    country: "Jersey",
    latitude: 49.21,
    longitude: -2.13,
  },
  {
    country: "Jordan",
    latitude: 31,
    longitude: 36,
  },
  {
    country: "Kazakhstan",
    latitude: 48,
    longitude: 68,
  },
  {
    country: "Kenya",
    latitude: 1,
    longitude: 38,
  },
  {
    country: "Kiribati",
    latitude: 1.4167,
    longitude: 173,
  },
  {
    country: "Korea, Democratic People's Republic of",
    latitude: 40,
    longitude: 127,
  },
  {
    country: "Korea, Republic of",
    latitude: 37,
    longitude: 127.5,
  },
  {
    country: "Kuwait",
    latitude: 29.3375,
    longitude: 47.6581,
  },
  {
    country: "Kyrgyzstan",
    latitude: 41,
    longitude: 75,
  },
  {
    country: "Lao People's Democratic Republic",
    latitude: 18,
    longitude: 105,
  },
  {
    country: "Latvia",
    latitude: 57,
    longitude: 25,
  },
  {
    country: "Lebanon",
    latitude: 33.8333,
    longitude: 35.8333,
  },
  {
    country: "Lesotho",
    latitude: -29.5,
    longitude: 28.5,
  },
  {
    country: "Liberia",
    latitude: 6.5,
    longitude: -9.5,
  },
  {
    country: "Libyan Arab Jamahiriya",
    latitude: 25,
    longitude: 17,
  },
  {
    country: "Liechtenstein",
    latitude: 47.1667,
    longitude: 9.5333,
  },
  {
    country: "Lithuania",
    latitude: 56,
    longitude: 24,
  },
  {
    country: "Luxembourg",
    latitude: 49.75,
    longitude: 6.1667,
  },
  {
    country: "Macao",
    latitude: 22.1667,
    longitude: 113.55,
  },
  {
    country: "Macedonia, the former Yugoslav Republic of",
    latitude: 41.8333,
    longitude: 22,
  },
  {
    country: "Madagascar",
    latitude: -20,
    longitude: 47,
  },
  {
    country: "Malawi",
    latitude: -13.5,
    longitude: 34,
  },
  {
    country: "Malaysia",
    latitude: 2.5,
    longitude: 112.5,
  },
  {
    country: "Maldives",
    latitude: 3.25,
    longitude: 73,
  },
  {
    country: "Mali",
    latitude: 17,
    longitude: -4,
  },
  {
    country: "Malta",
    latitude: 35.8333,
    longitude: 14.5833,
  },
  {
    country: "Marshall Islands",
    latitude: 9,
    longitude: 168,
  },
  {
    country: "Martinique",
    latitude: 14.6667,
    longitude: -61,
  },
  {
    country: "Mauritania",
    latitude: 20,
    longitude: -12,
  },
  {
    country: "Mauritius",
    latitude: -20.2833,
    longitude: 57.55,
  },
  {
    country: "Mayotte",
    latitude: -12.8333,
    longitude: 45.1667,
  },
  {
    country: "Mexico",
    latitude: 23,
    longitude: -102,
  },
  {
    country: "Micronesia, Federated States of",
    latitude: 6.9167,
    longitude: 158.25,
  },
  {
    country: "Moldova, Republic of",
    latitude: 47,
    longitude: 29,
  },
  {
    country: "Monaco",
    latitude: 43.7333,
    longitude: 7.4,
  },
  {
    country: "Mongolia",
    latitude: 46,
    longitude: 105,
  },
  {
    country: "Montenegro",
    latitude: 42,
    longitude: 19,
  },
  {
    country: "Montserrat",
    latitude: 16.75,
    longitude: -62.2,
  },
  {
    country: "Morocco",
    latitude: 32,
    longitude: -5,
  },
  {
    country: "Mozambique",
    latitude: -18.25,
    longitude: 35,
  },
  {
    country: "Myanmar",
    latitude: 22,
    longitude: 98,
  },
  {
    country: "Namibia",
    latitude: -22,
    longitude: 17,
  },
  {
    country: "Nauru",
    latitude: -0.5333,
    longitude: 166.9167,
  },
  {
    country: "Nepal",
    latitude: 28,
    longitude: 84,
  },
  {
    country: "Netherlands",
    latitude: 52.5,
    longitude: 5.75,
  },
  {
    country: "Netherlands Antilles",
    latitude: 12.25,
    longitude: -68.75,
  },
  {
    country: "New Caledonia",
    latitude: -21.5,
    longitude: 165.5,
  },
  {
    country: "New Zealand",
    latitude: -41,
    longitude: 174,
  },
  {
    country: "Nicaragua",
    latitude: 13,
    longitude: -85,
  },
  {
    country: "Niger",
    latitude: 16,
    longitude: 8,
  },
  {
    country: "Nigeria",
    latitude: 10,
    longitude: 8,
  },
  {
    country: "Niue",
    latitude: -19.0333,
    longitude: -169.8667,
  },
  {
    country: "Norfolk Island",
    latitude: -29.0333,
    longitude: 167.95,
  },
  {
    country: "Northern Mariana Islands",
    latitude: 15.2,
    longitude: 145.75,
  },
  {
    country: "Norway",
    latitude: 62,
    longitude: 10,
  },
  {
    country: "Oman",
    latitude: 21,
    longitude: 57,
  },
  {
    country: "Pakistan",
    latitude: 30,
    longitude: 70,
  },
  {
    country: "Palau",
    latitude: 7.5,
    longitude: 134.5,
  },
  {
    country: "Palestinian Territory, Occupied",
    latitude: 32,
    longitude: 35.25,
  },
  {
    country: "Panama",
    latitude: 9,
    longitude: -80,
  },
  {
    country: "Papua New Guinea",
    latitude: -6,
    longitude: 147,
  },
  {
    country: "Paraguay",
    latitude: -23,
    longitude: -58,
  },
  {
    country: "Peru",
    latitude: -10,
    longitude: -76,
  },
  {
    country: "Philippines",
    latitude: 13,
    longitude: 122,
  },
  {
    country: "Pitcairn",
    latitude: -24.7,
    longitude: -127.4,
  },
  {
    country: "Poland",
    latitude: 52,
    longitude: 20,
  },
  {
    country: "Portugal",
    latitude: 39.5,
    longitude: -8,
  },
  {
    country: "Puerto Rico",
    latitude: 18.25,
    longitude: -66.5,
  },
  {
    country: "Qatar",
    latitude: 25.5,
    longitude: 51.25,
  },
  {
    country: "Réunion",
    latitude: -21.1,
    longitude: 55.6,
  },
  {
    country: "Romania",
    latitude: 46,
    longitude: 25,
  },
  {
    country: "Russian Federation",
    latitude: 60,
    longitude: 100,
  },
  {
    country: "Rwanda",
    latitude: -2,
    longitude: 30,
  },
  {
    country: "Saint Helena, Ascension and Tristan da Cunha",
    latitude: -15.9333,
    longitude: -5.7,
  },
  {
    country: "Saint Kitts and Nevis",
    latitude: 17.3333,
    longitude: -62.75,
  },
  {
    country: "Saint Lucia",
    latitude: 13.8833,
    longitude: -61.1333,
  },
  {
    country: "Saint Pierre and Miquelon",
    latitude: 46.8333,
    longitude: -56.3333,
  },
  {
    country: "Saint Vincent and the Grenadines",
    latitude: 13.25,
    longitude: -61.2,
  },
  {
    country: "Samoa",
    latitude: -13.5833,
    longitude: -172.3333,
  },
  {
    country: "San Marino",
    latitude: 43.7667,
    longitude: 12.4167,
  },
  {
    country: "Sao Tome and Principe",
    latitude: 1,
    longitude: 7,
  },
  {
    country: "Saudi Arabia",
    latitude: 25,
    longitude: 45,
  },
  {
    country: "Senegal",
    latitude: 14,
    longitude: -14,
  },
  {
    country: "Serbia",
    latitude: 44,
    longitude: 21,
  },
  {
    country: "Seychelles",
    latitude: -4.5833,
    longitude: 55.6667,
  },
  {
    country: "Sierra Leone",
    latitude: 8.5,
    longitude: -11.5,
  },
  {
    country: "Singapore",
    latitude: 1.3667,
    longitude: 103.8,
  },
  {
    country: "Slovakia",
    latitude: 48.6667,
    longitude: 19.5,
  },
  {
    country: "Slovenia",
    latitude: 46,
    longitude: 15,
  },
  {
    country: "Solomon Islands",
    latitude: -8,
    longitude: 159,
  },
  {
    country: "Somalia",
    latitude: 10,
    longitude: 49,
  },
  {
    country: "South Africa",
    latitude: -29,
    longitude: 24,
  },
  {
    country: "South Georgia and the South Sandwich Islands",
    latitude: -54.5,
    longitude: -37,
  },
  {
    country: "South Sudan",
    latitude: 8,
    longitude: 30,
  },
  {
    country: "Spain",
    latitude: 40,
    longitude: -4,
  },
  {
    country: "Sri Lanka",
    latitude: 7,
    longitude: 81,
  },
  {
    country: "Sudan",
    latitude: 15,
    longitude: 30,
  },
  {
    country: "Suriname",
    latitude: 4,
    longitude: -56,
  },
  {
    country: "Svalbard and Jan Mayen",
    latitude: 78,
    longitude: 20,
  },
  {
    country: "Swaziland",
    latitude: -26.5,
    longitude: 31.5,
  },
  {
    country: "Sweden",
    latitude: 62,
    longitude: 15,
  },
  {
    country: "Switzerland",
    latitude: 47,
    longitude: 8,
  },
  {
    country: "Syrian Arab Republic",
    latitude: 35,
    longitude: 38,
  },
  {
    country: "Taiwan, Province of China",
    latitude: 23.5,
    longitude: 121,
  },
  {
    country: "Tajikistan",
    latitude: 39,
    longitude: 71,
  },
  {
    country: "Tanzania, United Republic of",
    latitude: -6,
    longitude: 35,
  },
  {
    country: "Thailand",
    latitude: 15,
    longitude: 100,
  },
  {
    country: "Timor-Leste",
    latitude: -8.55,
    longitude: 125.5167,
  },
  {
    country: "Togo",
    latitude: 8,
    longitude: 1.1667,
  },
  {
    country: "Tokelau",
    latitude: -9,
    longitude: -172,
  },
  {
    country: "Tonga",
    latitude: -20,
    longitude: -175,
  },
  {
    country: "Trinidad and Tobago",
    latitude: 11,
    longitude: -61,
  },
  {
    country: "Tunisia",
    latitude: 34,
    longitude: 9,
  },
  {
    country: "Turkey",
    latitude: 39,
    longitude: 35,
  },
  {
    country: "Turkmenistan",
    latitude: 40,
    longitude: 60,
  },
  {
    country: "Turks and Caicos Islands",
    latitude: 21.75,
    longitude: -71.5833,
  },
  {
    country: "Tuvalu",
    latitude: -8,
    longitude: 178,
  },
  {
    country: "Uganda",
    latitude: 1,
    longitude: 32,
  },
  {
    country: "Ukraine",
    latitude: 49,
    longitude: 32,
  },
  {
    country: "United Arab Emirates",
    latitude: 24,
    longitude: 54,
  },
  {
    country: "United Kingdom",
    latitude: 54,
    longitude: -2,
  },
  {
    country: "United States",
    latitude: 38,
    longitude: -97,
  },
  {
    country: "United States Minor Outlying Islands",
    latitude: 19.2833,
    longitude: 166.6,
  },
  {
    country: "Uruguay",
    latitude: -33,
    longitude: -56,
  },
  {
    country: "Uzbekistan",
    latitude: 41,
    longitude: 64,
  },
  {
    country: "Vanuatu",
    latitude: -16,
    longitude: 167,
  },
  {
    country: "Venezuela, Bolivarian Republic of",
    latitude: 8,
    longitude: -66,
  },
  {
    country: "Viet Nam",
    latitude: 16,
    longitude: 106,
  },
  {
    country: "Virgin Islands, British",
    latitude: 18.5,
    longitude: -64.5,
  },
  {
    country: "Virgin Islands, U.S.",
    latitude: 18.3333,
    longitude: -64.8333,
  },
  {
    country: "Wallis and Futuna",
    latitude: -13.3,
    longitude: -176.2,
  },
  {
    country: "Western Sahara",
    latitude: 24.5,
    longitude: -13,
  },
  {
    country: "Yemen",
    latitude: 15,
    longitude: 48,
  },
  {
    country: "Zambia",
    latitude: -15,
    longitude: 30,
  },
  {
    country: "Zimbabwe",
    latitude: -20,
    longitude: 30,
  },
];

const d = new Date(new Date().getTime());
let day = d.getDate() + "-" + (d.getMonth() + 1);
//let day = "29-11";
let currentday = day;

const lengths = {
  //Code does not account for leap years!
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function haversineDistanceKM(lat1Deg, lon1Deg, lat2Deg, lon2Deg) {
  function toRad(degree) {
    return (degree * Math.PI) / 180;
  }

  const lat1 = toRad(lat1Deg);
  const lon1 = toRad(lon1Deg);
  const lat2 = toRad(lat2Deg);
  const lon2 = toRad(lon2Deg);

  const { sin, cos, sqrt, atan2 } = Math;

  const R = 6371; // earth radius in km
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;
  const a =
    sin(dLat / 2) * sin(dLat / 2) +
    cos(lat1) * cos(lat2) * sin(dLon / 2) * sin(dLon / 2);
  const c = 2 * atan2(sqrt(a), sqrt(1 - a));
  const d = R * c;
  return d; // distance in km
}

let image = daily[day][0];
let number = daily[day][1];
let country = daily[day][2];

let archived = false;
let refreshed = false;

function check(e) {
  let field = document.getElementById("film-guess");
  if (field.value != "") {
    field.setAttribute("list", "country-names");
  } else {
    field.setAttribute("list", "");
  }
  if (e.keyCode == 13 && !finished) {
    field.setAttribute("list", "");
    let guess = field.value.toLowerCase();
    field.value = "";

    let guessEntry = countries.find(
      (entry) => entry.country.toLowerCase() == guess
    );
    if (!guessEntry) return;

    let guessbox = document.createElement("div");
    guessbox.classList.add("textbox");
    guessbox.classList.add("guess");
    let guesstext = document.createElement("p");

    if (guess == country.toLowerCase()) {
      goodEnding(stage);
      document.getElementById("display").style.borderColor = "lawngreen";
      guesstext.innerHTML = `&#9989 ${guess}`;
      finished = true;
    } else {
      let targetEntry = countries.find((entry) => entry.country == country);
      let distance = haversineDistanceKM(
        guessEntry.latitude,
        guessEntry.longitude,
        targetEntry.latitude,
        targetEntry.longitude
      );

      guesstext.innerHTML = `&#10060 ${guess} (${Math.round(
        distance
      )} km away)`;

      stage += 1;
      document.getElementById("display").children[0].style[
        "filter"
      ] = `blur(${blurPerStage[stage]}px)`;
      if (stage == 6) {
        finished = true;
        document.getElementById("display").style.borderColor = "red";
        badEnding();
      }
    }

    guessbox.append(guesstext);
    let newline = document.createElement("br");

    let guesses = document.getElementById("guesses");
    guesses.append(guessbox);
    guesses.append(newline);
  }
}

function goodEnding(stage) {
  document.getElementById("display").children[0].style["filter"] = "blur(0px)";

  let entry = document.getElementById("entry");
  let congratsbox = document.createElement("div");
  congratsbox.classList.add("textbox");
  congratsbox.classList.add("outcomebox");
  let congratstext = document.createElement("p");
  let congratsbold = document.createElement("strong");
  congratsbold.innerHTML = `Parents placed! (${stage}/5)`;
  congratstext.append(congratsbold);
  congratstext.style.lineHeight = "normal";
  congratsbox.append(congratstext);
  let newline = document.createElement("br");

  entry.innerHTML = "";
  entry.append(congratsbox);
  entry.append(newline);

  copyBox();
}

function badEnding() {
  document.getElementById("display").children[0].style["filter"] = "blur(0px)";

  let entry = document.getElementById("entry");
  let failurebox = document.createElement("div");
  failurebox.classList.add("textbox");
  failurebox.classList.add("outcomebox");
  let failuretext = document.createElement("p");
  let failurebold = document.createElement("strong");
  failurebold.innerHTML = country;
  failuretext.append(failurebold);
  failuretext.style.lineHeight = "normal";
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
  copybox.classList.add("textbox");
  copybox.id = "copybox";
  copybox.setAttribute("onclick", "copyText()");
  let copytext = document.createElement("p");
  copytext.innerHTML = "Copy results";
  copytext.style.lineHeight = "normal";
  copybox.append(copytext);

  let entry = document.getElementById("entry");
  entry.append(copybox);
}

function copyText() {
  if (stage < 6) {
    navigator.clipboard.writeText(
      "Place The Parents #" +
        number +
        (archived ? " (Replay)" : "") +
        "\n🚐 " +
        "🟥".repeat(stage - 1) +
        "🟩" +
        "⬛".repeat(5 - stage)
    );
  } else {
    navigator.clipboard.writeText(
      "Place The Parents #" +
        number +
        (archived ? " (Replay)" : "") +
        "\n🚐 " +
        "🟥🟥🟥🟥🟥"
    );
  }
  document.getElementById("copybox").children[0].innerHTML = "Copied!";
  box = document.getElementById("copybox");
  box.setAttribute("onclick", "");
  box.style.cursor = "default";
}

function previous() {
  if (day == "19-11") return;

  if (day == "1-1") {
    day = "31-12";
  } else if (day.split("-")[0] == "1") {
    if (day.split("-")[1] == "1") {
      day = String(lengths[day.split("-")[1] - 1]) + "-12";
    } else
      day =
        String(lengths[day.split("-")[1] - 1]) +
        "-" +
        String(parseInt(day.split("-")[1]) - 1);
  } else {
    day = String(parseInt(day.split("-")[0]) - 1) + "-" + day.split("-")[1];
  }
  document.getElementById("rightarrow").style.opacity = 1;
  archived = true;
  if (day == "19-11") {
    document.getElementById("leftarrow").style.opacity = 0.3;
  }
  refresh();
}

function next() {
  if (day == currentday) return;

  if (day == "31-12") {
    day = "1-1";
  } else if (parseInt(day.split("-")[0]) == lengths[day.split("-")[1]]) {
    day = "1-" + String(parseInt(day.split("-")[1]) + 1);
  } else {
    day = String(parseInt(day.split("-")[0]) + 1) + "-" + day.split("-")[1];
  }
  document.getElementById("leftarrow").style.opacity = 1;
  if (day == currentday) {
    document.getElementById("rightarrow").style.opacity = 0.3;
    archived = false;
  }
  refresh();
}

function refresh() {
  image = daily[day][0];
  number = daily[day][1];
  country = daily[day][2];
  if (finished) {
    let entry = document.getElementById("entry");
    entry.innerHTML = "";
    let input = document.createElement("input");
    input.id = "film-guess";
    input.name = "film-guess";
    input.placeholder = "Search for a country...";
    input.setAttribute("onkeyup", "check(event)");
    entry.append(input);
    entry.append(document.createElement("br"));
  }
  stage = 1;
  document.getElementById("guesses").innerHTML = "";
  document.getElementById("display").style.borderColor = "white";
  refreshed = true;
  finished = false;
  const img = document.getElementById("display").children[0];
  img.src = "images/" + image;
  img.style["filter"] = `blur(${blurPerStage[stage]}px)`;
}

const listOptionContainer = document.getElementById("country-names");
countries.forEach((countryData) => {
  const optionElement = document.createElement("option");
  optionElement.setAttribute("value", countryData.country);
  listOptionContainer.appendChild(optionElement);
});

const img = document.getElementById("display").children[0];
img.src = "images/" + image;
img.style["filter"] = `blur(${blurPerStage[stage]}px)`;

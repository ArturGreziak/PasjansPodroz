(function(root){
const worlds=[
  {
    "name": "Leśna polana",
    "icon": "🌿",
    "categories": [
      {
        "name": "Drzewa",
        "words": [
          "dąb",
          "brzoza",
          "sosna",
          "buk"
        ]
      },
      {
        "name": "Ptaki",
        "words": [
          "sikora",
          "bocian",
          "wróbel",
          "sowa"
        ]
      },
      {
        "name": "Grzyby",
        "words": [
          "borowik",
          "kurka",
          "maślak",
          "podgrzybek"
        ]
      },
      {
        "name": "Leśne ssaki",
        "words": [
          "lis",
          "jeleń",
          "dzik",
          "sarna"
        ]
      }
    ]
  },
  {
    "name": "Nadmorski szlak",
    "icon": "⚓",
    "categories": [
      {
        "name": "Na plaży",
        "words": [
          "parawan",
          "leżak",
          "piasek",
          "muszla"
        ]
      },
      {
        "name": "Na statku",
        "words": [
          "kotwica",
          "żagiel",
          "ster",
          "maszt"
        ]
      },
      {
        "name": "Morskie zwierzęta",
        "words": [
          "delfin",
          "rekin",
          "meduza",
          "ośmiornica"
        ]
      },
      {
        "name": "Sporty wodne",
        "words": [
          "surfing",
          "kajakarstwo",
          "żeglarstwo",
          "nurkowanie"
        ]
      }
    ]
  },
  {
    "name": "Górska wyprawa",
    "icon": "⛰",
    "categories": [
      {
        "name": "Sprzęt turysty",
        "words": [
          "plecak",
          "kompas",
          "mapa",
          "latarka"
        ]
      },
      {
        "name": "Krajobraz gór",
        "words": [
          "szczyt",
          "dolina",
          "przełęcz",
          "grań"
        ]
      },
      {
        "name": "Zimowy sport",
        "words": [
          "narty",
          "snowboard",
          "łyżwy",
          "bobslej"
        ]
      },
      {
        "name": "Skały i minerały",
        "words": [
          "granit",
          "bazalt",
          "kwarc",
          "marmur"
        ]
      }
    ]
  },
  {
    "name": "Miasto inspiracji",
    "icon": "🏛",
    "categories": [
      {
        "name": "Miejsca kultury",
        "words": [
          "teatr",
          "muzeum",
          "kino",
          "filharmonia"
        ]
      },
      {
        "name": "Instrumenty",
        "words": [
          "fortepian",
          "skrzypce",
          "trąbka",
          "flet"
        ]
      },
      {
        "name": "Transport miejski",
        "words": [
          "tramwaj",
          "autobus",
          "metro",
          "trolejbus"
        ]
      },
      {
        "name": "Pracownia malarza",
        "words": [
          "pędzel",
          "płótno",
          "sztaluga",
          "paleta"
        ]
      }
    ]
  },
  {
    "name": "Smaki świata",
    "icon": "☕",
    "categories": [
      {
        "name": "Owoce",
        "words": [
          "jabłko",
          "gruszka",
          "śliwka",
          "banan"
        ]
      },
      {
        "name": "Przyprawy",
        "words": [
          "cynamon",
          "pieprz",
          "kurkuma",
          "wanilia"
        ]
      },
      {
        "name": "W piekarni",
        "words": [
          "chleb",
          "bułka",
          "bagietka",
          "rogal"
        ]
      },
      {
        "name": "Naczynia",
        "words": [
          "talerz",
          "kubek",
          "miska",
          "filiżanka"
        ]
      }
    ]
  },
  {
    "name": "Pod gwiazdami",
    "icon": "✦",
    "categories": [
      {
        "name": "Planety",
        "words": [
          "Mars",
          "Wenus",
          "Saturn",
          "Neptun"
        ]
      },
      {
        "name": "W kosmosie",
        "words": [
          "kometa",
          "galaktyka",
          "mgławica",
          "asteroida"
        ]
      },
      {
        "name": "Misja kosmiczna",
        "words": [
          "rakieta",
          "skafander",
          "łazik",
          "lądownik"
        ]
      },
      {
        "name": "Obserwatorium",
        "words": [
          "teleskop",
          "soczewka",
          "statyw",
          "okular"
        ]
      }
    ]
  }
];
if(typeof module!=="undefined" && module.exports) module.exports=worlds; else root.JourneyWorlds=worlds;
})(typeof window!=="undefined"?window:globalThis);

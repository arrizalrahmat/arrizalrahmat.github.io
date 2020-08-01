var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var noob = document.getElementById("noob")
var amazing = document.getElementById("amazing")
var list = document.getElementById("optionlist");
var btn = document.getElementById("button");
var scoreCard = document.getElementById("scoreCard");
var quizBox = document.getElementById("questionBox");
var temp = []
var index = getRandomInt(0, 20);
var i = 0
var score = 0;
var question = [
  {
    qID: 1,
    q: "What is Superman's alter ego?",
    options: ["Bruce Wayne", "Clark Kent", "Hal Jordan", "Tony Stark"],
    answer: 2
  },

  {
    qID: 2,
    q: "Who is the protagonist of Legend of Zelda's franchise?",
    options: ["Zelda", "Link", "Ganon", "Navi"],
    answer: 2
  },

  {
    qID: 3,
    q: "What is the name of Luke Skywalker's home planet?",
    options: ["Tatooine", "Alderaan", "Naboo", "Arvala-7"],
    answer: 1
  },

  {
    qID: 4,
    q: "Which of these is NOT a core subject of study in Hogwart's first year?",
    options: ["Charms", "Herbology", "Defense against Dark Arts", "Divination"],
    answer: 4
  },

  {
    qID: 5,
    q: "What is the first pokemon in the Pokedex?",
    options: ["Charmander", "Pikachu", "Squirtle", "Bulbasaur"],
    answer: 4
  },

  {
    qID: 6,
    q: "When is the birthday of Harry Potter?",
    options: ["June 31st", "July 31st", "July 10th", "October 31st"],
    answer: 2
  },

  {
    qID: 7,
    q: "Who is NOT an enemy in Mario games?",
    options: ["Bowser", "Goomba", "Toad", "Shy guy"],
    answer: 3
  },

  {
    qID: 8,
    q: "Who played Bruce Banner in The Incredible Hulk movie?",
    options: ["Mark Ruffalo", "Edward Norton", "Lou Ferrigno", "Tilda Swinton"],
    answer: 2
  },

  {
    qID: 9,
    q: "What substance makes the time machine works in Back to the Future?",
    options: ["Plutonium", "Uranium", "Vibranium", "Bronzium"],
    answer: 1
  },

  {
    qID: 10,
    q: "Who is Loki's father in the Marvel Cinematic Universe",
    options: ["Odin", "Thor", "Laufey", "Heimdall"],
    answer: 3
  },

  {
    qID: 11,
    q: "What did the elves call Gandalf?",
    options: ["Gandalf the Grey", "Mithrandir", "Dunadan", "Smaug"],
    answer: 2
  },

  {
    qID: 12,
    q: "Who is NOT the antagonist of Sonic the Hedgehog franchise?",
    options: ["Dr. robotnik", "Knuckles", "Shadow", "Lt. Bananas"],
    answer: 2
  },

  {
    qID: 13,
    q: "What's the name of Daeneerys's dragon that was killed by Night King?",
    options: ["Drogon", "Falkor", "Viserion", "Rhaegal"],
    answer: 3
  },

  {
    qID: 14,
    q: "What is the mutant abilities of Logan a.k.a. the Wolverine?",
    options: ["Adamantium claw", "Beast form", "Healing abilities", "Adamantium bones"],
    answer: 3
  },

  {
    qID: 15,
    q: "What did Wonder Woman's bracelet made of?",
    options: ["Gold", "amazonium", "Titanium", "Vibranium"],
    answer: 2
  },

  {
    qID: 16,
    q: "Which of these jedi masters that HAVE NOT fought Darth Vader in the Star Wars franchise?",
    options: ["Obi Wan Kenobi", "Luke Skywalker", "Mace Windu", "Ahsoka Tano"],
    answer: 3
  },

  {
    qID: 17,
    q: "What is the real name of Lich King in Warcraft franchise?",
    options: ["Illidan Stormrage", "Anduin Lothar", "Arthas Menethil", "Gul'dan"],
    answer: 3
  },

  {
    qID: 18,
    q: "Who wrote Lord of The Rings novels?",
    options: ["Dan Brown", "J. R. R. Tolkien", "George R. R. Martin", "J.K. Rowling"],
    answer: 2
  },

  {
    qID: 19,
    q: "What is the Mandalorian's name?",
    options: ["Bobba Fett", "Din Djarin", "Bossk", "Jango Fett"],
    answer: 2
  },

  {
    qID: 20,
    q: "Who was responsible for the creation of Night King?",
    options: ["The First Man", "Three Eyed Raven", "Children of the Forest", "Mother of Dragons"],
    answer: 3
  }
];
function data() {
  if (i <= 10) {
    noob.style.display = "none";
    amazing.style.display = "none";
    quizBox.innerHTML = question[index].q;
    option1.innerHTML = question[index].options[0];
    option2.innerHTML = question[index].options[1];
    option3.innerHTML = question[index].options[2];
    option4.innerHTML = question[index].options[3];
    scoreCard.innerHTML = score;
  } else {
    if (score >= 70) {
    quizBox.innerHTML = "POP CULTURE IS IN YOUR HEART!";
    amazing.style.display = "block"
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    btn.style.display = "none";
    }
    else {
    quizBox.innerHTML = "DEFINITELY A NOOB!";
    noob.style.display = "block"
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    btn.style.display = "none";
    }
  }
}

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     let temp = 0
//     let result = []
//     let i = 0
//     while (result.length < 5) {
//       temp = Math.floor(Math.random() * (max - min + 1)) + min;
//       console.log(temp)
//       if (i === 0) {
//         result.push(temp)
//       }
//       for (let j = 0; j < result.length; j++) {
//         if (!result.includes(temp)) {
//           result.push(temp)
//         }
//       }
//       i++
//     }
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

function nextquestion() {
  temp.push(index) 
//   for (let j = 0; j < temp.length; j++) {
//   if (temp.includes(index)) {
//       index = getRandomInt(1, 20)
//   }
//   else {
//       temp.push(index)
//   }
// }
while (temp.includes(index)) {
  index = getRandomInt(0, 20)
}
  i++
  data();
}
// console.log(nextquestion())
function noclick() {
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].style.pointerEvents = "none";
  }
}
function clickok() {
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].style.pointerEvents = "auto";
    list.children[i].className = "";
  }
}
function check(element) {
  var id = element.id.split("");
  if (id[id.length - 1] == question[index].answer) {
    score += 10;
    element.className = "correct";
    element.innerHTML = "Correct";
    scoreCard.innerHTML = score;
  } else {
    element.className = "wrong";
    element.innerHTML = "Wrong";
  }
}
function answerClick(element) {
  check(element);
  noclick();
}
function nextClick() {
  if (
    list.children[0].getAttribute("style") === null ||
    list.children[0].style.pointerEvents === "auto"
  ) {
    alert("MASUKKAN JAWABAN");
  } else {
    nextquestion();
    clickok();
  }
}
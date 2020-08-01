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
var index = 0;
var score = 0;
var question = [
  {
    q: "What is Superman's alter ego?",
    options: ["Bruce Wayne", "Clark Kent", "Hal Jordan", "Tony Stark"],
    answer: 2
  },

  {
    q: "Who is the protagonist of Legend of Zelda's franchise?",
    options: ["Zelda", "Link", "Ganon", "Navi"],
    answer: 2
  },

  {
    q: "What is the name of Luke Skywalker's home planet?",
    options: ["Tatooine", "Alderaan", "Naboo", "Arvala-7"],
    answer: 1
  },
  {
    q: "Which of these is NOT a core subject of study in Hogwart's first year?",
    options: ["Charms", "Herbology", "Defense against Dark Arts", "Divination"],
    answer: 4
  },
  {
    q: "What is the first pokemon in the Pokedex?",
    options: ["Charmander", "Pikachu", "Squirtle", "Bulbasaur"],
    answer: 4
  },
  {
    q: "When is the birthday of Harry Potter?",
    options: ["June 31st", "July 31st", "July 10th", "October 31st"],
    answer: 2
  },
  {
    q: "Who is NOT an enemy in Mario games?",
    options: ["Bowser", "Goomba", "Toad", "Shy guy"],
    answer: 3
  },
  {
    q: "Who played Bruce Banner in The Incredible Hulk movie?",
    options: ["Mark Ruffalo", "Edward Norton", "Lou Ferrigno", "Tilda Swinton"],
    answer: 2
  },
  {
    q: "What substance makes the time machine works in Back to the Future?",
    options: ["Plutonium", "Uranium", "Vibranium", "Bronzium"],
    answer: 1
  },
  {
    q: "Who is Loki's father in the Marvel Cinematic Universe",
    options: ["Odin", "Thor", "Laufey", "Heimdall"],
    answer: 3
  },
  {
    q: "What did the elves call Gandalf?",
    options: ["Gandalf the Grey", "Mithrandir", "Dunadan", "Smaug"],
    answer: 2
  },
];
function data() {
  if (index <= question.length - 1) {
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

function nextquestion() {
  index++;
  data();
}
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

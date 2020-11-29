import "../css/contacts.css";
import ref from "./refs.js";

const { contactsSection } = ref;

const game = ["Rock", "Paper", "Scissors"];

function createButtons(arr) {
  return arr.map((el) => {
    const button = document.createElement("button");
    button.textContent = el;
    button.dataset.key = el;
    return button;
  });
}

const buttons = createButtons(game);
// console.log(buttons);

contactsSection.append(...buttons);

let user;
let computer;

const result = document.createElement("p");
contactsSection.append(result);

contactsSection.addEventListener("click", (evt) => {
  let index = Math.round(Math.random() * (game.length - 1));
  console.log(index);
  user = evt.target.dataset.key;
  //   console.log(user);

  computer = game[index];
  //   console.log(computer);

  console.log(`user: ${user} - computer: ${computer}`);

  let msg;

  if (user === computer) {
    msg = "Все красавчики";
  } else {
    (user === "Scissors" && computer === "Paper") ||
    (user === "Paper" && computer === "Rock") ||
    (user === "Rock" && computer === "Scissors")
      ? (msg = "User  красавчик")
      : (msg = "Computer  красавчик");
  }
  result.textContent = msg;
});

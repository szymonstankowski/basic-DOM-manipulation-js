//const text = document.querySelector(".title");
const changeColor = document.querySelector(".change-color");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".add-list-btn");
const userListLi = document.querySelectorAll(".name-list li");
//console.log(userList);
const userList = document.querySelector(".name-list");

changeColor.addEventListener("click", function () {
  text.classList.toggle("change");
});

for (user of userListLi) {
  user.addEventListener("click", function () {
    console.log(this);
    this.style.color = "red";
  });
}

addListBtn.addEventListener("click", function () {
  //Create an li
  const newLi = document.createElement("li");
  const liContent = document.createTextNode(listInput.value);
  //Add the input value inside that new li
  newLi.appendChild(liContent);
  //Attaching the li to the user list
  userList.appendChild(newLi);
});

// Random bacground color
document.body.style.background = `#${Math.floor(
  Math.random() * 0xffffff
).toString(16)}`;



//Copy to clipboard
const button = document.querySelector(".copy-btn");
button.addEventListener("click", () => {
  copy("My name is Simon")
  alert("Copied to clipboard!");
});
const copy = (text) => navigator.clipboard.writeText(text);

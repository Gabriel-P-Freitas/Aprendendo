const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const button = document.querySelector(".btn");
const form = document.querySelector("#myform");

const items = document.querySelector(".items");

console.log(button);

button.addEventListener("click", function (e) {
  e.preventDefault();

  const nameValue = inputName.value;
  const emailValue = inputEmail.value;

  if (emailValue === "" || nameValue === "") {
    form.style.background = "red";
    return alert("Por favor preencha todos os campos");
  }

  items.firstElementChild.textContent = nameValue;
  items.lastElementChild.textContent = emailValue;
  return (form.style.background = "green");
});

const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const button = document.querySelector(".btn");
const form = document.querySelector("#myform");

const message = document.querySelector("#message");

const items = document.querySelector(".items");

console.log(button);

button.addEventListener("click", function (e) {
  e.preventDefault();

  const nameValue = inputName.value;
  const emailValue = inputEmail.value;

  if (emailValue === "" || nameValue === "") {
    message.textContent = "Por favor preencha todos os campos";
    message.classList = "error";
    setTimeout(() => {
      message.textContent = "";
      message.classList = "";
    }, 3000);
    return;
  }

  items.firstElementChild.textContent = "Nome: " + nameValue;
  items.lastElementChild.textContent = "Email: " + emailValue;

  inputName.value = "";
  inputEmail.value = "";
  return (form.style.background = "green");
});

const form = document.getElementById("form-numeros");
const formularioA = document.getElementById("numeroA");
const formularioB = document.getElementById("numeroB");
let formularioValido = false;

function somaNumeros() {
  const formularioCorreto = formularioB.value > formularioA.value;
  return formularioCorreto;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const mensagemSucesso = `formulário B <b>${formularioB.value}</b> é maior que o formulário A <b>${formularioA.value}</b>`;

  formularioValido = somaNumeros();
  if (formularioValido) {
    const cMsgSucess = document.querySelector(".success-message");
    cMsgSucess.innerHTML = mensagemSucesso;
    cMsgSucess.style.display = "block";

    formularioA.value = "";
    formularioB.value = "";
  } else {
    document.querySelector(".error-message").style.display = "block";
    formularioB.style.border = "1px solid red";

    formularioA.value = "";
    formularioB.value = "";
  }
});

formularioB.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  formularioValido = somaNumeros(e.target.value);

  if (!formularioValido) {
    formularioB.classList.add("error");
    document.querySelector(".error-message").style.display = "block";
  } else {
    formularioB.classList.remove("error");
    document.querySelector(".error-message").style.display = "none";
  }
});

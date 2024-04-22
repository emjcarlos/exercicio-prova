const form = document.getElementById("form-numeros");
const formularioA = document.getElementById("numeroA");
const formularioB = document.getElementById("numeroB");

function somaNumeros() {
  const formularioCorreto = formularioB.value > formularioA.value;
  return formularioCorreto;
}

form.addEventListener("submit", function (e) {
  let formularioValido = false;
  e.preventDefault();

  // const mensagemSucesso = `formulário B (${formularioB.value}) é maior que o formulário A (${formularioA.value})`;

  formularioValido = somaNumeros();
  if (formularioValido) {
    alert("mensagemSucesso");
  } else {
    alert("deu errado");
  }
});

console.log(form);

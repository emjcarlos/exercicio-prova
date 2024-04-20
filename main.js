const form = document.getElementById("form-numeros");
const formularioA = document.getElementById("numeroA").value;
const formularioB = document.getElementById("numeroB").value;

function somaNumeros() {
  const formularioCorreto = formularioB.value > formularioA.value;
  return formularioCorreto;
}

form.addEventListener("submit", function (e) {
  let formularioValido = false;
  e.preventDefault();

  // const mensagemSucesso = `formulário B (${formularioB.value}) é maior que o formulário A (${formularioA.value})`;

  formularioValido = somaNumeros(formularioB > formularioA);
  if (formularioValido) {
    alert("mensagemSucesso");
  } else {
    alert("deu errado");
  }
});

console.log(form);

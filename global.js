const menulateral = document.getElementById("check");
const menudeatendimento = document.getElementById("checkate");
const corpo = document.getElementById("conteudo");

ativarCheckbox(menulateral);
ativarCheckbox2(menudeatendimento);

function ativarCheckbox(any) {
  any.checked = false;
}
function ativarCheckbox2(el2) {
  el2.checked = false;
}

corpo.style.opacity = "20";

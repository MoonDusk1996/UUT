const menulateral = document.getElementById("check");
const menudeatendimento = document.getElementById("checkate");

ativarCheckbox(menulateral);
ativarCheckbox2(menudeatendimento);

function ativarCheckbox(any) {
  any.checked = false;
}
function ativarCheckbox2(el2) {
  el2.checked = false;
}

const menulateral = document.getElementById("check");
const menudeatendimento = document.getElementById("checkate");
const corpo = document.getElementById("conteudo");

//checkbox das barras qe vão se desativar
function desativarcheckbox() {
  menulateral.checked = false;
  menudeatendimento.checked = false;
}

//efeito escuro quando os checkbox do menu de atendimento se ativar
function menuEffect(checkbox) {
  if (checkbox.checked) {
    corpo.style.filter = "brightness(0.5)";
  } else {
    console.log("false");
    corpo.style.filter = "brightness(1)";
  }
}

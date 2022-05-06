const menulateral = document.getElementById("check");
const menudeatendimento = document.getElementById("checkate");
const corpo = document.getElementById("conteudo");



function test(){
  console.log(menulateral.checked)
  if(menulateral.checked == true){
    menudeatendimento.checked = false;
    corpo.style.filter = "brightness(1)";
    
  }
}


//checkbox das barras qe vão se desativar
function desativarcheckbox() {
  console.log("gatilho")
  menulateral.checked = false;
  menudeatendimento.checked = false;
}

//efeito escuro quando os checkbox do menu de atendimento se ativar
function menuEffect(checkbox) {
  if (checkbox.checked) {
    corpo.style.filter = "brightness(0.5)";
  } else {
    corpo.style.filter = "brightness(1)";
  }
}


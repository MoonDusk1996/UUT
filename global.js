const menulateral = document.getElementById("check");
const menudeatendimento = document.getElementById("checkate");
const corpo = document.getElementById("conteudo");
const corpoServicos = document.getElementById("servicescontent");
console.log(corpoServicos);
function test() {
  
  if (menulateral.checked == true) {
    menudeatendimento.checked = false;
    corpo.style.filter = "brightness(1)";
  }
}

//checkbox das barras qe vão se desativar
function desativarcheckbox() {
  
  menulateral.checked = false;
  menudeatendimento.checked = false;
}

//efeito escuro quando os checkbox do menu de atendimento se ativar
function menuEffect(checkbox) {
  if (checkbox.checked) {
    corpo.style.filter = "brightness(0.5)";
    corpoServicos.style.filter = "brightness(0.5)";
  } else {
    corpo.style.filter = "brightness(1)";
    corpoServicos.style.filter = "brightness(1)";
  }
}



var container = document.querySelector("body");

container.addEventListener("touchstart", startTouch, false);
container.addEventListener("touchmove", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      console.log("swiped left");
      menulateral.checked = true

    } else {
      // swiped right
      console.log("swiped right");
      menulateral.checked = false
      menudeatendimento.checked = false
      corpo.style.filter = "brightness(1)";
    }  
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
      console.log("swiped up");
    } else {
      // swiped down
      console.log("swiped down");
    }  
  }

  initialX = null;
  initialY = null;

  e.preventDefault();
};


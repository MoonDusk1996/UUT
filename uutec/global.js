//variaveis que preciso escurecer//

var barra = document.body.querySelector(".conteiner")
  ul = document.body.querySelector(".menulat")
  toggle = document.getElementById("toggle");
  textos = [document.getElementById("textomenu0"), document.getElementById("textomenu1"), document.getElementById("textomenu2"), document.getElementById("textomenu3"), document.getElementById("textomenu4"), document.getElementById("apresentacao")]
  apresentacao = document.querySelector(".apresentacao")
  icones = document.querySelector(".menulat")
  hamburguer = document.querySelector(".checkbtn_c")
  

  if(localStorage.getItem("darkmmode") == "true")
  {
    console.log("passou")
    document.body.style.backgroundColor = "#313131"
    barra.style.backgroundColor = "#313131"
    ul.style.backgroundColor = "#313131"
    textos[0].style.color = "white"
    textos[1].style.color = "white"
    textos[2].style.color = "white"
    textos[3].style.color = "white"
    apresentacao.style.color = "white"
    apresentacao.childNodes[1].style.color = "rgb(39, 216, 172)"
    icones.style.color = "rgb(39, 216, 172)"
    hamburguer.style.color = "rgb(39, 216, 172)"
    toggle.value = "true"
  }
  
 
  function Buttontoggle(){

    

  if(toggle.value=="true"){
    icones.style.color = "black"
    apresentacao.style.color = "black"
    apresentacao.childNodes[1].style.color = "black"
    document.body.style.backgroundColor = "rgb(220, 220, 220)"
    barra.style.backgroundColor = "rgb(220, 220, 220)"
    ul.style.backgroundColor = "rgb(220, 220, 220)"
    textos[0].style.color = "black"
    textos[1].style.color = "black"
    textos[2].style.color = "black"
    textos[3].style.color = "black"
    toggle.value="false"
    localStorage.setItem("darkmmode", "false")
    hamburguer.style.color = "black"

  }
  else if(toggle.value=="false"){

    icones.style.color = "rgb(39, 216, 172)"
    apresentacao.style.color = "white"
    apresentacao.childNodes[1].style.color = "rgb(39, 216, 172)"
    document.body.style.backgroundColor = "#313131"
    barra.style.backgroundColor = "#313131"
    ul.style.backgroundColor = "#313131"
    textos[0].style.color = "white"
    textos[1].style.color = "white"
    textos[2].style.color = "white"
    textos[3].style.color = "white"
    toggle.value="true"
    localStorage.setItem("darkmmode", "true")
    hamburguer.style.color = "rgb(39, 216, 172)"
  }
  
  
}
console.log(hamburguer)
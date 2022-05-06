const menulateral = document.getElementById("check");
const menudeatendimento = document.getElementById("checkate");
const corpo = document.getElementById("conteudo");
const barralateral = document.getElementById("idbarra");
var checkAtendimento = document.querySelector("#checkate")

ativarCheckbox(menulateral);
ativarCheckbox2(menudeatendimento);




function teste(checkbox){
if(checkbox.checked){
  corpo.style.opacity = "0.5"
  barralateral.style.opacity = "0.5"


}
else{
  console.log("false")
  corpo.style.opacity = "1"
  barralateral.style.opacity = "1"
}
}






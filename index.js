
document.getElementById("calculateButton").addEventListener("click", function(){

var emptyBag = Number(document.querySelectorAll("input")[0].value);
var fullBag = Number(document.querySelectorAll("input")[1].value);
var numberBatches = Number(document.querySelectorAll("input")[2].value);
var amountBatches = Number(document.querySelectorAll("input")[3].value);
var lastAmount = Number(document.querySelectorAll("input")[4].value);
var fullBatch = numberBatches*amountBatches;
var bag = Number(document.querySelectorAll("input")[0].value)+Number(document.querySelectorAll("input")[1].value);
var amountOfBags = (fullBatch-lastAmount)/fullBag;


if(lastAmount<=fullBatch){
 document.querySelectorAll("input")[5].value = "+" + Math.ceil(amountOfBags) + "bags"
 document.querySelectorAll("input")[6].value = lastAmount;
 document.querySelectorAll("input")[7].value = (Math.ceil(amountOfBags)*bag).toFixed(2);
var poundsReceived =  Number(document.querySelectorAll("input")[7].value)
 document.querySelectorAll("input")[10].value = ((poundsReceived+lastAmount).toFixed(2));
document.querySelectorAll("input")[11].value = ((poundsReceived+lastAmount).toFixed(2));
 document.querySelectorAll("input")[12].value = ((poundsReceived+lastAmount).toFixed(2));
 document.querySelectorAll("input")[14].value = fullBatch.toFixed(2);
  document.querySelectorAll("input")[15].value = numberBatches;
  document.querySelectorAll("input")[16].value = ((poundsReceived+lastAmount)-fullBatch).toFixed(2);
    document.querySelectorAll("input")[17].value = ((poundsReceived+lastAmount)-fullBatch).toFixed(2);
    document.querySelectorAll("input")[18].value = Math.ceil(amountOfBags) + " mt"
      document.querySelectorAll("input")[19].value = ((poundsReceived+lastAmount)-fullBatch).toFixed(2);

  document.querySelectorAll("input")[21].value = (Math.ceil(amountOfBags)*emptyBag).toFixed(2);

  document.querySelectorAll("input")[23].value = (Number(document.querySelectorAll("input")[19].value)-emptyBag*Math.ceil(amountOfBags)).toFixed(2);
    document.querySelectorAll("input")[24].value = "weight";



}

else{
  document.querySelectorAll("input")[6].value = lastAmount;
    document.querySelectorAll("input")[8].value = fullBatch.toFixed(2);
    document.querySelectorAll("input")[9].value = numberBatches;
      document.querySelectorAll("input")[10].value = (lastAmount-fullBatch).toFixed(2);
        document.querySelectorAll("input")[11].value = "weigth";

}


});



document.querySelectorAll("button")[1].addEventListener("click", function(){
document.querySelectorAll("button")[0].textContent = document.querySelectorAll("button")[1].textContent;
document.querySelectorAll("input")[0].value = 0.65;
document.querySelectorAll("input")[1].value = 55;});


document.querySelectorAll("button")[2].addEventListener("click", function(){
document.querySelectorAll("button")[0].textContent = document.querySelectorAll("button")[2].textContent;
document.querySelectorAll("input")[0].value = 0.90;
document.querySelectorAll("input")[1].value = 50;});



document.querySelectorAll("button")[3].addEventListener("click", function(){
document.querySelectorAll("button")[0].textContent = document.querySelectorAll("button")[3].textContent;
document.querySelectorAll("input")[0].value = 0.70;
document.querySelectorAll("input")[1].value = 55;});



document.querySelectorAll("button")[4].addEventListener("click", function(){
document.querySelectorAll("button")[0].textContent = document.querySelectorAll("button")[4].textContent;
document.querySelectorAll("input")[0].value = 0.65;
document.querySelectorAll("input")[1].value = 50;});



document.querySelectorAll("button")[5].addEventListener("click", function(){
document.querySelectorAll("button")[0].textContent = document.querySelectorAll("button")[5].textContent;
document.querySelectorAll("input")[0].value = 0.75;
document.querySelectorAll("input")[1].value = 35;});




document.querySelectorAll("button")[6].addEventListener("click", function(){
document.querySelectorAll("button")[0].textContent = document.querySelectorAll("button")[6].textContent;
document.querySelectorAll("input")[0].value = 1;
document.querySelectorAll("input")[1].value = 50;});




document.querySelectorAll("button")[7].addEventListener("click", function(){
document.querySelectorAll("button")[0].textContent = document.querySelectorAll("button")[7].textContent;
document.querySelectorAll("input")[0].value = 0.65;
document.querySelectorAll("input")[1].value = 50;});




document.querySelectorAll("button")[8].addEventListener("click", function(){
document.querySelectorAll("button")[0].textContent = document.querySelectorAll("button")[8].textContent;
document.querySelectorAll("input")[0].value = 0.70;
document.querySelectorAll("input")[1].value = 50;});




document.querySelectorAll("button")[9].addEventListener("click", function(){
document.querySelectorAll("button")[0].textContent = document.querySelectorAll("button")[9].textContent;
document.querySelectorAll("input")[0].value = 0.70;
document.querySelectorAll("input")[1].value = 40;});



document.querySelectorAll("button")[10].addEventListener("click", function(){
document.querySelectorAll("button")[0].textContent = document.querySelectorAll("button")[10].textContent;
document.querySelectorAll("input")[0].value = 1;
document.querySelectorAll("input")[1].value = 50;});




document.querySelectorAll("button")[11].addEventListener("click", function(){
document.querySelectorAll("button")[0].textContent = document.querySelectorAll("button")[11].textContent;
document.querySelectorAll("input")[0].value = 0.70;
document.querySelectorAll("input")[1].value = 50;});







document.getElementById("refreshButton").addEventListener("click", function(){
  for(i=2; i<=24; i++){
document.querySelectorAll("input")[i].value = "";
}});

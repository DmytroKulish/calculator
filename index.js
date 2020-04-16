
document.querySelectorAll("button")[0].addEventListener("click", function(){

var emptyBag = Number(document.querySelectorAll("input")[0].value);
var fullBag = Number(document.querySelectorAll("input")[1].value);
var numberBatches = Number(document.querySelectorAll("input")[2].value);
var amountBatches = Number(document.querySelectorAll("input")[3].value);
var lastAmount = Number(document.querySelectorAll("input")[4].value);
var fullBatch = numberBatches*amountBatches;
var bag = Number(document.querySelectorAll("input")[0].value)+Number(document.querySelectorAll("input")[1].value);
  var amountOfBags = (lastAmount+fullBatch)/fullBag;
console.log(fullBatch);

if(lastAmount<=fullBatch){
 document.querySelectorAll("input")[5].value = "plus " + Math.ceil(amountOfBags) + " bags!"
 document.querySelectorAll("input")[6].value = lastAmount;
 document.querySelectorAll("input")[7].value = bag;

 document.querySelectorAll("input")[10].value = ((bag+lastAmount).toFixed(3));
 document.querySelectorAll("input")[11].value = ((bag+lastAmount).toFixed(3));
 document.querySelectorAll("input")[12].value = ((bag+lastAmount).toFixed(3));
 document.querySelectorAll("input")[14].value = fullBatch.toFixed(3);
  document.querySelectorAll("input")[15].value = numberBatches;
  document.querySelectorAll("input")[16].value = (bag+lastAmount)-fullBatch;
    document.querySelectorAll("input")[17].value = (bag+lastAmount)-fullBatch;
    document.querySelectorAll("input")[18].value = Math.ceil(amountOfBags) + " mt"
      document.querySelectorAll("input")[19].value = (bag+lastAmount)-fullBatch;

  document.querySelectorAll("input")[21].value = emptyBag;

  document.querySelectorAll("input")[23].value = (Number(document.querySelectorAll("input")[19].value)-emptyBag).toFixed(3);
    document.querySelectorAll("input")[24].value = (Number(document.querySelectorAll("input")[19].value)-emptyBag).toFixed(3);



}

else{
  document.querySelectorAll("input")[6].value = lastAmount;
    document.querySelectorAll("input")[8].value = fullBatch.toFixed(3);
    document.querySelectorAll("input")[9].value = numberBatches;
      document.querySelectorAll("input")[10].value = (lastAmount-fullBatch).toFixed(3);
        document.querySelectorAll("input")[11].value = (lastAmount-fullBatch).toFixed(3);

}




});

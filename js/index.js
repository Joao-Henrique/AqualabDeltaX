$(document).ready(function(){
   
      console.log("hello" + $("#dOne").val());
//GET'S INPUT FOR D1 AND STORES IT AS VAR "A"
      var a = $("#dOne").val();
      var numberA = parseFloat(a);
//GET'S INPUT FOR D2 AND STORES IT AS VAR "B"
      var b = $("#dTwo").val(); 
      var numberB = parseFloat(b);
//CALCULATES THE MEAN AND STORES IT AS VAR "MEAN"
      var mean = Math.abs(numberA + numberB) / 2;
      
//CALCULATES THE DELTA X AND STORES IT AS VAR "RES"
      var res = Math.abs(numberA - numberB) / mean;
      
//TEST IF THIS IS OK
      console.log("test var a = " + a + " === OK");
      console.log("test var b = " + b + " === OK");
      console.log("test var mean = " + mean + " === OK");
      console.log("test var res = " + res + " === OK");
     
// SETTING UP THE EVENT LISTENER
   $("#calculate").click(function(){
     
// IF INPUT IS NOT A NUMBER PRINT ERROR MESSAGE
//          if (isNaN(a) || isNaN(b)) {
//            $("#result").text("Invalid result - Please try again!");
//          }
      
// IF EVERYTHING IS OK PRINT THE RESULT
//          else {
            $("#result").html("O delta X é " + res + " % ");
//          }
    });
});
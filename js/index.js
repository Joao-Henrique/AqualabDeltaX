$(document).ready(function(){
   
      $("#resultDiv").hide();
      $("#infoDiv").hide();
// TEST
console.log("hello" + $('#dOne').val());

//////////////////////////////////////////
///////  TEST IF THIS IS OK  /////////////
var testParameters = function(){
      console.log("test var a = " + numberA + " === OK");
      console.log("test var b = " + b + " === OK");
      console.log("test var mean = " + mean + " === OK");
      console.log("test var res = " + res + " === OK");
};

//GET'S INPUT FOR D1 AND STORES IT AS VAR "A"
      var a = $('#dOne').val();
      var numberA = parseFloat(a);

//GET'S INPUT FOR D2 AND STORES IT AS VAR "B"
      var b = $('#dTwo').val(); 
      var numberB = parseFloat(b);

//CALCULATES THE MEAN AND STORES IT AS VAR "MEAN"
      var mean = Math.abs(numberA + numberB) / 2;
      
//CALCULATES THE DELTA X AND STORES IT AS VAR "RES"
      var res = Math.abs(numberA - numberB) / mean;
      
////////////////////////////////////////////      
/////// ON CLICK SHOW INFO BOX  ////////////
    $("#infoBtn").click(function(){
      $("#resultDiv").hide();
      $("#infoDiv").show();
    });

////////////////////////////////////////////      
/////// ON CLICK SHOW RESULT BOX  //////////
   $("#calcBtn").click(function(){
      $("#infoDiv").hide();
      $("#resultDiv").show();

      
     
//GET'S INPUT FOR D1 AND STORES IT AS VAR "A"
      var a = $('#dOne').val();
      var numberA = parseFloat(a);

//GET'S INPUT FOR D2 AND STORES IT AS VAR "B"
      var b = $('#dTwo').val(); 
      var numberB = parseFloat(b);

//CALCULATES THE MEAN AND STORES IT AS VAR "MEAN"
      var mean = Math.abs(numberA + numberB) / 2;
      
//CALCULATES THE DELTA X AND STORES IT AS VAR "RES"
      var res = ((Math.abs(numberA - numberB) / mean)*100).toFixed(2);
      
// IF EVERYTHING IS OK PRINT THE RESULT
     if(res<=8){
            $("#result").hide();
            $("#icon").show();
            $("#resultText").html("O delta X é:</br>");
            $("#icon").html("&nbsp" + res + "%");
            $("#icon").css("background-color", "green");
            $("#icon").addClass("glyphicon glyphicon-ok");
     }
      else if(res>8){
            $("#result").hide();
            $("#icon").show();
            $("#resultText").html("O delta X é:</br>");
            $("#icon").html("&nbsp" + res + "%");
            $("#icon").css("background-color", "red");
            $("#icon").addClass("glyphicon glyphicon-remove");
     }
      else{
            $("#icon").hide();
            $("#result").html('Colocar valores corretamente em "D1" e "D2" e pressionar o botão "Go!"');
            $("#result").css("border-color", "#F57F17");
            $("#result").css("font-size","x-large");
   }

// TEST
           testParameters();
//          }
    });
});
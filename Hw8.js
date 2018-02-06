
                                
$(document).ready(function () {
    $("#fadein").hide();
    slotRoll();
    
      $("#btnspin").mouseover(function(){
        $("#btnspin").css("background-color", "green");
            $("#btnspin").css("font-size", "30px");
    });
    
     $("#btnspin").mouseout(function(){
        $("#btnspin").css("background-color", "lightgreen");
         $("#btnspin").css("font-size", "20px");
    });
    
     $("#closer").click(function(){
        $("#elementfade").fadeOut(3000);
          $('#fadein').delay(4000).fadeIn(6000);
        });
    });
function slotRoll() {
    var i = 0;
    
     for (i = 0; i < 10; i++) {

            var numGen = Math.floor(Math.random() * 10);

            var left = document.getElementById('one');
            var middle = document.getElementById('two');
            var right = document.getElementById('three');

            if (numGen == 0 || numGen > 3) {
                continue;
            }

            else if (numGen == 1) {

                $('#one').removeClass();
                $('#one').addClass('green');

            }

            else if (numGen == 2) {

                $('#one').removeClass();
                $('#one').addClass('blue');

            }

            else if (numGen == 3) {

                $('#one').removeClass();
                $('#one').addClass('red');

            }

            var numgen2 = Math.floor(Math.random() * 10);
            if (numgen2 == 0 || numgen2 > 3) {
                continue;
            }

            else if (numgen2 == 1) {

                $('#two').removeClass();
                $('#two').addClass('green');

            }

            else if (numgen2 == 2) {

                $('#two').removeClass();
                $('#two').addClass('blue');

            }

            else if (numgen2 == 3) {

                $('#two').removeClass();
                $('#two').addClass('red');

            }

            var numgen3 = Math.floor(Math.random() * 10);
            if (numgen3 == 0 || numgen3 > 3) {
                continue;
            }

            else if (numgen3 == 1) {

                $('#three').removeClass();
                $('#three').addClass('green');

            }

            else if (numgen3 == 2) {

                $('#three').removeClass();
                $('#three').addClass('blue');

            }

            else if (numgen3 == 3) {

                $('#three').removeClass();
                $('#three').addClass('red');

            }

        }

        if (left.className == middle.className && middle.className == right.className) {
            document.getElementById('winner').innerHTML = "WINNER";
        }

        else {
            document.getElementById('winner').innerHTML = "LOSER";
        }
        
        
    }





   



   





$(function () {
    var rouge = 255;
    var vert = 255;
    var bleu = 255;

    function colorier() {
        var cvs = document.getElementById('can_color');

        var ctx = cvs.getContext("2d");
       console.log('rgb(' + rouge + ',' +  vert + ',' + bleu +  ')');
        ctx.fillStyle = 'rgb(' + rouge + ',' +  vert + ',' + bleu +  ')';
        ctx.beginPath();
        ctx.stroke();
        ctx.fill();
        ctx.fillRect(10, 10, 100, 100);
        ctx.stroke();

    }

    $('#sliderRed').on("change", function () {
        rouge = $('#sliderRed').val();
        colorier();
    });

    $('#sliderGreen').on("change", function () {
        vert = $('#sliderGreen').val();
        colorier();
    });

    $('#sliderBlue').on("change", function () {
        bleu = $('#sliderBlue').val();
        colorier();
    })

    $('#sliderCircle').on("change", function () {
        var position = $('#sliderCircle').val();
        var cvs = document.getElementById('forme_circle');
        var slide = $('input[name=sliderCircle]').val();

        var ctx = cvs.getContext("2d");
        var txtAngle = $('#valuesliderCercle');
        txtAngle.text(slide);
        console.log("slide" + slide);
        var angle = (( 2 * Math.PI) * slide) / 360;
        ///360;
        console.log("angle" + angle);
        ctx.fillStyle = "#123456";
        ctx.beginPath();
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        ctx.fillStyle = 'rgb(' + rouge + ',' +  vert + ',' + bleu +  ')';

        ctx.arc(30, 30, 20, 0, angle);

        ctx.stroke();

        ctx.fill();
        ctx.stroke();
      //  ctx.closePath();
    });








})


$(function () {
    var rouge = $('#circleRed').val();
    var vert = $('#circleGreen').val();
    var bleu = $('#circleBlue').val();
    var radius = $('#sliderRadius').val();
    var angleDepart = 0;
    var longueur = 100;
    var largeur = 100;
   var angle = (( 2 * Math.PI) * ($('input[name=sliderCircle]').val())) / 360;

    tracerRectangle();
    tracerCercle();


    $('#sliderAngleDepart').on("change", function () {
        var tmp
        tmp = $('#sliderAngleDepart').val();
        angleDepart = (( 2 * Math.PI) * tmp) / 360;
        colorier();
        tracerCercle();
    });

    $('#circleRed').on("change", function () {
        rouge = $('#circleRed').val();
        colorier();
        tracerCercle();
    });

    $('#circleGreen').on("change", function () {
        vert = $('#circleGreen').val();
        colorier();
        tracerCercle();
    });

    $('#circleBlue').on("change", function () {
        bleu = $('#circleBlue').val();
        colorier();
        tracerCercle();
    })

    $('#sliderCircle').on("change", function () {
        var position = $('#sliderCircle').val();
        var slide = $('input[name=sliderCircle]').val();
        var txtAngle = $('#valueAngleCercle');
        txtAngle.text(slide);
       // console.log("slide" + slide);
        angle = (( 2 * Math.PI) * slide) / 360;

     //   console.log("angledepart" + angle);
        tracerCercle();
    });



    function tracerCercle() {
        var cvs = document.getElementById('forme_circle');
        var ctx = cvs.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(0, 0, cvs.width, cvs.height);

        ctx.fillStyle = 'rgb(' + rouge + ',' +  vert + ',' + bleu +  ')';
        var offset = parseInt(radius) + parseInt(2);
        var angleTotal = parseFloat(angle) + parseFloat(angleDepart);
        ctx.arc(cvs.width/2, offset, radius, angleDepart, angleTotal);
        console.log("angle = " + angle);
        console.log("angleDepart = " + angleDepart);
        console.log("angleTotal = " + angleTotal);
        ctx.stroke();
        ctx.fill();
    }

    $('#sliderRadius').on("change", function () {
        var position = $('#sliderRadius').val();
        radius = $('input[name=sliderRadius]').val();
        var txtRadius = $('#valueRadiusCercle');
        txtRadius.html( position );
        tracerCercle();
    });

    function colorier() {
        var cvs = document.getElementById('circle_color');
        var ctx = cvs.getContext("2d");
        console.log('rgb(' + rouge + ',' +  vert + ',' + bleu +  ')');
        ctx.fillStyle = 'rgb(' + rouge + ',' +  vert + ',' + bleu +  ')';
        ctx.beginPath();
        ctx.stroke();
        ctx.fill();
        ctx.fillRect(10, 10, 100, 100);
        ctx.stroke();

    }

    function tracerRectangle() {
        var cvs = document.getElementById('forme_Rectangle');
        var ctx = cvs.getContext("2d");
        ctx.beginPath();
         ctx.clearRect(0, 0, cvs.width, cvs.height);
         // ctx.clearRect(0, 0, 400, 400);
     //    ctx.fillStyle = 'rgb(' + rouge + ',' +  vert + ',' + bleu +  ')';
          ctx.fillStyle = '#123456';
       // ctx.fillStyle = "green";
        console.log("longueur = " + longueur);
        console.log("largeur = " + largeur);
        // ctx.stroke();


        ctx.fillRect(10, 10, largeur, longueur);
        //  ctx.fillRect(10, 10, largeur, longueur);
        //  ctx.stroke();
        //   ctx.fill();

    }

    $('#sliderLongueurRectangle').on("change", function () {
        var position = $('#sliderLongueurRectangle').val();
        longueur = $('input[name=sliderLongueurRectangle]').val();
        var txtRadius = $('#valueLongueurRectangle');
        txtRadius.html( position );
        tracerRectangle();
    });
    $('#sliderLargeurRectangle').on("change", function () {
        var position = $('#sliderLargeurRectangle').val();
        largeur = $('input[name=sliderLargeurRectangle]').val();
        var txtRadius = $('#valueLargeurRectangle');
        txtRadius.html( position );
        tracerRectangle();
    });

    $('#rectangleRed').on("change", function () {
        rouge = $('#rectangleRed').val();
        colorier();
        tracerRectangle()
    });

    $('#rectangleGreen').on("change", function () {
        vert = $('#rectangleGreen').val();
        colorier();
        tracerRectangle()
    });

    $('#rectangleBlue').on("change", function () {
        bleu = $('#rectangleBlue').val();
        colorier();
        tracerRectangle()
    })




})
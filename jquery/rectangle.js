

$(function () {

    var rouge = $('#rectangleGreen').val();
    var vert = $('#rectangleGreen').val();
    var bleu = $('#rectangleBlue').val();
    var offSet_X = 0;
    var offSet_Y = 0;
    var longueur = 100;
    var largeur = 100;
    var angleRotation = 0;
    var angleRotationOld = 0;
    var rotation = 0;

    tracerRectangle();

    function colorier() {
        var cvs = document.getElementById('rectangle_color');
        var ctx = cvs.getContext("2d");
        console.log('rgb(' + rouge + ',' +  vert + ',' + bleu +  ')');
        ctx.fillStyle = 'rgb(' + rouge + ',' +  vert + ',' + bleu +  ')';
        ctx.beginPath();
        ctx.stroke();
        ctx.fill();
        ctx.fillRect(10, 10, 100, 100);
        ctx.stroke();
    }

    $('#sliderRotation').on("change", function () {
        angleRotation = $('input[name=sliderRotation]').val();
        rotation = angleRotationOld - angleRotation;
        console.log('rotate = ' + rotation);
        console.log('angle = ' + angleRotation);

        angleRotationOld = angleRotation;
        pivoterRectangle();
    });



    function tracerRectangle() {
        var cvs = document.getElementById('forme_Rectangle');
        var context = cvs.getContext("2d");
        var canvasHeight = cvs.height;
        var canvasWidth = cvs.width;

        // Clear the canvas
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        // Move registration point to the center of the canvas
     //   context.translate(canvasWidth / 2, canvasHeight / 2);

        // Rotate 1 degree
     //   context.rotate((rotation * Math.PI) / 180);

        // Move registration point back to the top left corner of canvas
    //    context.translate(-canvasWidth / 2, -canvasHeight / 2);

     //   context.fillStyle = "red";
        context.fillStyle = 'rgb(' + rouge + ',' +  vert + ',' + bleu +  ')';
        context.fillRect( (canvasWidth / 2) - (largeur/2), (canvasWidth / 2) - (longueur/2), largeur, longueur);

    }

    function pivoterRectangle() {
        var cvs = document.getElementById('forme_Rectangle');
        var context = cvs.getContext("2d");
        var canvasHeight = cvs.height;
        var canvasWidth = cvs.width;

        // Clear the canvas
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        // Move registration point to the center of the canvas
        context.translate(canvasWidth / 2, canvasHeight / 2);

        // Rotate 1 degree
        context.rotate((-rotation * Math.PI) / 180);

        // Move registration point back to the top left corner of canvas
        context.translate(-canvasWidth / 2, -canvasHeight / 2);

        context.fillStyle = "red";
        context.fillStyle = 'rgb(' + rouge + ',' +  vert + ',' + bleu +  ')';
        context.fillRect( (canvasWidth / 2) - (largeur/2), (canvasWidth / 2) - (longueur/2), largeur, longueur);

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
        tracerRectangle();
    });

    $('#rectangleGreen').on("change", function () {
        vert = $('#rectangleGreen').val();
        colorier();
        tracerRectangle();
    });

    $('#rectangleBlue').on("change", function () {
        bleu = $('#rectangleBlue').val();
        colorier();
        tracerRectangle();
    })




})


/*
    function rotate() {

       var cvs = document.getElementById('forme_Rectangle');
       var context = cvs.getContext("2d");
       var canvasHeight = cvs.height;
       var canvasWidth = cvs.width;

        A garder
               // Clear the canvas
               context.clearRect(0, 0, canvasWidth, canvasHeight);

               // Move registration point to the center of the canvas
               context.translate(canvasWidth/2, canvasHeight/2);

               // Rotate 1 degree
               context.rotate( rotation * Math.PI / 180);

               // Move registration point back to the top left corner of canvas
               context.translate(-canvasWidth/2, -canvasHeight/2);

               context.fillStyle = "red";
             //  context.fillRect(offSet_X, offSet_Y, 100, 100);
               context.fillRect(canvasWidth/4, canvasWidth/4, canvasWidth/2, canvasHeight/4);
               context.fillStyle = "blue";
               context.fillRect(canvasWidth/4, canvasWidth/2, canvasWidth/2, canvasHeight/4);
}

   setInterval(rotate, 100);*/
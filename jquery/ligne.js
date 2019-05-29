$(function () {
    var point_deb = 0
    var point_fin = 0;
    var rouge = 0;
    var vert = 0;
    var bleu = 0;
    var premierClick = 0;
    var deuxiemeClick = 0;
    var flag = false;
    var epaisseur = 2;


    $('#canvas_ligne').on("mousedown", function (e) {
        console.log('left ' + e.clientX);
        console.log('top ' + e.clientY);
        if(flag) {
            point_fin = $('#canvas_ligne').offset();
            point_fin.left = e.clientX -  point_fin.left;
            point_fin.top = e.clientY -  point_fin.top;
            tracerCercle();
            flag = false;
        } else {
            point_deb = $('#canvas_ligne').offset();
            point_deb.left = e.clientX -  point_deb.left;
            point_deb.top = e.clientY -  point_deb.top;
            flag = true;
        }



    });
    $('#sliderEpaisseurLigne').on("change", function () {
        epaisseur = $('#sliderEpaisseurLigne').val();
        $('#valueEpaisseurLigne').text(epaisseur);


    });
    $('#ligneRed').on("change", function () {
        rouge = $('#ligneRed').val();
        colorier();
       // tracerRectangle();
    });

    $('#ligneGreen').on("change", function () {
        vert = $('#ligneGreen').val();
        colorier();
      //  tracerRectangle();
    });

    $('#ligneBlue').on("change", function () {
        bleu = $('#ligneBlue').val();
        colorier();
      //  tracerRectangle();
    })

    function tracerCercle() {
        var cvs = document.getElementById('canvas_ligne');
        var ctx = cvs.getContext("2d");
        console.log('rgb(' + rouge + ',' +  vert + ',' + bleu +  ')');
        ctx.fillStyle = 'rgb(' + rouge + ',' +  vert + ',' + bleu +  ')';
        ctx.strokeStyle = 'rgb(' + rouge + ',' +  vert + ',' + bleu +  ')';
        ctx.lineWidth = epaisseur;
        ctx.beginPath();
        ctx.stroke();
        ctx.fill();
        ctx.moveTo(point_deb.left, point_deb.top);
        ctx.lineTo(point_fin.left, point_fin.top);
        ctx.stroke();
    }

    function colorier() {
        var cvs = document.getElementById('ligne_color');
        var ctx = cvs.getContext("2d");
        console.log('rgb(' + rouge + ',' +  vert + ',' + bleu +  ')');
        ctx.fillStyle = 'rgb(' + rouge + ',' +  vert + ',' + bleu +  ')';
        ctx.beginPath();
        ctx.stroke();
        ctx.fill();
        ctx.fillRect(10, 10, 100, 100);
        ctx.stroke();
    }

})
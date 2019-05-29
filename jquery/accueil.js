$(function () {
    $("#cercle").on('click', function () {
        console.log('cercle');
        document.location.href = "cercle.html";
    });
    $("#rectangle").on('click', function () {
        console.log('rectangle');
        document.location.href = "rectangle.html";
    })
    $("#ligne").on('click', function () {
        console.log('ligne');
        document.location.href = "ligne.html";
    })
});
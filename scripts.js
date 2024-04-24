$("document").ready(function() {
    start();
    let name = getUrlParameter('name');
    if(!name) {
        name = "gentille personne";
    } else {
        name = name.split(',').join(', ');
    }
    
    $("#header").append(`<h1>Bonjour ${name}</h1>`);
})

function start() {
    $("#image-1").on("click", () => {
        $("#image-1").hide("slow");
        $("#image-comment").hide("slow");
        displayParaphs()
    });
};

function displayParaphs() {
    $(".paraph").first().show( 2000, async function showNext() {
        $(this).next( ".paraph" ).show( 2000, showNext);
        if ($("#paraph-7").is(':visible'))  {
            await sleep(4000);
            showAnnoucement();
        }
    });
};

const sleep = m => new Promise(r => setTimeout(r, m));

function showAnnoucement() {
    $(".paraph").hide("quick");
    $("#annoucement").show("quick");
    $("#canvas").show("quick");
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
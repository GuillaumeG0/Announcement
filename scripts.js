let duckMode = false;
duckNames = ["Benjamin", "Florent", "Julien", "Tristan", "Cyril"];

$("document").ready(function() {
    start();
    let name = getUrlParameter('name');
    if(!name) {
        name = "gentille personne";
    } else if (name.split(",").some(x => duckNames.includes(x))) {
        duckMode = true;
        name = name.split(',').join(', ');
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
            if (!duckMode) {
                hidePrevious()
                showAnnoucement();
            } else {
                hidePrevious()
                coinCoinCoin();
            }

        }
    });
};

const sleep = m => new Promise(r => setTimeout(r, m));

function hidePrevious() {
    $(".paraph").hide("quick");
}

async function showAnnoucement() {
    $("#annoucement").show("quick");
    await sleep(1000);
    $("#canvas").show("quick");
}

function coinCoinCoin() {
    $("#canard").show("quick");
    $("#canvas-duck").show("quick");
    $("#image-3").on("click", () => {
        $("#canard").hide("quick");
        $("#canvas-duck").hide("quick");
        showAnnoucement()
    });
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
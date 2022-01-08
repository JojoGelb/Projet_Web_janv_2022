window.onload = function add_my_realisations() {
    add_realisations()
}

var table = [
    {"href":"real1.html","src":"ressources/pain.jpg","alt":"Mon premier pain","text":"pain basique"},
    {"href":"real2.html","src":"ressources/pain2.jpg","alt":"Mon second pain","text":"pain rustique"},
    {"href":"real3.html","src":"ressources/pain4.jpg","alt":"Mon quatrième pain","text":"pain perdu"},
    {"href":"real4.html","src":"ressources/pain5.jpg","alt":"Mon cinquième pain","text":"pain de savoie"},
]

function add_realisations(){
    var result = "";

    if(table.length>3){
        result += "<div id=\"six_container\">";
    }

    for(var i =0; i< table.length; i++){

        if(i%3 ==0){
            result += "<div id=\"three_container\">"
        }

        result += "<section><a href=\"" + table[i].href + "\"><img src=\"" + table[i].src + 
        "\" alt=\"" + table[i].alt + "\"></a><p>" + table[i].text + "</p></section>"
    
        if(i%3 ==2){
            result += "</div>"
        }
    }

    if(table.length>3){
        result += "</div>";
    }

    document.getElementById("realisations").innerHTML += result;
}

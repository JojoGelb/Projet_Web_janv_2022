window.onload = function add_my_type() {
    add_realisations()
    table = table2
    add_realisations()
}


var table = [
    ["Baguette","ressources/baguette.jpg","une baguette"],
    ["B1","Baguette blanche peu cuite","1€"],
    ["B2","Baguette blanche bien cuite","1€"],
    ["B5","Baguette au pavot","3€"]
]
var table2 = [
    ["viennoiserie","ressources/viennoiserie.jpg","Vienoiseries"],
    ["V1","Donuts","1€"],
    ["V2","Eclair au chocolat et à la vanille de Madagascar","2€"],
    ["V3","Beignet au pomme","1€"],
    ["V35","Pain au chocolat","1€"]
]

function add_realisations(){
    var result = "";

    console.log(table[0].length)

        for(var j =0; j< table.length; j++){
            if(j!=0){
                result+="<div>"
            }
            for(var k =0; k< table[j].length; k++){
                if(j==0){
                    if(k == 0){
                        result += "<div id=\"" + table[j][k] + "\"> " //baguette
                    }else if(k == 1){
                        result += "<section class=\"container2\"><h1>" + table[j][k-1] +"</h1>"
                        result += "<img src=\"" + table[j][k] + "\" alt=\""
                    }else if(k == 2){
                        result +=  table[j][k] +"\">"
                        result += "</section><section class=\"container3\">"
                    }
                }else{
                    result += "<p>" + table[j][k] + "</p>"
                }

            }
            if(j!=0){
                result += "</div>"
            }
            

        }
        result += "</section>"

    result += "</div>"
    document.getElementById("blocall").innerHTML += result;
}
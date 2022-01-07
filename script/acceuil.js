var table = [
    {"nom":"pain5","text":"Elles sont belles mes miches","alt":"image_de_pain5"},
    {"nom":"pain","text":"Tu veux mon pain?","alt":"image_de_pain"},
    {"nom":"pain2","text":"Te fais pas rouler dans la farine","alt":"image_de_pain1"},
    {"nom":"pain3","text":"On dit le pain pas lapin","alt":"image_de_pain2"},
    {"nom":"pain4","text":"Sapin? non son pain","alt":"image_de_pain3"}
];


window.onload = function load_my_sliders() {
    create_slide_show()
}


function create_slide_show(){
    var result = "";
    var start = "<figure><img src=\"./ressources/"
    var mid = "\" width=\"1240\" height=\"620\" /><figcaption>"
    for(var i =0; i< table.length; i++){
        result += start + table[i].nom + ".jpg\" alt=\"" + table[i].alt + mid + table[i].text + "</figcaption></figure>"
    }
    result += start + table[0].nom + ".jpg\" alt=\"" + table[0].alt + mid + table[0].text + "</figcaption></figure>"
    document.getElementById("slider").innerHTML += result;
}


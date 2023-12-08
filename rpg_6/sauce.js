
function fw(str){ 
    document.write(str);
}
function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}

function ra(attack){
    attack = attack + 1;
    var random = Math.floor(Math.random()*attack);
    return random;
}

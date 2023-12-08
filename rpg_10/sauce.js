
function dw(s){	

	str = str + s;
	
	t.value = str;
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

function rm(money){
    money = money + 1;
    var random_m = Math.floor(Math.random()*money);
    return random_m;
}

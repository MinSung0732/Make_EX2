
function tv(s){	

	str = str + s;
	
	t.value = str;
}

function tv3(s){	

	str3 = str3 + s;
	t3.value = str3;
}
function hr(){
    str = str + "\n================================================\n";
    
    t.value = str;
}
function br(){
    str = str + "\n";

    t.value = str;
    
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

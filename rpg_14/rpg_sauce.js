function tv(s){
    str = str + s;
    t.value = str;

}
function tv2(s){
    str2 = str2 + s;
    t2.value = str2;
}
function tv3(s){
    str3 = str3 + s;
    t3.value = str3;
}

function hr(){

    str = str + "\n============================\n";
    
    t.value = str;

}
function tvclear(){
    t.value = "";
}

function tvGameObjectClear(){
    t.value = "";
}


function br(){

    str = str + "\n";
    t.value = str;
}
function br2(){

    str2 = str2 + "\n";
    t2.value = str2;
}
function br3(){

    str3 = str3 + "\n";
    t3.value = str3;
}

function rg(gold){

    var random_g = Math.floor(Math.random()*gold);

    return random_g;

}
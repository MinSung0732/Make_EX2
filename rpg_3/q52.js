function getRandomattack(attack){
    attack = attack + 1;
    var random = Math.floor(Math.random()*attack);
    return random;
}

function monster(name,hp,attack){
    this.name = name;
    this.hp= hp;
    this.attack = attack;
    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.hp+"][atk:"+this.attack+"]");
        hr();
    }
}

function character(){
    this.name;
    this.hp;
    this.attack;
    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.hp+"][atk:"+this.attack+"]");
        hr();
    }
}




var orc = new monster("오크",100,3);

var elf = new character();

elf.name = "엘프";
elf.hp = 100;
elf.attack = 20;

orc.info();
elf.info();

hr();
dw("전투시작");
hr();

elf.hp = elf.hp - orc.attack;
orc.hp = orc.hp - elf.attack;


var elf_attack = getRandomattack(elf.attack);
var orc_attack = getRandomattack(orc.attack);

elf.hp = elf.hp - orc_attack;
orc.hp = orc.hp - elf_attack;

hr();
dw("엘프의 추가 데미지: "+elf_attack+"<br>");
dw("오크의 추가 데미지: "+orc_attack);
hr();

orc.info();
elf.info();
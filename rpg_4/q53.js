function getRandomattack(attack){
    attack = attack + 1;
    var random = Math.floor(Math.random()*attack);
    return random;
}

function monster(name,maxhp,hp,attack){
    this.name = name;
    this.maxhp = maxhp;
    this.hp= hp;
    this.attack = attack;
    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.maxhp+"/"+this.hp+"][atk:"+this.attack+"]");
        hr();
    }
}

function character(name,maxhp,hp,attack){
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.attack = attack;
    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.maxhp+"/"+this.hp+"]");
        hr();
    }
}




var orc = new monster("오크",100,100,3);

var elf = new character("엘프",120,120,15);

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
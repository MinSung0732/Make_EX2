function monster(){
    this.name;
    this.hp;
    this.attack;
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

var orc = new monster();

orc.name = "오크";
orc.hp = "50";
orc.attack = "12";

var elf = new character();

elf.name = "엘프";
elf.hp = 100;
elf.attack = 5;

orc.info();
elf.info();

hr();
dw("전투시작");
hr();

elf.hp = elf.hp - orc.attack;
orc.hp = orc.hp - elf.attack;

orc.info();
elf.info();
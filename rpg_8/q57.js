function disInfo(){
    hr();
    elf.info();
    orc.info();
    hr();
}

// 캐릭터 / 몬스터 생성

var orc = new monster("오크",100,100,12,100);
var elf = new character("엘프",100,100,40,300,0);

function battleInfo() {
    hr();
    dw("전투시작");
    hr();
    var elf_attack = ra(elf.attack);
    var orc_attack = ra(orc.attack);
    elf.hp = elf.hp - orc.attack;
    orc.hp = orc.hp - elf.attack;
    hr();
    dw("엘프의 데미지: " + elf.attack + "<br>");
    dw("오크의 추가 데미지: " + orc.attack);
    hr();
    elf.hp = elf.hp - orc_attack;
    orc.hp = orc.hp - elf_attack;
    hr();
    dw("엘프의 추가 데미지: " + elf_attack + "<br>");
    dw("오크의 추가 데미지: " + orc_attack);
    hr();
    disInfo();
}

disInfo();

battleInfo();

while(true){

    battleInfo();

    if(elf.hp<=0 || orc.hp<=0){
        if(elf.hp<=0 && orc.hp<=0){
            dw("무승부");
        } else if(orc.hp<=0){
            dw(orc.name + " 를 물리쳤다!<br>");
            elf.exp = elf.exp + orc.exp;
            dw("경험치 "+orc.exp+" 만큼 획득하셨습니다.")
            hr();
            dw("현재 경험치: ["+elf.exp+"/"+elf.maxexp+"]<br>");
            elf.info();
        } else if(elf.hp<=0){
            dw(elf.name + " 님이 사망하셨습니다.");
        }
        break;
    }
}
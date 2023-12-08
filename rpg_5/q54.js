function disInfo(){
    hr();
    elf.info();
    orc.info();
    hr();
}

// 캐릭터 / 몬스터 생성

var orc = new monster("오크",100,100,3);
var elf = new character("엘프",120,120,15);

// 랜덤 공격력 지정

var elf_attack = ra(elf.attack);
var orc_attack = ra(orc.attack);

// 정보창

disInfo();


hr();
dw("전투시작");
hr();

// 현재체력 - 기본공격력

elf.hp = elf.hp - orc.attack;
orc.hp = orc.hp - elf.attack;

hr();
dw("엘프의 데미지: "+elf.attack+"<br>");
dw("오크의 추가 데미지: "+orc.attack);
hr();

// 현재체력 - 랜덤 추가 공격력

elf.hp = elf.hp - orc_attack;
orc.hp = orc.hp - elf_attack;

hr();
dw("엘프의 추가 데미지: "+elf_attack+"<br>");
dw("오크의 추가 데미지: "+orc_attack);
hr();

// 결과값 상태창

disInfo();

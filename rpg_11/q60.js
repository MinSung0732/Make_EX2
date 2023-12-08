var elf;
var orc;

var t;
var t2;
var t3;

var str = "";
var str2 = "";
var str3 = "";


window.onload = function () {
    t = document.getElementById("game");
    t2 = document.getElementById("info2");
    t3 = document.getElementById("info3");

    orc = new monster("오크", 100, 100, 12, 100, 50);
    elf = new character("엘프", 100, 100, 100, 300, 0, 0);

    elf.info();
    orc.info();

    battleInfo();

    while (true) {

        battleInfo();

        if (elf.hp <= 0 || orc.hp <= 0) {
            if (elf.hp <= 0 && orc.hp <= 0) {
                tv("무승부");
            } else if (orc.hp <= 0) {
                var mon_money = rm(orc.money) + 20;
                tv(orc.name + " 를 물리쳤다!" + mon_money + "G 를 획득하셨습니다.");
                elf.exp = elf.exp + orc.exp;
                elf.money = elf.money + mon_money;
                tv("경험치 " + orc.exp + " 만큼 획득하셨습니다.")
                tv("현재 경험치: [" + elf.exp + "/" + elf.maxexp + "]");
                elf.info();
                tv("");
                elf.moneyinfo();
            } else if (elf.hp <= 0) {
                tv(elf.name + " 님이 사망하셨습니다.");
            }
            break;
        }
    }
}

window.onload = function () {
    c =
        document.getElementById("info_");


}

// 캐릭터 / 몬스터 생성



function battleInfo() {
    tv("전투시작");
    var elf_attack = ra(elf.attack);
    var orc_attack = ra(orc.attack);
    elf.hp = elf.hp - orc.attack;
    orc.hp = orc.hp - elf.attack;
    tv("엘프의 데미지: " + elf.attack);
    tv("오크의 추가 데미지: " + orc.attack);
    elf.hp = elf.hp - orc_attack;
    orc.hp = orc.hp - elf_attack;
    tv("엘프의 추가 데미지: " + elf_attack);
    tv("오크의 추가 데미지: " + orc_attack);
    disInfo();
}


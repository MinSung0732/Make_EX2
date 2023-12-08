function turn(){
    turn = turn + 1;
    console.log("현재 턴: "+turn);

    input_turn.value = turn;
}

var turn = 0;


//// 캐릭터 변수 설정

var elf;
var orc;

//// 텍스트 영역 변수설정

var t; // 1 스크린
var t2; // 중앙 스크린
var t3; // 하단 스크린

//// 문자열 변수 설정

var str = ""; // t = 스크린 텍스트
var str2 = ""; // t2 = 스크린 텍스트
var str3 = ""; // t3 = 스크린 텍스트

var btn;


window.onload = function () {

    t = document.getElementById("a");
    t2 = document.getElementById("b");
    t3 = document.getElementById("c");
    btn = document.getElementById("turn");

    orc = new monster("오크", 100, 100, 20, 200, 100);

    elf = new character("엘프", 200, 200, 10, 0, 500, 0);

    elf.info();
    orc.info();

    while (true) {
        battleinfo();
        if (elf.hp <= 0 && orc.hp <= 0) {
            tv3("!무승부!");
            break;
        } else if (elf.hp <= 0) {
            tv3("!패배!");
            break;
        } else if (orc.hp <= 0) {
            var mon_gold = rg(orc.gold) + 20;
            tv3("!승리!");
            br3();
            tv3(orc.name + " 을(를) 처치하였습니다!");
            br3();
            elf.exp = elf.exp + orc.exp;
            elf.gold = elf.gold + mon_gold;
            tv3("경험치+ " + orc.exp);
            br3();
            tv3("골드+ " + mon_gold);
            hr();
            elf.info();
            break;
        }

    }

}

var elf_attack;
var orc_attack;

function battleinfo() {

    tv2("===================");
    br2();
    tv2("전투 시작");
    br2();
    tv2("===================");
    br2();
    elf_attack = rd(elf.atk);
    orc_attack = rd(orc.atk);

    elf.hp = elf.hp - orc.atk;
    orc.hp = orc.hp - elf.atk;

    tv2("[" + elf.name + "] : 🏹" + elf.atk + " 만큼의 기본피해를 입혔습니다.");
    br2();
    tv2("[" + orc.name + "] : [" + orc.maxhp + "/" + orc.hp + "]");
    br2();
    br2();
    tv2("[" + orc.name + "] : 🪓" + orc.atk + " 만큼의 기본피해를 입혔습니다.");
    br2();
    tv2("[" + elf.name + "] : [" + elf.maxhp + "/" + elf.hp + "]");
    br2();
    tv2("-------------------");
    br2();

    elf.hp = elf.hp - orc_attack;
    orc.hp = orc.hp - elf_attack;

    tv2("[" + elf.name + "] : ⚔" + elf_attack + " 만큼의 추가피해를 입혔습니다.");
    br2();
    tv2("[" + orc.name + "] : [" + orc.maxhp + "/" + orc.hp + "]");
    br2();
    br2();
    tv2("[" + orc.name + "] : ⚔" + orc_attack + " 만큼의 추가피해를 입혔습니다.");
    br2();
    tv2("[" + elf.name + "] : [" + elf.maxhp + "/" + elf.hp + "]");
    br2();

    hr();

    elf.info();
    orc.info();

}
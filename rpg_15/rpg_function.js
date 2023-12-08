// 자신과 적군 정보
function dsci(){
    hr();
    elf.info();
    br();
    orc.info();
    hr();
}
// 보상 획득
function getReward(){
    elf.gold = elf.gold + orc.gold;
    tv(orc.gold + " G를 획득하셨습니다.\n");
}
// 공격력값 랜덤 트리거
function rd(atk){
    var random = Math.floor(Math.random()*atk) + 3;
    return random;
}
// 전투 종료
function end(){
    tv("전투 종료\n");
    elf.exp = elf.exp + orc.exp;
    tv(orc.name+" 을(를) 처치하여 "+orc.exp+" 만큼 경험치를 획득하셨습니다.");
    br();
    getReward();
    br();
    currentMode = "대기"; // 현재 모드를 비전투로 전환
    tvGameObjectClear();    // 게임 오브젝트 화면을 지움
}

function battleturn(){
    var playeratk = rd(elf.atk);
    var monsteratk = rd(orc.atk);

    //체력 데미지 계산식
    elf.hp = elf.hp - monsteratk;
    orc.hp = orc.hp - playeratk;

    br();
    tv("["+elf.name+"]: 🏹"+playeratk+" 만큼의 피해를 가하였습니다.");
    br();
    tv("["+orc.name+"]: 🪓"+monsteratk+" 만큼의 피해를 가하였습니다.");
    br();

    //체력 검사
    if (elf.hp <= 0 || orc.hp <= 0){
        end();
        dsci();
        return false;
    } else {
        dsci();
        return true;
    }
}
//턴 카운트 표시
function turn() {
    if (currentMode == "전투") {
        battleturn();
        turncount++;
        itturn.value = turncount;
        console.log("현재 턴: " + turncount);
    } else {
        tvclear();
        turncount = 0;
        itturn.value = turncount;
        console.log("현재 턴: " + turncount);
    }

}

function scscrolltop(){
    t.scrollTop = t.scrollHeight;
}
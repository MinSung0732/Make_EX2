
// 텍스트 영역
var t; // 상단
var t2; // 중단
var t3; // 하단

var str = "";
var str2 = "";
var str3 = "";
var save = "";

var elf = new character("엘프",200,200,200,0,500,0);
var orc = new monster("오크",120,120,10,250,300);
var turncount = 1;
var itturn;
var currentMode = "전투";



window.onload = function(){
    t = document.getElementById("a");
    t2 = document.getElementById("b");
    t3 = document.getElementById("c");
    itturn = document.getElementById("turnbtn")

    dsci();

    tv("상태: " +currentMode);
}
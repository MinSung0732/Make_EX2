function character(name,maxhp,hp,atk,exp,maxexp,gold){
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.atk = atk;
    this.exp = exp;
    this.maxexp = maxexp;
    this.gold = gold;
    this.info = function(){
        
        tv("[이름: "+this.name+"] [체력:"+this.maxhp+"/"+this.hp+"]"+" [경험치: "+this.exp+"/"+this.maxexp+"]");

    }
    this.bank = function(){

        tv("[보유한 재화: "+this.gold+" G]");
    }
}

function monster(name,maxhp,hp,atk,exp,gold){
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.atk = atk;
    this.exp = exp;
    this.gold = gold;
    this.info = function(){

        tv("[이름: "+this.name+"] [체력:"+this.maxhp+"/"+this.hp+"]"+" [공격력: "+this.atk+"]");
    }
}
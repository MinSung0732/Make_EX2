function character(name,maxhp,hp,attack,maxexp,exp,money){
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.attack = attack;
    this.maxexp = maxexp;
    this.exp = exp;
    this.money = money;
    this.info = function(){
        dw("["+this.name+"]["+this.maxhp+"/"+this.hp+"][exp: "+this.exp+"/"+this.maxexp+"]");
    }
    this.moneyinfo = function(){
        dw("보유중인 금액: "+this.money+"G");
    }
}
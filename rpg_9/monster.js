function monster(name,maxhp,hp,attack,exp,money){
    this.name = name;
    this.maxhp = maxhp;
    this.hp= hp;
    this.attack = attack;
    this.exp = exp;
    this.money = money;
    this.info = function(){
        dw("["+this.name+"]["+this.maxhp+"/"+this.hp+"]");
    }
}
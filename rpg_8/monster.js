function monster(name,maxhp,hp,attack,exp){
    this.name = name;
    this.maxhp = maxhp;
    this.hp= hp;
    this.attack = attack;
    this.exp = exp;
    this.info = function(){
        dw("["+this.name+"]["+this.maxhp+"/"+this.hp+"]");
    }
}
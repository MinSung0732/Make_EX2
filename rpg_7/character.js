function character(name,maxhp,hp,attack,exp){
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.attack = attack;
    this.exp = exp;
    this.info = function(){
        fw("["+this.name+"]["+this.maxhp+"/"+this.hp+"]");
    }
}
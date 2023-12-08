function character(name,maxhp,hp,attack){
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.attack = attack;
    this.info = function(){
        dw("["+this.name+"]["+this.maxhp+"/"+this.hp+"]");
    }
}
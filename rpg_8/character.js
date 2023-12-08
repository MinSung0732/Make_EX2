function character(name,maxhp,hp,attack,maxexp,exp){
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.attack = attack;
    this.maxexp = maxexp;
    this.exp = exp;
    this.info = function(){
        dw("["+this.name+"]["+this.maxhp+"/"+this.hp+"][exp: "+this.exp+"/"+this.maxexp+"]");
    }
}
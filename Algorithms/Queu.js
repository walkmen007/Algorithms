function Queu(){
 this.top = 0;
 this.bottom = 0;
 this._storage = [];
}

Queu.prototype.enqueu = function(ele){
   this._storage[this.top] = ele;
   this.top++;
}

Queu.prototype.dqueu = function(){
    if(this._storage.length>0){
       delete this._storage[this.bottom];
       if(this._storage.length >1){
         this.bottom++;  
       }  
    }
}

Queu.prototype.print = function(){
    var arrlength = this._storage.length;
    for(var i =this.bottom; i <arrlength; i++){
        console.log(this._storage[i]);
    }
};

var obj1 = new Queu();
obj1.enqueu(7);
obj1.enqueu(18);
obj1.enqueu(27);
obj1.enqueu(3333);
obj1.enqueu(8888);
obj1.enqueu(15);
console.log(obj1);
obj1.dqueu();
obj1.print();
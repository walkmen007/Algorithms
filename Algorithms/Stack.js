function Stack(){
	this.size = -1;
	this._storage = {};
}

Stack.prototype.push = function (data){
  this.size++;
  var size = this.size;
  this._storage[size] = data; 
}

Stack.prototype.pop = function(){
	var size = this.size;
	var deletedElement = null;
	if(size >=0 ){
	  deletedElement = this._storage[size];
      delete this._storage[size];
	}
	return deletedElement
};
var browserStack = new Stack();
console.log(browserStack);
browserStack.push(21);
browserStack.push(311);
browserStack.push(4444441);
browserStack.push(9090);
console.log(browserStack);
browserStack.pop();
console.log("browserStack:::::::::",browserStack);



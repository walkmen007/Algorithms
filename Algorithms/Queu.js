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


//Question
/**
 * 
 * @author Ankit Ghiya (ghiya.ankit7@gmail.com)
 * @param Array<Array> taskMatrix : list of taskMatrix. each index forms Array<ID => ID> e.g. [a => b]
 * @returns Array : Dependencies list of IDs
 **/

function getSortedOrder(param) {
  
  var taskKey = param.tasks;
  var taskMatrix = param.dependencies;

  var nodes   = {}, // hash: stringified id of the node => { id: id, afters: lisf of ids }
      sorted  = [], // sorted list of IDs ( returned value )
      visited = {}; // hash: id of already visited node => true

  var Node = function(id) {
    this.id = id;
    this.afters = [];
  }

  /* 
   * 1. Build data structures. 
   */

  if(taskKey && taskKey.length){
  	  if(taskMatrix.length){
         taskMatrix.forEach(function(item) {
		  	var newArr = item.split("=>");
		    var from = newArr[0], to = newArr[1];
		    if (!nodes[from]) nodes[from] = new Node(from);
		    if (!nodes[to]) nodes[to]     = new Node(to);
		    nodes[from].afters.push(to);	  	  
	     });
  	  }else{
  	  	return taskKey;
  	  }  
  }else{
      return [];
  }
  

  // 2. To check functional dependency.
  Object.keys(nodes).forEach(function visit(idstr, ancestors) {

    var node = nodes[idstr],
        id   = node.id;

    // If already exists, do nothing
    if (visited[idstr]) return;

    if (!Array.isArray(ancestors)) ancestors = [];

    ancestors.push(id);

    visited[idstr] = true;
    node.afters.forEach(function(afterID) {
      if (ancestors.indexOf(afterID) >= 0)  // if already in ancestors, a closed chain exists.
        throw new Error('closed chain : ' +  afterID + ' is in ' + id);
      visit(afterID.toString(), ancestors.map(function(v) { return v })); // recursive call
    });

    sorted.unshift(id);
  });

  return sorted;
}


function checkDependency(testObj) {
  try {
    var sorted = getSortedOrder(testObj);
    console.log("succeeded", sorted);
  }
  catch (e) {
    console.log("failed", e.message);
  }
}
var testObj1 = {
  	tasks: ['a','b','c'],
  	dependencies: [
					  	'A=>B',
					    'B=>C',
					    'C=>A'
				  ],
}



var testObj = {

    testCase1 : {
                  tasks: [],
                  dependencies: [],
     },

     testCase2 : {
                  tasks: ['A','B'],
                  dependencies: ['A=>B'],
     },

     testCase3 : {
                  tasks: ['A','B'],
                  dependencies: [],
     },

     testCase4 : {
                  tasks: ['A','B','C', 'D'],
                  dependencies: ['A=>B','C=>D'],
     },

     testCase5 : {
                  tasks: ['a','b','c'],
                  dependencies: [ 'A=>B','B=>C'],
     },

     testCase6 : {
                  tasks: ['a','b','c'],
                  dependencies: ['A=>B','B=>C','C=>A'],
     },
}

Object.keys(testObj).forEach(function(item, index){
  console.log("Item---",testObj[item]);
  checkDependency(item);
});

console.log("testObj1",testObj1);
//checkDependency(testObj);

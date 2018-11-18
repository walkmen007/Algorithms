function Node(val){
	this.next = null;
	this.data = val;
}

function SinglylinkedList(){
	this.head = null;
	this.length = 0;
}

SinglylinkedList.prototype.add = function(val){
 var node = new Node(val);
 var currentNode = this.head;
 //For First Element To Enter.
   if(this.head == null){
   	this.head = node;
   	this.length++;
   	return node;
   }
   //For 2nd and more element to enter.
   while(currentNode.next){
   	currentNode = currentNode.next;
   }
   //console.log("currentNode",currentNode);
   currentNode.next = node;
   this.length++;
   return node;  
};

SinglylinkedList.prototype.delete = function(val){
  var currentNode = this.head;
  for(var i=0; i <this.length; i++){
    
  }
}

var linkedList = new SinglylinkedList();
linkedList.add(11);
linkedList.add(33);
linkedList.add(55);
linkedList.add(77);
console.log("linkedList",linkedList);
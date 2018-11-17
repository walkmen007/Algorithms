var arr = [27, 45, 7, 99, 93, 10, 25, 18, 7, 99, 10, 90];
var arr2 = [23];
var arr3 = [23, 23]
var count = 0;
var isTrue = true;
for(var i=0; i < arr.length; i++){
	console.log("i+++++++++++++++++++",i);
	  for(var j=0; j <arr.length-i; j++ ){
	  	console.log("count",++count);
	  	if(arr[j]>arr[j+1]){
	  		var x = arr[j+1];
	  		arr[j+1] =arr[j];
	  		arr[j] = x;
	  	}
	  }
}

console.log("sorted arr",arr);
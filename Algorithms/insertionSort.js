var arr = [27, 45, 7, 99, 93, 10, 25, 18, 7, 99, 10, 90];
var arr2 = [23];
var arr3 = [23, 23];
var temp = null;
for(var j=1; j < arr.length; j++){
	for(var i= j; i> 0; i--){
		if(arr[i-1] > arr[i]){
           temp = arr[i-1];
           arr[i-1] = arr[i];
           arr[i] = temp;
		}
	}
}
console.log("Sorted Arr=====",arr);
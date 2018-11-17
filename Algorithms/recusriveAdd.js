var arr = [1, 4,5,6,7,8,9,10];
var sum = 0;

var addArr = function(arr, index){
    if(arr[index]){
    	sum += arr[index] + addArr(arr, index+1);
    }
    return sum;
	
}

addArr(arr, 0);
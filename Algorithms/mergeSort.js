var arr = [27, 45, 7, 99, 93, 10, 25, 18, 7, 99, 10, 90];
var arr2 = [23];
var arr3 = [23, 23];
var min = null;


for(var j=0; j< arr.length; j++){
    min = j;
	for(var i=j+1; i < arr.length; i++){        
         if(arr[min] > arr[i]){
                 min = i;
         }
	}
	if(min !== j){
		var temp = arr[min];		
		arr[min] = arr[j];
		arr[j] = temp;
	}
}



console.log("sorted arr",arr);
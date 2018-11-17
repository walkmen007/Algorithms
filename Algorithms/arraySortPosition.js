//var arr = [12, 19, 13, 20, 9, 66, 8, 108]; //length = 8
var arr = [12, 12, 12, 12, 12, 13, 108]; //length = 8
// var arr = [12, 19, 13, 20, 9, 66, 8, 108]; //length = 8
// var arr = [12, 19, 13, 20, 9, 66, 8, 108]; //length = 8
// var arr = [12, 19, 13, 20, 9, 66, 8, 108]; //length = 8
// var arr = [12, 19, 13, 20, 9, 66, 8, 108]; //length = 8
// var arr = [12, 19, 13, 20, 9, 66, 8, 108]; //length = 8
// var arr = [12, 19, 13, 20, 9, 66, 8, 108]; //length = 8
// var arr = [12, 19, 13, 20, 9, 66, 8, 108]; //length = 8

var min = 0;
var max = 0;
var isminFind = false;
var ismaxFind = false;
var sortingPosition = function(arr){

for(var i=0; i < arr.length && (!isminFind || !ismaxFind) ; i++){
    min = !isminFind ? i : min;
    max = !ismaxFind ? arr.length - (i+1) : max;
    console.log("i0000000000000",i, min, max);
    for(var j=i; j < (arr.length - (i+1)) && (!isminFind || !ismaxFind) ; j++){
       console.log("j",j);
       if(arr[min]>arr[j+1] && !isminFind){
         console.log("min find---i, min, j+1",i, min, j+1);
         isminFind = true;
       }
       if(arr[max] < arr[max - (j)]){
        console.log("max find---i, j,  max, max-(j+1)",i, j, arr[max], arr[max - (j)]);
         ismaxFind = true;
       }

    }
  }

  if(max == 0 && min == arr.length-1){
    min = -1;
    max = -1;
    console.log("new min max",min, max);
  }
}

sortingPosition(arr);
console.log("sort position", min, max);
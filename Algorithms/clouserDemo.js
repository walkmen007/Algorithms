var interviewQuestion = function(type, name){
	var teacherStr = "hi," + name + " What Subject Do You Teach?";
	var designerStr = "What design do you make, " + name + "?";
	var defautltStr = "Hello what do you do?";

	if(type == "teacher"){
		 return function(){
		   console.log(teacherStr);
		 }
	}else if(type == "designer"){
		 return function(){
		   console.log(teacherStr);
		 }

	}else{
		return function(){
		   console.log(defautltStr);
		 }
	}

};

var askQuestion = interviewQuestion("teacher", "John");
askQuestion();




	// switch(type){
 //     case 'teacher':
 //           questiontype(teacherName);
 //           break;
 //     case 'designer'
 //           questionType(designerName);
 //           break;
 //     default :
 //           questionType(anonymous);
 //           break;
	// }



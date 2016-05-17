console.log("hello js works");
function wordCount(words){
	var obj ={};
	console.log(obj.Hello);//undefined
	words = words.split(' ');
	for(var i = 0;i<words.length;i++){
		if(obj[words[i]] === undefined){
			obj[words[i]] = 1;
		}else{
			obj[words[i]]++
		}

	}
console.log(obj);

}

wordCount("Hello three how are  three you too three day");
/*
three : 3

*/
wordCount("I went to the store.  I went to the office. I ate stuff");
/*
i : 3
to : 2
went :2
*/
wordCount("hello i am a man an ant man and i know the world");
/*
i : 2
*/



console.log("hello js works");
function wordCount(words){
	words = words.replace(/[^a-z\s]/gi,'');
	//[^a-c]
	//\r?\n|\r
	words = words.toLowerCase();

	var obj ={};
	//console.log(obj.Hello);//undefined
	words = words.split(' ');
	for(var i = 0;i<words.length;i++){
		if(obj[words[i]] === undefined){
			obj[words[i]] = 1;
		}else{
			obj[words[i]]++
		}

	}
//console.log(obj);
	var arr =[];
	for(prop in obj){
		arr.push([
			prop,
			obj[prop]
			])	
	}

var finalArr = arr.sort(function(a,b){return b[1]-a[1]})
//return finalArr;
//console.log(finalArr)

for(var i = 0;i<finalArr.length;i++){
	
	console.log(finalArr[i][0]+" : "+finalArr[i][1]);

}

//console.log("-----------------------------------");

	//console.log(arr);	//console.log(arr[0][0])
}

//var xxxarray = wordCount("Hello 22 three 22 how are  three you Three too three day");
/*
three : 3

*/
//wordCount("I went to the store.  I went to the office. I ate stuff");
/*
i : 3
to : 2
went :2
*/
//wordCount("hello i am a man an ant man and i know the world");
/*
i : 2
*/

//var xxxarray =[["ham", 1],["fart","butt"],["stinkey","feet"]];

$(".send" ).click(function() {
  console.log("hello");
  var info = document.getElementById('wordsId').value
  info = info.replace(/(\r\n|\n|\r)/gm," ");
  info = info.replace(/\s\s+/g, ' ');
  console.log(info);
  var xzarray = wordCount(info);
  console.log(xzarray);
});
//var xarray =wordCount("hello");
//var text=document.getElementById('wordsId').value;
//console.log(document.getElementById('wordsId').value)
//var sortInput = wordCount(text);
//var sortInput;
/*
function sortInput(){
	wordCount(text);
}
*/






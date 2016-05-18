console.log("hello js works");
function wordCount(words){
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
return finalArr;
//console.log(finalArr)
/*
for(var i = 0;i<finalArr.length;i++){
	
	console.log(finalArr[i][0]+" : "+finalArr[i][1]);

}
*/
//console.log("-----------------------------------");

	//console.log(arr);	//console.log(arr[0][0])
}

var xxxarray = wordCount("Hello three how are  three you Three too three day");
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

//var xxxarray =[["ham", 1],["fart","butt"],["stinkey","feet"]];

/*
var xarray =wordCount("At New Context we protect people's security and privacy by designing and building secure, scalable systems to accelerate the digital transformation of critical infrastructure. 

New Context is a rapidly growing consulting company in the heart of downtown San Francisco. Our clients are located around the world, and so are our engineers. 

We specialize in Lean Security; an approach that leads organizations to build better software thru hands-on technical and management consulting. We are a group of engineers who live and breath Agile Infrastructure, Systems Automation, Cloud Orchestration, and Information Security. 

Our driving methodologies are Lean Security and Humane Systems. In adopting a security first approach to infrastructure focused on people, processes and technologies, our team will have an integral part in driving the direction of these exciting new approaches.

New Context Services has a division that is specifically focused on developing custom software and hardware security products for our clients. We need an experienced security product manager who can drive vision for these products and deliver on building high quality product.

About The Opportunity");
*/








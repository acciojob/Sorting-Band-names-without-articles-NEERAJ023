//your code here
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let arr1=[];
let hashmap={};
for(let i=0; i<arr.length; i++){
	let articlestring=getarticlestring(arr[i]);
	hashmap[articlestring]=arr[i];
	 arr1.push(articlestring);
}
arr1.sort();
let output=[];
arr1.forEach((newstr)=>{
	output.push(hashmap[newstr]);
})
console.log(output);

function getarticlestring(word){
	let a=word.split(" ");
	let text=a.filter((w)=>{
	let	wo=w.toLowerCase();
		if(wo==="the"||wo==="an"||wo==="a"){
			return false;
		}
		return true;
	})
	return text.join(" ");
}
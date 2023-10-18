//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let arr1=[];
let mapobj={};
for(let i=0; i<touristSpots.length; i++){
	let word=words(touristSpots[i]);
	mapobj[word]=touristSpots[i];
	let arr1.push(word);
}
arr1.sort();
let output=[];
arr1.forEach((newstr)=>{
	output.push(mapobj[newstr]);
})
console.log(output);

function words(word){
	let a=word.split(" ");
	let text=a.filter((w)=>{
	let	wo=w.toLowerCase();
		if(wo=="the"||wo=="an"||wo=="a"){
			return false;
		}
		return true;
	})
	return text.join("");
}
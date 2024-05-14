
let minNumber;
let maxNumber;


document.getElementById("mysubmit").onclick=function(){

	minNumber = document.getElementById("minNum").value;
	console.log(minNumber);

	maxNumber = document.getElementById("maxNum").value;
	console.log(maxNumber);


}

document.getElementById("mysubmit").onclick=function(){


/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(minNumber, maxNumber) {
    return Math.random() * (maxNumber - minNumber) + minNumber;
}

console.log(getRandomArbitrary());

}
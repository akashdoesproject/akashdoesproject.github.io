var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var h3 = document.querySelector("h3");

function getColor()
{
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + "," + color3.value + ")";
	h3.textContent = body.style.background + ";";
}

var randomButton = document.getElementById("random");

function randomColor()
{
	// console.log("click");
	var ran1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	var ran2 = 'rgb(' + (Math.floor(Math.random() * 220)) + ',' + (Math.floor(Math.random() * 220)) + ',' + (Math.floor(Math.random() * 220)) + ')';
	body.style.background = "linear-gradient(to right," + ran1 + "," + ran2 + ")";
	h3.textContent = body.style.background + ";"; 
}

color1.addEventListener("input",getColor); 
// here we are generating event only for color1 and we need to generate event for color2 as well.
color2.addEventListener("input",getColor);
color3.addEventListener("input",getColor);
//for random color
randomButton.addEventListener("click",randomColor);
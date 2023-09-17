const button = document.querySelector("#fallButton");

let confetti = document.createElement("img");
confetti.setAttribute("class", "congrats");
confetti.setAttribute("src", "confetti.gif");
confetti.setAttribute("alt", "confetti!");

button.addEventListener("click", () => {
	//const confetti = document.createElement("img");
	//confetti.classlist.add("congrats");
	//confetti.src = "confetti.gif";
	document.querySelector("body").appendChild(confetti);
	setTimeout( () => {
		document.querySelector(".congrats").remove();
	}, 500);
});
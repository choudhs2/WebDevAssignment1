const button = document.querySelector("#summerButton");

const imgs = [
	"Portland.jpg",
	"Boston.jpg",
	"Buffalo.jpg"
];

const caps = [
	"Bridge in Portland, and a really suspicious ramp...",
	"Arches in Boston, which I found beautiful",
	"Authentic Bengali food from Buffalo, from Clay Handi"
];

const descs = [
	"I hadn't flown anywhere since I was a kid, about 15 years ago. And yet, there's a friend I hadn't seen in a long time who lives in Portland with his fiance. This led me to do the craziest thing I've done in a while and fly across the country, alone, to see him and explore Portland! I saw a good few museums, walked around a ton, did some hiking, and a ton more. This picture in particular, though, is interesting because not long after I took it, I saw a skateboarder go directly for the ramp and change his mind. He jumped off his board, which kept going, and he had to run after it, getting lucky and catching it just before it went in the water!",
	"Boston and I have... history, let's say. But honestly overall it was a great trip! These arches are by water and it was a great place to just sit down and enjoy the breeze for a little while. This trip was with family, and we were pulled in a few different directions because we all had something we wanted to see. Of course, there was one thing that we all wanted to visit, the MIT museum. It was filled with tons of interactive exhibits and had only opened back up last year after being closed for the pandemic. There were a few AI projects there too, which was really cool to see and just made me even more excited to continue Computer Science.",
	"My family and I were in Buffalo for a wedding, actually. It was a small wedding with mostly just close family, so it wasn't particularly eventful. However, we had extra time in Buffalo after that, so we went around, explored, and even went to Niagara Falls, on the Canadian side, which was absolutely beautiful! And of course, we had some amazing food, as you can see from the image. My family is Bengali and this restaurant is owned and operated by Bengali people! All the food traditional and is even made in the clay pots that it is served in, along with wooden utensils. While you think that might be unsanitary or a hassle, everything in the restaurant was super clean!"
];

let count = 0;

const img = document.querySelector(".changeable_img");
const cap = document.querySelector(".changeable_cap");
const desc = document.querySelector(".changeable_text");

button.addEventListener("click", () => {
	count = (count+1) % 3;
	img.setAttribute("src", imgs[count]);
	cap.textContent = caps[count];
	if(count === 1) {
		img.setAttribute("width", "25%");
	}
	else {
		img.setAttribute("width", "50%");
	}
	desc.textContent = descs[count];
});
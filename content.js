let data = [
	{
		img: "./img/Kingslayer/Kingslayer.png",
  	title: "Kingslayer",
    content: "A high-action, platformer bullet hell game developed in Processing.",
		link: "kingslayer.html"
  },
	{
		img: "./img/KMSRT/kmsrt.png",
		title: "Kalmont Mountain Safety and Rescue Team Website",
		content: "A fictional website for the Kalmont Mountain Safety and Rescue Team Website containing local news and tips and tricks on winter outdoors safety.",
		link: "kmsrt.html"
	},
  {
		img: "./img/MineDiamonds/MineDiamonds.png",
  	title: "Mine Diamonds",
    content: "An interactive project made with Arduino and Processing.",
		link: "minediamonds.html"
  }
]

const parent = document.querySelector("#main");

data.forEach(({img, title, content, link}) => {
	let div = document.createElement("a");
	let contentDiv = document.createElement("div");
	div.href = link;
	contentDiv.className = "item-desc";

	let image = document.createElement("img");
	image.src = img;

	let proj = document.createElement("h2");
	proj.innerText = title;

	let txt = document.createElement("div");
	txt.innerText = content;
	/*
	<img src="img/Kingslayer.png">
	<a href="page.html" class="item-content">
		<h1> Title </h1>
		<div> content </div>
	</div>
	*/
	div.appendChild(image);
	div.appendChild(contentDiv);
	contentDiv.appendChild(proj);
	contentDiv.appendChild(txt);
  parent.appendChild(div);
})

let data = [
	{
		img:"./img/MonkeyMobius/title.png",
		title:"Monkey Mobius",
		ctgr:"Game Design/Development Project",
		content:"A infinite-themed puzzle game developed in Unity for the 2021 BC Game Jam. \n Winner of the Participant's Choice award.",
		link:"monkey-mobius",
	},
	{
		img:"./img/Scrapbook/title.png",
		title:"Scrapbook",
		ctgr:"UI/UX Project",
		content:"A children's mental health journal created during Hack4Health 2021.",
		link:"scrapbook",
	},
	{
		img: "./img/EiSC/title.png",
		title: "Emergency in Section C",
		ctgr: "Game Design/Development Project",
		content: "A emergency-themed platformer developed in Unity for the May 2021 Make-A-Level Game Jam.",
		link: "emergency-in-section-c"
	},
	{
		img: "./img/Kingslayer/Kingslayer.png",
  	title: "Kingslayer",
		ctgr: "Game Design/Development Project",
    content: "A high-action, platformer bullet hell game developed in Processing.",
		link: "kingslayer"
  },
	{
		img: "./img/KMSRT/kmsrt.png",
		title: "Kalmont Mountain Safety and Rescue Team Website",
		ctgr: "Web Design/Development Project",
		content: "A fictional website for the Kalmont Mountain Safety and Rescue Team Website containing local news and tips and tricks on winter outdoors safety.",
		link: "kmsrt"
	},
  {
		img: "./img/MineDiamonds/MineDiamonds.png",
  	title: "Mine Diamonds",
		ctgr: "Arduino Design/Development Project",
    content: "An interactive application made with Arduino and Processing.",
		link: "mine-diamonds"
  }
]

const parent = document.querySelector("#main");

data.forEach(({img, title, ctgr, content, link}) => {
	let div = document.createElement("a");
	let contentDiv = document.createElement("div");
	div.href = link;
	contentDiv.className = "item-desc";

	let image = document.createElement("img");
	image.src = img;

	let proj = document.createElement("h2");
	proj.innerText = title;
	proj.style.marginBottom = "0";

	let cat = document.createElement("div");
	cat.innerText = ctgr;
	cat.style.fontStyle = "italic";
	cat.style.marginBottom = "1rem";

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
	contentDiv.appendChild(cat);
	contentDiv.appendChild(txt);
  parent.appendChild(div);
})

//DATA AND SCRIPT TAKEN FROM PREVIOUS PORTFOLIO

let otherData = [
//	{
//		img:"./img",
//		title:"Automagic",
//		ctgr:"AI/Front-end Development Project",
//		content:"[Page WIP]",
//		tools:"Python, Dash, Cytoscape, SQLite",
//		link:"",
//	},
	{
		img:"./img/Scrapbook/title.png",
		title:"Scrapbook",
		ctgr:"UI / UX Project",
		content:"A children's mental health journal created during Hack4Health 2021.",
		tools:"Figma",
		link:"scrapbook.html",
	},
	{
		img: "./img/KMSRT/kmsrt.png",
		title: "Kalmont Mountain Safety and Rescue Team Website",
		ctgr: "Web Design / Development Project",
		content: "A fictional website for the Kalmont Mountain Safety and Rescue Team Website containing local news and tips and tricks on winter outdoors safety.",
		tools:"HTML/CSS",
		link: "kmsrt.html"
	},
]

let gameData = [
	{
		img:"./img/KartKlash/title.png",
		title:"Kart Klash",
		ctgr:"VR Design / Development Project",
		content:"Kart Klash is a VR game that combines the thrilling experience of go-kart racing and the satisfaction of shooting targets and other racers, made for IAT 445 - Immersive Environments.",
		tools:"Unity, C#",
		link:"kart-klash.html",
	},
	{
		img:"./img/Akimbo/title.png",
		title:"Akimbo Corps",
		ctgr:"Game Design / Development Project",
		content:"Akimbo Corps is a top-down ",
		tools:"Unity, C#",
		link:"akimbo-corps.html",
	},
	{
		img:"./img/GPPE/title.png",
		title:"The Great Peking Peak Escape",
		ctgr:"Game Design / Development Project",
		content:"A platformer centered around a grappling hook, where players must climb the walls of a kitchen to escape their cruel fate of becoming someone else's dinner.",
		tools:"Unity, C#",
		link:"gppe.html",
	},
	{
		img:"./img/ToA/cover.png", //image
		title:"Tower of Ash",
		ctgr:"Game Design / Development Project",
		content:"A roguelite metroidvania platformer developed in Unity for IAT 410 - Advanced Game Design.", //content
		tools:"Unity, C#",
		link:"tower-of-ash.html",
	},
	{
		img:"./img/Unfabled/cover.png",
		title:"Unfabled",
		ctgr:"Game Design / Development Project",
		content:"A fast-paced, spell-slinging action game developed in Unity for Ludum Dare 49. \n Rated Top 20% Overall in the Jam category.",
		tools:"Unity, C#",
		link:"unfabled.html",
	},
	{
		img:"./img/MonkeyMobius/title.png",
		title:"Monkey Mobius",
		ctgr:"Game Design / Development Project",
		content:"An infinite-themed puzzle game developed in Unity for the 2021 BC Game Jam. \n Winner of the Jam via the Participant's Choice award.",
		tools:"Unity, C#",
		link:"monkey-mobius.html",
	},
	{
		img: "./img/EiSC/title.png",
		title: "Emergency in Section C",
		ctgr: "Game Design / Development Project",
		content: "An emergency-themed platformer developed in Unity for the May 2021 Make-A-Level Game Jam.",
		tools:"Unity, C#",
		link: "emergency-in-section-c.html"
	},
	{
		img: "./img/Kingslayer/Kingslayer.png",
		title: "Kingslayer",
		ctgr: "Game Design / Development Project",
		content: "A high-action, platformer bullet hell game developed in Processing.",
		tools:"Processing",
		link: "kingslayer.html"
	},
]

let archive = [ //for future use
	{
		img: "./img/MineDiamonds/MineDiamonds.png",
		title: "Mine Diamonds",
		ctgr: "Arduino Design/Development Project",
		content: "An interactive application made with Arduino and Processing.",
		tools: "Arduino",
		link: "mine-diamonds"
	},
	{
		img:"./img/HellGene/title.png",
		title:"Hell Gene",
		ctgr:"Game Design / Development Project",
		content:"A chaos-themed, top-down hack and slash developed in Unity for Brackey's Game Jam 2021.2.",
		tools:"Unity, C#",
		link:"hell-gene.html",
	},
]

gameData.forEach((data) => {
	const parent = document.querySelector("#games");
	appendContent(parent, data);
})

otherData.forEach((data) => {
	const parent = document.querySelector("#other");
	appendContent(parent, data);
})

function appendContent(parent, {img, title, ctgr, content, tools, link}){
	let div = document.createElement("a");
	div.href = link;
	div.className = "item-content";

	let descDiv = document.createElement("div");
	descDiv.className = "item-desc";

	let image = document.createElement("img");
	image.src = img;
	image.style.width = "30%";
	image.style.height = "20%";
	image.style.objectFit = "cover";

	let proj = document.createElement("h2");
	proj.innerText = title;

	let cat = document.createElement("h5");
	cat.innerText = ctgr;
	cat.style.fontStyle = "italic";
	cat.style.marginBottom = "1rem";

	let txt = document.createElement("p");
	txt.innerText = content;

	let tol = document.createElement("p");
	tol.innerText = "Tools Used: " + tools;
	tol.style.fontStyle = "italic";
	tol.style.marginBottom = "1rem";
	tol.style.marginTop = "1rem";
	/*
	<img src="img/image.png">
	<a href="page.html" class="item-content">
		<h1> Title </h1>
		<div> content </div>
	</div>
	*/
	div.appendChild(image);
	div.appendChild(descDiv);
	descDiv.appendChild(proj);
	descDiv.appendChild(cat);
	descDiv.appendChild(txt);
	descDiv.appendChild(tol);
	parent.appendChild(div);
}

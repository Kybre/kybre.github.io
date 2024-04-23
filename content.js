let otherData = [
	{
		img:"./img/Scrapbook/title.png",
		title:"Scrapbook",
		ctgr:"UI/UX Project",
		content:"A children's mental health journal created during Hack4Health 2021.",
		tools:"Figma",
		link:"scrapbook",
	},
	{
		img: "./img/KMSRT/kmsrt.png",
		title: "Kalmont Mountain Safety and Rescue Team Website",
		ctgr: "Web Design/Development Project",
		content: "A fictional website for the Kalmont Mountain Safety and Rescue Team Website containing local news and tips and tricks on winter outdoors safety.",
		tools:"HTML/CSS",
		link: "kmsrt"
	},
]

let gameData = [
//	{
//		img:"./img",
//		title:"Kart Klash",
//		ctgr:"Game Design/Development Project",
//		content:"[Page WIP]",
//		tools:"Unity, C#",
//		link:"",
//	},
//	{
//		img:"./img",
//		title:"Akimbo Corps",
//		ctgr:"Game Design/Development Project",
//		content:"[Page WIP]",
//		tools:"Unity, C#",
//		link:"",
//	},
//	{
//		img:"./img/GPPE/title.png",
//		title:"The Great Peking Peak Escape",
//		ctgr:"Game Design/Development Project",
//		content:"A platformer centered around a grappling hook, where players must climb the walls of a kitchen to escape their cruel fate of becoming someone else's dinner. [Page WIP]",
//		tools:"Unity, C#",
//		link:"",
//	},
	{
		img:"./img/ToA/cover.png", //image
		title:"Tower of Ash",
		ctgr:"Game Design/Development Project",
		content:"A roguelite metroidvania platformer developed in Unity for IAT 410 - Advanced Game Design.", //content
		tools:"Unity, C#",
		link:"tower-of-ash",
	},
	{
		img:"./img/Unfabled/cover.png",
		title:"Unfabled",
		ctgr:"Game Design/Development Project",
		content:"A fast-paced, spell-slinging action game developed in Unity for Ludum Dare 49. \n Rated Top 20% Overall in the Jam category.",
		tools:"Unity, C#",
		link:"unfabled",
	},
	{
		img:"./img/MonkeyMobius/title.png",
		title:"Monkey Mobius",
		ctgr:"Game Design/Development Project",
		content:"An infinite-themed puzzle game developed in Unity for the 2021 BC Game Jam. \n Winner of the Jam via the Participant's Choice award.",
		tools:"Unity, C#",
		link:"monkey-mobius",
	},
	{
		img:"./img/HellGene/title.png",
		title:"Hell Gene",
		ctgr:"Game Design/Development Project",
		content:"A chaos-themed, top-down hack and slash developed in Unity for Brackey's Game Jam 2021.2.",
		tools:"Unity, C#",
		link:"hell-gene",
	},
	{
		img: "./img/EiSC/title.png",
		title: "Emergency in Section C",
		ctgr: "Game Design/Development Project",
		content: "An emergency-themed platformer developed in Unity for the May 2021 Make-A-Level Game Jam.",
		tools:"Unity, C#",
		link: "emergency-in-section-c"
	},
	{
		img: "./img/Kingslayer/Kingslayer.png",
		title: "Kingslayer",
		ctgr: "Game Design/Development Project",
		content: "A high-action, platformer bullet hell game developed in Processing.",
		tools:"Processing",
		link: "kingslayer"
	},
]

gameData.forEach((data) => {
	const parent = document.querySelector("#game");
	appendContent(parent, data);
})

otherData.forEach((data) => {
	const parent = document.querySelector("#ux");
	appendContent(parent, data);
})

function appendContent(parent, {img, title, ctgr, content, tools, link}){
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

	let tol = document.createElement("div");
	tol.innerText = "Tools Used: " + tools;
	tol.style.fontStyle = "italic";
	tol.style.marginBottom = "1rem";
	tol.style.marginTop = "1rem";
	/*
	<img src="img/Kingslayer.png">
	<a href="page.html" class="item-desc">
		<h1> Title </h1>
		<div> content </div>
	</div>
	*/
	div.appendChild(image);
	div.appendChild(contentDiv);
	contentDiv.appendChild(proj);
	contentDiv.appendChild(cat);
	contentDiv.appendChild(txt);
	contentDiv.appendChild(tol);
	parent.appendChild(div);
}

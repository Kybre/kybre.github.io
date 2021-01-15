let data = [
	{
		img: "img/Kingslayer.png",
  	title: "Kingslayer",
    content: "A bullet hell game developed in Processing.",
		link: "kingslayer.html"
  },
  {
		img: "",
  	title: "totle2",
    content: "sdfsdfds",
		link: "2.html"
  },
	{
		img: "",
		title: "totle3",
		content: "sdfsdfds",
		link: "3.html"
	},
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

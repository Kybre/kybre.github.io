window.onload = adjustTitle;
window.onresize = adjustTitle;

function adjustTitle(){
  var clientHeight = document.getElementById('proj-header').offsetHeight;
  document.getElementById('proj-title').style.marginTop = "calc(" + clientHeight + "px - 5.5rem)";
  document.getElementById('proj-title').style.marginBottom = "0";
  document.getElementById('proj-cat').style.marginTop = "0.5rem";
  document.getElementById('proj-cat').style.marginBottom = "1.5rem";
}

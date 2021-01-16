window.onload = adjustTitle;
window.onresize = adjustTitle;

function adjustTitle(){
  var clientHeight = document.getElementById('proj-header').offsetHeight;
  document.getElementById('proj-title').style.marginTop = "calc(" + clientHeight + "px - 4rem)";
}

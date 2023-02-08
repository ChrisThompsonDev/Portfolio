
//////// MODALS ////////

// Get the modal
var aboutModal = document.getElementById("aboutModal");
var codeModal = document.getElementById("codeModal");
var workModal = document.getElementById("workModal");

var linksModal = document.getElementById("linksModal");

// Get the button that opens the modal
var aboutBtn = document.getElementById("asideHome");
var codeBtn = document.getElementById("asideCode");
var workBtn = document.getElementById("asideWork");

var linksBtn = document.getElementById("asideLinks");

// Get the <span> element that closes the modal
var aboutSpan = document.getElementsByClassName("aboutClose")[0];
var codeSpan = document.getElementsByClassName("codeClose")[0];
var workSpan = document.getElementsByClassName("workClose")[0];

var linksSpan = document.getElementsByClassName("linksClose")[0];

// When the user clicks on the button, open the modal
aboutBtn.onclick = function() {
    aboutModal.style.display = "block";
}
codeBtn.onclick = function() {
    codeModal.style.display = "block";
}
workBtn.onclick = function() {
    workModal.style.display = "block";
}

linksBtn.onclick = function() {
    linksModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
aboutSpan.onclick = function() {
    aboutModal.style.display = "none";
}
codeSpan.onclick = function() {
    codeModal.style.display = "none";
}
workSpan.onclick = function() {
    workModal.style.display = "none";
}

linksSpan.onclick = function() {
    linksModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == aboutModal) {
    aboutModal.style.display = "none";
  } else if (event.target == codeModal) {
    codeModal.style.display = "none";
  } else if (event.target == workModal) {
    workModal.style.display = "none";
  } else if (event.target == linksModal) {
    linksModal.style.display = "none";
  }
}
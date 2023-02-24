
$('#nav-btn').click(function () {
  console.log("drop down")
  $('#feature-drops').slideToggle()
  if ($("#img-down").css("transform") == "none") {
    $("#img-down").css("transform", "rotate(180deg)");
  } else {
    $("#img-down").css("transform", "");

  };
})
$('#nav-link').click(function () {
  console.log("drop down2")
  $('#dropdown-two').slideToggle()
  if ($("#img-drop").css("transform") == "none") {
    $("#img-drop").css("transform", "rotate(180deg)");
  } else {
    $("#img-drop").css("transform", "");

  }
});
const menuButton = document.getElementById("menu-btn");
const overlay = document.getElementById("menu-overlay");
const nav = document.getElementById("nav-section");
const closeIcon = document. getElementById("close-icon");
const menuIcon = document. getElementById("menu-icon");
menuButton.addEventListener("click", openNavbar);
function openNavbar(event) {
  event.preventDefault()
  if (overlay.style.display === "none"){
    overlay.style.display = "block";
    nav.style.display = "block";
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
    
  else {
    overlay.style.display = "none";
    nav.style.display = "none";
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  }
}
// menuButton.addEventListener("click", openSection);
// function openSection(event) {
//   event.preventDefault()

//   if (nav.style.display === "none")
//     nav.style.display = "block";
//   else {
//     nav.style.display = "none";
//   }
// }
 




// select input field form the dom 😀
// set up eventlistener for key up 😀
// after three keys
// if input. value > 3, then add classname to show div
// when three keys entered, show div

const lookingFor = document.querySelector(".header-search");
const suggestions = document.querySelector(".suggestions");

lookingFor.addEventListener("keyup", (e) => {
  // console.log()
  if (e.target.value.length > 2) {
    suggestions.className = "suggestions show";
  } else {
    suggestions.className = "suggestions hide";
  }
});

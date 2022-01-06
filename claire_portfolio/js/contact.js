document.body.children[0].addEventListener("click", event => {
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");

  if (event.target.dataset.menustate == "closed") {
    event.target.dataset.menustate = nav.dataset.state = header.dataset.menustate =
      "open";
  } else {
    event.target.dataset.menustate = nav.dataset.state = header.dataset.menustate =
      "closed";
  }
});


var timeOut;
document.getElementById("contact-link").addEventListener('mouseover', function () {
  document.getElementById("contact-link").className = "active text nodecoration flex horizontal";
  clearTimeout(timeOut);
  timeOut = setTimeout(function () {
    document.getElementById("contact-link").className = "text nodecoration flex horizontal";
  }, 4000);
})


$(window).on('load', function(){
  console.log(123);
  $(".overlay").delay(400).fadeOut();
});
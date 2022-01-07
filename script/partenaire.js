var slideIndex = 0;
slider();

function slider() {
  var i;
  var x = document.getElementsByClassName("sld");
  var y = document.getElementsByClassName("text");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].style.display = "block";
  setTimeout(slider, 10000); 
}


let sliderImages = document.querySelectorAll('.slider')
	arrowLeft = document.querySelector('.arrow_left')
	arrowRight = document.querySelector('.arrow_right')
	current = 0;

function reset(){
	for(let i = 0; i< sliderImages.length; i++){
		sliderImages[i].style.display = 'none';
	}
}
function startSlide(){
	reset();
	sliderImages[0].style.display = "block";

}

// Show prev
function slideLeft() {
  reset();
  if (current === 0) {
    current = sliderImages.length - 1;
    sliderImages[current].style.display = "block";
  }
  else {
    sliderImages[current - 1].style.display = "block";
    current--;
  }
}

// Show next
function slideRight() {
  reset();
  if (current === sliderImages.length - 1) {
    current = 0;
    sliderImages[current].style.display = "block";
  }  
  else {
    sliderImages[current + 1].style.display = "block";
    current++;
  }
}

// Left arrow click
arrowLeft.addEventListener("click", function() {

  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  
  slideRight();
});

startSlide();
// Set autoslide interval in ms
setInterval(slideRight, 30000,)

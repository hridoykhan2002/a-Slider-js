
const slideshow = document.querySelectorAll(".slideshow-content");

let countValue = 1;

setInterval(() => {
    countValue++;
    let presentslide = document.querySelector(".current");
    presentslide.classList.remove("current");
    if(countValue>slideshow.length){
        slideshow[0].classList.add("current");
        countValue = 1;
    }
    else{
        presentslide.nextElementSibling.classList.add("current")
    }

}, 3000);
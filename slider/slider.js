let slideIndex = 1;
showSlides(slideIndex);

let prev = document.querySelector('.slider-prev');
let next = document.querySelector('.slider-next');

next.addEventListener('click', () =>{
    showSlides(slideIndex += 1);
});

prev.addEventListener('click', () =>{
    showSlides(slideIndex -= 1);
});

let currentSlide=(n)=> {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slides = document.querySelectorAll('.slide');
    let dots = document.getElementsByClassName("slider-dots_item");

    if(n > slides.length){
        slideIndex = 1;
    }
    if( n < 1) {
        slideIndex = slides.length;
    }
    
    for(let slide of slides) {
        slide.style.display = 'block';
        slide.className = slide.className.replace(" activate", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = 'block' ;
    slides[slideIndex - 1].className += " activate";
    dots[slideIndex - 1].className += " active";
}

let timer = setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
},4000);

window.addEventListener('resize', function() {
    if (window.innerWidth < 321) { // для смартфонов
        let  showSlides=(n)=> {

            let slides = document.querySelectorAll('.slide');
            let dots = document.getElementsByClassName("slider-dots_item");
        
            if(n > slides.length){
                slideIndex = 1;
            }
            if( n < 1) {
                slideIndex = slides.length;
            }
            
            for(let slide of slides) {
                slide.style.display = 'none';
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = 'block' ;
            dots[slideIndex - 1].className += " active";
        }
        let timer = setInterval(function(){
        slideIndex++;
        showSlides(slideIndex);
    },4000);
    } 

    
});


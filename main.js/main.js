$('.testimonial__list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    variableWidth: true
});
$('.countries-list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    variableWidth: true
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

});
let btn = document.querySelector('.menu-btn__burger');
btn.onclick=function() {
    document.querySelector('.sitenav').classList.toggle('active')
    
    
}
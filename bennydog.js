//javascript file to call the owlcarousel

console.log('hello');

jQuery(function($){
  $(document).ready(function() {
setTimeout(function(){$(".owl-carousel").owlCarousel()},2000);
})
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    autoplay: true,
    autoplayHoverPause: true,
})

let menuBtn = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('#search-icon');
let closeBtn = document.querySelector('#close');
let searchbar = document.querySelector('#search-form');
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');



window.onscroll = () =>{
    navbar.classList.remove('active');

    section.forEach(sec =>{

      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop-150;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navlinks.forEach(links =>{
          links.classList.remove('active')
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        })
      }
    
    })

}











// menu showing and hiding 
menuBtn.addEventListener('click',() =>{

    navbar.classList.toggle('active');

})

// search showing and hiding 
searchBtn.addEventListener('click',() =>{

    searchbar.classList.toggle('active');
    navbar.classList.remove('active');
    
})
closeBtn.addEventListener('click',() =>{

    searchbar.classList.remove('active');
    
})






// home slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 512500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
  });



// review slider
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



function fadeOut(){
  setInterval(loader,3000)
}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

window.onload = fadeOut;
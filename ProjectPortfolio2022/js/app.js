//Nav Bar and Burger Aninmation
const navSlider= ()=> {
    const burger= document.querySelector(".burger");
    const nav= document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');
    
    burger.addEventListener("click", () => {
     
    //Toggle Nav
     nav.classList.toggle("nav-active");
    
     //Animate links
    navLinks.forEach((links,index) => {
        if (links.style.animation){
            links.style.animation=''
        }
        else {
        links.style.animation= `navLinksFade 0.5s ease forwards ${index/7+0.5}s`
        }
    });
    
    //Burger Aninmation
    burger.classList.toggle('xmove');
    });
    
    
    
    
    
    
    }
    navSlider();

//Sticky Nav Bar  
 window.onscroll = function() {navStay()};

var navbar = document.getElementById("navbar");


var sticky = navbar.offsetTop;


function navStay() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const navigationHeight = document.querySelector('.primary-navigation').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight -1 + "px");
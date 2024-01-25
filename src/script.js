const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .list, .speech-bubble, .wrapper, .project-card');
hiddenElements.forEach((e) => {
    observer.observe(e);
    e.classList.remove('show');
});

jQuery(function() {
    jQuery('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  
        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          jQuery('html,body').animate({
            scrollTop: target.offset().top -100
          }, 1000);
          return false;
        }
      }
    });
  });

// const nav = document.querySelector("nav")
// let lastSrollY = window.scrollY

// window.addEventListener("scroll", () =>{
//     if (lastSrollY < window.screenY){
//         console.log(1);
//     } 
//     else {
//         console.log(2);

//     }   
//     lastSrollY = window.scrollY;
// });
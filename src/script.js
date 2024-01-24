const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .list'); 
hiddenElements.forEach((e) => observer.observe(e)); 

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
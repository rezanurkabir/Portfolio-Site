// Typing Script Js

var typed = new Typed(".typing",{ strings: ["Web Desinger","Web Developer","Programmer","Blogger"],

typeSpeed: 80,
backSpeed: 80,

});

var typed = new Typed(".typing-2",{ strings: ["Mern Stack Web Developer","Blogger","Programmer"],

typeSpeed: 100,
backSpeed: 100,

});

// Faqs Part

const faqs = document.querySelectorAll('.faq');
 faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus' ;
        }
        else{
            icon.className = 'fa-solid fa-plus' ;
        }
    })
})
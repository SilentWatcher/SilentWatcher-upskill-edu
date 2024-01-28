//! CHANGE NAV BACKGROUND WHEN WE SCROLL
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window_scroll',window.scrollY>0)
})

//  FAQS OPNEN ONCLICK

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //plus icon change to minux
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus"; 
        } else {
            
            icon.className = "fa-solid fa-plus"; 
        }
    })
})

// show menu in mobile view 

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open_menu_btn");
const closeBtn = document.querySelector("#close_menu_btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';

})

//close nav

const closeNav = () => {
      menu.style.display = "none";
      closeBtn.style.display = "none";
      menuBtn.style.display = "inline-block";  
}

closeBtn.addEventListener('click',closeNav)

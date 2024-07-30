let hamburgerIcon=$.querySelector(".hamburger-icon");
let menuItemIcon=$.querySelector(".menu-item-icon");
let hamburgerMenuContainer=$.querySelector(".hamburger-menu-container");
let filterBtnOpenContent=$.querySelectorAll(".filter-btn-open-content");
hamburgerIcon.addEventListener("click",()=>{
    hamburgerMenuContainer.style.left="10px"
})
menuItemIcon.addEventListener("click",()=>{
    hamburgerMenuContainer.style.left="-5000px"
})

filterBtnOpenContent.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        btn.classList.toggle("filter-btn-open-content")
        if(btn.className.includes("filter-btn-open-content")){
            btn.nextElementSibling.style.display="none"
            btn.lastElementChild.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
          </svg>`
        }else{
            btn.nextElementSibling.style.display="flex"
          btn.lastElementChild.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
          </svg>`
        }
    })
})
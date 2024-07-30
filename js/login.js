let loginForm=$.querySelectorAll(".login-form")
let loginBtn=$.querySelectorAll(".login-btn")
let loginSwitchTitle=$.querySelectorAll(".login-switch-title")
let userNameInput=$.querySelector(".username-input")
let emailInput=$.querySelectorAll(".email-input")
let signUpemailInput=$.querySelector(".signup-form .email-input")
let signInemailInput=$.querySelector(".signin-form .email-input")
let signUpPasswordInput=$.querySelector(".signup-form .password-input")
let signInPasswordInput=$.querySelector(".signin-form .password-input")
let passwordInput=$.querySelectorAll(".password-input")
let signupBtn=$.querySelector(".signup-btn")
let signinBtn=$.querySelector(".signin-btn")
let signUpAllInput=$.querySelectorAll(".signup-form input")
let signInAllInput=$.querySelectorAll(".signin-form input")
let loginAllInput=$.querySelectorAll(".login-form input")
let signUpinvalidLoginError=$.querySelectorAll(".signup-form .invalid-login-error")
let signIninvalidLoginError=$.querySelectorAll(".signin-form .invalid-login-error")
let passwordEye=$.querySelectorAll(".password-eye")
let faLetterArray=['ا','ب','پ','ت','ث','ج','چ','ح','خ','د','ذ','ر','ز','ژ','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ک','گ','ل','م','ن','و','ه','ی','آ','ۀ','ة','ي','ؤ','إ','أ','ء']
let isInputFill=null
let hasFaLetter=null
let hasError=null


loginForm.forEach((form)=>{
    form.addEventListener("click",(e)=>{
        
        form.lastElementChild.classList.remove("notActive-btn") 
        form.classList.remove("notActive-form")
        if(form.nextElementSibling){
         form.nextElementSibling.classList.add("notActive-form")
         form.nextElementSibling.lastElementChild.classList.add("notActive-btn")
         $.querySelectorAll(".notActive-form input").forEach((input)=>{
            if (input.type=="checkbox") {
                input.checked=false
            }else{
                input.parentElement.style.border="1px solid hsla(0, 0%, 100%, 0.15)"
                input.value=""
            }
            })
         $.querySelectorAll(".notActive-form .invalid-login-error").forEach((error)=>{
            error.style.display="none"
            })
         
            
        }else{
            form.previousElementSibling.classList.add("notActive-form")
            form.previousElementSibling.lastElementChild.classList.add("notActive-btn")
            $.querySelectorAll(".notActive-form input").forEach((input)=>{
                if (input.type=="checkbox") {
                    input.checked=false
                }else{
                    input.parentElement.style.border="1px solid hsla(0, 0%, 100%, 0.15)"
                    input.value=""
                }         
            })
            $.querySelectorAll(".notActive-form .invalid-login-error").forEach((error)=>{
                error.style.display="none"
            })
            
        }

    },{capture:true})

})

loginSwitchTitle.forEach((switchBtn)=>{
    switchBtn.addEventListener("click",()=>{
        for(let formElement of switchBtn.parentElement.parentElement.parentElement.children){
            formElement.classList.toggle("notActive-form")
        }
        loginBtn.forEach((btnElement)=>{
            btnElement.classList.toggle("notActive-btn")
        })
    })

})

userNameInput.addEventListener("blur",(e)=>{
    if(e.target.value.length<6){
        e.target.parentElement.nextElementSibling.style.display="unset"
        e.target.parentElement.style.border="1px solid #ee2112"
    }else{
        e.target.parentElement.nextElementSibling.style.display="none"
        e.target.parentElement.style.border="1px solid hsla(0, 0%, 100%, 0.15)"
    }
})

emailInput.forEach((eInput)=>{
    eInput.addEventListener("blur",(e)=>{
        if(!e.target.value.includes("@") || !e.target.value.includes(".")){
            e.target.parentElement.nextElementSibling.style.display="unset"
                    e.target.parentElement.style.border="1px solid #ee2112"
        }else{
            e.target.parentElement.nextElementSibling.style.display="none"
                    e.target.parentElement.style.border="1px solid hsla(0, 0%, 100%, 0.15)"
        }   
     })
})
passwordInput.forEach((pInput)=>{
    pInput.addEventListener("blur",(e)=>{
        if(e.target.value.length<8){
            e.target.parentElement.nextElementSibling.style.display="unset"
                    e.target.parentElement.style.border="1px solid #ee2112"

        }else{
            e.target.parentElement.nextElementSibling.style.display="none"
                    e.target.parentElement.style.border="1px solid hsla(0, 0%, 100%, 0.15)"

        }
    })
})

signupBtn.addEventListener("click",(e)=>{
    checkLoginInput(e.target,signUpAllInput,signUpinvalidLoginError,signUpemailInput,signInemailInput,loginAllInput)
    
})
signinBtn.addEventListener("click",(e)=>{
    checkLoginInput(e.target,signInAllInput,signIninvalidLoginError,signUpemailInput,signInemailInput,loginAllInput)
})
passwordEye.forEach((eye)=>{
    eye.addEventListener("click",()=>{
        if(eye.className.includes("hidden-password")){
            eye.innerHTML=`<?xml version="1.0" ?><svg fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.25909 11.6021C3.94254 8.32689 6.79437 6 10 6C13.2057 6 16.0574 8.32688 16.7409 11.6021C16.7974 11.8725 17.0622 12.0459 17.3325 11.9895C17.6029 11.933 17.7763 11.6682 17.7199 11.3979C16.9425 7.67312 13.6934 5 10 5C6.3066 5 3.05742 7.67311 2.28017 11.3979C2.22377 11.6682 2.39718 11.933 2.6675 11.9895C2.93782 12.0459 3.20268 11.8725 3.25909 11.6021Z" fill="#fff"/><path d="M9.98953 8C11.9225 8 13.4895 9.567 13.4895 11.5C13.4895 13.433 11.9225 15 9.98953 15C8.05653 15 6.48953 13.433 6.48953 11.5C6.48953 9.567 8.05653 8 9.98953 8Z" fill="#fff"/></svg>`
            eye.previousElementSibling.type="text"
        }else{
            eye.innerHTML=`<?xml version="1.0" ?><svg fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L5.64526 6.35237C3.97039 7.49178 2.72334 9.27383 2.28011 11.3979C2.22371 11.6682 2.39712 11.9331 2.66744 11.9895C2.93776 12.0459 3.20262 11.8725 3.25903 11.6021C3.66284 9.66698 4.82362 8.06289 6.3671 7.07421L7.94894 8.65604C7.06509 9.29133 6.48947 10.3284 6.48947 11.5C6.48947 13.433 8.05647 15 9.98947 15C11.161 15 12.1981 14.4244 12.8334 13.5405L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L2.85355 2.14645Z" fill="#fff"/><path d="M10.1238 8.00253L13.4869 11.3657C13.418 9.5395 11.95 8.07143 10.1238 8.00253Z" fill="#fff"/><path d="M7.53104 5.4098L8.3341 6.21286C8.87141 6.07353 9.43009 6 9.99995 6C13.2056 6 16.0574 8.32688 16.7409 11.6021C16.7973 11.8725 17.0622 12.0459 17.3325 11.9895C17.6028 11.933 17.7762 11.6682 17.7198 11.3979C16.9425 7.67312 13.6934 5 9.99995 5C9.14478 5 8.31342 5.14331 7.53104 5.4098Z" fill="#fff"/></svg>`
            eye.previousElementSibling.type="password"

        }
        eye.classList.toggle("hidden-password")
    })
})

loginAllInput.forEach(input=>{
    if(!(input.type=="checkbox")){
        input.addEventListener("keydown",(e)=>{
            if(e.keyCode==32){
                e.preventDefault()
            }
        })
    }
})



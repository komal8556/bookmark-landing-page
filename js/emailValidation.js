const emailInputContainer = document.querySelector(".error-input-container")
const emailInput = document.getElementById("email-input")
const emailBtn = document.getElementById("email-btn")

function validateEmail(){
    const errorInputContainer = document.querySelector(".error-input-container")
    const errorSpan = document.getElementById("error-span")

    // console.log(errorSpan);
    let emailInputText = emailInput.value

    emailInputText = "";
    errorSpan.textContent = "";
    
    
    if(emailInputText.length === 0){
        errorInputContainer.classList.add("input-error")
        errorSpan.textContent = "Email is required"
    }
    else if(!emailInputText.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){

        errorInputContainer.classList.add("input-error")
        errorSpan.textContent = "Woops, makes sure it's an email"

    }
    else{
        errorInputContainer.classList.remove("input-error")
    }


}

emailBtn.addEventListener("click", validateEmail)


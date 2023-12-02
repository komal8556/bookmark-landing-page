const emailInputContainer = document.querySelector(".error-input-container")
const emailInput = document.getElementById("email-input")
const contactButton = document.getElementById("contact-btn")

function validateEmail(){
    const errorInputContainer = document.querySelector(".error-input-container")
    const errorSpan = document.getElementById("error-span")

    const emailInputText = emailInput.value

    errorSpan.textContent = "";
    
    if(emailInputText.length == 0){
        errorInputContainer.classList.add("input-error")
        errorSpan.textContent = "Woops, Email input is empty"
    }
    else if(!emailInputText.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        errorInputContainer.classList.add("input-error")
        errorSpan.textContent = "Woops, makes sure it's an email"
    }
    else{
        errorInputContainer.classList.remove("input-error")
    }
    console.log(emailInputText);
}

contactButton.addEventListener("click", validateEmail)


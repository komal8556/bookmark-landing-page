const questionsContainer = document.querySelectorAll(".question-content")

questionsContainer.forEach((questionContent) => {
    const arrowBtn = questionContent.querySelector(".arrow-btn")

    arrowBtn.addEventListener("click", () => {

        questionsContainer.forEach((item) => {
            if(item !== questionContent){
                item.classList.remove("show-answer")
            }
        })
       
        questionContent.classList.toggle("show-answer")
    })


})

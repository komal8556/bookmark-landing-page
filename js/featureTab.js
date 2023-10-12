const featureTabButton = document.querySelectorAll(".feature-tab-btn")
const featureTabContent = document.querySelectorAll(".feature-tab-content")


featureTabButton.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        featureTabContent.forEach((tabContent) => {
            tabContent.classList.remove("active")
        })
        featureTabButton.forEach((tabButton) => {
            tabButton.classList.remove("active")
        })
        featureTabContent[index].classList.add("active")
        featureTabButton[index].classList.add("active")
    })
})
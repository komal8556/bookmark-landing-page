const openNavBtn = document.getElementById("toggle-btn");
const closeNavIcon = document.getElementById("toggle-btn-close")
const mobileNavigation = document.querySelector(".navigation-mobile")


const openMobileNavigation = () => (mobileNavigation.classList.remove("hidden"))
const closeMobileNavigation = () => (mobileNavigation.classList.add("hidden"))


openNavBtn.addEventListener("click", openMobileNavigation)
closeNavIcon.addEventListener("click", closeMobileNavigation)



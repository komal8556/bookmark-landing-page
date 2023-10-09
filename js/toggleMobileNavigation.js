const openNavBtn = document.getElementById("toggle-btn");
const closeNavIcon = document.getElementById("toggle-btn-close")
const mobileNavigation = document.querySelector(".navigation-mobile")

// console.log(mobileNavigation);

let openMobileNavigation = () => (mobileNavigation.classList.remove("hidden"))
let closeMobileNavigation = () => (mobileNavigation.classList.add("hidden"))


openNavBtn.addEventListener("click", openMobileNavigation)
closeNavIcon.addEventListener("click", closeMobileNavigation)



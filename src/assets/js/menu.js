const headerToggle = document.getElementById("headerToggle");
const headerNav = document.querySelector(".header__nav");

if(headerToggle){
    headerToggle.addEventListener("click", () => {
        headerNav.classList.toggle("show");
        headerToggle.getAttribute("aria-expanded")==="true" ? headerToggle.setAttribute("aria-expanded","flase")
        : headerToggle.setAttribute("aria-expanded", "true");
    })
}
export function menu() {
    console.log(menu)
}
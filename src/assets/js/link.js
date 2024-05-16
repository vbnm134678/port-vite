export function link() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e){
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                targetElement.scrollIntoView({behavior:"smooth"});
            }
        })
    })
    console.log(link)
}
// 바로 href태그로 이동하는 것을 막고 
// 직접 href속성 값을 가져와 위치를 smooth를 통해 이동시키는 함수
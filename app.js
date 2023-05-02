window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector("header");
        const scrollTop = document.querySelector(".scrollTop")

        header.classList.toggle('sticy', window.scrollY > 0)
        scrollTop.classList.toggle('active', window.scrollY > 400)
    })

    const scrollTop = document.querySelector(".scrollTop")
    const menuBtn = document.querySelector(".menu-btn")
    const navigatiotn = document.querySelector(".nav")

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active")
        navigatiotn.classList.toggle("active")
    })
    scrollTop.addEventListener("click", () => {
        document.documentElement.scrollTop=0
    })
})
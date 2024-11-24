const iconos = document.querySelector(".nav__navegacion__iconos")
iconos.addEventListener("click", e =>{
    iconos.classList.toggle("nav__navegacion__active")
    document.body.classList.toggle("active")
})
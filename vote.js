const container=document.querySelector(".container")
const popup_container=document.querySelector(".popup-container")
const layer=document.querySelector(".layer")

const icon=document.querySelector(".icon")
const close_icon=document.querySelector(".close-icon")

icon.addEventListener("click",()=>{
     container.classList.add("active")
     popup_container.classList.remove("active")
})

close_icon.addEventListener("click",()=>{
    container.classList.remove("active")
    popup_container.classList.add("active")
    
})

layer.addEventListener("click",()=>{
    layer.style.backgroundColor="red" 
})
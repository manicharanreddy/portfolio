let mybox=document.querySelector(".box");
let rightNav=document.querySelector('.navRight')
let menubars=document.querySelectorAll('.box span')
mybox.addEventListener("click",()=>{
    rightNav.classList.toggle('open');
    menubars[0].classList.toggle('bend')
    menubars[1].classList.toggle('active')
    menubars[2].classList.toggle('bendleft')

})
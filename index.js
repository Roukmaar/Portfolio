const button=document.querySelector('.clickable-button');
let toggle=false;
function menuOpenerFunction(){
    const menuContainer=document.querySelector('.menu-content-container');
if(toggle===true){
    //close
    menuContainer.style.display='none'
    toggle=false
}
else{
    ///open
    menuContainer.style.display='initial'
    toggle=true
}
}


button.addEventListener('click',menuOpenerFunction)

function changeBackground(banner){
    document.getElementById("banner").style.backgroundImage="url(/images/rickroll.jpg)";
}

document.getElementById("easteregg").onclick = function(){
    changeBackground();
}


const keyBoard = document.querySelector('.keyboard')

// keyBoard.addEventListener('keydown', e => {
//     console.log(e)
//     if(e.keyCode === 49 && e.keyCode === 51 && e.keyCode === 51 && e.keyCode === 55){
//         alert('HEJ')
//     }
// })
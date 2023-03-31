function changeBackground(banner){
    document.getElementById("banner").style.backgroundImage="url(/images/rickroll.jpg)";
}

document.getElementById("easteregg").onclick = function(){
    changeBackground();
}


// const keyBoard = document.querySelector('.keyboard')
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
document.addEventListener("keydown", e => {
    if(e.key === "1" && num1 === 0){
        num1 = 1;
    }
    else if(e.key === "3"&& num1 === 1 && num2 === 0){
        num2 = 1;
    }
    else if(e.key === "3" && num2 === 1 && num3 === 0){
        num3 = 1;
    }
    else if(e.key === "7" && num3 === 1){
        num4 = 1;
        alert("You found the last hidden easter egg!");
    }
    else if (e.key === "1" && num === 1){
        num2 = 0;
        num3 = 0;
        num4 = 0;
    }
    else{
        num1 = 0;
        num2 = 0;
        num3 = 0;
        num4 = 0;
    }
})


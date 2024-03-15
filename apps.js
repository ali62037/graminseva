let hide = document.querySelector("showFlashCard");
let show = document.querySelector("flashCard");
let click = true;

hide.addEventListener("click", function(){
    let showd = showed();
    show.display = showd;
});

function showed (){
    show.style.display = "none";
    click = true;
};
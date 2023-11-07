//event binding - bind events with function
//add load event on window
// it means that when window will be loaded then it will call initEvent function

window.addEventListener("load", initEvents);//callback of function

function initEvents() {
    fnum = document.querySelector("#box-1").value;
    snum = document.querySelector("#box-2").value; //removing var makes it a global variable but its not a good practice.
    document.querySelector("#add").addEventListener("click", add);
    document.querySelector("#sub").addEventListener("click", subtract);
    document.querySelector("#mul").addEventListener("click", multiply);
    document.querySelector("#div").addEventListener("click",divide);
}

function add(){
    //console.log("Button clicked... ");
    // var fnum = parseInt(document.querySelector("#box-1").value);
    // var snum = parseInt(document.querySelector("#box-2").value);
    var result = parseInt(fnum) + parseInt(snum); 
    document.querySelector("#box-3").value = result;
}
function subtract(){
    //console.log("Button clicked... ");
    // var fnum = parseInt(document.querySelector("#box-1").value);
    // var snum = parseInt(document.querySelector("#box-2").value);
    var result =  parseInt(fnum) - parseInt(snum);
    document.querySelector("#box-3").value = result;
}

function multiply(){
    //console.log("Button clicked... ");
    var fnum = parseInt(document.querySelector("#box-1").value);
    var snum = parseInt(document.querySelector("#box-2").value);
    var result = parseInt(fnum) * parseInt(snum);
    document.querySelector("#box-3").value = result;
}

function divide(){
    //console.log("Button clicked... ");
    var fnum = parseInt(document.querySelector("#box-1").value);
    var snum = parseInt(document.querySelector("#box-2").value);
    var result = parseInt(fnum) / parseInt(snum);
    document.querySelector("#box-3").value = result;
}

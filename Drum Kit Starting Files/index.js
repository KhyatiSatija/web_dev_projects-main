// document.querySelector("button.w").addEventListener("click", function () {
//     alert("I got clicked");
// });
// document.querySelector("button.a").addEventListener("click", function () {
//     alert("I got clicked");
// });
// document.querySelector("button.s").addEventListener("click", function () {
//     alert("I got clicked");
// });
// document.querySelector("button.d").addEventListener("click", function () {
//     alert("I got clicked");
// });
// document.querySelector("button.j").addEventListener("click", function () {
//     alert("I got clicked");
// });
// document.querySelector("button.k").addEventListener("click", function () {
//     alert("I got clicked");
// });
// document.querySelector("button.l").addEventListener("click", function () {
//     alert("I got clicked");
// });
//you're litereally breaking the DRY principle [Don't repeat yourself]

// for(var i = 0; i < 7; i ++){
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         alert("i got clicked bitches!");
//     });
// }

//you're literally using a hardcoded value of 7 which is not scalable. 

// var buttons = document.querySelectorAll("button.drum").length;
// for(var i = 0; i < buttons; i ++){
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         alert("i got clicked bitches!");
//     });
// }

//you're literally calculating document.querySelector("button") all the time inside the loop. instead just do it once outside the loop.

var buttons = document.querySelectorAll("button.drum")

var countOfButtons = document.querySelectorAll("button.drum").length;

for(var i = 0; i < countOfButtons; i ++){
    buttons[i].addEventListener("click", function() {
        // console.log(this);
        var letter = this.textContent;
        console.log(letter);
        switch (letter) {
            case "w":
                var sound = new Audio("./sounds/crash.mp3");
                break;
            case "a" :
                var sound = new Audio("./sounds/kick-bass.mp3");
                break;
            case "s":
                var sound = new Audio("./sounds/snare.mp3");
                break;
            case "d":
                var sound = new Audio("./sounds/tom-1.mp3");
                break;
            case "j" :
                var sound = new Audio("./sounds/tom-2.mp3");
                break;
            case "k":
                var sound = new Audio("./sounds/tom-3.mp3");
                break;
            case "l":
                var sound = new Audio("./sounds/tom-4.mp3");
                break;
            default:
                break;
        }
        sound.play();

        // var sound = new Audio("./sounds/tom-" + (i + 1) + ".mp3");
        // alert("i got clicked bitches!");
        // sound.play();

    });
}


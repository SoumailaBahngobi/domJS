document.querySelector("h1").style.background = "yellow";
const questionContainer = document.querySelector(".click-event");
// questionContainer.style.borderRadius = "150px";
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p")


questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle("question-clicked");
});
btn1.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.backgroundColor = "red";
});
btn2.addEventListener('click', () => {

    response.classList.add('show-response');
    response.style.backgroundColor = "green";
});
//
const mousemove = document.querySelector('.mousemove');
window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});
questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0, 0, 0.6)"
});
questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "teal";
});

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
});

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play()
}

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if (e.key == "j") {
        keypressContainer.style.background = "pink";
    } else if (e.key == "h") {
        keypressContainer.style.background = "teal ";
    }
    else {
        keypressContainer.style.background = "red";
    }
    if (e.key === "z")
        ring(e.key);
});

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.screenY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

const inputName = document.querySelector('input[type="text"]');
inputName.addEventListener('input', () => {

});
// je suis a 2h 7min 11s





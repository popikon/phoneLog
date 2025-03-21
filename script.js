let infos;
let clicked;
window.addEventListener("load", () => { // Initializing the lomda
    console.log("dsd");
    infos = document.querySelectorAll('.info-div');
    for (let i=1; i<=9; i++) {
        document.getElementById(`call${i}`).addEventListener("click", openInfo);
    };
    clicked = 0;
});

const openInfo = (event) => {
    console.log(event.target);
    for (let i=1; i<=9; i++) {
        document.getElementById(`info${i}`).style.height = "0vh";
    };
    if (clicked === event.target.id.slice(-1)) {
        clicked = event.target.id.slice(-1);
        document.getElementById(`info${clicked}`).style.height = "0vh";
    } else {
        clicked = event.target.id.slice(-1);
        document.getElementById(`info${clicked}`).style.height = "12vh";
    }
    clicked = event.target.id.slice(-1);
}
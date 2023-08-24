document.body.style.transition = "box-shadow 0.2s";

function updateBorder() {
    // const minWidth = 1090;
    const minWidth = 1365;
    const currentWidth = window.innerWidth;

    if (currentWidth < minWidth) {
        document.body.style.boxShadow = "inset 0 0 10px 10px red";
    } else {
        document.body.style.boxShadow = "inset 0 0 10px 10px transparent";
    }
}
updateBorder();

window.addEventListener("resize", updateBorder);

document.getElementById("change-theme").addEventListener("click", () => {
    console.log("yes");
});

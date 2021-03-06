// When the user scrolls the page, execute myFunction
window.onscroll = () => initProgressBar();

function initProgressBar() {
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    let height = scrollHeight - clientHeight;
    let scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width = scrolled + "%";
}

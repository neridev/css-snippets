let scroollTopButton = document.getElementById("arrowUp");

// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = () => initShowArrow();

// After click on button, than scroll to top of the document
scroollTopButton.addEventListener('click', () => {
    initScrollTop();
});

function initShowArrow() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scroollTopButton.style.display = "block";
    } else {
        scroollTopButton.style.display = "none";
    }
}

function initScrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

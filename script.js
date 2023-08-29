let startX;
let currentBlockIndex = 0;
const blocks = document.querySelectorAll('.block');
const container = document.querySelector('.container');

document.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

document.addEventListener('touchend', (event) => {
    let endX = event.changedTouches[0].clientX;
    let deltaX = startX - endX;

    // Swipe right (show next block)
    if (deltaX > 50 && currentBlockIndex < blocks.length - 1) {
        currentBlockIndex++;
    }
    // Swipe left (show previous block)
    else if (deltaX < -50 && currentBlockIndex > 0) {
        currentBlockIndex--;
    }

    // Scroll to the relevant block
    container.scrollLeft = window.innerWidth * currentBlockIndex;
});
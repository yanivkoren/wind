let start = null;
const container = document.getElementById('tableContainer');

container.addEventListener('touchstart', (e) => {
    start = e.touches[0].pageX;
}, false);

container.addEventListener('touchmove', (e) => {
    if (!start) return;

    let end = e.touches[0].pageX;
    let distance = start - end;

    if (Math.abs(distance) > 50) {
        container.scrollBy({ left: distance > 0 ? window.innerWidth : -window.innerWidth, behavior: 'smooth' });
        start = null;
    }
}, false);

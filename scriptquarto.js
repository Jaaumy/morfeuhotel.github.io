function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

const carousel = document.getElementById('carousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');

let counter = 0;
const interval = 3000; // Intervalo de tempo para trocar os slides (em milissegundos)

setInterval(() => {
    counter++;
    if (counter >= carouselItems.length) {
        counter = 0;
    }
    carousel.style.transform = `translateX(${-counter * 100}%)`;
}, interval);

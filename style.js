const gallery = document.getElementById('gallery');
const pager = document.getElementById('pager');
let totalImages = gallery.children.length;
let imagesPerPage = window.innerWidth > 450 ? 1 : 1; 
let totalPages = Math.ceil(totalImages / imagesPerPage);
let currentPage = 1;
let currentTranslate = 0;

function updatePager() {
    pager.innerHTML = ''; 
    for (let i = 1; i <= totalPages; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        span.addEventListener('click', () => goToPage(i)); 
        span.classList.toggle('current', i === currentPage); 
        pager.appendChild(span);
    }
}

function goToPage(page) {
    page = Math.max(1, Math.min(page, totalPages)); 
    currentPage = page;
    currentTranslate = -(page - 1) * 100; 
    gallery.style.transform = `translateX(${currentTranslate}%)`; 
    updatePager();
}

function moveSlider(direction) {
    goToPage(currentPage + direction);
}

window.addEventListener('resize', () => {
    imagesPerPage = window.innerWidth > 450 ? 1 : 1;
    totalPages = Math.ceil(totalImages / imagesPerPage);
    goToPage(currentPage);
});

updatePager();
goToPage(currentPage);

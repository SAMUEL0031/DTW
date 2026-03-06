document.addEventListener('DOMContentLoaded', () => {
    // --- 1. LOGIKA SIDEBAR ---
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');

    if (toggleBtn && sidebar && mainContent) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
            toggleBtn.style.left = sidebar.classList.contains('collapsed') ? '20px' : '220px';
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 80 && !sidebar.classList.contains('collapsed')) {
                sidebar.classList.add('collapsed');
                mainContent.classList.add('expanded');
                toggleBtn.style.left = '20px';
            }
        }, { passive: true });
    }

    // --- 2. LOGIKA SWIPER PROJECT ---
    var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});

// --- 3. FUNGSI DRAWER SKILL (Pastikan ID di HTML Sesuai) ---
function openSheet(title, imgSrc, desc) {
    // Update konten drawer
    document.getElementById('sheet-title').innerText = title;
    document.getElementById('sheet-logo').src = imgSrc;
    document.getElementById('sheet-desc').innerText = desc;

    // Tampilkan overlay dan drawer
    document.getElementById('skill-overlay').style.display = 'block';
    setTimeout(() => {
        document.getElementById('skill-sheet').classList.add('active');
    }, 10);
}

function closeSheet() {
    const sheet = document.getElementById('skill-sheet');
    const overlay = document.getElementById('skill-overlay');
    if(sheet) sheet.classList.remove('active');
    setTimeout(() => {
        if(overlay) overlay.style.display = 'none';
    }, 400);
}

// --- 4. FUNGSI REVIEW PROJECT (ZOOM) ---
function openViewer(imgSrc) {
    const viewer = document.getElementById('image-viewer');
    const fullImg = document.getElementById('full-image');
    
    if(fullImg && viewer) {
        fullImg.src = imgSrc;
        viewer.style.display = 'flex';
    }
}

function closeViewer() {
    const viewer = document.getElementById('image-viewer');
    if(viewer) viewer.style.display = 'none';
}

// --- 5. LOGIKA TUTUP (Event Listener Global yang Aman) ---
window.addEventListener('click', function(event) {
    const viewer = document.getElementById('image-viewer');
    const overlay = document.getElementById('skill-overlay');

    // Jika klik area hitam viewer project, tutup viewer
    if (event.target === viewer) {
        closeViewer();
    }
    // Jika klik area hitam overlay skill, tutup drawer
    if (event.target === overlay) {
        closeSheet();
    }
});
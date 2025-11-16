// Sample data: 10 UMKM makanan (masing-masing punya 4 gambar)
const umkmData = [
    {
        id: 1,
        name: "Ayam Geprek Batara",
        category: "Makanan",
        images: [
            "assets/ayamgeprek/fil.jpg",
            "assets/ayamgeprek/ayam.jpg",
            "assets/ayamgeprek/nasi.jpg",
            "assets/ayamgeprek/pucuk.jpg"
        ],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 4.6,
        description: "Ayam Geprek yang terkenal dengan pedasnya yang bikin nagih dan juga rasanya yang bikin pengen balik lagi.",
        address: "Jl. Raya Pulo Gebang",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.490829019393!2d106.9559256!3d-6.1987898999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b7965a1cb11%3A0x73d0a57763337b03!2sAyam%20geprek%20Batara%20(Betawi%20Madura)!5e0!3m2!1sid!2sid!4v1761977383033!5m2!1sid!2sid"
    },
    {
        id: 2,
        name: "Martabak Yanto",
        category: "Makanan",
        images: ["assets/MartabakYanto/profil.jpg","assets/MartabakYanto/cokelat.jpg","assets/MartabakYanto/susu.jpg","assets/MartabakYanto/telur.jpg"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 4.9,
        description: "Martabak yang udah siap buat dimakan tengah malem dengan martabak manisnya dan juga asinnya.",
        address: "Jl. Raya Pulo Gebang No.8",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.510147673024!2d106.95613279999999!3d-6.196220099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b7449853195%3A0xaaa4b4e1e8bb4fef!2sMartabak%20Yanto!5e0!3m2!1sid!2sid!4v1761977197415!5m2!1sid!2sid" 
    },
    {
        id: 3,
        name: "Kebab Bang Aji",
        category: "Makanan",
        images: ["assets/KebabAji/profil.jpg","assets/KebabAji/kebab.jpg","assets/KebabAji/burger.jpg","assets/KebabAji/keju.jpg"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 4.8,
        description: "Kebab bang Aji yang bisa bikin mulut kamu terus-terusan ngelahap kebabnya.",
        address: "JI. Raya Pulo Gebang No. 23-24 ",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4849276392792!2d106.9561416!3d-6.199574699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bdf9f2ddd01%3A0x4c3093772936bf09!2sKebab%20Bang%20Aji%20-%20Arabian%20Kebab!5e0!3m2!1sid!2sid!4v1761977481551!5m2!1sid!2sid"
    },
    {
        id: 4,
        name: "Sate Padang Minang Maimbau",
        category: "Makanan",
        images: ["assets/Satepadang/profil.jpg","assets/Satepadang/sate.jpg","assets/Satepadang/kerupuk.jpg","assets/Satepadang/keripik.jpg"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 4.7,
        description: "Sate padang nikmat yang punya cita rasa asli minang yang bikin lidahmu serasa jadi orang padang.",
        address: "Jl. Pulau Jawa Jl. Raya Pulo Gebang",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5041299614895!2d106.9539577!3d-6.197020699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b740f3563e7%3A0x8d0738b447dea256!2sSate%20Padang%20Minang%20Maimbau!5e0!3m2!1sid!2sid!4v1761977566504!5m2!1sid!2sid"
    },
    {
        id: 5,
        name: "Lazatto",
        category: "Makanan",
        images: ["assets/Lazatto/PROFIL.JPG","assets/Lazatto/paha.jpg","assets/Lazatto/atas.jpg","assets/Lazatto/sayap.jpg"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 4.8,
        description: "restoran cepat saji yang bergerak di bidang kuliner, terutama menyajikan menu ayam goreng, dan menu lainnya ",
        address: "Jl. Raya Pulo Gebang No.10A",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.495655295762!2d106.95525769999999!3d-6.198148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698be3e0407677%3A0xc798eec808481007!2sLazatto%20Pulo%20Gebang!5e0!3m2!1sid!2sid!4v1761977648985!5m2!1sid!2sid" 
    },
    {
        id: 6,
        name: "Mie ayam & bakso H. Sunar",
        category: "Makanan",
        images: ["assets/MieAyam/PROFIL.JPG","assets/MieAyam/mie.jpg","assets/MieAyam/urat.jpg","assets/MieAyam/jumbo.webp"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 4.7,
        description: "Nikmati perpaduan sempurna antara mie ayam gurih dengan bakso daging sapi asli yang kenyal dan lezat!",
        address: "JI. Raya Pulo Gebang No. 24",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4329847860195!2d106.95497040000001!3d-6.206478100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b796abc5dd1%3A0xd2bc3a0090cdf91e!2sMie%20Ayam%20%26%20Bakso%20H.%20Sunar!5e0!3m2!1sid!2sid!4v1761978373050!5m2!1sid!2sid"
    },
    {
        id: 7,
        name: "Aneka Juice Punya Rasa",
        category: "Minuman",
        images: ["assets/juice/profil.jpg","assets/juice/buah.jpg","assets/juice/sirsak.jpg","assets/juice/mangga.jpg"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 5.0,
        description: "Segarnya buah asli dalam setiap tegukan! 🥭🍓 Dari sirsak yang menyegarkan hingga mangga yang creamy, semua dibuat dari buah pilihan tanpa pemanis buatan. Rasakan kesegarannya, nikmati vitaminnya!",
        address: "Jl. Raya Pulo Gebang No.43",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.677490084989!2d106.94893797499367!3d-6.174997693806333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c1440c1c607%3A0x2f9bb5529c986fb!2sJl.%20Raya%20Pulo%20Gebang%20No.43%2C%20RT.1%2FRW.4%2C%20Pulo%20Gebang%2C%20Kec.%20Cakung%2C%20Jakarta%20Timur!5e0!3m2!1sid!2sid!4v1698760844149!5m2!1sid!2sid"
    },
    {
        id: 8,
        name: "Soto Ayam Lamongan Cak Adi",
        category: "Makanan",
        images: ["assets/lamongan/profil.jpg","assets/lamongan/ayam.jpg","assets/lamongan/ceker.jpg","assets/lamongan/es.jpg"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 4.1,
        description: "Mie ayam dengan kuah kaldu yang gurih.",
        address: "Jl. Raya Pulo Gebang No.16",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.677490084989!2d106.94893797499367!3d-6.174997693806333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c1440c1c607%3A0x2f9bb5529c986fb!2sJl.%20Raya%20Pulo%20Gebang%20No.16%2C%20RT.3%2FRW.4%2C%20Ujung%20Menteng%2C%20Kec.%20Cakung%2C%20Jakarta%20Timur!5e0!3m2!1sid!2sid!4v1698760844149!5m2!1sid!2sid"
    },
    {
        id: 9,
        name: "Bakmi Gondrong",
        category: "Makanan",
        images: ["assets/Bakmi/profil.jpg","assets/Bakmi/kuah.jpg","assets/Bakmi/goreng.jpg","assets/Bakmi/nasi.jpg"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 5.0,
        description: "Cita rasa khas yang bikin nagih! 🍜 Mie kenyal dengan bumbu gurih, dipadu potongan ayam lembut dan kuah kaldu yang kaya rasa. ",
        address: "JI. Pulo Jawa No. 18 Blok C60",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.507775557452!2d106.9511118!3d-6.196535700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b73c9e327ad%3A0x89412a3fd54a106e!2sBakmi%20Gondrong!5e0!3m2!1sid!2sid!4v1761982679312!5m2!1sid!2sid" 
    },
    {
        id: 10,
        name: "Es Teh Solo Cakung",
        category: "Minuman",
        images: ["assets/estehSolo/profil.jpg","assets/estehSolo/1.jpeg","assets/estehSolo/2.jpeg","assets/estehSolo/3.jpg"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 5.0,
        description: "Segarnya teh khas Solo dengan rasa manis pas dan aroma harum yang menenangkan!",
        address: "Jl. Pulau Sangiyang",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5288670773853!2d106.94498030000001!3d-6.193728999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bd2f7403c1d%3A0xfde69bc55c667044!2sEs%20Teh%20Solo%20Cakung!5e0!3m2!1sid!2sid!4v1761957050584!5m2!1sid!2sid"
    },
    {
        id: 11,
        name: "Warteg Putra Bahari 183 Pulogebang",
        category: "Makanan",
        images: ["assets/warteg/profil.png","assets/warteg/tongkol.jpg","assets/warteg/sayur.jpg","assets/warteg/usus.jpg"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 4.9,
        description: "Masakan rumahan dengan rasa juara! semua disajikan hangat dengan porsi melimpah dan harga bersahabat.",
        address: "Jl. Raya Pulo Gebang",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5080717026626!2d106.9560432!3d-6.1964963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b576658daa5%3A0xdc11f5c419ac514e!2sWarteg%20Putra%20Bahari%20183%20Pulogebang!5e0!3m2!1sid!2sid!4v1761978467274!5m2!1sid!2sid" 
    },
    {
        id: 12,
        name: "KEHEAD Barbershop",
        category: "Jasa",
        images: ["assets/Laundry/profil.jpg","assets/Laundry/1.png","assets/Laundry/2.png","assets/Laundry/3.png"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 4.3,
        description: "Gaya rambut keren, penampilan makin percaya diri! Dengan potongan rapi, pelayanan ramah, dan suasana nyaman.",
        address: "Jl. Raya Pulo Gebang No.1A",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.505543133451!2d106.95413119999999!3d-6.196832699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b740c486dad%3A0x1d8bf6f4c4571e1e!2sKEHEAD%20Barbershop!5e0!3m2!1sid!2sid!4v1762008459857!5m2!1sid!2sid"
    },
    {
        id: 13,
        name: "Bengkel Motor Harapan Jaya",
        category: "Jasa",
        images: ["assets/BengkelMotor/profil.jpg","assets/BengkelMotor/1.png","assets/BengkelMotor/2.png","assets/BengkelMotor/3.png"],
        location: "Penggilingan, Jakarta Timur",
        rating: 4.6,
        description: "Solusi cepat dan terpercaya untuk motor kesayanganmu! Dari servis rutin hingga perbaikan berat, semua dikerjakan oleh mekanik berpengalaman dengan peralatan lengkap.",
        address: "Gang Bangkok",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4327431233505!2d106.9593963!3d-6.2065101999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b789fffd0bf%3A0x80c0a79f468f8a8e!2sBengkel%20Motor%20Harapan%20Jaya%20Motor!5e0!3m2!1sid!2sid!4v1761993214029!5m2!1sid!2sid" 
    },
    {
        id: 14,
        name: "Rental Arena Games",
        category: "Jasa",
        images: ["assets/Arena/profil.png","assets/Arena/10.png","assets/Arena/2.png","assets/Arena/3.png"],
        location: "Pulo Gebang, Jakarta Timur",
        rating: 4.8,
        description: "Tempat seru buat nongkrong dan tanding bareng teman! Nikmati berbagai game seru dengan layar jernih dan kontrol nyaman.",
        address: "Jl. Raya Rw.Kuning No.24",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.487713742884!2d106.9613095!3d-6.1992042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698be19ae09ad1%3A0x61a098ff8fc42aca!2sRental%20PS3%20Arena%20Games!5e0!3m2!1sid!2sid!4v1761993454929!5m2!1sid!2sid"
    },
    {
        id: 15,
        name: "Pop Ice Mba Wik",
        category: "Minuman",
        images: ["assets/pop/profil.png","assets/pop/TARO.PNG","assets/pop/COKLAT.PNG","assets/pop/CHOCO.PNG"],
        location: "Cakung, Jakarta Timur",
        rating: 4.6,
        description: "Minuman manis penuh rasa dan kesegaran! Dari cokelat, stroberi, hingga taro, semua diblender lembut dengan es yang menyegarkan.",
        address: "Gang Bangkkok",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4345800295373!2d106.94047979999999!3d-6.2062662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bc331fa7f37%3A0xdeac6295fea2593e!2sPOP%20ICE%20MBA%20WIK!5e0!3m2!1sid!2sid!4v1761959746222!5m2!1sid!2sid"
    }
];

// Number Animation for Stats
function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + "+";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Observer for stats animation
const observerStats = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const finalNumber = parseInt(stat.textContent);
                animateNumber(stat, 0, finalNumber, 3500); // 3500ms = 3.5s duration
            });
            observerStats.disconnect(); // Only animate once
        }
    });
}, { threshold: 0.5 });

// DOM Elements
const umkmDetailModal = document.getElementById('umkmDetailModal');
const closeButtons = document.querySelectorAll('.close');
const umkmGrid = document.getElementById('umkmGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const exploreBtn = document.querySelector('.explore-btn');

// Current state
let currentPage = 1;
let searchQuery = '';
let currentCategory = 'all';
let isShowingAll = false;
const CARDS_PER_PAGE = 6;
let _sliderInterval = null; // internal reference to slider autoplay

// Modal functions
function openModal(modal) {
    if (!modal) return;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    // clear slider interval when closing detail modal
    if (modal.id === 'umkmDetailModal' && _sliderInterval) {
        clearInterval(_sliderInterval);
        _sliderInterval = null;
    }
}

// Event Listeners
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target && e.target.classList && e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

// Search functionality with debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleSearch() {
    searchQuery = searchInput.value.toLowerCase();
    currentPage = 1;
    filterAndDisplayUMKM();
    
    // Scroll to directory section when searching
    const directorySection = document.getElementById('directory');
    if (directorySection && searchQuery) {
        directorySection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Debounced search for input
const debouncedSearch = debounce(handleSearch, 300);

if (searchInput) {
    searchInput.addEventListener('input', debouncedSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
            e.preventDefault();
        }
    });
}

if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
}

// Explore button scrolls to directory and shows all
if (exploreBtn) exploreBtn.addEventListener('click', () => {
    searchQuery = '';
    searchInput.value = '';
    currentPage = 1;
    filterAndDisplayUMKM();
    
    // Smooth scroll to directory section
    const directorySection = document.getElementById('directory');
    if (directorySection) {
        directorySection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
});

// Load more
if (loadMoreBtn) loadMoreBtn.addEventListener('click', () => { currentPage++; filterAndDisplayUMKM(true); });

// Filter and display UMKM
function filterAndDisplayUMKM() {
    let filteredData = [...umkmData];

    // Apply search filter
    if (searchQuery) {
        filteredData = filteredData.filter(umkm => 
            umkm.name.toLowerCase().includes(searchQuery) ||
            umkm.description.toLowerCase().includes(searchQuery) ||
            umkm.location.toLowerCase().includes(searchQuery)
        );
    }

    // Apply category filter
    if (currentCategory !== 'all') {
        filteredData = filteredData.filter(umkm => umkm.category === currentCategory);
    }

    // Default sort by rating desc then id
    filteredData.sort((a,b) => (b.rating - a.rating) || (b.id - a.id));

    // Clear grid
    umkmGrid.innerHTML = '';
    
    // Display all cards with stagger animation
    filteredData.forEach((umkm, index) => {
        const card = createUMKMCard(umkm);
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards ${index * 0.1}s`;
        umkmGrid.appendChild(card);
        
        requestAnimationFrame(() => {
            card.style.opacity = '1';
        });
    });
}


// Create UMKM card
function createUMKMCard(umkm) {
    const card = document.createElement('div');
    card.className = 'umkm-card';
    card.innerHTML = `
        <img src="${umkm.images && umkm.images[0] ? umkm.images[0] : '/assets/samples/placeholder.jpg'}" alt="${umkm.name}" class="umkm-image">
        <div class="umkm-info">
            <div class="umkm-category">${umkm.category}</div>
            <h3 class="umkm-name">${umkm.name}</h3>
            <div class="umkm-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
                ${umkm.location}
            </div>
            <div class="rating">
                <div class="stars">★★★★★</div>
                <span>${umkm.rating}</span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => showUMKMDetail(umkm));
    return card;
}

// Show UMKM detail
function showUMKMDetail(umkm) {
    const detailContent = document.getElementById('umkmDetail');
    // Build detail with slider markup
    const images = Array.isArray(umkm.images) && umkm.images.length ? umkm.images : ["/assets/samples/placeholder.jpg"];
    let slidesHtml = '';
    images.forEach(src => { slidesHtml += `<div class="slide"><img src="${src}" alt="${umkm.name}"></div>`; });

    detailContent.innerHTML = `
        <div class="umkm-detail">
            <div class="detail-left">
                <div class="detail-images">
                    <div class="slider" id="slider">
                        <div class="slides">${slidesHtml}</div>
                        <button class="slider-arrow left" id="prevBtn">‹</button>
                        <button class="slider-arrow right" id="nextBtn">›</button>
                        <div class="slider-dots" id="dots"></div>
                    </div>
                </div>
                <div class="image-gallery-info">
                    <div class="gallery-tip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                        </svg>
                        <span>Geser untuk melihat foto lainnya</span>
                    </div>
                    <div class="image-counter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
                        </svg>
                        <span>${images.length} Foto</span>
                    </div>
                </div>
                <div class="quick-info">
                    <div class="quick-info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                        </svg>
                        <div class="info-detail">
                            <span class="info-label">Rating Pelanggan</span>
                            <span class="info-value">${umkm.rating.toFixed(1)} / 5.0</span>
                        </div>
                    </div>
                    <div class="quick-info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        <div class="info-detail">
                            <span class="info-label">Lokasi</span>
                            <span class="info-value">${umkm.location}</span>
                        </div>
                    </div>
                    <div class="quick-info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        <div class="info-detail">
                            <span class="info-label">Kategori</span>
                            <span class="info-value">${umkm.category}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-info">
                <div class="detail-category">${umkm.category}</div>
                <h2>${umkm.name}</h2>
                <div class="detail-rating">
                    <div class="stars">★★★★★</div>
                    <span>${umkm.rating.toFixed(1)}</span>
                </div>
                <p class="detail-description">${umkm.description}</p>
                <div class="detail-contact">
                    <h3>Informasi Kontak & Lokasi</h3>
                    <div class="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>
                        ${umkm.address}
                    </div>
                </div>
                <div class="maps-container">
                    ${umkm.maps ? `
                        <iframe
                            src="${umkm.maps}"
                            width="100%"
                            height="300"
                            style="border:0; border-radius: 12px;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    ` : '<div class="maps-placeholder">Peta lokasi tidak tersedia</div>'}
                </div>
            </div>
        </div>
    `;

    // Initialize slider behavior
    const slider = document.getElementById('slider');
    const slidesContainer = slider.querySelector('.slides');
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dots');
    let current = 0;

    function renderDots() {
        dotsContainer.innerHTML = '';
        slides.forEach((s, i) => {
            const d = document.createElement('div');
            d.className = 'slider-dot' + (i===current? ' active' : '');
            d.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(d);
        });
    }

    function update() {
        slidesContainer.style.transform = `translateX(-${current * 100}%)`;
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((d,i)=> d.classList.toggle('active', i===current));
    }

    function goTo(i) { current = (i + slides.length) % slides.length; update(); }
    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);

    // autoplay
    if (_sliderInterval) clearInterval(_sliderInterval);
    _sliderInterval = setInterval(next, 4000);

    // pause on hover
    slider.addEventListener('mouseenter', () => { if (_sliderInterval) clearInterval(_sliderInterval); });
    slider.addEventListener('mouseleave', () => { if (_sliderInterval) clearInterval(_sliderInterval); _sliderInterval = setInterval(next, 4000); });

    // keyboard navigation while modal open
    function keyHandler(e) {
        if (!document.getElementById('umkmDetailModal').classList.contains('show')) return;
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'Escape') closeModal(document.getElementById('umkmDetailModal'));
    }
    document.addEventListener('keydown', keyHandler);

    // Initialize slider
    renderDots();
    update();
    openModal(umkmDetailModal);
}

// Category filter functionality
function initializeCategoryFilter() {
    const categoryButtons = document.querySelectorAll('.category-filter-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Update current category and filter
            currentCategory = btn.dataset.category;
            filterAndDisplayUMKM();
        });
    });
}

// Promotional Slider functionality
function initializePromoSlider() {
    const slider = document.getElementById('promoSlider');
    if (!slider) return;

    const slidesContainer = slider.querySelector('.slides');
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = document.getElementById('promoPrevBtn');
    const nextBtn = document.getElementById('promoNextBtn');
    const dotsContainer = document.getElementById('promoDots');
    
    let current = 0;
    let isAnimating = false;
    let autoplayInterval;
    let touchStartX = 0;
    let touchEndX = 0;

    // Create dots for each slide
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `slider-dot${i === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => !isAnimating && goTo(i));
        dotsContainer.appendChild(dot);
    });

    // Update slider position with smooth animation
    function update(instant = false) {
        if (instant) {
            slidesContainer.style.transition = 'none';
        } else {
            slidesContainer.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            isAnimating = true;
            setTimeout(() => { isAnimating = false; }, 500);
        }

        slidesContainer.style.transform = `translateX(-${current * 100}%)`;
        
        // Update dots
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }

    // Navigation functions
    function goTo(index, instant = false) {
        if (isAnimating) return;
        current = (index + slides.length) % slides.length;
        update(instant);
    }

    function next() {
        if (isAnimating) return;
        goTo(current + 1);
    }

    function prev() {
        if (isAnimating) return;
        goTo(current - 1);
    }

    // Touch events for mobile swipe
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        stopAutoplay();
    }, { passive: true });

    slider.addEventListener('touchmove', (e) => {
        if (isAnimating) return;
        touchEndX = e.touches[0].clientX;
        const diff = touchStartX - touchEndX;
        const threshold = 50; // minimum distance for swipe

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                next();
            } else {
                prev();
            }
            touchStartX = touchEndX;
        }
    }, { passive: true });

    slider.addEventListener('touchend', () => {
        startAutoplay();
    });

    // Event listeners
    prevBtn.addEventListener('click', () => !isAnimating && prev());
    nextBtn.addEventListener('click', () => !isAnimating && next());

    // Autoplay functions
    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(() => !isAnimating && next(), 5000);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (isAnimating) return;
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    });

    // Initialize
    update(true);
    startAutoplay();
}

// Handle show more/less
function handleShowMoreClick() {
    isShowingAll = !isShowingAll;
    filterAndDisplayUMKM();
    
    const showMoreBtn = document.getElementById('showMoreBtn');
    showMoreBtn.textContent = isShowingAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak';
}

// Filter and display UMKM with pagination
function filterAndDisplayUMKM() {
    let filteredData = [...umkmData];

    // Apply search filter
    if (searchQuery) {
        filteredData = filteredData.filter(umkm => 
            umkm.name.toLowerCase().includes(searchQuery) ||
            umkm.description.toLowerCase().includes(searchQuery) ||
            umkm.location.toLowerCase().includes(searchQuery)
        );
    }

    // Apply category filter
    if (currentCategory !== 'all') {
        filteredData = filteredData.filter(umkm => umkm.category === currentCategory);
    }

    // Default sort by rating desc then id
    filteredData.sort((a,b) => (b.rating - a.rating) || (b.id - a.id));

    // Clear grid
    umkmGrid.innerHTML = '';
    
    // Determine how many cards to show
    const cardsToShow = isShowingAll ? filteredData.length : Math.min(CARDS_PER_PAGE, filteredData.length);
    
    // Update show more button visibility
    const showMoreBtn = document.getElementById('showMoreBtn');
    if (showMoreBtn) {
        showMoreBtn.style.display = filteredData.length > CARDS_PER_PAGE ? 'block' : 'none';
    }
    
    // Display cards with stagger animation
    filteredData.slice(0, cardsToShow).forEach((umkm, index) => {
        const card = createUMKMCard(umkm);
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        umkmGrid.appendChild(card);
        
        // Trigger animation after a brief delay
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Leaderboard functionality
function initializeLeaderboard() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const foodBevLeaderboard = document.getElementById('foodBevLeaderboard');
    const serviceLeaderboard = document.getElementById('serviceLeaderboard');

    // Sort UMKM data by rating
    const sortedData = [...umkmData].sort((a, b) => b.rating - a.rating);

    // Filter data by category
    const foodBevData = sortedData.filter(umkm => 
        umkm.category === 'Makanan' || umkm.category === 'Minuman'
    ).slice(0, 10);

    const serviceData = sortedData.filter(umkm => 
        umkm.category === 'Jasa'
    ).slice(0, 10);

    // Generate leaderboard HTML
    function generateLeaderboardHTML(data) {
        return data.map((umkm, index) => `
            <div class="leaderboard-item">
                <div class="rank ${index < 3 ? 'top-' + (index + 1) : ''}">
                    ${index < 3 ? ['🥇', '🥈', '🥉'][index] : (index + 1)}
                </div>
                <div class="umkm-info-leader">
                    <div class="umkm-name-leader">${umkm.name}</div>
                    <div class="umkm-category-leader">${umkm.category}</div>
                </div>
                <div class="rating-leader">
                    <div class="stars">★★★★★</div>
                    <span>${umkm.rating}</span>
                </div>
            </div>
        `).join('');
    }

    // Initialize leaderboards
    foodBevLeaderboard.innerHTML = generateLeaderboardHTML(foodBevData);
    serviceLeaderboard.innerHTML = generateLeaderboardHTML(serviceData);

    // Tab switching functionality
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show corresponding leaderboard
            const category = btn.dataset.category;
            if (category === 'food-bev') {
                foodBevLeaderboard.style.display = 'block';
                serviceLeaderboard.style.display = 'none';
            } else {
                foodBevLeaderboard.style.display = 'none';
                serviceLeaderboard.style.display = 'block';
            }
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    filterAndDisplayUMKM();
    initializeCategoryFilter();
    initializePromoSlider();
    initializeLeaderboard();
    
    // Initialize show more button
    const showMoreBtn = document.getElementById('showMoreBtn');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', handleShowMoreClick);
    }
    
    // Initialize stats animation observer
    const bridgingSection = document.querySelector('.bridging');
    if (bridgingSection) {
        observerStats.observe(bridgingSection);
    }
});

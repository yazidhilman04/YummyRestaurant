const navbar = document.getElementById('navbar-container');
const navbarImage = document.getElementById('navbarImage');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
        // navbarImage.src = 'assets/img/logo-white.png';
    } else {
        navbar.classList.remove('scrolled');
        // navbarImage.src = 'assets/img/logo.png';
    }
});

function toggleNav() {
    const navList = document.getElementById("nav-list").getElementsByTagName("ul")[0];
    if (navList.style.display === "flex") {
        navList.style.display = "none"; 
    } else {
        navList.style.display = "flex"; 
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}

function submitRating() {
    const rating = document.querySelector('input[name="rating"]:checked');
    if (rating) {
        alert(`Terima kasih ${rating.value} bintang Yummynya!`);
    } else {
        alert('Silakan pilih rating sebelum mengirim.');
    }
}

const menuData = [
    {
        name: "Indomie Steak",
        description: "Perpaduan mie instan, steak daging, saus lezat, dan sayuran pelengkap.",
        price: "Rp 50.000",
        disc: 0,
        category: 'Mie',
        image: "indomie-steak.png"
    },
    {
        name: "Paket Ayam Goreng",
        description: "Paket ayam goreng: ayam renyah, nasi, saus, dan pelengkap.",
        disc: 0,
        price: "Rp 60.000",
        category: 'Ayam',
        image: "ayam-goreng.png"
    },
    {
        name: "Maggi Curry",
        description: "Mie instan dengan cita rasa kari yang gurih, kaya rempah, dan beraroma khas.",
        price: "Rp 70.000",
        disc: 0,
        category: 'Mie',
        image: "maggi-curry.png"
    },
    {
        name: "Mie Goreng Ayam Teriyaki",
        description: "Mie goreng kenyal dengan ayam teriyaki manis gurih.",
        disc: 0,
        price: "Rp 50.000",
        category: 'Mie',
        image: "mie-goreng.png"
    },
    {
        name: "Kopi Vietnam",
        description: " Kopi hitam atau espresso, disajikan dengan gula atau susu.",
        price: "Rp 20.000",
        disc: 0,
        category: 'Minum',
        image: "kopi.png"
    },
    {
        name: "Mie Kanton",
        description: "Mie goreng khas Kanton dengan saus gurih, sayuran, dan daging pilihan.",
        price: "Rp 70.000",
        disc: 0,
        category: 'Mie',
        image: "mie-kanton.png"
    },
    {
        name: "Mie Schezwan",
        description: "Mie pedas khas Sichuan dengan saus bercita rasa tajam, sayuran, dan daging.",
        price: "Rp 60.000",
        disc: 0,
        category: 'Mie',
        image: "mie-schezwan.png"
    },
    {
        name: "Mie Siu Yeah",
        description: "Mie khas Cina dengan saus gurih, potongan daging panggang, dan sayuran segar.",
        price: "Rp 80.000",
        disc: 0,
        category: 'Mie',
        image: "mie-siu-yeah.png"
    },
    {
        name: "Ayam Goreng Korean",
        description: "Ayam renyah berlapis saus manis pedas khas Korea, dengan cita rasa gurih dan karamelisasi sempurna.",
        price: "Rp 80.000",
        disc: 0,
        category: 'Ayam',
        image: "ayam-goreng-korea.png"
    },
    {
        name: "Thai Tea",
        description: "Teh manis Thailand dengan susu kental, rasa kaya dan rempah khas.",
        price: "Rp 30.000",
        disc: 30,
        category: 'Minum',
        image: "thai-tea.png"
    },
    {
        name: "Lemon Tea",
        description: "Teh dengan perasan lemon segar, asam dan menyegarkan.",
        price: "Rp 30.000",
        disc: 30,
        category: 'Minum',
        image: "lemon-tea.png"
    },
    {
        name: "Ayam Karage",
        description: "Ayam goreng Jepang dengan lapisan tepung renyah, berbumbu jahe dan kecap, digoreng hingga keemasan.",
        price: "Rp 80.000",
        category: 'Ayam',
        disc: 30,
        image: "ayam-karage.png"
    }
];

function showAll(selectedElement) {
    displayMenu(menuData);
    setActiveMenu(selectedElement);
}

function showMie(selectedElement) {
    const filteredMenu = menuData.filter(item => item.category === 'Mie');
    displayMenu(filteredMenu);
    setActiveMenu(selectedElement);
}

function showAyam(selectedElement) {
    const filteredMenu = menuData.filter(item => item.category === 'Ayam');
    displayMenu(filteredMenu);
    setActiveMenu(selectedElement);
}

function showMinuman(selectedElement) {
    const filteredMenu = menuData.filter(item => item.category === 'Minum');
    displayMenu(filteredMenu);
    setActiveMenu(selectedElement);
}

function displayMenu(menuItems) {
    menuContainer.innerHTML = '';
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        menuItem.innerHTML = `
            <img src="assets/img/menu/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">Harga: ${item.price}</p>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

function setActiveMenu(selectedElement) {
    console.log(selectedElement);
    const menuItems = document.querySelectorAll('nav ul li');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    selectedElement.classList.add('active');
}

const chefData = [
    {
        name: "Chef Andara Pratama",
        ranks: "Executive Chef",
        quotes: "Setiap hidangan adalah cerita, dan saya pastikan kisah di Yummy Resto selalu sempurna.",
        image: "chef-(1).jpg"
    },
    {
        name: "Chef Bima Kusuma",
        ranks: "Sous Chef",
        quotes: "Rahasia masakan enak? Dedikasi dan sentuhan cinta di setiap langkah.",
        image: "chef-(2).jpg"
    },
    {
        name: "Chef Maya Lestari",
        ranks: "Pastry Chef",
        quotes: "Manisnya kue mencerminkan kebahagiaan yang ingin kami bagikan ke setiap tamu.",
        image: "chef-(3).jpg"
    },
    {
        name: "Chef Rama Wijaya",
        ranks: "Head Chef",
        quotes: "Di Yummy Resto, kami tidak hanya memasak makanan, tetapi juga menciptakan kenangan.",
        image: "chef-(4).jpg"
    }
];

const chefContainer = document.getElementById('chefContainer');

chefData.forEach(chef => {
    const chefItem = document.createElement('div');
    chefItem.className = 'chef-item';
    
    chefItem.innerHTML = `
        <img src="assets/img/chefs/${chef.image}" alt="${chef.name}">
        <h3>${chef.name}</h3>
        <p><span>${chef.ranks}</span></p>
        <p><q>${chef.quotes }</q></p>
    `;
    
    chefContainer.appendChild(chefItem);
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block"; 
    } else {
        scrollToTopBtn.style.display = "none"; 
    }
};

scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const promoItemsContainer = document.getElementById('promoItemsContainer');

function displayPromoItems() {
    const promoItems = menuData.filter(item => item.disc > 0);
    promoItemsContainer.innerHTML = '';
    promoItems.forEach(item => {
        const originalPrice = parseFloat(item.price.replace('Rp ', '').replace('.', '').replace(',', '.'));
        const discountAmount = (originalPrice * item.disc) / 100; 
        const discountedPrice = originalPrice - discountAmount; 

        const formattedDiscountedPrice = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(discountedPrice);

        const promoItem = document.createElement('div');
        promoItem.className = 'promo-item';
        promoItem.innerHTML = `
            <img src="assets/img/menu/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price">${formattedDiscountedPrice} <span>(${item.price})</span></p>
        `;
        promoItemsContainer.appendChild(promoItem);
    });
}

// displayPromoItems();
showAll();

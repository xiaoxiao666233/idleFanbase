// include.js
function includeHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;

            // Run navbar animation AFTER it's inserted
            document.querySelectorAll('.fade-slide, .fade-slide-bottom').forEach(el => {
                el.classList.add('show');
            });
        })
        .catch(err => console.error(err));
}

// Load navbar and footer
includeHTML('nav-placeholder', 'shopnav.html');
includeHTML('footer-placeholder', 'shopfooter.html');

// This waits for the website to finish loading
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('trending-container')) loadTrending();
    if (document.getElementById('category-container')) loadCategoryPage();
    if (document.getElementById('product-detail-content')) loadProductDetail();
    if (document.getElementById('cart-items-container')) loadCartPage();
    if (document.getElementById('suggested-products-container')) loadSuggestedProducts();
});

function loadTrending() {
    const container = document.getElementById('trending-container');

    // Check if the container exists (so you don't get errors on other pages)
    if (!container) return;

    const trendingItems = products.filter(item => item.trending);

    container.innerHTML = trendingItems.map(product => `
        <div class="col-md-4">
            <div class="card h-100 product-card">
                <a href="product.html?id=${product.id}">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                </a>
                
                <div class="card-body text-center">
                    <a href="product.html?id=${product.id}" class="text-decoration-none product-name-color">
                        <h5 class="product-name">${product.name}</h5>
                    </a>
                    
                    <p class="product-price text-muted">RM${product.price.toFixed(2)}</p>
                    
                    
                    <div class="d-grid gap-2">
                    <button class="btn btn-outline-dark" onclick="redirectToProduct(${product.id})">Add to Cart</button>

                    <button class="btn btn-dark" onclick="redirectToProduct(${product.id})">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// --- 1. DIRECT ADD TO CART (Matches your 'idleCart' system) ---
window.addToCartDirect = function(id) {
    console.log("Attempting to add Membership ID:", id);

    if (typeof products === 'undefined') {
        alert("Error: products.js not loaded!");
        return;
    }

    const product = products.find(p => String(p.id).trim() === String(id).trim());
    
    if (!product) {
        alert("Membership not found in products.js!");
        return;
    }

    // IMPORTANT: Changed 'cart' to 'idleCart' to match your other functions!
    let cart = JSON.parse(localStorage.getItem('idleCart')) || [];

    // Check if this membership is already in cart
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            version: "Official Membership", // Default version
            quantity: 1
        });
    }

    localStorage.setItem('idleCart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
};

// --- 2. DIRECT BUY NOW (Goes straight to cart.html) ---
window.buyNowDirect = function(id) {
    // We reuse the function above to save code!
    addToCartDirect(id);
    window.location.href = 'cart.html';
};

window.toggleSort = function(type) {
    loadCategoryPage(type);
};

window.clearSort = function() {
    loadCategoryPage('clear');
};

// --- 2. SORTING STATE ---
let sortDirections = {
    date: true,
    price: true
};

// --- 3. MAIN LOAD FUNCTION ---
function loadCategoryPage(sortBy = 'default') {
    const container = document.getElementById('category-container');
    const titleElement = document.getElementById('category-title');
  if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const categoryType = urlParams.get('type');

    if (!categoryType) {
        container.innerHTML = "<p class='text-center'>Please select a category.</p>";
        return;
    }
    // --- 2. TITLE LOGIC (Put this here so it ALWAYS runs) ---
    const formattedTitle = categoryType.charAt(0).toUpperCase() + categoryType.slice(1);
    
    // Update Browser Tab Title
    document.title = `${formattedTitle} - IdleShop`;
    
    // Update the <h2> on the page
    if (titleElement) {
        titleElement.innerText = formattedTitle;
    } else {
        console.error("Could not find element with id 'category-title'");
    }

    // Filter and Sort
    let filteredProducts = products.filter(item => item.category === categoryType);

    if (sortBy === 'date') {
        sortDirections.date = !sortDirections.date;
        filteredProducts.sort((a, b) => sortDirections.date ? b.id - a.id : a.id - b.id);
        const btn = document.getElementById('sort-date-btn');
        if(btn) btn.innerText = sortDirections.date ? "Newest ↓" : "Oldest ↑";
    } 
    else if (sortBy === 'price') {
        sortDirections.price = !sortDirections.price;
        filteredProducts.sort((a, b) => sortDirections.price ? b.price - a.price : a.price - b.price);
        const btn = document.getElementById('sort-price-btn');
        if(btn) btn.innerText = sortDirections.price ? "Price: High ↓" : "Price: Low ↑";
    }
    else if (sortBy === 'clear') {
        filteredProducts.sort((a, b) => a.id - b.id);
        sortDirections.date = true;
        sortDirections.price = true;
        const dBtn = document.getElementById('sort-date-btn');
        const pBtn = document.getElementById('sort-price-btn');
        if(dBtn) dBtn.innerText = "Newest ↓";
        if(pBtn) pBtn.innerText = "Price ↓";
    }

    // Render
    container.innerHTML = filteredProducts.map(product => `
        <div class="col-md-4">
            <div class="card h-100 product-card">
                <a href="product.html?id=${product.id}">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                </a>
                <div class="card-body text-center">
                    <h5 class="product-name">${product.name}</h5>
                    <p class="product-price text-muted">RM${product.price.toFixed(2)}</p>
                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-dark" onclick="redirectToProduct('${product.id}')">Add to Cart</button>
                        <button class="btn btn-dark" onclick="redirectToProduct('${product.id}')">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Initial Call
document.addEventListener('DOMContentLoaded', () => loadCategoryPage());



function changeImg(src) {
    document.getElementById('main-product-img').src = src;

    // Optional: add a "active" border to the clicked thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail-row img');
    thumbnails.forEach(img => {
        img.classList.remove('thumb-active');
        if (img.src === src) img.classList.add('thumb-active');
    });
}

function loadSuggestedProducts() {
    const container = document.getElementById('suggested-products-container');
    if (!container) return;

    // 1. Shuffle the products array and take the first 3
    // (This makes the 'You May Also Like' section different every time)
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    // 2. Map them into the HTML
    container.innerHTML = selected.map(product => `
        <div class="col-md-4">
            <a href="product.html?id=${product.id}" class="text-decoration-none text-dark">
                <div class="card product-card">
                    <img src="${product.image}" class="card-img-top rounded" alt="${product.name}">
                    <div class="card-body text-center">
                        <h6 class="product-name mb-1 text-decoration-none product-name-color">${product.name}</h6>
                        <p class="product-price text-muted small">RM${product.price.toFixed(2)}</p>
                        <div class="d-grid gap-2">
                        <button class="btn btn-outline-dark" onclick="redirectToProduct(${product.id})">Add to Cart</button>
                        <button class="btn btn-dark" onclick="redirectToProduct(${product.id})">Buy Now</button>
                        
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Find the product by ID
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.getElementById('product-detail-content').innerHTML = "<h2>Product not found</h2>";
        document.title = "Product Not Found - I-dle Shop"; // Set title for error
        return;
    }

    // --- CHANGE THE TAB TITLE HERE ---
    document.title = `${product.name} - IdleShop`;

    // Update Text Content
    document.getElementById('main-product-img').src = product.image;
    document.getElementById('p-name').innerText = product.name;
    document.getElementById('p-description').innerText = product.description;
    document.getElementById('p-price').innerText = `RM${product.price.toFixed(2)}`;

    // Update Thumbnails
    const thumbContainer = document.getElementById('p-thumbnails');
    thumbContainer.innerHTML = product.thumbnails.map((src, index) => `
        <img src="${src}" class="img-thumbnail ${index === 0 ? 'thumb-active' : ''}" onclick="changeImg(this.src)">
    `).join('');

    // Update Version Buttons
    const versionContainer = document.getElementById('p-versions');
    versionContainer.innerHTML = product.versions.map((v, index) => `
        <input type="radio" class="btn-check" name="v-option" id="v${index}" autocomplete="off">
        <label class="btn btn-outline-dark" for="v${index}">${v}</label>
    `).join('');
}

// We add 'showNotification' as a parameter (default is true)
function addToCart(showNotification = true) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) return false;

    const selectedRadio = document.querySelector('input[name="v-option"]:checked');
    
    if (!selectedRadio) {
        alert("Please select a version before adding to cart!");
        return false; // Return false so buyNow() stops here
    }

    const versionName = document.querySelector(`label[for="${selectedRadio.id}"]`).innerText;

    let cart = JSON.parse(localStorage.getItem('idleCart')) || [];
    const existingItem = cart.find(item => item.id === productId && item.version === versionName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            version: versionName,
            quantity: 1
        });
    }

    localStorage.setItem('idleCart', JSON.stringify(cart));
    
    // Only show the alert if we AREN'T redirecting to the cart
    if (showNotification) {
        alert(`Success! ${product.name} (${versionName}) has been added to your cart.`);
    }

    return true; // Return true to indicate success
}

function quickAdd(productId) {
    // 1. Find the product data
    const product = products.find(p => p.id === productId);

    // 2. Get the cart
    let cart = JSON.parse(localStorage.getItem('idleCart')) || [];

    // 3. Define a default version (The first one in your array)
    const defaultVersion = product.versions && product.versions.length > 0 
                           ? product.versions[0] 
                           : "Standard";

    // 4. Check if already in cart
    const existingItem = cart.find(item => item.id === productId && item.version === defaultVersion);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            version: defaultVersion,
            quantity: 1
        });
    }

    // 5. Save and Alert
    localStorage.setItem('idleCart', JSON.stringify(cart));
    
    // Optional: Show a nice toast or alert
    alert(`${product.name} (${defaultVersion}) added to cart!`);
}

function buyNow() {
    // Call addToCart but tell it NOT to show the alert (false)
    const success = addToCart(false); 

    // If it returned true (meaning a version was selected), go to cart
    if (success) {
        window.location.href = "cart.html";
    }
}

function loadCartPage() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    let cart = JSON.parse(localStorage.getItem('idleCart')) || [];

    if (cart.length === 0) {
        container.innerHTML = "<h4>Your cart is empty.</h4>";
        // Ensure calculateTotal runs with an empty array to reset the summary
        calculateTotal([]); 
        return;
    }

    container.innerHTML = cart.map((item, index) => {
        // DETERMINE THE LINK: 
        // If the ID starts with 'mem', go to membership.html. Otherwise, go to product.html.
        const targetPage = String(item.id).startsWith('mem') 
            ? `membership.html` 
            : `product.html?id=${item.id}`;
    
        return `
            <div class="cart-item-row d-flex align-items-center p-3 mb-3 border rounded shadow-sm">
                <a href="${targetPage}" class="cart-img-wrapper me-3">
                    <img src="${item.image}" class="img-fluid rounded" alt="${item.name}">
                </a>
    
                <div class="flex-grow-1">
                    <a href="${targetPage}" class="text-decoration-none product-name-color">
                        <h5 class="mb-1">${item.name}</h5>
                    </a>
                    <p class="text-muted small mb-0">Version: ${item.version}</p>
                </div>
    
                <div class="text-end">
                    <div class="d-flex align-items-center mb-2 justify-content-end">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQty(${index}, -1)">-</button>
                        <span class="mx-3 fw-bold">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQty(${index}, 1)">+</button>
                    </div>
                    <p class="fw-bold mb-1">RM${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="btn btn-sm text-danger border-0 p-0" onclick="removeItem(${index})">Delete</button>
                </div>
            </div>
        `;
    }).join('');

    calculateTotal(cart);
}

function updateQty(index, change) {
    let cart = JSON.parse(localStorage.getItem('idleCart'));
    cart[index].quantity += change;

    if (cart[index].quantity < 1) cart[index].quantity = 1;

    localStorage.setItem('idleCart', JSON.stringify(cart));
    loadCartPage(); // Refresh the display
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('idleCart'));
    cart.splice(index, 1); // Remove the item
    localStorage.setItem('idleCart', JSON.stringify(cart));
    loadCartPage(); // Refresh the display
}

function calculateTotal(cart) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.06;
    const shipping = subtotal > 0 ? 10 : 0;
    const finalTotal = subtotal + tax + shipping;

    document.getElementById('subtotal').innerText = `RM${subtotal.toFixed(2)}`;
    document.getElementById('tax').innerText = `RM${tax.toFixed(2)}`;
    document.getElementById('shipping').innerText = `RM${shipping.toFixed(2)}`;
    document.getElementById('final-total').innerText = `RM${finalTotal.toFixed(2)}`;
}

// Function to empty the whole cart
function clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
        localStorage.removeItem('idleCart');
        loadCartPage(); // Refresh the screen
    }
}

// Function for the Checkout button
function checkout() {
    const cart = JSON.parse(localStorage.getItem('idleCart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty! Please add some items before checking out.");
    } else {
        alert("Thank you for your order! This is where a payment gateway would go.");
        localStorage.removeItem('idleCart'); // Clear cart after "purchase"
        window.location.href = "index.html"; // Send them home
    }
}

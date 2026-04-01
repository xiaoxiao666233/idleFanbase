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
    loadTrending();
});

function loadTrending() {
    const container = document.getElementById('trending-container');
    
    // Check if the container exists (so you don't get errors on other pages)
    if (!container) return;

    const trendingItems = products.filter(item => item.trending);

    container.innerHTML = trendingItems.map(product => `
        <div class="col-md-4">
            <div class="card h-100 product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                    <h5 class="product-name">${product.name}</h5>
                    <p class="product-price text-muted">RM${product.price.toFixed(2)}</p>
                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-dark">Add to Cart</button>
                        <button class="btn btn-dark">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}
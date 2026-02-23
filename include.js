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
includeHTML('nav-placeholder', 'nav.html');
includeHTML('footer-placeholder', 'footer.html');

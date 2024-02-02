window.onload = function() {
    // "Explore" dropdown
    var exploreDropdown = document.getElementById('explore');
    var exploreOptions = [
        'Medical Pre-Clinical', 'Medical Clinical', 'MCAT', 'PA', 'Pharmacy', 'Nursing'
    ];

    exploreOptions.forEach(function(option) {
        var a = document.createElement('a');
        a.textContent = option;
        exploreDropdown.appendChild(a);
    });

    // "Products" dropdown
    var productsDropdown = document.getElementById('products');
    var productOptions = ['Workbooks', 'Apparel'];

    productOptions.forEach(function(option) {
        var a = document.createElement('a');
        a.textContent = option;
        productsDropdown.appendChild(a);
    });

    // "Try for free" button
    document.getElementById('try-for-free').addEventListener('click', function() {
        var popup = document.getElementById('popup-menu');
        popup.style.display = 'block';
    });
};

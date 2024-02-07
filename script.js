window.onload = function() {
    // "Explore" dropdown
    var exploreDropdown = document.getElementById('explore');
    var exploreOptions = [
        'Medical Pre-Clinical', 'Medical Clinical', 'MCAT', 'PA', 'Pharmacy', 'Nursing', 
        'USMLE® Step 1', 'USMLE® Step 2', 'MCAT®', 'PANCE®', 'PCAT®, NAPLEX®', 'NCLEX®'
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

    $(document).ready(function() {
  Webflow.require('slider').redraw();
});

    // "Try for free" button
    document.getElementById('try-for-free').addEventListener('click', function() {
        var popup = document.getElementById('popup-menu');
        popup.style.display = 'block';
    });
};

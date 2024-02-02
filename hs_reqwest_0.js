document.getElementById('try-for-free').addEventListener('click', function() {
    // code to show the popup menu goes here
    alert('Try For Free button clicked');
});

// example code to populate the 'Explore' and 'Products' dropdowns
var exploreDropdown = document.getElementById('explore');
var exploreOptions = ['Medical Pre-Clinical', 'Medical Clinical', 'MCAT', 'PA', 'Pharmacy', 'Nursing', 'USMLE® Step 1', 'USMLE® Step 2', 'MCAT®', 'PANCE®', 'PCAT®, NAPLEX®', 'NCLEX®'];

for (var i = 0; i < exploreOptions.length; i++) {
    var option = document.createElement('a');
    option.href = '#';
    option.textContent = exploreOptions[i];
    exploreDropdown.appendChild(option);
}

var productsDropdown = document.getElementById('products');
var productOptions = ['Workbooks', 'Apparel'];

for (var i = 0; i < productOptions.length; i++) {
    var option = document.createElement('a');
    option.href = '#';
    option.textContent = productOptions[i];
    productsDropdown.appendChild(option);
}

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

document.addEventListener("DOMContentLoaded", function() {
    // Function to move to the next item in the carousel
    function moveToNextImage() {
        // Assuming 'c-home_features' contains the individual carousel items
        var carousel = document.querySelector('.c-home_features');
        var items = carousel.querySelectorAll('.w-layout-grid > div'); // Adjust this selector based on your actual structure
        var totalItems = items.length;
        var activeIndex = -1; // Start with an invalid index

        // Find the index of the currently active item
        for (var i = 0; i < totalItems; i++) {
            if (items[i].classList.contains('active')) { // Ensure your active item has 'active' class
                activeIndex = i;
                break;
            }
        }

        // Remove 'active' class from the current item
        if (activeIndex !== -1) {
            items[activeIndex].classList.remove('active');
        }

        // Calculate the index of the next item
        var nextIndex = (activeIndex + 1) % totalItems;

        // Add 'active' class to the next item
        items[nextIndex].classList.add('active');
    }

    // Assuming '.right-arrow' is your right arrow button
    var rightArrow = document.querySelector('.right-arrow');
    rightArrow.addEventListener('click', moveToNextImage);
});

window.onload = function() {
    let dropdownMenu = document.querySelector("#w-dropdown-list-1 > div");
    dropdownMenu.style.display = 'block';
};


// Get the elements
let exploreTab = document.querySelector('global-nav__dropdown w-dropdown-toggle');
let dropdownMenu = document.querySelector('#w-dropdown-list-1 > div');
dropdownMenu.style.display = 'none'; // Initially hide the dropdown

// Add event listeners
exploreTab.addEventListener('mouseover', function() {
  dropdownMenu.style.display = 'block';
});

exploreTab.addEventListener('mouseout', function() {
  dropdownMenu.style.display = 'none';
});

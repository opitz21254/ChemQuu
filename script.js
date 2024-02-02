// Get the elements
let exploreTab = document.querySelector('.nav-dropdown__text');
let dropdownMenu = document.querySelector('.global-nav_section');
dropdownMenu.style.display = 'none'; // Initially hide the dropdown

// Add event listeners
exploreTab.addEventListener('mouseover', function() {
  dropdownMenu.style.display = 'block';
});

exploreTab.addEventListener('mouseout', function() {
  dropdownMenu.style.display = 'none';
});

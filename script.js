// Get the elements
let exploreTab = document.getElementById('explore');
let dropdownMenu = document.getElementById('dropdown');

// Add event listeners
exploreTab.addEventListener('mouseover', function() {
  dropdownMenu.style.display = 'block';
});

exploreTab.addEventListener('mouseout', function() {
  dropdownMenu.style.display = 'none';
});

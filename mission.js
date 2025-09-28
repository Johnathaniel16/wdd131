// mission.js

// Step 1: Select the <select> element and the logo image out of the DOM
const themeSelector = document.getElementById('theme');
const logo = document.querySelector('.logo');

// Step 2: Create the changeTheme function
function changeTheme() {
  // Step 3: Check what option is currently selected
  if (themeSelector.value === 'dark') {
    // Step 4a: If it is "dark", add the dark class to body and change the logo
    document.body.classList.add('dark');
    logo.src = 'byui-logo_white.png'; // use the white logo in dark mode
  } else {
    // Step 4b: Otherwise, remove the dark class and set the blue logo
    document.body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp'; // use the blue logo in light mode
  }
}

// Step 5: Add an event listener for the change event on the select
themeSelector.addEventListener('change', changeTheme);

// Get the "Graduate Program" and "Job Portal" links
const graduateLink = document.querySelector('#graduate-program');
const jobPortalLink = document.querySelector('#job-portal');

// Function to show the under-construction alert
function showUnderConstruction(pagename) {
    alert(`The ${pagename} page is under construction 🚧. Please check back later!`);
}

// Add click event listeners to the links
graduateLink.addEventListener('click', function(event) {
    event.preventDefault();
    showUnderConstruction('Graduate Program');
});
jobPortalLink.addEventListener('click', function(event) {
    event.preventDefault();
    showUnderConstruction('Job Portal');
});
const hamburgerBtn = document.getElementById('hamburger-btn');
const navbarList = document.getElementById('list');

// Toggle navbar visibility
hamburgerBtn.addEventListener('click', () => {
    navbarList.classList.toggle('show');
});
const navbar = document.getElementById("navbar");

hamburgerBtn.addEventListener("click", () => {
navbar.classList.toggle("open");
});
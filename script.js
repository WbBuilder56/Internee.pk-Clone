// Get the "Graduate Program" and "Job Portal" links
const loginButton=document.querySelector('#navbtn');
const graduateLink = document.querySelector('#graduate-program');
const jobPortalLink = document.querySelector('#job-portal');
const jobButton=document.querySelector('#job-button');
const lmsButton=document.querySelector('#lms-button');

// Function to show the under-construction alert
function showUnderConstruction(pagename) {
    alert(`The ${pagename} page is under construction 🚧. Please check back later!`);
}
function showUnderConstruction(pagename) {
    alert(`The ${pagename} page is under construction 🚧. Please check back later!`);
}
function showUnderConstruction(pagename) {
    alert(`The ${pagename} page is under construction 🚧. Please check back later!`);
}
function showUnderConstruction(pagename) {
    alert(`The ${pagename} page is under construction 🚧. Please check back later!`);
}


// Add click event listeners to the links
loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    showUnderConstruction('Login');
});
graduateLink.addEventListener('click', function(event) {
    event.preventDefault();
    showUnderConstruction('Graduate Program');
});
jobButton.addEventListener('click', function(event) {
    event.preventDefault();
    showUnderConstruction('Job Portal');
});
jobPortalLink.addEventListener('click', function(event) {
    event.preventDefault();
    showUnderConstruction('Job Portal');
});
lmsButton.addEventListener('click', function(event) {
    event.preventDefault();
    showUnderConstruction('Our LMS');
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
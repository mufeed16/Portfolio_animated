var typed =new Typed(".multiple-text",{
    strings :["Software Engineer","Frontend Developer","Full Stack Developer","Animated Design"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})
// JavaScript to toggle the hamburger menu and show/hide the nav-links
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });
});

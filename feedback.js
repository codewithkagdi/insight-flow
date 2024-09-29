document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your feedback!");
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const popupMenu = document.getElementById('popup-menu');
    const closePopup = document.getElementById('close-popup');
    const searchButton = document.getElementById('search-button');

    hamburger.addEventListener('click', () => {
        popupMenu.style.display = 'flex';
    });

    closePopup.addEventListener('click', () => {
        popupMenu.style.display = 'none';
    });
})

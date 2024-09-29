// // script.js

// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.getElementById('hamburger');
//     const popupMenu = document.getElementById('popup-menu');
//     const closePopup = document.getElementById('close-popup');

//     hamburger.addEventListener('click', function() {
//         popupMenu.classList.toggle('show-popup');
//     });

//     closePopup.addEventListener('click', function() {
//         popupMenu.classList.remove('show-popup');
//     });
// });


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
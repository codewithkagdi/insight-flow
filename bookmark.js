const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

function displayBookmarks() {
    const bookmarksList = document.getElementById('bookmarks');
    bookmarksList.innerHTML = bookmarks.map(bookmark => `
        <li>
            <h3>${bookmark.title}</h3>
            <p>Author: ${bookmark.author}</p>
            <button class="remove-btn" data-id="${bookmark.id}">Remove</button>
        </li>
    `).join('');
}

document.querySelectorAll('.bookmark-btn').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const bookTitle = button.parentElement.querySelector('h3').innerText;
        const bookAuthor = button.parentElement.querySelector('p').innerText;
        
        if (!bookmarks.some(book => book.id === id)) {
            bookmarks.push({ id, title: bookTitle, author: bookAuthor });
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            displayBookmarks();
        }
    });
});

document.getElementById('bookmarks').addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const id = e.target.getAttribute('data-id');
        const index = bookmarks.findIndex(book => book.id === id);
        bookmarks.splice(index, 1);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        displayBookmarks();
    }
});

window.onload = displayBookmarks;

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
});
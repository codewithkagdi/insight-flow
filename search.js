function searchResources() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    const resources = [
        { title: 'Introduction to JavaScript', author: 'John Doe', link: 'https://www.amazon.in/javascript-books/s?k=javascript+books', tags: ['javascript', 'programming'] },
        { title: 'Advanced CSS Techniques', author: 'Jane Smith', link: 'https://www.knowledgehut.com/blog/web-development/css-books', tags: ['css', 'web design'] },
        { title: 'Python for Beginners', author: 'Emily White', link: 'https://pythonbooks.org/free-books/', tags: ['python', 'coding'] },
        { title: 'React and Redux Guide', author: 'Samuel Green', link: 'https://www.amazon.in/react-redux/s?k=react+redux', tags: ['react', 'redux', 'frontend'] }
    ];

    const filteredResults = resources.filter(resource => {
        return resource.title.toLowerCase().includes(searchQuery) ||
               resource.author.toLowerCase().includes(searchQuery) ||
               resource.tags.some(tag => tag.includes(searchQuery));
    });

    if (filteredResults.length > 0) {
        filteredResults.forEach(resource => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${resource.link}">${resource.title}</a> by ${resource.author}`;
            searchResults.appendChild(li);
        });
    } else {
        searchResults.innerHTML = '<li>No resources found</li>';
    }
}

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
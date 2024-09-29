document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const perPage = 8;
    let isLoading = false;

    function fetchImages() {
                const API_KEY = 'rNRiy1ndCnI7Kph1haUQshigibSYB6yU-pknbcZCAmI'; 
                const API_URL = `https://api.unsplash.com/photos/random?count=10&client_id=${API_KEY}`;
            
                fetch(API_URL)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        const slidesContainer = document.querySelector('.slides');
                        slidesContainer.innerHTML = data.map(photo => `
                            <img src="${photo.urls.regular}" alt="${photo.alt_description}">
                        `).join('');
                        showSlides();
                    })
                    .catch(error => console.error('Error fetching images:', error));
            }

    function fetchRandomPhotos(page) {
        const API_KEY = 'rNRiy1ndCnI7Kph1haUQshigibSYB6yU-pknbcZCAmI';
        const API_URL = `https://api.unsplash.com/photos/random?count=${perPage}&client_id=${API_KEY}&page=${page}`;

        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const gallery = document.getElementById('random-images');
                gallery.innerHTML += data.map(photo => `
                    <img src="${photo.urls.small}" alt="${photo.alt_description}">
                `).join('');
                isLoading = false;
            })
            .catch(error => {
                console.error('Error fetching random photos:', error);
                isLoading = false;
            });
    }

    function onScroll() {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 && !isLoading) {
            isLoading = true;
            fetchRandomPhotos(1);
        }
    }

    function showSlides() {
        const slides = document.querySelectorAll('.slides img');
        const totalSlides = slides.length;

        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        }

        const offset = -slideIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.next').addEventListener('click', () => {
        slideIndex++;
        showSlides();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex--;
        showSlides();
    });

    fetchRandomPhotos(1);

    setInterval(() => {
        slideIndex++;
        showSlides();
    }, 3000);

    window.addEventListener('scroll', onScroll);
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

    const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.children.length;
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    showSlide(currentIndex);

    const photos = document.querySelectorAll('.slides img');
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            alert(photo.getAttribute('data-info'));
        });
    });

    searchButton.addEventListener('click', () => {
        window.location.href = 'search.html';
    });
});

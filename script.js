document.addEventListener('DOMContentLoaded', function() {
    // Sample data - replace with your actual content
    const movies = [
        { title: "Stranger Things", image: "https://image.tmdb.org/t/p/w500/xYZvsRt3Hy4cugD2OZbmO6Jw3rX.jpg" },
        { title: "The Crown", image: "https://image.tmdb.org/t/p/w500/jO9vmhP8hQlD8hOxeUJVJZQ2gF6.jpg" },
        { title: "Ozark", image: "https://image.tmdb.org/t/p/w500/vX8zV0VZJ72dHNyFZkKvQe6QK6z.jpg" },
        { title: "The Witcher", image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg" },
        { title: "Bridgerton", image: "https://image.tmdb.org/t/p/w500/kjXiC2qWxYwJZqhuLmX9tqQ8nwZ.jpg" },
        { title: "Money Heist", image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg" },
        { title: "Dark", image: "https://image.tmdb.org/t/p/w500/5Lo4H4GHlFmH2Lz5SWEQK6Jk3Bx.jpg" },
        { title: "The Queen's Gambit", image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg" },
        { title: "Lucifer", image: "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" },
        { title: "The Mandalorian", image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" },
        { title: "The Boys", image: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg" },
        { title: "Peaky Blinders", image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg" }
    ];

    // Create slides
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    movies.forEach(movie => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
        `;
        swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: false,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 5
            },
            768: {
                spaceBetween: 10
            },
            1024: {
                spaceBetween: 15
            }
        }
    });
});
const searchInput = document.getElementById('searchInput');
const allGenre = document.getElementById('allGenre');
const movieList = document.getElementById('movieList');

let movies = [
    {
        name: "Baby Face",
        category: "comedy",
        date: 2023,
        image: "IMG/babyface.jpeg"
    },
    {
        name: "Laugh Out Loud",
        category: "comedy",
        date: 2024,
        image: "IMG/oldman.jpeg"
    },
    {
        name: "Adventure",
        category: "drama",
        date: 2014,
        image: "IMG/forest.jpeg"
    },
    {
        name: "Men On Earth",
        category: "drama",
        date: 2020,
        image: "IMG/skyscrapper.jpeg"
    },
    {
        name: "Deadly Wolves",
        category: "action",
        date: 2010,
        image: "IMG/goggle.jpeg"
    },
    {
        name: "Star drift",
        category: "action",
        date: 2024,
        image: "IMG/future.jpeg"
    }
];

let filter = 'all';

allGenre.addEventListener('change', () => {
    filter = allGenre.value;
    showMovie();
});

searchInput.addEventListener('input', () => {
    showMovie();
});

function showMovie() {
    movieList.innerHTML = '';
    const search = searchInput.value.toLowerCase();
    movies.forEach((item, index) => {
        if (filter !== 'all' && item.category !== filter) {
            return;
        }

        if (search && !item.name.toLowerCase().includes (search)) {
            return;
        }

        const card = document.createElement('div');
        card.className = 'film-card';

        card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
       <h4>${item.name}<h4>
       <p class="genre">${item.category}<p>
       <p>${item.date}</p>
       <button onclick="watchList(${index})">Add to Watchlist</button>
        `;
        movieList.appendChild(card);
    });
}

showMovie();

let watch = JSON.parse(localStorage.getItem('watch')) || [];

function watchList(i) {
    watch.push(movies[i]);
    localStorage.setItem("watch", JSON.stringify(watch));
    alert(movies[i].name + " Added to watchList")
}
 


const select = document.querySelector('.select');
const searchBtn = document.querySelector('.search-btn');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const director = document.querySelector('.director');
const producer =  document.querySelector('.producer');
const releaseDate = document.querySelector('.release-date');
const infoContainer = document.querySelector('.info-container');

fetch('https://ghibliapi.herokuapp.com/films')
    .then((res) => res.json())
    .then(movies => {
        movies.forEach(movie => {
            const option = document.createElement('option');
            option.textContent = movie.title;
            select.append(option);
        });

        searchBtn.addEventListener('click', () => {
            infoContainer.classList.remove('hidden')
            for (let i = 0; i < movies.length; i++) {
                if(movies[i].title === select.value){
                    title.textContent = movies[i].title;
                    description.textContent = movies[i].description;
                    director.textContent = movies[i].director;
                    producer.textContent = movies[i].producer;
                    releaseDate.textContent = movies[i].release_date;
                }
            }
        })
    }).catch(() => {
        console.log('Smth went wrong')
    })



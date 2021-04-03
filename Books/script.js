const searchInput = document.querySelector('.input');
const searchBtn = document.querySelector('.search-btn');
const resultContainer = document.querySelector('.result-container');
const loading = document.querySelector('.loading');
const paginationContainer = document.querySelector('.pagination-container');


const SearchInfo = {
    value: "",
    currentPage: 1,
    pageCount: 0
};

const getBooks = () => {
    loading.classList.remove("hidden");
    fetch(`http://openlibrary.org/search.json?q=${SearchInfo.value}&page=${SearchInfo.currentPage}`)
        .then((res) => res.json())
        .then((book) => {

            SearchInfo.pageCount = Math.ceil(book.numFound / 100);

            book.docs.forEach((el) => {
                const p = document.createElement('p');
                p.textContent = el.title;
                resultContainer.append(p);
            })

            loading.classList.add("hidden");
            
            paginationContainer.innerText = '';

            for (let i = 1; i <= SearchInfo.pageCount; i++) {
                const span = document.createElement('span');

                span.style.marginLeft = '20px';
                span.style.textDecoration = 'underline';
                span.style.cursor = 'pointer';

                span.textContent = i;

                span.addEventListener('click', () => {
                    SearchInfo.currentPage = i;
                    resultContainer.innerText = '';
                    getBooks();
                })

                paginationContainer.append(span);
            }
        })
        .catch(() => {
            console.log('Something went wrong!');
        });
};

searchBtn.addEventListener('click', () => {
    const BookName = searchInput.value.split(' ').join('+');
    SearchInfo.value = BookName;
    resultContainer.innerText = '';
    getBooks();
})

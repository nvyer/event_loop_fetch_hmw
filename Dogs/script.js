const breedList = document.querySelector(".breed-container");
const imageContainer = document.querySelector(".image-container");

breedList.addEventListener('change', selectBreed)

fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => res.json())
    .then((data) => {
        const breeds = data.message;
        for (let dog in breeds) {
            const option = document.createElement('option');
            option.setAttribute('value', `${dog}`);
            option.textContent = dog;
            breedList.append(option);
        }
    })
  
function selectBreed({ target: { value } }) {
    fetch(`https://dog.ceo/api/breed/${breedList.value}/images/random`)
        .then(res => res.json())
        .then(({ message: image }) => {
            const img = document.createElement('img');
            img.setAttribute('src', image);
            img.style.width = '500px';
            imageContainer.innerText = '';
            imageContainer.append(img);
        });
};

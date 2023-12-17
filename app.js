document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const displayedImage = document.querySelector('.displayed-image');
    const imageDescription = document.querySelector('.image-description');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    let currentIndex = 0;

    const descriptions = ['Pink cocktail in a tall glass on bar top', 'Cocktail in a tall glass on a white table', 'Yellow cocktail in a tall glass on a bar', 'Transparent alcoholic drink in a tall glass decorated with green olives', 'White creamy alcoholic drink in a tall glass decorated with a colorful cocktail umbrella'];

    function displayImage(index) {
        const imagePaths = ['./imgs/cosmopolitan.jpg', './imgs/daiquiri.jpg', './imgs/margarita.jpg', './imgs/martini.jpg', './imgs/pinacolada.jpg'];
        displayedImage.src = imagePaths[index];
        displayedImage.alt = thumbnails[index].alt;
        currentIndex = index;

        thumbnails.forEach((thumbnail, i) => {
            if (i === currentIndex) {
                thumbnail.classList.add('selected');
            } else {
                thumbnail.classList.remove('selected');
            }
        });

        imageDescription.textContent = descriptions[index];
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            displayImage(index);
        });

        thumbnail.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                displayImage(index);
            }
        });

        thumbnail.setAttribute('tabindex', '0');
    });

    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? thumbnails.length - 1 : currentIndex - 1;
        displayImage(currentIndex);
    });

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex === thumbnails.length - 1) ? 0 : currentIndex + 1;
        displayImage(currentIndex);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex === 0) ? thumbnails.length - 1 : currentIndex - 1;
            displayImage(currentIndex);
        } else if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex === thumbnails.length - 1) ? 0 : currentIndex + 1;
            displayImage(currentIndex);
        } else if (event.key === ' ') {
            event.preventDefault();
            thumbnails[currentIndex].dispatchEvent(new MouseEvent('click'));
        }
    });

    displayImage(0);
});

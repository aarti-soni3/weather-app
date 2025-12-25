const backgroundImages = ['url("/Images/marcelo-unsplash.jpg")', 'url("/Images/wilfried-unsplash.jpg")', 'url("/Images/aaron-unsplash.jpg")', 'url("/Images/luke-unsplash.jpg")']

function setRandomBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = backgroundImages[randomIndex];
}

setRandomBackgroundImage();
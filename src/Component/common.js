const backgroundImages = ['url("src/Images/marcelo-unsplash.jpg")', 'url("src/Images/wilfried-unsplash.jpg")', 'url("src/Images/aaron-unsplash.jpg")', 'url("src/Images/luke-unsplash.jpg")']

function setRandomBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = backgroundImages[randomIndex];
}

setRandomBackgroundImage();
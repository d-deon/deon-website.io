document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.icon');
    const clickSound = new Audio('audio/blop-sound.mp3');

    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            const iconId = this.getAttribute('data-icon-id');
            const currentImage = this.querySelector('img').src;
            const newImageSrc = determineNewImage(iconId, currentImage);
            this.querySelector('img').src = newImageSrc;
            clickSound.play();
        });
    });

   
    function determineNewImage(iconId, currentImage) {
        switch (iconId) {
            case 'crosswords':
                return 'images/discover_puzzles.jpg';
            case 'puns':
                return 'images/discover_pelvis.png';
            case 'friends':
                return 'images/discover_friends.jpg';
            case 'music':
                return 'images/guitar-pic-bw.jpg';
            default:
                return currentImage;
        }
    }
});

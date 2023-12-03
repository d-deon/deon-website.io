document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.icon');
    const clickSound = new Audio('audio/blop-sound.mp3');

    icons.forEach(icon => {
        icon.setAttribute('data-state', 'original');
        icon.addEventListener('click', function () {
            const iconId = this.getAttribute('data-icon-id');
            const currentState = this.getAttribute('data-state');

            const newState = currentState === 'original' ? 'new' : 'original';

            const newImageSrc = determineNewImage(iconId, newState);
            this.querySelector('img').src = newImageSrc;

            clickSound.play();

            this.setAttribute('data-state', newState);
        });
    });

    function determineNewImage(iconId, state) {
    
        switch (iconId) {
            case 'crosswords':
                return state === 'original' ? 'images/discover_puzzles.jpg' : 'images/cross-med.png';
            case 'puns':
                return state === 'original' ? 'images/discover_pelvis.png' : 'images/releases.small.png';
            case 'friends':
                return state === 'original' ? 'images/discover_friends.jpg' : 'images/more-small.png';
            case 'music':
                return state === 'original' ? 'images/guitar-pic-bw.jpg' : 'images/gigs-small.png';
            default:
                return currentImage;
        }
    }
});

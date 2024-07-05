const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const pages = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore omnis minus maiores laboriosam, facere in beatae esse.",
    "Page 2: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    "Page 3: At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
];
let currentPage = 0;

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

letter.addEventListener('click', (event) => {
    event.stopPropagation();
    letter.classList.toggle('fullscreen');
    nextButton.classList.toggle('hidden');
    prevButton.classList.toggle('hidden');
});

nextButton.addEventListener('click', (event) => {
    event.stopPropagation();
    if (currentPage < pages.length - 1) {
    currentPage++;
    document.querySelector('.page').textContent = pages[currentPage];
    }
});

prevButton.addEventListener('click', (event) => {
    event.stopPropagation();
    if (currentPage > 0) {
    currentPage--;
    document.querySelector('.page').textContent = pages[currentPage];
    }
});
// YouTube API code
    let player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'iTWYa0t5COk&ab',  // Replace with your YouTube video ID
        events: {
          'onReady': onPlayerReady
        }
      });
    }

    function onPlayerReady(event) {
      event.target.playVideo();
    }

    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

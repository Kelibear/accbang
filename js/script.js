const bg_music = document.getElementById('bg_music');

function start() {
  let heart = document.getElementById("heart");
  heart.addEventListener("transitionend", () => {
    bg_music.play();
});
  bg_music.addEventListener('ended', () => {
    bg_music.play();
});
}
const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const pageInfo = document.querySelector('.page-info');
const pages = [
  "maaf ya bang saya mau lanjut tugas aja",
  "btw dengan segala hormat bang, terima saya wkwkwk"
];
let currentPage = 0;

function updatePageInfo() {
  pageInfo.innerHTML = `${currentPage + 1}/${pages.length}`;
}

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
    document.querySelector('.page').innerHTML = pages[currentPage];
    updatePageInfo();
  }
});

prevButton.addEventListener('click', (event) => {
  event.stopPropagation();
  if (currentPage > 0) {
    currentPage--;
    document.querySelector('.page').innerHTML = pages[currentPage];
    updatePageInfo();
  }
});

// Initialize the first page content at the letter
document.querySelector('.page').innerHTML = pages[currentPage];
updatePageInfo();

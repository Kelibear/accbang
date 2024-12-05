const bg_music = document.getElementById('bg_music');

function start() {
  let heart = document.getElementById("heart");

  // Menunggu event transition-end pada heart sebelum memutar musik
  heart.addEventListener("transitionend", () => {
    // Pastikan audio berhasil diputar
    bg_music.play().catch(error => {
      console.error("Error playing audio:", error);
    });
  });
  
  // Cek jika audio sudah selesai diputar, dan mulai lagi jika perlu
  bg_music.addEventListener('ended', () => {
    bg_music.play().catch(error => {
      console.error("Error replaying audio:", error);
    });
  });
}
const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const pageInfo = document.querySelector('.page-info');
const pages = [
  "tes tes tes gweh keren",
  "sdfsdfsdf",
  "sdgsvdvs",
  "sdbvsdfs",
  "sdvsedvxs",
  "svsedvse",
  "sdvsevds",
  "vsdvsdvs",
  "vseesegdv",
  "With love, Keli.<br><br><br><button onclick=\"location.href='http://www.katysdaisies.com/share/UmhlaW5hfEtlbGl8SSdtIFNvcnJ5LApJIExvdmUgWW91LnxDcnkgQWJvdXQgSXQgTGF0ZXI6IFNoYW1lbGVzcyBTdW1tZXJ8NDM=/';\">For You, My Love</button>",
  "\[blank\]<br><br>I leave this page blank, incase our story continues."
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

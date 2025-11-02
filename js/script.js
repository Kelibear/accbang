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
  "I wake up every morning with a smile on my face, for I know that you exist in my life. From your presence that i feel every day, and your calming voice.",
  "Maybe you don't think of me like that, but I do. And I would like to, if there's any chance, i would like to make stories with you. Within this, I craft this letter for you, revealing the depth of my feelings towards you.",
  "You're so beautiful, beautiful like \"The Starry Night\" by Vincent Van Gogh because every detail of yours made you more perfect. If only you could see yourself through my eyes. Oh man, If i tend to write a poetry, i would look at you forever because you are a poem that never ends.",
  "When we first met, I couldn't even remember your face. But now your face is stuck in my mind. Do you remember when I bought you ice cream for the first time? You probably don't but, It is really my first time giving a woman an ice cream, and all i wanna do is appreciate your hard work on dance at that time.",
  "No i don't like you just because you are pretty. And no, i don't like you because of your body appearance or anything. I like you because it's you and that's what i feel. I could feel this much of a feelings, because it's you. I want you when it pours down with rain and I want you when the sun decides to come out. Because I want to Like You with my soul, in case my mind forgets and my heart stops.<br><br><b>The person I really want is YOU.</b>",
  "God i really love your smile. Every time you smile, I got butterflies, nah i got the whole flower garden in my stomach—I'm Addicted.—If only i could put it on a canvas, i would stare at it forever. Unfortunately no one could paint something as perfect as your smile.<br><br><b>I wanna be the reason that smile blooms.<b>",
  "To be honest with you, at first your looks and appearance are not really my type, but I still fell for you, I'm searching and searching again for reasons, til i get to a point to give up. It's been a year, and i finally realized that I love what's the inside, i really love how you are so kind, caring, emotional, energetic, and many other things. And after that, all about you becomes so beautiful to me, your flaws, your imperfections, becomes perfect in my eyes. You are... the person who can make me feel this way. Even though we're separated by many things, and maybe you already have someone in your heart, i still want you to be mine, despite all the barriers, forever. Since then, i know what my heart really craves for...<br><br><b>its you... my heart craves for you in all of your existence.</b>",
  "My heart kinda hurt sometimes, and it's always for a specific reason about you. I'm not your anything, but I still feel the ache around my heart whenever i see you sad, whenever i see you mad. That's why, <b>I want to take part in your life being the person who will always be there even if you are at your lowest.</b> Don't ever look down on yourself! You are enough. <b>you are the one that i want.</b> Well, I don't think I deserve you either, but I pray and try everyday to make me worthy of you.",
  "I need you, like the plants needs their Carbon Dioxide... I can't breathe if you're not near. I'm sorry i can't tell you directly but hope this is enough.",
  "You know, I waited a year to see where these feelings come and are gonna be after. because that's what love does, they wait. I will stay even if things get hard, you will always have a special place in my heart, You deserve all the love in the world, well i hope im your world haha. I do hope, because...<br><br><b>You are... my everything.</b><br><br>Thank you for being yourself. And sorry if I'm not enough.<br><br>Sincerely, Falih.<br><br><br><button onclick=\"location.href='https://www.katysdaisies.com/share/QW5nZWx8RmFsaWh8SSBMaWtlIFlvdS58Q3J5IEFib3V0IEl0IExhdGVyOiBTaGFtZWxlc3MgU3VtbWVyfDQz/';\">For you, Angel.</button>",
  "\[blank\]<br><br>I leave this page blank, in case you want our story to continue."
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

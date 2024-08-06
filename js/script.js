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
const pages = [
  "I wake up every morning with a smile on my face, for I know that you exist in my life. You have given me comfort and security, that I have never felt in my life. From your presence that i feel every night, and your calming voice.",
  "Maybe we aren't used to it now, but i would like to, if there's any chance, i would like to open a new page with you. I don't need to proclaim that I have feelings for you, for you know as well as I do that nothing else matters to me as much as you do. I know that I love you, when the mere thoughts of loving someone else seemed impossible. Love feels light if it were you. Within this, I craft this letter for you, revealing the depth of my feelings towards you.",
  "You're so beautiful, beautiful like \"Guernica\" by Pablo Picasso because every detail of yours made you more perfect. World is temporary yet i would be like to keep you eternal in my heart. I love you 'til the day that i die... that's wrong, I love you even if i die. I love you more than the sky, and you know how much i love the sky... This life seems like a puzzle, and i found my last piece in you. Oh man, If i tend to write a poetry, i would look at you forever because you are a poem that never ends.",
  "When we first talked, i felt a little electric shock inside of me, I felt like i found my \"Twin Flame\" I found my soul tangled in yours. Do you remember when you first told me that you like me? I'm sorry I can't believe someone that I like would like me back that's why i answered it like that. I don't think about what it could affect you.",
  "Since then, i decided to make sure u know that i like you by saying that i love you everyday. No i dont like you out of pity. No i dont like you just because you are pretty. And no, i dont like you because of your body appearance or everything. I like you because its you and that's what i feel. I could feel this much of a feelings, because it's you. I want you when it pours down with rain and I want you when the sun decides to come out. I promise to love you in every season. Because I Love You with my soul, in case my mind forgets and my heart stops.",
  "God i really love your smile, the first time i saw it, it was on your notes that you uploaded. I got butterflies, nah i got the whole flower garden in my stomach. If only i could put it on a canvas, i would stare at it forever. Unfortunately no one could paint something as perfect as your smile.<br><br>I wanna be the reason that smile blooms.",
  "To be honest with you, at first your looks and appearance are not really my type, but when i get to know you i still fell for you, i love what's the inside, i really love how you are so kind, caring, smart, energetic, clingy, and many other things. And after that, all about you becomes so beautiful to me, your flaws, your imperfections, becomes perfect in my eyes. You are... the only person who can make me feel this way. Even though we're separated by a thousand miles, and we're never seeing each other, i fell for your soul, i still want you to be mine, despite all the barriers, forever. Since then, i know what my heart really craves for, its you... my heart craves for you in all of your existence.",
  "So, dont be afraid to be yourself around me, and dont be afraid of losing yourself. You won't, even if you think it is, you are still you no matter what. <b>I want to take part in your life being the person who will always be there even if you are at your lowest.</b> Don't ever look down on yourself! You are always enough for me, <b>you are the one that i want.</b> Well, I don't think I deserve you either, but I pray and try everyday to make me worthy of you.",
  "I need you like the plants needs their Carbon Dioxide... I can't breathe if you're not near. Im sorry that you're hurting, I swear i just want to love you, and i can't do it properly... I can't keep you to stay... If loving me is hard, I apologize.",
  "You know, I wait because that's what love does, they wait. I will stay even if things get hard, you will always have a special place in my heart, You deserve all the love in the world, well i hope im your world hahaha. I do hope, because...<br><br><b>You are... my everything.</b><br><br>Thank you for being yourself. And sorry I'm not enough.<br><br>With love, Keli.<br><br><br><button onclick=\"location.href='http://www.katysdaisies.com/share/UmhlaW5hfEtlbGl8SSdtIFNvcnJ5LApJIExvdmUgWW91LnxDcnkgQWJvdXQgSXQgTGF0ZXI6IFNoYW1lbGVzcyBTdW1tZXJ8NDM=/';\">For You, My Love</button>",
  "\[blank\]<br><br>I leave this page blank, incase our story continues."
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
    document.querySelector('.page').innerHTML = pages[currentPage];
  }
});

prevButton.addEventListener('click', (event) => {
  event.stopPropagation();
  if (currentPage > 0) {
    currentPage--;
    document.querySelector('.page').innerHTML = pages[currentPage];
  }
});

// Initialize the first page content at the letter
document.querySelector('.page').innerHTML = pages[currentPage];

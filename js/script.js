const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const pages = [
  "I wake up every morning with a smile on my face, for I know that you exist in my life. You have given me comfort and security, that I have never felt in my life. From your presence that i feel every night, and your calming voice.",
  "I don't need to proclaim that I have feelings for you, for you know as well as I do that nothing else matters to me as much as you do. I know that I love you, from when I believed the smallest part of myself deserved you. Love feels light if it were you. Within this, i craft this letter for you, revealing the depth of my feelings towards you.",
  "You're so beautiful, beautiful like \"Starry Night\" by Van Gogh... And \"Guernica\" by Pablo Picasso because every detail of yours made you more perfect. World is temporary yet i would be like to keep you eternal in my heart.",
  "I love you til the day that i die... well that's a little bit wrong, I love you even if i die. I love you more than the sky, and you know how much i love the sky... If life is a puzzle, you are my last piece.",
  "When we first talked, i felt a little electric shock inside of me, I felt like i found my \"Twin Flame\" I found my soul tangled in yours. Do you remember when you first told me that you like me? I'm sorry I can't believe someone that I like would like me back that's why i answered it like that. I don't think about what it could affect you.",
  "since then, i decided to make sure u know that i like you by saying that i love you everyday. No i dont like you out of pity. No i dont like you just because you are pretty. And no, i dont like you because of your body appearance or everything. I like you because its you and that's what i feel. I could feel this much of a feelings, because it's you.",
  "I don't care who you had first and I don't care who you had the longest, because the truth is i want to take care of you and your heart better than anybody else's did, i want to have you for the rest of my life, i want you and only you. I promise to love you in every season. Because I Love You with my soul, in case my mind forgets and my heart stops.",
  "So, dont be afraid to be yourself around me, and dont be afraid of losing yourself. You won't, even if you think it is, you are still you no matter what. <b>I want to take part in your life being the person who will always be there even if you are at your lowest.</b> Don't ever look down on yourself! You are always enough for me, <b>you are the one that i want.</b>",
  "I need you like the plants needs their Carbon Dioxide... I can't breathe if you're not near. Im sorry that you're hurting, I swear i just want to love you, and i can't do it properly... I can't keep you to stay...",
  "You know, I wait because that's what love does, they wait. I will stay even if things get hard, you will always have a special place in my heart, You deserve all the love in the world, well i hope im your world hahaha. I do hope, because...<br><br><b>You are... my everything.</b><br><br>Thank you for being yourself. And sorry I'm not enough.<br><br>With love, Keli.<br><br><br><button onclick="location.href='http://www.katysdaisies.com/share/UmhlaW5hfEtlbGl8WW91J3JlIEFsbCBJIFdhbnR8Q3J5IEFib3V0IEl0IExhdGVyOiBTaGFtZWxlc3MgU3VtbWVyfDQz/?whatsapp=1';">GRAB YOUR GIFT</button>"
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

// Initialize the first page content
document.querySelector('.page').innerHTML = pages[currentPage];

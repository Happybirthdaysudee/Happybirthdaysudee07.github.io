// Array of Image Links (Replace with actual image URLs)
const imageLinks = [
    "00.jpg", "images/photo2.jpg", "images/photo3.jpg", "images/photo4.jpg",
    "images/photo5.jpg", "images/photo6.jpg", "images/photo7.jpg", "images/photo8.jpg",
    "images/photo9.jpg", "images/photo10.jpg", "images/photo11.jpg", "images/photo12.jpg",
    "images/photo13.jpg", "images/photo14.jpg", "images/photo15.jpg", "images/photo16.jpg",
    "images/photo17.jpg", "images/photo18.jpg", "images/photo19.jpg", "images/photo20.jpg",
    "images/photo21.jpg", "images/photo22.jpg", "images/photo23.jpg", "images/photo24.jpg",
    "images/photo25.jpg", "images/photo26.jpg", "images/photo27.jpg", "images/photo28.jpg",
    "images/photo29.jpg", "images/photo30.jpg", "images/photo31.jpg", "images/photo32.jpg",
    "images/photo33.jpg", "images/photo34.jpg", "images/photo35.jpg", "images/photo36.jpg"
];

// Array of Video Links (Replace with actual video URLs)
const videoLinks = [
    "videos/video1.mp4", "videos/video2.mp4", "videos/video3.mp4", "videos/video4.mp4",
    "videos/video5.mp4", "videos/video6.mp4", "videos/video7.mp4", "videos/video8.mp4",
    "videos/video9.mp4", "videos/video10.mp4", "videos/video11.mp4", "videos/video12.mp4",
    "videos/video13.mp4", "videos/video14.mp4", "videos/video15.mp4"
];

// Function to Load Images into the Gallery
const photoGallery = document.getElementById("photo-gallery");
imageLinks.forEach(img => {
    let col = document.createElement("div");
    col.className = "col-md-3 mb-3";
    col.innerHTML = <img src="${img}" class="img-fluid rounded shadow">;
    photoGallery.appendChild(col);
});

// Function to Load Videos into the Gallery
const videoGallery = document.getElementById("video-gallery");
videoLinks.forEach(video => {
    let col = document.createElement("div");
    col.className = "col-md-4 mb-3";
    col.innerHTML = `
        <video controls class="w-100 rounded shadow">
            <source src="${video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    videoGallery.appendChild(col);
});

// Random Birthday Jokes
const jokes = [
    "Why did the birthday cake go to the doctor? Because it was feeling crumby!",
    "What kind of music is scary for birthday balloons? Pop music!",
    "What do you say to a cat on its birthday? Happy Purr-thday!",
    "What did one candle say to the other? Don’t birthdays just burn you out?",
    "Why did the teddy bear skip cake? Because it was already stuffed!"
];

function showJoke() {
    const jokeText = document.getElementById('joke-text');
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeText.textContent = randomJoke;
}

// Confetti Effect
const confettiCanvas = document.getElementById("confetti");
const confettiCtx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

function createConfetti() {
    confettiCtx.fillStyle = "rgba(255, 255, 255, 0.8)";
    for (let i = 0; i < 100; i++) {
        confettiCtx.fillRect(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 5, 5);
    }
}

setInterval(createConfetti, 500);

console.log("JavaScript working!");

const openBtn = document.querySelector(".open-btn");
const welcomeScreen = document.querySelector(".welcome-screen");
const birthdaySection = document.querySelector(".birthday-section");

openBtn.addEventListener("click", function () {

    console.log("Surprise opened!");

    // Welcome screen fade out
    welcomeScreen.classList.add("hide");

    setTimeout(function () {

        // Welcome screen remove
        welcomeScreen.style.display = "none";

        // Birthday section show
        birthdaySection.classList.add("show");
        
        document.body.classList.remove("lock-scroll");

        // Confetti start 🎉
        createConfetti();

    }, 800);

});


function createConfetti() {

    const colors = [
        "#ff4fa3",
        "#8b5cf6",
        "#facc15",
        "#22d3ee",
        "#ffffff"
    ];

    for (let i = 0; i < 50; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        // Random horizontal position
        confetti.style.left =
            Math.random() * 100 + "vw";

        // Random color
        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        // Random animation speed
        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";

        // Random delay
        confetti.style.animationDelay =
            Math.random() * 0.5 + "s";

        document.body.appendChild(confetti);

        // Confetti ko 5 sec baad remove karo
        setTimeout(function () {
            confetti.remove();
        }, 5000);
    }
}
// Scroll reveal observer
const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.2
    }
);


// Ab elements select karo
const revealElements =
    document.querySelectorAll(".reveal");


// Aur observer start karo
revealElements.forEach(function (element) {

    observer.observe(element);

});

/* <!-- Final gift reavel --> */
const giftBtn = document.querySelector(".gift-btn");
const giftBox = document.querySelector(".gift-box");
const finalMessage = document.querySelector(".final-message");

let giftOpened = false;

giftBtn.addEventListener("click", function () {

    if (giftOpened) {
        return;
    }

    giftOpened = true;

    giftBox.classList.add("open");
    finalMessage.classList.add("show-message");

    createConfetti();
});


const text = "Welcome to my Web-Tour! I'm a dedicated individual with a strong academic background in computer studies and coding. I excelled in both Ordinary Levels National and Cambridge examinations and currently pursue a degree in Software Engineering. As a Leo member of the Colombo Knights, affiliated with Lions International, I actively contribute to my community. With a passion for public speaking and experience as a compere, I bring excellent communication skills to the table. My website is a platform to share my expertise in software engineering and my commitment to community service. Let's embark on this exciting technological journey together!  😀";

let index = 0;
const typingSpeed = 20;
const textElement = document.getElementById("portfolio-text");

function typeText() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

window.addEventListener("scroll", function () {
    const elementPosition = textElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition - windowHeight <= 0) {
        typeText();
        window.removeEventListener("scroll", arguments.callee);
    }
});

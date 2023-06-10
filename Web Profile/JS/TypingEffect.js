document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("TypedText");
    const texts = ["Developer", "Designer", "Compere", "AI Enthusiast !"];
    let currentTextIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let delayBetweenTexts = 2000;
    let charIndex = 0;

    function type() {
        const currentText = texts[currentTextIndex];

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (charIndex === currentText.length && !isDeleting) {
            isDeleting = true;
            setTimeout(type, delayBetweenTexts);
        } else if (charIndex === 0 && isDeleting) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    type();
});

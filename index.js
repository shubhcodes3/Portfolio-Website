const dynamicText = document.querySelector("h1 span");
const words = ["Frontend Developer."];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentword = words[wordIndex];
    const currentchar = currentword.substring(0, charIndex);
    dynamicText.textContent = currentchar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentword.length){
        // if condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if(isDeleting && charIndex > 0){
        // if condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect,100);
    }else{
        // if word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect,1200);
    }
}

typeEffect();
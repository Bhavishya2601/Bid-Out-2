// speak aloud
let isReading = false;
let speech;

const text = document.getElementById('text').innerText;
const readButton = document.getElementById('readButton');

readButton.addEventListener('click', () => {
    if (!isReading) {
        speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        speech.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Female'); // You may need to adjust this voice name based on available options
        window.speechSynthesis.speak(speech);
        isReading = true;
        readButton.innerText = "Stop Reading";
    } else {
        window.speechSynthesis.cancel();
        isReading = false;
        readButton.innerText = "Read Text";
    }
});



// for bidding
// let currentNumber = parseInt(localStorage.getItem('currentNumber')) || parseInt(document.getElementById('output1').innerHTML);
// if (!isNaN(currentNumber)) {
//     document.getElementById('output1').innerText = `${currentNumber}`;
// }

// document.getElementById('guessForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const guess = parseInt(document.getElementById('guessInput').value);

//     // console.log(guess, currentNumber)
//     if (guess > currentNumber) {
//         currentNumber = guess;
//         alert('Your Bid has been Successfully Placed.')
//         document.getElementById('output1').innerText = `${currentNumber}`;
//         localStorage.setItem('currentNumber', currentNumber);
//     } else {
//         alert('Bid amount can\'t be less than or equal to current bid');
//     }

//     // Reset the form
//     document.getElementById('guessInput').value = '';
// });

// to change the slides
let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("card");
        let captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
        }


// for description part
function showDescription() {
    document.getElementById('descriptionSection').style.display = 'block';
    document.getElementById('bidHistory').style.display = 'none';
    document.getElementById('bidProduct').style.display = 'none';
    document.getElementById('bidReview').style.display = 'none';
}
function showHistory(){
    document.getElementById('descriptionSection').style.display = 'none';
    document.getElementById('bidHistory').style.display = 'block';
    document.getElementById('bidProduct').style.display = 'none';
    document.getElementById('bidReview').style.display = 'none';
}
function showProducts() {
    document.getElementById('descriptionSection').style.display = 'none';
    document.getElementById('bidHistory').style.display = 'none';
    document.getElementById('bidReview').style.display = 'none';
    document.getElementById('bidProduct').style.display = 'block';
}
function showReview(){
    document.getElementById('descriptionSection').style.display = 'none';
    document.getElementById('bidHistory').style.display = 'none';
    document.getElementById('bidReview').style.display = 'block';
    document.getElementById('bidProduct').style.display = 'none';
}

const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = 'service_hlj5eiu'
const templateId = 'template_wnlycur'
const apikey = '6a8RtEDdsG1hM3yWQ'

function sendEmail(event){
    event.preventDefault()
    emailjs.init(serviceId)
    emailjs.sendForm(serviceId, templateId,frmEmail,apikey)
    .then(result => Swal.fire('Su mensaje se ha enviado con exito') )
    .catch(error =>{
        Swal.fire({
            icon: 'error',
            title:'Oops. . .',
            text: 'No ha sido posible enviar el mensaje',
        });
    });
}

const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector('.container');

menuIcon.addEventListener("click", () => {
    container.classList.toggle("change");
})


particlesJS.load('particles-js', '/particles.json', function() {
    console.log('callback - particles.js config loaded');
});




let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent="",
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    })
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        },i*80);
    });
    nextWord.style.opacity= "1";
    Array.from(nextWord.children).forEach((letter,i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in"
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000);


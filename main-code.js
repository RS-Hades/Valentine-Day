const button = document.getElementById('second-button');
button.addEventListener('click', () => {
    document.body.classList.toggle('answer-no');
})

const heart = document.getElementById('heart');
heart.addEventListener('click', () => {
    document.body.classList.toggle('expand');
})
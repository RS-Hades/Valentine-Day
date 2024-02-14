// FIRST BUTTON !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const select1 = document.getElementById('button-select1');
const word1 = document.getElementById('anchor1');

select1.addEventListener('click', () => {
    const largo1 = document.getElementsByClassName('selected1');
    if (largo1.length === 0) {
        word1.innerHTML = 'Selected'
    } else if (largo1.length !== 0) {
        word1.innerHTML = 'Select'
    };

    document.body.classList.toggle('selected1');
});


// SECOND BUTTON !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const select2 = document.getElementById('button-select2');
const word2 = document.getElementById('anchor2');

select2.addEventListener('click', () => {
    const largo2 = document.getElementsByClassName('selected2');
    if (largo2.length === 0) {
        word2.innerHTML = 'Selected'
    } else if (largo2.length !== 0) {
        word2.innerHTML = 'Select'
    };

    document.body.classList.toggle('selected2');
});


// THIRD BUTTON !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const select3 = document.getElementById('button-select3');
const word3 = document.getElementById('anchor3');

select3.addEventListener('click', () => {
    const largo3 = document.getElementsByClassName('selected3');
    if (largo3.length === 0) {
        word3.innerHTML = 'Selected'
    } else if (largo3.length !== 0) {
        word3.innerHTML = 'Select'
    };

    document.body.classList.toggle('selected3');
});



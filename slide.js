const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('#left');
const next = document.querySelector('#right');

const nxtslide = () => {
    const current = document.querySelector('.curr');
    current.classList.remove('curr');

    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('curr');
    }
    else{
        slide[0].classList.add('curr');
    }
    setTimeout(() => current.classList.remove('curr'));
}

const prevslide = () => {
    const current = document.querySelector('.curr');
    current.classList.remove('curr');

    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('curr');
    }
    else{
        slide[slide.length - 1].classList.add('curr');
    }
    setTimeout(() => current.classList.remove('curr'));
}

next.addEventListener('click',e => {
    nxtslide();
});

prev.addEventListener('click',e => {
    prevslide();
});

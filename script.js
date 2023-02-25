let btn = document.getElementById('btn');
let vid = document.getElementById('vid');

btn.addEventListener('click' , () => {
    vid.style.display = 'block';
    vid.play();
})
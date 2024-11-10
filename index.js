const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((itemX) => {
        itemX.classList.remove('active');
    });
    this.classList.add('active');
};

list.forEach((itemX) =>
itemX.addEventListener('click', activeLink));

/*
let cursor = document.querySelector('.cursor');
for (let i=0; i<200; i++){
    let circle = document.createElement('div');
    circle.classList.add('circle')
    cursor.appendChild(circle);
}
document.addEventListener("mousemove", e => {
    gsap.to(".circle", {
        x: e.clientX,
        y: e.clientY,
        stagger: -0.0025,
        scale: (i, target) => {
            return 1 + (i * (2/200));
        }
    })
})
*/

document.addEventListener("DOMContentLoaded",() => {
    let cursor = document.querySelector('.cursor');
    let textContent = "animate text trail effect";

    for(let i=0;i<textContent.length;i++){
        let span = document.createElement('span');
        span.classList.add('text');
        span.style.setProperty('--i',i+1);
        span.style.left = i*0.6+'em';
        span.textContent=textContent[i];
        span.style.filter=`hue-rotate(${i*10}deg)`;
        cursor.appendChild(span)
    }
})

document.addEventListener("mousemove", e => {
    gsap.to(".text", {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.1
    })
})
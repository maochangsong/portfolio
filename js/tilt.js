document.querySelector('body').addEventListener('mousemove', (e)=>{
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX}`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY}`);
});

function setCardsRect()
{
    document.querySelectorAll('.keywordCard').forEach((card)=>{
        const bounding = card.getBoundingClientRect();
    
        card.style.setProperty('--position-x', `${bounding.x}`);
        card.style.setProperty('--position-y', `${bounding.y}`);
        card.style.setProperty('--width-half', `${bounding.width / 2}`);
        card.style.setProperty('--height-half', `${bounding.height / 2}`);
    });
}


// 在页面尺寸改变的时候，重新设置卡片的矩形位置
window.addEventListener('load', setCardsRect);
window.addEventListener('resize', setCardsRect);
window.addEventListener('scroll', setCardsRect);

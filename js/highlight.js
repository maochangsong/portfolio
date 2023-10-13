document.querySelector('body').addEventListener('mousemove', (e)=>{
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX}`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY}`);
});

function setLinksPositions() {
    document.querySelectorAll('.containerArticleKeypoint').forEach((a)=>{
        const bounding = a.getBoundingClientRect();

        a.style.setProperty('--position-x', `${bounding.x}`);
        a.style.setProperty('--position-y', `${bounding.y}`);
    });
}
// 在页面尺寸改变的时候，重新设置聚光灯超链接的矩形位置
window.addEventListener('load', setLinksPositions);
window.addEventListener('resize', setLinksPositions);
window.addEventListener('scroll', setLinksPositions);

// 简单版本，聚光灯不会在超过a的区域时消失
// document.querySelectorAll('a').forEach((a)=>{
//     a.addEventListener('mousemove', (e)=>{
//         const linkElem = e.target;
//         linkElem.style.setProperty('--offsetX', `${e.offsetX}px`);
//         linkElem.style.setProperty('--offsetY', `${e.offsetY}px`);
//     });
// });
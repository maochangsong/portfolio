let headerArray = new Array();
let menuArray = new Array();
const headerTolerance = 200;
document.querySelectorAll(".contentArticleNav").forEach((e)=>{
    // 按照节点顺序查询contentArticleNav标签的高度
    headerArray.push(e.offsetTop - headerTolerance);
});
document.querySelectorAll(".contentMenuLink").forEach((e)=>{
    // 按照节点顺序修改菜单超链接的index值与超链接值
    const i = menuArray.push(e);
    e.style.setProperty("--index-self", i - 1);
    e.href = "javascript:scrollToIndex(" + (i - 1) + ");";
});



window.addEventListener("scroll", refreshMenu);
refreshMenu();

function refreshMenu() {
    let scrollY = this.scrollY;
    let selectingIndex;
    if (scrollY < headerArray[0])
        selectingIndex = 0;
    else if (scrollY >= headerArray[headerArray.length - 1])
        selectingIndex = headerArray.length - 1;
    else {
        for (let i = 1; i < headerArray.length; ++i) {
            if (scrollY >= headerArray[i-1] && scrollY < headerArray[i]) {
                selectingIndex = i - 1;
                break;
            }
        }
    }
    // 刷新菜单文字高亮情况
    menuArray.forEach(a=>{
        if (a.style.getPropertyValue('--index-self') == selectingIndex)
            a.style.setProperty('color', 'var(--text-color-base)');
        else
            a.style.setProperty('color', 'var(--text-color-unselect)');        
    });
    // 刷新菜单条handle位置
    document.querySelector('.contentMenuBarHandle').style.setProperty(
        '--position-center',
        `${menuArray[selectingIndex].offsetTop + menuArray[selectingIndex].offsetHeight / 2}`
    );
}

function scrollToIndex(index, time=400) {
    if (this.timer) clearInterval(this.timer);
    if (time <= 0) {
        document.documentElement.scrollTop = headerArray[index];
        return;
    }    
    const deltaTime = 20;
    const start = document.documentElement.scrollTop;
    const end = headerArray[index];

    let duration = 0;
    let t = 0;
    this.timer = setInterval(() => {
        duration += deltaTime;
        t = duration / time;
        if (t >= 1){
            t = 1;
            clearInterval(this.timer);
        }
        // 二阶缓入缓出函数
        let alpha = 0;
        if (t < 0.5) alpha = 2* t * t;
        else alpha = -2 * t * t + 4 * t - 1;
        document.documentElement.scrollTop = start + (end-start)*alpha; // 线性插值
    }, deltaTime);
}


// var io = new IntersectionObserver((entries)=>{
//     let entry = entries[0];
//     if (entry.isIntersecting)
//     {
//         let selectingIndex=headerMap.get(entry.target);
//         console.log(selectingIndex);
//     }
// });

// document.querySelectorAll('h3').forEach(h=>{
//     io.observe(h);
// })
// document.querySelectorAll('h4').forEach(h=>{
//     io.observe(h);
// })

// window.addEventListener("scroll", (event) => {   
//     let scrollY = this.scrollY;
//     console.log(scrollY);
//     this.contentheight  =
//     document.querySelectorAll 
//     let scrollY = this.scrollY;
//     console.log(scrollY);

//     console.log(document.body.clientHeight);
//     // console.log(`${scrollY / document.body.clientHeight}`);
//     document.querySelector('.contentMenuBarHandle').style.setProperty(
//         '--position-top-percent',
//         `${scrollY * 100 / document.body.clientHeight}%`
//         );
// });

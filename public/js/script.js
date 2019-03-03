let media = mql =>{
    const r_class = document.querySelectorAll('.sw-item');
    const w_wrapp = document.querySelector('#w_wrapp');

    if(!mql.matches){
        w_wrapp.classList.remove("wrrap-work");
        for(let i = 0; i< r_class.length; i++){
            r_class[i].classList.remove("col-md-3", "col-sm-6", "items-work");
            r_class[i].classList.add("swiper-slide");
        }
    }else{
        w_wrapp.classList.remove("swiper-wrapper");w_wrapp.classList.add("wrrap-work");
        for(let i =0; i< r_class.length; i++){
            r_class[i].classList.add("col-md-3","col-sm-6" ,"items-work");
            r_class[i].classList.remove("swiper-slide");
        }
    }
};

const mql = window.matchMedia("(min-width: 575px)");
const swiper = new Swiper('.swiper-container');

mql.addListener(media);
media(mql);

const navBtn = document.querySelector('.nav-btn');
const li = document.querySelectorAll('.nav-menu ul li');
const nav = document.querySelector('.nav-menu');
function animate(draw, duration) {
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        // определить, сколько прошло времени с начала анимации
        var timePassed = time - start;

        // возможно небольшое превышение времени, в этом случае зафиксировать конец
        if (timePassed > duration) timePassed = duration;

        // нарисовать состояние анимации в момент timePassed
        draw(timePassed);

        // если время анимации не закончилось - запланировать ещё кадр
        if (timePassed < duration) {
            requestAnimationFrame(animate);
        }

    });
}
let flag = false;
navBtn.addEventListener('click',()=>{
    if(!flag){
        li.forEach( el => el.classList.remove('fadeOutRight', 'fadeOutLeft') );
        nav.style.opacity = 1;
        nav.classList.remove('fadeUp');
        nav.classList.add('fadeIn');
        flag = true;
   }else if(flag){
        li.forEach( (el,i) => {
            return (i&1)? el.classList.add('fadeOutRight'): el.classList.add('fadeOutLeft');
        });
        nav.classList.remove('fadeIn');
        nav.classList.add('fadeUp');
        flag = false;
    }
});


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
const swiper_phrases =  new Swiper('.sw-c', {
    pagination: {
        el: '.swiper-pagination',
    },
});
mql.addListener(media);
media(mql);


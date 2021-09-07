var videos21 = ['https://www.youtube.com/embed/iEnwxNJL_uo','https://www.youtube.com/embed/dViW3iyoq0M','https://www.youtube.com/embed/Q6QaELpGwgo','https://www.youtube.com/embed/kZPPoPMwrIE'];
var videos22 = ['https://www.youtube.com/embed/nQxo9fx44Co','https://www.youtube.com/embed/O1ikaVmS18A', 'https://www.youtube.com/embed/qz0hww6LzsY','https://www.youtube.com/embed/f5jbors1SH4'];
var videos23 = ['https://www.youtube.com/embed/7wdH2w48JZc','https://www.youtube.com/embed/qxytpDtTzyo'];
var videos24 = ['https://www.youtube.com/embed/ON2_v7GrDE0'];
cont = 0;

function carrusel21(contenedorslider21){
    contenedorslider21.addEventListener('click', e =>{
        let atr = contenedorslider21.querySelector('.atr');
        let ade = contenedorslider21.querySelector('.ade');
        let img = contenedorslider21.querySelector('.vid');
        let tgt = e.target;


        if(tgt === atr){
            if(cont > 0){
                img.src = videos21[cont - 1];
                cont --;
            }
            else{
                img.src = videos21[videos21.length-1];
                cont = videos21.length - 1;
            }
        }
        else if (tgt === ade){
            if(cont < videos21.length - 1){
                img.src = videos21[cont + 1];
                cont ++;
            }
            else{
                img.src = videos21[0];
                cont = 0;
            }

        }

    });
}

function carrusel22(contenedorslider22){
    contenedorslider22.addEventListener('click', e =>{
        let atr = contenedorslider22.querySelector('.atr');
        let ade = contenedorslider22.querySelector('.ade');
        let img = contenedorslider22.querySelector('.vid');
        let tgt = e.target;


        if(tgt === atr){
            if(cont > 0){
                img.src = videos22[cont - 1];
                cont --;
            }
            else{
                img.src = videos22[videos22.length-1];
                cont = videos22.length - 1;
            }
        }
        else if (tgt === ade){
            if(cont < videos22.length - 1){
                img.src = videos22[cont + 1];
                cont ++;
            }
            else{
                img.src = videos22[0];
                cont = 0;
            }

        }

    });
}

function carrusel23(contenedorslider23){
    contenedorslider23.addEventListener('click', e =>{
        let atr = contenedorslider23.querySelector('.atr');
        let ade = contenedorslider23.querySelector('.ade');
        let img = contenedorslider23.querySelector('.vid');
        let tgt = e.target;


        if(tgt === atr){
            if(cont > 0){
                img.src = videos23[cont - 1];
                cont --;
            }
            else{
                img.src = videos23[videos23.length-1];
                cont = videos23.length - 1;
            }
        }
        else if (tgt === ade){
            if(cont < videos23.length - 1){
                img.src = videos23[cont + 1];
                cont ++;
            }
            else{
                img.src = videos23[0];
                cont = 0;
            }

        }

    });
}

function carrusel24(contenedorslider24){
    contenedorslider24.addEventListener('click', e =>{
        let atr = contenedorslider24.querySelector('.atr');
        let ade = contenedorslider24.querySelector('.ade');
        let img = contenedorslider24.querySelector('.vid');
        let tgt = e.target;


        if(tgt === atr){
            if(cont > 0){
                img.src = videos24[cont - 1];
                cont --;
            }
            else{
                img.src = videos24[videos24.length-1];
                cont = videos24.length - 1;
            }
        }
        else if (tgt === ade){
            if(cont < videos24.length - 1){
                img.src = videos24[cont + 1];
                cont ++;
            }
            else{
                img.src = videos24[0];
                cont = 0;
            }

        }

    });
}

document.addEventListener("DOMContentLoaded", () =>{

    let contenedor21 = document.querySelector('.contenedorslider21');
    let contenedor22 = document.querySelector('.contenedorslider22');
    let contenedor23 = document.querySelector('.contenedorslider23');
    let contenedor24 = document.querySelector('.contenedorslider24');
    carrusel21(contenedor21);
    carrusel22(contenedor22);
    carrusel23(contenedor23);
    carrusel24(contenedor24);

});
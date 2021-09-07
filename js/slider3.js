var videos31 = ['https://www.youtube.com/embed/4I9_I5dRgFg'];
var videos32 = ['https://www.youtube.com/embed/UCFaXHPqynI','https://www.youtube.com/embed/Cb7AY-d394c'];

cont = 0;

function carrusel31(contenedorslider31){
    contenedorslider31.addEventListener('click', e =>{
        let atr = contenedorslider31.querySelector('.atr');
        let ade = contenedorslider31.querySelector('.ade');
        let img = contenedorslider31.querySelector('.vid');
        let tgt = e.target;


        if(tgt === atr){
            if(cont > 0){
                img.src = videos31[cont - 1];
                cont --;
            }
            else{
                img.src = videos31[videos31.length-1];
                cont = videos31.length - 1;
            }
        }
        else if (tgt === ade){
            if(cont < videos31.length - 1){
                img.src = videos31[cont + 1];
                cont ++;
            }
            else{
                img.src = videos31[0];
                cont = 0;
            }

        }

    });
}

function carrusel32(contenedorslider32){
    contenedorslider32.addEventListener('click', e =>{
        let atr = contenedorslider32.querySelector('.atr');
        let ade = contenedorslider32.querySelector('.ade');
        let img = contenedorslider32.querySelector('.vid');
        let tgt = e.target;


        if(tgt === atr){
            if(cont > 0){
                img.src = videos32[cont - 1];
                cont --;
            }
            else{
                img.src = videos32[videos32.length-1];
                cont = videos32.length - 1;
            }
        }
        else if (tgt === ade){
            if(cont < videos32.length - 1){
                img.src = videos32[cont + 1];
                cont ++;
            }
            else{
                img.src = videos32[0];
                cont = 0;
            }

        }

    });
}


document.addEventListener("DOMContentLoaded", () =>{

    let contenedor31 = document.querySelector('.contenedorslider31');
    let contenedor32 = document.querySelector('.contenedorslider32');

    carrusel31(contenedor31);
    carrusel32(contenedor32);


});
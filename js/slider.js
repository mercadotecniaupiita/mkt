var videos11 = ['https://www.youtube.com/embed/OVOALkqShBw','https://www.youtube.com/embed/Jyxr2SduCFQ'];
var videos12 = ['https://www.youtube.com/embed/bwzd99aweAc','https://www.youtube.com/embed/QpUv10XEnCE'];
cont = 0;

function carrusel(contenedorslider){
    contenedorslider.addEventListener('click', e =>{
        let atr = contenedorslider.querySelector('.atr');
        let ade = contenedorslider.querySelector('.ade');
        let img = contenedorslider.querySelector('.vid');
        let tgt = e.target;


        if(tgt === atr){
            if(cont > 0){
                img.src = videos11[cont - 1];
                cont --;
            }
            else{
                img.src = videos11[videos11.length-1];
                cont = videos11.length - 1;
            }
        }
        else if (tgt === ade){
            if(cont < videos11.length - 1){
                img.src = videos11[cont + 1];
                cont ++;
            }
            else{
                img.src = videos11[0];
                cont = 0;
            }

        }

    });
}

function carrusel2(contenedorslider){
    contenedorslider.addEventListener('click', e =>{
        let atr = contenedorslider.querySelector('.atr');
        let ade = contenedorslider.querySelector('.ade');
        let img = contenedorslider.querySelector('.vid');
        let tgt = e.target;


        if(tgt === atr){
            if(cont > 0){
                img.src = videos12[cont - 1];
                cont --;
            }
            else{
                img.src = videos12[videos12.length-1];
                cont = videos12.length - 1;
            }
        }
        else if (tgt === ade){
            if(cont < videos12.length - 1){
                img.src = videos12[cont + 1];
                cont ++;
            }
            else{
                img.src = videos12[0];
                cont = 0;
            }

        }

    });
}

document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.contenedorslider');
    let contenedor2 = document.querySelector('.contenedorslider2');
    carrusel(contenedor);
    carrusel2(contenedor2);
});
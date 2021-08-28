var videos11 = ['https://www.youtube.com/embed/OB9FedWEmRE','https://www.youtube.com/embed/Jyxr2SduCFQ'];
var videos12 = ['https://www.youtube.com/embed/iOoIo5h4-8Y','https://www.youtube.com/embed/QpUv10XEnCE'];
var videos13 = ['https://www.youtube.com/embed/J11LmEAoHdM','https://www.youtube.com/embed/yCXU_nOE8Ww'];
var videos14 = ['https://www.youtube.com/embed/gIxRkx2IH3E','https://www.youtube.com/embed/Mc6jNB7qkik'];
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

function carrusel3(contenedorslider){
    contenedorslider.addEventListener('click', e =>{
        let atr = contenedorslider.querySelector('.atr');
        let ade = contenedorslider.querySelector('.ade');
        let img = contenedorslider.querySelector('.vid');
        let tgt = e.target;


        if(tgt === atr){
            if(cont > 0){
                img.src = videos13[cont - 1];
                cont --;
            }
            else{
                img.src = videos13[videos13.length-1];
                cont = videos13.length - 1;
            }
        }
        else if (tgt === ade){
            if(cont < videos13.length - 1){
                img.src = videos13[cont + 1];
                cont ++;
            }
            else{
                img.src = videos13[0];
                cont = 0;
            }

        }

    });
}

function carrusel4(contenedorslider){
    contenedorslider.addEventListener('click', e =>{
        let atr = contenedorslider.querySelector('.atr');
        let ade = contenedorslider.querySelector('.ade');
        let img = contenedorslider.querySelector('.vid');
        let tgt = e.target;


        if(tgt === atr){
            if(cont > 0){
                img.src = videos14[cont - 1];
                cont --;
            }
            else{
                img.src = videos14[videos14.length-1];
                cont = videos14.length - 1;
            }
        }
        else if (tgt === ade){
            if(cont < videos14.length - 1){
                img.src = videos14[cont + 1];
                cont ++;
            }
            else{
                img.src = videos14[0];
                cont = 0;
            }

        }

    });
}

document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.contenedorslider');
    let contenedor2 = document.querySelector('.contenedorslider2');
    let contenedor3 = document.querySelector('.contenedorslider3');
    let contenedor4 = document.querySelector('.contenedorslider4');
    carrusel(contenedor);
    carrusel2(contenedor2);
    carrusel3(contenedor3);
    carrusel4(contenedor4);
});
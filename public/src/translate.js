function translate_x (posicao,height,max,min){
    translate_x =height-posicao;
    if (max-posicao<= 576){
        translate_x = 1424;
    }
    if (min - posicao >=576){
        translate_x = 576;
    }
    return translate_x;
}

function translate_y (posicao,height,max,min){
    translate_y =height/2-posicao;
    if (max-posicao<= 1024){
        translate_y = 976;
    }
    if (min - posicao >=1024){
        translate_y = 1024 ;
    }
    return translate_y;
}

export {translate_x};
export { translate_y };
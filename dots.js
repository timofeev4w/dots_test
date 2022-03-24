const opc = ['0.6', '0.8']; // Варианты прозрачности
const dots_val = 64; // Кол-во частиц
const speed = 20000; // Константа влияющая на скорость
const x0 = -3;
const x100 = 100;


let new_pos = [];

// Рандом размера частиц
function dots_size () {
    return (Math.round(Math.random() * 4));
}

// Рандом прозрачности частиц
function dots_opc () {
    if (Math.random() < 0.5) {
        return opc[0];
    }else {
        return opc[1];
    }
}

// Начальная позиция частиц
function dots_pos () {
    return (Math.round(Math.random() * x100));
}

// Создание частиц
for (let i = 0; i < dots_val; i++) {
    let dot_size = dots_size() + 'px;';
    let dot_opc = dots_opc() + ';';
    let dot_pos1 = dots_pos() + 'vh;';
    let dot_pos2 = dots_pos() + 'vw;';
    let css_size = 'height: '+ dot_size +' width: '+ dot_size +' opacity: '+ dot_opc +'top: '+ dot_pos1 +'left: '+ dot_pos2;
    $('.bgani').append('<div class="dot" style="'+ css_size +'"></div>');
}

// Новая позиция частиц
function news_pos () {
    let new_math = (Math.random());
    let getNewpos = Math.round(new_math * x100);

    if(new_math < 0.25){
        if(new_math < 0.125){
            new_pos[0] = x0 +'vw';
            new_pos[1] = getNewpos + 'vh';
            return new_pos;
        }else {
            new_pos[0] = x100 +'vw';
            new_pos[1] = getNewpos + 'vh';
            return new_pos;
        }
    }else if(new_math >= 0.25 && new_math < 0.5){
        if(new_math < 0.375){
            new_pos[0] = getNewpos + 'vw';
            new_pos[1] = x0 +'vh';
            return new_pos;
        }else {
            new_pos[0] = getNewpos + 'vw';
            new_pos[1] = x100 +'vh';
            return new_pos;
        }
    }else if(new_math >= 0.5 && new_math < 0.75){
            if(new_math < 0.625){
            new_pos[0] = x100 +'vw';
            new_pos[1] = getNewpos + 'vh';
            return new_pos;
        }else {
            new_pos[0] = x0 +'vw';
            new_pos[1] = getNewpos + 'vh';
            return new_pos;
        }
    }else{
        if(new_math < 0.875){
            new_pos[0] = getNewpos + 'vw';
            new_pos[1] = x100 +'vh';
            return new_pos;
        }else {
            new_pos[0] = getNewpos + 'vw';
            new_pos[1] = x100 +'vh';
            return new_pos;
        }
    }
}

// Функция движения
function automove(d1, d2, incr_speed) {
    for (let m = dots_val*d1; m < dots_val*d2; m++) {
        new_pos = news_pos();
        $('.dot:eq('+ m +')').animate({left: new_pos[0], top: new_pos[1]}, speed+incr_speed);
    }
}

function all_automove() {
    automove(0, 0.25, 10000);
    automove(0.25, 0.5, 15000);
    automove(0.5, 0.75, 0);
    automove(0.75, 1, 10000);
}

// Запуск
all_automove();

let timerId1 = setInterval(() => all_automove(), 20000);
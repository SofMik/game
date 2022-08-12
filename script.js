let minValue = parseInt(prompt('Минимальное значение числа для игры -999, введите свое число', '-999'));

if (isNaN(minValue)){
   minValue = parseInt(prompt('Играем только с числами! Минимальное значение числа для игры -999, введите свое число', '-999'));
   // minValue = minValue || -999; 
};
minValue = (minValue < -999) ? minValue = -999 : minValue = minValue;

let maxValue = parseInt(prompt('Максимальное значение числа для игры 999, введите свое число','999'));
if (isNaN(maxValue)){
    maxValue = parseInt(prompt('Играем только с числами! Максимальное значение числа для игры 999, введите свое число','999'));
   // maxValue = maxValue || 999; 
 };
maxValue = (maxValue > 999) ? maxValue = 999 : maxValue = maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;


document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round(Math.random() * 3);
                if (phraseRandom === 0) {
                    answerPhrase = `Наверное, это число ${answerNumber }?`;
                } 
                else  if (phraseRandom === 1){
                    answerPhrase = `Я думаю, что это число ${answerNumber }?`;
                } else  if (phraseRandom === 2){
                    answerPhrase = `Это легко! Вероятно, Вы загадали число ${answerNumber }?`;
                }
                else {
                    answerPhrase = `Мне кажется, это число ${answerNumber }?`;
                }
            answerField.innerText = answerPhrase;
            }
            
    }   
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3);
            if (phraseRandom === 0) {
                answerPhrase = `Наверное, это число ${answerNumber }?`;
            } 
            else  if (phraseRandom === 1){
                answerPhrase = `Я думаю, что это число ${answerNumber }?`;
            } else  if (phraseRandom === 2){
                answerPhrase = `Это легко! Вероятно, Вы загадали число ${answerNumber }?`;
            }
            else {
                answerPhrase = `Мне кажется, это число ${answerNumber }?`;
            }
            answerField.innerText = answerPhrase;
            }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 3);
        if (phraseRandom === 0) {
            answerPhrase = `Я всегда угадываю!\n\u{1f601}`;
        } 
        else  if (phraseRandom === 1){
            answerPhrase = `Я победил! Это было легко!\n\u{1f603}`;
        } else  if (phraseRandom === 2){
            answerPhrase = `Я угадал! Сыграем еще?\n\u{1F60E}`;
        }
        else {
            answerPhrase = `Я выиграл! Давай еще раз? \n\u{1f609}`;
        }
        answerField.innerText = answerPhrase;
    }
    gameRun = false;
})

document.querySelector('#btnRetry').addEventListener('click', function () {
          minValue = 0;
          maxValue = 100;
          orderNumber = 0;
        if (confirm('Вы действительно хотите начать игру заново?')) {
            window.location.reload();
        }
    })

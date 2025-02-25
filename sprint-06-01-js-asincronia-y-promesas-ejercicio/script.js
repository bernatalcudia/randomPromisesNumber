// Crea 3 promesas simulando asincronía con setTimeout(). Cada una tendrá un tiempo (1sec, 3sec, 5sec)
// Cada promesa devolverá un número aleatorio entre 1 y 10
// Cuando finalicen las 3 promesas el resultado será la suma de los 3 números. Sácalos por consola


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const randomNumber1 = getRandomInt(1, 10);
const randomNumber2 = getRandomInt(1, 10);
const randomNumber3 = getRandomInt(1, 10);
console.log(randomNumber1, randomNumber2, randomNumber3);

const promesa1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("El numero es :" + randomNumber1);
    }, 1000)
});

const promesa2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("El numero es :" + randomNumber2);
    }, 3000)
});

const promesa3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("El numero es :" + randomNumber3);
    }, 5000)
});


Promise.all([promesa1, promesa2, promesa3]).then(values => {
    const randomNumberResult = randomNumber1 + randomNumber2 + randomNumber3;
    console.log("La suma total es : " + randomNumberResult);
});
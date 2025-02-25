// Crea 3 promesas simulando asincronía con setTimeout(). Cada una tendrá un tiempo (1sec, 3sec, 5sec)
// Cada promesa devolverá un número aleatorio entre 1 y 10
// Cuando finalicen las 3 promesas el resultado será la suma de los 3 números. Sácalos por consola


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
const promesa1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        const randomNumber1 = getRandomArbitrary(1, 10);
        resolve("El numero es :" + randomNumber1)
    }, 300)
});

const promesa2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        const randomNumber2 = getRandomArbitrary(1, 10);
        resolve("El numero es :" + randomNumber2)
    }, 300)
});

const promesa3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        const randomNumber3 = getRandomArbitrary(1, 10);
        resolve("El numero es :" + randomNumber3)
    }, 300)
});

randomNumbeResult = randomNumber1 + randomNumber2 + randomNumber3;

Promise.all(promesa1, promesa2, promesa3).then(result => {
    console.log(result);
});
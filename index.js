const dollar = 40;
alert(`1$ = ${dollar}`)
let result = [];
for(let i = 10; i <= 100; i += 10){
    result.push(`${i}$ = ${dollar * i}`)
}
alert(result)

const userInput = prompt("Enter a number:");
const number = parseInt(userInput);

if (isNaN(number)) {
    alert("Not a number");
} else {
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        alert(`${number} is a simple number.`);
    } else {
        alert(`${number} not a simple number.`);
    }
}

const anotherInput = prompt("Enter a number:");
const anotherNumber = parseInt(anotherInput);

if (isNaN(anotherNumber)) {
    alert("Not a number");
} else {
    let a = {result: false, pow: 0};
    for (let i = 0; Math.pow(3, i) <= anotherNumber; i++) {
        if (Math.pow(3, i) === anotherNumber) {
            a = {result: true, pow: i};
            break;
        }
    }
    if (a.result) {
        alert(`${anotherNumber} можна отримати зведенням числа 3 в ${a.pow} ступінь.`);
    } else {
        alert(`${anotherNumber} не можна отримати зведенням числа 3 в цілу ступінь.`);
    }
}

const dollar = 40;
alert(`1$ = ${dollar}`)
const result = [];
for(let i = 10; i <= 100; i += 10){
    result.push(`${i}$ = ${dollar * i}`)
}
alert(result)

const userInput = prompt("Enter a number:");
if (isNaN(userInput)) {
    alert("Not a number");
} else if(!Number.isInteger(parseFloat(userInput))){
    alert("Not an integer");
} else {
    let isPrime = true;
    const number = parseFloat(userInput)

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
        alert(`${userInput} is a simple number.`);
    } else {
        alert(`${userInput} not a simple number.`);
    }
}

const anotherInput = prompt("Enter a number:");

if (isNaN(anotherInput)) {
    alert("Not a number");
} else if(!Number.isInteger(parseFloat(anotherInput))){
    alert("Not an integer");
} else {
    const anotherNumber = parseFloat(anotherInput)
    const result = { is3inDegree: false, pow: 0 }
    for (let i = 0; Math.pow(3, i) <= anotherNumber; i++) {
        if (Math.pow(3, i) === anotherNumber) {
        result.is3inDegree = true;
        result.pow = i;
        break;
        }
    }
    if (result.is3inDegree) {
        alert(`${anotherInput} можна отримати зведенням числа 3 в ${result.pow} ступінь.`);
    } else {
        alert(`${anotherInput} не можна отримати зведенням числа 3 в цілу ступінь.`);
    }
}


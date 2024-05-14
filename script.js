let randomNumber = Math.round(Math.random() * 100);

alert(`Random number is ${randomNumber}`);


if (randomNumber % 3 == 0) {
    alert("This number if Fizz")
} else if (randomNumber % 5 == 0) {
    alert("This number if Buzz")
} else if (randomNumber % 3 == 0 && randomNumber % 5 == 0) {
    alert("This number if FizzBuzz")
} else {
    alert("This number is not Fizz, Buzz or FizzBuzz")
}
function factorialCalculation(element) {
    let factorial = 1;
    for (let i = 1; i <= element; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorialCalculation(5)); //factorialCalculation("до заданого елемента")
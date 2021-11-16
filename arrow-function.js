// function declaration
function add(num1, num2){
    return num1 + num2;
}
// function expression
const add2 = function add2(num1, num2){
    return num1 + num2;
}
// function expression (anonymous)
const add3 = function(num1, num2){
    return num1 + num2;
}
// arrow function
const add4 = (num1, num2) => num1 + num2;



const sum = add(17, 13);
const sum2 = add2(13, 17);
const sum3 = add3(13, 17);
const sum4 = add4(13, 17);

console.log(sum, sum2, sum3, sum4);
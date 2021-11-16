const add = (num1, num2) => num1 + num2;
const sum = add (12,18);

const multiply = (num1, num2) => num1 * num2;
const sum2 = multiply(5, 5);

const fivetime = (num) => num* 5;
const sum3 = fivetime(10)

const tentimes = num => num * 10;
const sum4 = tentimes(6);

const surname = () => 'shaykot_selim'
const name = surname()


const doMath = (x , y ) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(12, 4)


console.log(sum, sum2, sum3, sum4, name, total);


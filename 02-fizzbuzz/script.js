// https://youtu.be/TWmmfDvcYO0

/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
 */

const gen = (n, w) => (num) => (num % n === 0 ? w : "");
const fizz = gen(3, "fizz");
const buzz = gen(5, "buzz");

function fizzBuzz(num) {
  [...Array(num).keys()]
    .map((i) => i + 1)
    .forEach((i) => console.log(fizz(i) + buzz(i) || i));
}

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(fizzBuzz(15));

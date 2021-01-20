/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
    const letters = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (letters.indexOf(element.toLowerCase()) != -1) count++;
    }
    return count;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(findVowels('здравствуй')); // 2
// console.log(findVowels('привет')); // 2
// console.log(findVowels('хеллоу')); // 3
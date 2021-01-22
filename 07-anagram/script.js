/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    if (str1.length !=  str2.length) return false;

    let s1 = str1.toLowerCase();
    let s2 = str2.toLowerCase();

    if (s1 === s2) return false;

    s1 = str1.toLowerCase().split('').sort();
    s2 = str2.toLowerCase().split('').sort();

    let setStr1 = new Set(s1);
    let setStr2 = new Set(s2);

    s1 = Array.from(setStr1).join('');
    s2 = Array.from(setStr2).join('');

    return s1 === s2;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false

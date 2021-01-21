/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 *
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 *
 */

const startHalfStr = (str) => str.slice(0, str.length / 2);

const endHalfStr = (str) => {
  if (str.length % 2 == 0) return str.slice(str.length / 2, str.length);
  return str.slice(str.length / 2 + 1, str.length);
};

const reversStr = (str) => str.split("").reverse().join("");

const onlyAlhabet = (str) => {
  let alhabetEn = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alhabetRu =
    "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (alhabetEn.includes(letter) || alhabetRu.includes(letter)) {
      newStr += letter;
    }
  }

  return newStr;
};

function palindrome(str) {
  let letters = onlyAlhabet(str);
  return (
    startHalfStr(letters).toUpperCase() ===
    reversStr(endHalfStr(letters)).toUpperCase()
  );
// return str.split("").reverse().join("").toLowerCase().replace(/[/\s.,!?;]*/g, '') === str.toLowerCase().replace(/[/\s.,!?;]*/g, '')
}

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(palindrome("топот")); // должно быть true
// console.log(palindrome("Saippuakivikauppias")); // true
// console.log(palindrome("привет")); // false

// console.log(palindrome("О, лета тело!")); // true

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 *
 * palindrome('О, лета тело!'); // true
 *
 */

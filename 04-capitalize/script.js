/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (str[i - 1] === " " || str[i - 1] === undefined)
      newStr += element.toUpperCase();
    else newStr += element;
  }
  return newStr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

//  console.log(capitalize("молодость всё  простит")); // "Молодость Всё Простит"
// console.log(capitalize("молодость "));
"use strict"; 
    // использование строгого режима для обработки данных

    // Данные, котоорые указываются без скобок = числа
    let number = 1;

    // Данные, которые заключены в ковычки = строки 'string'
    let text = "Zhalil";

    console.log(1 * "text"); 
    // Nan - Неправильное использование синтаксиса

    console.log(text + 1)
    // Текс + цифра - это операция склеивания

// True - истина
// False - ложь
let number2 = true;
console.log(number2);


    // Обьект или массив создается фигурными скобками {}
    let obj = {
        name: "zhalil",
        age: 23,
        location: "kyrgyzstan"
    }

        // Первый вариант получения данных из обьекта
    console.log("name: " + obj.name + " age: " + obj.age);

        // Второй способ получения данных из обьекта
    console.log(obj["age"])




// Массив создается квадратными скобками []

    let arr = ["яблоко", "айфон", "pen"]

    console.log(arr[0])
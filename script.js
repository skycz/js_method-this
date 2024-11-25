"use strict";

// Вызов функции

/* function showThis(a, b) {
    console.log(this); // 'this' в обычной функции: в строгом режиме undefined, иначе window
    function sum() {
        console.log(this); // 'this' в обычной вложенной функции: тоже undefined или window
        return a + b; // Суммируем параметры
    }

    console.log(sum()); // Вызываем вложенную функцию и выводим результат
}
showThis(4, 5); */


/* const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this); // 'this' в методе объекта: сам объект
    }
};

obj.sum(); */


/* function User(name, id) { 
    this.name = name; // Присваиваем имя
    this.id = id; // Присваиваем ID
    this.human = true; // Указываем, что это человек
    this.hello = function() { 
        console.log("Hello!" + this.name); // Приветствие с именем
    };
}

let ivan = new User('Ivan', 23); // Создаем экземпляр объекта User */


/* function sayName(surname) { 
    console.log(this); // 'this' зависит от того, как вызвана функция
    console.log(this.name + surname); // Используем 'this.name' и переданный аргумент
}

const user = {
    name: 'John' // Имя для объекта user
};

sayName.call(user, 'Smith'); // Ручной вызов с 'this', привязанным к user, и аргументом
sayName.apply(user, ['Smith']); // Аналогично, но аргументы передаются в массиве


function count(num) {
    return this * num; // Умножаем 'this' на переданное число
}

const double = count.bind(2); // Создаем новую функцию с 'this', привязанным к 2
console.log(double(3)); // Результат: 6
console.log(double(13)); // Результат: 26 */



// 1) Обычная функция: 'this' = window, но если use strict - undefined
// 2) Контекст в методах объекта - сам объект
// 3) 'this' в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка 'this': call, apply, bind



const btn = document.querySelector('button'); // Получаем кнопку из DOM

/* btn.addEventListener('click', function() { 
    this.style.backgroundColor = 'red'; // 'this' ссылается на элемент кнопки
}); */ // Кнопка становится красной


/* btn.addEventListener('click', () => { 
    this.style.backgroundColor = 'red'; // 'this' в стрелочной функции: undefined
}); */ // Ошибка, 'this' не определено


btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red'; // Используем событие 'e' для получения кнопки
}); // Кнопка становится красной



const obj = {
    num: 5, // Значение для объекта
    sayNumber: function () {
        const say = () => {
            console.log(this.num); // 'this' в стрелочной функции: ссылается на obj
        };

        say(); // Вызываем стрелочную функцию
    }
};

obj.sayNumber(); // Вывод: 5



const double = (a, b) => a * 2; // Стрелочная функция умножения на 2

console.log(double(4)); // Результат: 8

# JavaScript #15

## методы массивов: splice, slice, indexOf, find, filter, forEach, sort, split, join

.splice(index, delete, elem) умеет добавлять\удалять\заменять элементы
```javascript
let ar = ["Я", "читаю", "этот", "скучный", "конспект"];
ar.splice(2, 2);    // удаляем с 3го элемента 2 элемента
console.log(ar); // ['Я', 'читаю', 'конспект']

let ar = ["Я", "читаю", "этот", "скучный", "конспект"];
let delElem = ar.splice(0, 3, "Я", "люблю", "тебя"); // вставляем вместо
console.log(ar);    // ['Я', 'люблю', 'тебя', 'скучный', 'конспект'];
console.log(delElem) ;   // ['Я', 'читаю', 'этот'] Возвращает удаленные
ar.splice(3, 0, "самый", "самый");   // добавляет жлементы
console.log(ar); // ['Я', 'люблю', 'тебя', 'самый', 'самый', 'скучный', 'конспект'];
ar.splice(-3, 3, "лучший", "и", "познавательный");
console.log(ar);    // ['Я', 'люблю', 'тебя', 'самый', 'лучший', 'и', 'познавательный'] допустимый отрицательный индекс
```

.slice(start, end) - копирует элементы и возвращает
```javascript
let ar = ["Я", "читаю", "этот", "скучный", "конспект"];
let ar = ["Я", "читаю", "этот", "скучный", "конспект"];
let res1 = ar.slice(2, 4);   // ['этот', 'скучный']
let res2 = ar.slice(3);     // ['скучный', 'конспект']
let res3 = ar.slice(-3);    // ['этот', 'скучный', 'конспект']

let coppyArr = ar.slice();  // просто копирует массив
console.log(coppyArr);      //  ['Я', 'читаю', 'этот', 'скучный', 'конспект']
```

Array.concat(*args) - новый массив из текущего массива + элементы из аргументов
```javascript
let ar = [1, 2];
let res1 = ar.concat([3, 4]);
console.log(res1);      // [1, 2, 3, 4]

let res2 = ar.concat([3,4], [5, 6]);
console.log(res2);      // [1, 2, 3, 4, 5, 6]
console.log(ar.concat([3, 4], 5, 6));   // [1, 2, 3, 4, 5, 6]

let obj = {name: 'guest'};
let ar = [1, 2];
let res = ar.concat(obj);   // обьект не копирует, а лишь ссылку передает
console.log(res);
// (3) [1, 2, {…}]
// 0: 1
// 1: 2
// 2: {name: 'guest'}
```

перебор элементов массива
ar.forEach(item, index, array) {
    делать что-то с item
});

```javascript
let ar = ["Я", "читаю", "этот", "скучный", "конспект"];
ar.forEach(function (item) {
    console.log(item);
})
// Я
// читаю
// этот
// скучный
// конспект

ar.forEach((item) => console.log(item));
// Я
// читаю
// этот
// скучный
// конспект
```


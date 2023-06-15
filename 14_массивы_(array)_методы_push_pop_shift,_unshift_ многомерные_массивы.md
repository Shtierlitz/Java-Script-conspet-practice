# JavaScript #14

## массивы (array), методы push, pop, shift, unshift, многомерные массивы

```javascript
let ar = [1, 2, 3, 4];
console.log(a[0]); //первый жлемент массива - 0
```
```javascript
let ar = ["Яблоко", "Апельсин", "Слива"]
ar[1] = "Груша"
console.log(ar[1]); // Груша
console.log(ar);    // ["Яблоко", "Груша", "Слива"]
ar[3] = "Лимон";
console.log(ar) // ["Яблоко", "Груша", "Слива", "Лимон"]
```

.length возвращает длину масссива (последний индекс +1)
```javascript
let ar = ["Яблоко", "Груша", "Слива", "Лимон"];
console.log(ar.length); // 4

for (let i = 0; i < ar.length; i++)
    console.log(ar[i]);
// Яблоко
// Груша
// Слива
// Лимон

let dig = [1, 2, 3, 4, 5];
dig.length = 3; // Удалит элементы до заданной длины списка
console.log(dig);
// [1, 2, 3]

for (let val of ar)
    console.log(val) // перебирает массив, но содержит копию элементов (медленнее)
```

push/pop добавление и удалени в конце массива
```javascript
let ar = ["Яблоко", "Слива"];
ar.push("Груша");               // аналог append() (добавляет в конец списка)
// ["Яблоко", "Слива", "Груша"]

let popItem =ar.pop();       // удаляет последний элемент и возвращает его
console.log(ar);            // ["Яблоко", "Груша"]    
```

shift/unshift добавление и удалени в начале массива
```javascript
let ar = ["Яблоко", "Апельсин", "Груша"];
let delItem = ar.shift();   // удаляет из конца массива
console.log(ar);        // ["Апельсин", "Груша"]
console.log(delItem)    // Груша
ar.unshift("Персик");   // добавляет в начало массива
console.log(ar);        // ["Персик", "Апельсин", "Груша"]
```

Многомерные массивы
```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(matrix);
// (3) [Array(3), Array(3), Array(3)]
// (3) [1, 2, 3]
// (3) [4, 5, 6]
// (3) [7, 8, 9]
// length 3

matrix[1][1] = 0;
console.log(matrix);
// (3) [Array(3), Array(3), Array(3)]
// (3) [1, 2, 3]
// (3) [4, 0, 6]
// (3) [7, 8, 9]
// length 3

for (let row of matrix) {
    let cols = "";
    for (let inVal of row)
        cols += inVal + " ";
    console.log(cols);
}
// 1 2 3 
// 4 0 6 
// 7 8 9

// ну или обычным циклом

for (let i = 0; i < matrix.length; ++i) {
    let cols = "";
    for (let j = 0; j < matrix[i].length; ++j) 
        cols += matrix[i][j] + " ";
        
    console.log(cols);
    }
// 1 2 3 
// 4 0 6 
// 7 8 9 
```





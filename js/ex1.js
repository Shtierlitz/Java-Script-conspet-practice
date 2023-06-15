// Конспект по Java Script
"use strict";
// let obj = document.getElementById('id_div');
//     console.log(obj);
//
// let message = "hello",
// age = 24,
// email = 'rew@com';
// const PI = 3.1415
// console.log(PI);

// let S=0, i=1;
// while(i <= 1000) {
//     S += 1/i;
//     i++
// }
// console.log(S)

// let S=0, i=1;
// while(i <= 1000 && S < 5) {
//     S += 1/i;
//     i++
// }
// console.log(S)

// let S=0, i=1;
// while((S += i++) < 100);
// console.log(S);

// let f, k = 0.5, b = 2;
// let x = 0;
// for (;;) {
//     if (x > 1) break;
//     f = k * x + b;
//     console.log(f);
//     x += 0.1;
// }

// const PSW = 'password';
// let psw = null;
// do {
//     psw = prompt("Введите пароль", "");
// }
// while (psw != PSW);
// console.log("Вы вошли в систему!")

// let S= 0, M = 10, N = 5;
// for (let i = 1; i <= N; i++)
//     for (let j = 1; j <= M; ++j)
//         S += i * j;
// console.log("S = " + S)
// // S = 825

// let S= 0, M = 10, N = 5;
// for (let i = 1; i <= N; i++)
//     for (let j = 1; j <= M; ++j) {
//         if (j == 5) break;
//         S += i * j;
//     }
// console.log("S = " + S);
//
// let S= 0, M = 10, N = 5;
// all: for (let i = 1; i <= N; i++)   // all - этьо метка чтобы явно указать break какой цикл прерывать
//     for (let j = 1; j <= M; ++j) {
//         if (j == 5) break all;  // прерывает работу первло работу внешнего цикла
//         S += i * j;
//     }
// console.log("S = " + S);
// S = 10

// for (let i = -5; i <= 5; ++i) {
//     if (i == 0) continue;   // пропускаем ноль
//     console.log("i = " + i)
// }
// i = -5
// 73 i = -4
// 73 i = -3
// 73 i = -2
// 73 i = -1
// 73 i = 1
// 73 i = 2
// 73 i = 3
// 73 i = 4
// 73 i = 5

// let d = Number(prompt())
// console.log(Math.abs(d))


// let a = prompt().split(" ").map(Number);
// console.log(a)
// console.log(Math.min(...a))

// let input = prompt().split(" ").map(Number);
// let a = input[0];
// let b = input[1];
// let c = input[2];
// let d = input[3];
// let e = input[4];
// console.log(Math.max(a, b, c, d, e))

// let [a, b] = prompt().split(" ").map(Number);
// console.log((((a**2) + (b**2))**0.5).toFixed(1))

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
//
// let [n, k] = prompt().split(" ").map(Number);
// console.log(Math.trunc(factorial(n)/(factorial(k)*factorial(n-k))));

// let [n, m] = prompt().split(" ").map(Number);
// console.log(Math.ceil((n+m) / 20))

// let x = Number(prompt())
// console.log(Math.floor(500 / (x - x * 0.1)))

// let a = 7
// let b = -4
// let c = 3
// //
// // console.log(a, b, c);
// console.log(a, b, c,)

// let [s1, s2] = prompt().split(" ").map((str) => str.trim())
// console.log(`Word1: ${s1} | Word 2: ${s2}`)

// let [a, b] = prompt().split(" ").map(Number)
// console.log(a ** b)
// let [a, b] = prompt().split(" ").map(Number)
// console.log((a+b).toFixed(1))
// let [a, b] = prompt().split(" ").map(Number);
// console.log(a + (a*2) + b + (b * 4));

// let a = Number(prompt())
// let b = Number(prompt())
// console.log((2 * (a+b)).toFixed(1))


// console.log((Math.PI).toFixed(3))


// console.log(`Вы ввели число ${Number(prompt()).toFixed(2)}`)

// let a = Number(prompt())
// console.log(Math.round(a) % 3 == 0)

// let x = Number(prompt())
// console.log(Math.round(x) > 0.50)

// let [a, b] = prompt().split(" ").map(Number)
// console.log(a % b === 0)
// let [a, b, c] = prompt().split(" ").map(Number)
// console.log(a + b > c || b + c > a || c + a > b)

// let a = Number(prompt())
// console.log(0 <= a <= 2 && 10 <= a <= 20)

// let a = prompt()
// let b = prompt()
// console.log(a + " " + b)

// let [a, b] = prompt().split(" ");
// console.log(a + " " + a + " " + b + " " + b + " " + b);

// let [a, b] = prompt().split(" ").map(Number);
// console.log('Переменная а = ' + a.toString() + ", переменная b = " + b.toString());

// let a = prompt();
// console.log("Строка: " + a + ". Длина: " + a.length);

// let [a, b] = prompt().split(" ")
// console.log(b.includes(a), a === b, a > b, a < b)

// let [a, z] = prompt().split(" ");
// console.log("Коды: " + a + ' = ' + a.charCodeAt() + ', ' + z + ' = ' + z.charCodeAt());

// let a = prompt();
// console.log(a[0] + a[a.length - 1])
// console.log(prompt().slice(0, 4));

// let a = prompt();
// console.log(a.slice(a.length - 3));

// let a = prompt();
// console.log(a.to(1, a.length, 2));

// let a = prompt()
// let b = prompt()
// let aRes = ''
// let bRes = ''
// for (let i = 0; i < a.length; i += 2){
//     aRes += a[i]
// }
// for (let i = 1; i < b.length; i += 2){
//     bRes += b[i]
// }
//
// console.log(aRes, bRes)

// let a = prompt().slice(0, 5)
//
// let resA = ''
//
// for (let i = a.length - 1; i >= 0; i--) {
//     resA += a[i]
// }
// console.log(resA)

// let [a, b] = prompt().split(" ");
// let c = b.slice(0, a.length);
// console.log(c)

// let a = prompt()
// console.log(a[0] + a.substring(1).toLowerCase())

// let a = prompt()
// let counter = 0
// for (let i = 0; i <= a.length; ++i) {
//     if (a[i] === "-")
//         counter += 1
// }
// console.log(counter)

// console.log(prompt().indexOf('ra'))

// let input = prompt("Введите строку:");
//
// let result = input.replace(/--+/g, "-");
// console.log(result);
//
// let res = input;
// while (res.includes("--") || res.includes("---")) {
//     res = res.replace("--", "-").replace("---", "-")
// }
// console.log(res)


// let str = "Hello";
// let width = 10; //желаемая длина
// let fillChar = " "; // заполнитель
//
// let alignedStr = str.padStart(width, fillChar);
// console.log(alignedStr);


// let a = prompt().split(" ");
// let result = a.map((i) => i.padStart(3, '0'));
// console.log(result);

// console.log(prompt().split(" ").length)

// let a = prompt();
// console.log(a.split(" ").join(";"))

// console.log(prompt().split(" ").join("\\"))

// console.log(prompt().split(" ").join("\"").replace("\"", "\'"));

// console.log('\"' + 'language' + "\"")

// let a = prompt();
// let b = prompt();
// let c = prompt();
//
// console.log(`Уважаемый ${a} ${b}! поздравляем вас с ${c}-летием!`);

// let [a, b, c] = prompt().split(" ").map(Number);
// console.log(`Габариты: ${a} х ${b} x ${c}`)

// let [a, b] = prompt().split(" ").map(Number);
// console.log(`${Math.min(a, b)} ${Math.max(a, b)}`)

// let a = prompt()
// let b = prompt()
// let c = prompt()
// let d = prompt()
//
// console.log(`г. ${a}, ул. ${b}, д. ${c}, кв. ${d}`)

// let a = Number(prompt());
// let b = Number(prompt());
// console.log(`Вы можете получить ${Math.floor(b / a)}$ за ${b} рублей по курсу ${a}`)


// console.log(prompt().split(" ").map(Number));

// let lst = prompt().split(" ");
// console.log(lst.includes("Москва"))

// let lst = prompt().split(" ");
// console.log(lst.pop());

// let ar = ["Яблоко", "Груша", "Слива", "Лимон"];
// console.log(ar.length); // 4
//
// for (let i = 0; i < ar.length; i++)
//     console.log(ar[i])
//
// for (let val of ar)
//     console.log(val)

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrix);
// (3) [Array(3), Array(3), Array(3)]
// (3) [1, 2, 3]
// (3) [4, 5, 6]
// (3) [7, 8, 9]
// length 3
// matrix[1][1] = 0;
// console.log(matrix);
// (3) [Array(3), Array(3), Array(3)]
// (3) [1, 2, 3]
// (3) [4, 0, 6]
// (3) [7, 8, 9]
// length 3
// for (let row of matrix) {
//     let cols = "";
//     for (let inVal of row)
//         cols += inVal + " ";
//     console.log(cols);
// }
// 1 2 3 
// 4 0 6 
// 7 8 9 

// for (let i = 0; i < matrix.length; ++i) {
//     let cols = "";
//     for (let j = 0; j < matrix[i].length; ++j) 
//         cols += matrix[i][j] + " ";
//        
//     console.log(cols);
//     }
// // 1 2 3
// // 4 0 6
// // 7 8 9

// let ar = ["Я", "читаю", "этот", "скучный", "конспект"];
// let delElem = ar.splice(0, 3, "Я", "люблю", "тебя"); // вставляем вместо
// console.log(ar);    // ['Я', 'люблю', 'тебя', 'скучный', 'конспект'];
// console.log(delElem) ;   // ['Я', 'читаю', 'этот'] Возвращает удаленные
// ar.splice(3, 0, "самый", "самый");   // добавляет жлементы
// console.log(ar); // ['Я', 'люблю', 'тебя', 'самый', 'самый', 'скучный', 'конспект'];
// ar.splice(-3, 3, "лучший", "и", "познавательный");
// console.log(ar);    // ['Я', 'люблю', 'тебя', 'самый', 'лучший', 'и', 'познавательный'] допустимый отрицательный индекс

// let ar = ["Я", "читаю", "этот", "скучный", "конспект"];
// let res1 = ar.slice(2, 4);   // ['этот', 'скучный']
// let res2 = ar.slice(3);     // ['скучный', 'конспект']
// let res3 = ar.slice(-3);    // ['этот', 'скучный', 'конспект']
// console.log(res1);
// console.log(res2);
// console.log(res3);
// let coppyArr = ar.slice();  // просто копирует массив
// console.log(coppyArr);      //  ['Я', 'читаю', 'этот', 'скучный', 'конспект']

// let ar = [1, 2];
// let res1 = ar.concat([3, 4]);
// console.log(res1);      // [1, 2, 3, 4]
//
// let res2 = ar.concat([3,4], [5, 6]);
// console.log(res2);      // [1, 2, 3, 4, 5, 6]
// console.log(ar.concat([3, 4], 5, 6));   // [1, 2, 3, 4, 5, 6]

// let obj = {name: 'guest'};
// let ar = [1, 2];
// let res = ar.concat(obj);   // обьект не копирует, а лишь ссылку передает
// console.log(res);
// // (3) [1, 2, {…}]
// // 0: 1
// // 1: 2
// // 2: {name: 'guest'}

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
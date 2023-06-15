# JavaScript #7
## операторы циклов for, while, do while, операторы break и continue

### while

```javascript
let S=0, i=1;
while(i <= 1000) {
    S += 1/i;
    i++
}
console.log(S); // 7.485470860550343

let S=0, i=1;
while(i <= 1000 && S < 5) {
    S += 1/i;
    i++
}
console.log(S); // 5.002068272680166

let S=0, i=1;
while((S += i++) < 100);
console.log(S); //105
```

### for
```javascript
let f, k = 0.5, b = 2;
for (let x = 0; x <= 1; x += 0.1) {
    f = k * x + b;
    console.log(f);
}
// 2
// 2.05
// 2.1
// 2.15
// 2.2
// 2.25
// 2.3
// 2.35
// 2.4
// 2.45
// 2.5
ar = [1, 2, 3, 4]
for (let val of ar)
    console.log(val) // перебирает массив
```
аналоги:

```javascript
let f, k = 0.5, b = 2;
let x = 0;
for (; x <= 1; x += 0.1) {
    f = k * x + b;
    console.log(f);
}

let f, k = 0.5, b = 2;
let x = 0;
for (; x <= 1;) {
    x += 0.1
    f = k * x + b;
    console.log(f);
}

let f, k = 0.5, b = 2;
let x = 0;
for (;;) {
    if (x > 1) break;
    f = k * x + b;
    console.log(f);
    x += 0.1;
}
```
### do while
![for, while, do while](images/for,%20while,%20do%20while.png)

```javascript
const PSW = 'password';
let psw = null;
do {
    psw = prompt("Введите пароль", "");
}
while (psw != PSW);
console.log("Вы вошли в систему!")
```
пример вложенного цикла
```javascript
let S= 0, M = 10, N = 5;
for (let i = 1; i <= N; i++)
    for (let j = 1; j <= M; ++j)
        S += i * j;
console.log("S = " + S)
// S = 825
```

break

```javascript
let S= 0, M = 10, N = 5;
for (let i = 1; i <= N; i++)
    for (let j = 1; j <= M; ++j) {
        if (j == 5) break;  // прерывает работу только второго цикла
        S += i * j;
    }
console.log("S = " + S);
// S = 150
```

```javascript
let S= 0, M = 10, N = 5;
all: for (let i = 1; i <= N; i++)   // all - этьо метка чтобы явно указать break какой цикл прерывать
    for (let j = 1; j <= M; ++j) {
        if (j == 5) break all;  // прерывает работу первло работу внешнего цикла
        S += i * j;
    }
console.log("S = " + S);
// S = 10
```

continue
```javascript
for (let i = -5; i <= 5; ++i) {
    if (i == 0) continue;   // пропускаем ноль
    console.log("i = " + i)
}
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
```


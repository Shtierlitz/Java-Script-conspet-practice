## JavaScript #4
приведение типов, оператор присваивания, функции alert, prompt, confirm

### Переобразование типов
```javascript
let a = bool
a = String(a);       // Переобразование в строку
a = Number(a);       // Переобразование в число

let cont = '2' / '6'; // автоматически переведет в числа
// Важное исключение с оператором прибавления. Там надо явно указывать иначе слепит строки в одну

Number("   123   ");    // 123
Number("123z");         // NaN (ошибка чтения числа)
Number(true);           // 1
Number(false);          // 0

Boolean(1);             // true
Boolean(0);             // false
Boolean('0');           // true
Boolean("Hello!");      // true
Boolean('');            // false
```

### Присваивание
```javascript
let a, b, c;
a = b = c = 2 + 2;      // 4 4 4 (справа налево)

let a, b = 1;
let c = 3 - (a -b +1); 
console.log(a, b, c);   // 2 1 1
```

## alert, prompt, confirm

```javascript
alert('Hello');     // выведет в браузере модальное окно

// аналог input()
let age = prompt("how old are you?", 18) ;   // модальное окно со значением по умолчанию


let isCar = confirm('Message'); // модальное окно с выбором. Вернет true или false от выбора
```

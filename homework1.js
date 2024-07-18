// 1. 'number' + 3 + 3
// Операція починається з рядка 'number' і додає 3, потім ще один 3.
// 'number' + 3 -> 'number3'
// 'number3' + 3 -> 'number33'
// Результат: 'number33'
console.log('number' + 3 + 3); // 'number33'

// 2. null + 3
// null перетворюється на 0 під час додавання до числа.
// 0 + 3 = 3
// Результат: 3
console.log(null + 3); // 3

// 3. 5 && "qwerty"
// Операція && повертає другий операнд, якщо перший є істинним.
// 5 є істинним, тому результатом буде "qwerty".
// Результат: 'qwerty'
console.log(5 && "qwerty"); // 'qwerty'

// 4. +'40' + +'2' + "hillel"
// +'40' -> 40
// +'2' -> 2
// 40 + 2 -> 42
// 42 + "hillel" -> '42hillel'
// Результат: '42hillel'
console.log(+'40' + +'2' + "hillel"); // '42hillel'

// 5. '10' - 5 === 6
// '10' - 5 -> 5
// 5 === 6 -> false
// Результат: false
console.log('10' - 5 === 6); // false

// 6. true + false
// true -> 1
// false -> 0
// 1 + 0 -> 1
// Результат: 1
console.log(true + false); // 1

// 7. '4px' - 3
// '4px' не є числом, тому результат буде NaN.
// Результат: NaN
console.log('4px' - 3); // NaN

// 8. '4' - 3
// '4' -> 4
// 4 - 3 -> 1
// Результат: 1
console.log('4' - 3); // 1

// 9. '6' + 3 ** 0
// 3 ** 0 -> 1 (любое число в степени 0 равно 1)
// '6' + 1 -> '61'
// Результат: '61'
console.log('6' + 3 ** 0); // '61'

// 10. 12 / '6'
// '6' -> 6
// 12 / 6 -> 2
// Результат: 2
console.log(12 / '6'); // 2

// 11. '10' + (5 === 6)
// 5 === 6 -> false
// '10' + false -> '10false'
// Результат: '10false'
console.log('10' + (5 === 6)); // '10false'

// 12. null == ''
// null дорівнює тільки undefined при нестрогому порівнянні, але не порівнюється з порожнім рядком.
// Результат: false
console.log(null == ''); // false

// 13. 3 ** (9 / 3)
// 9 / 3 -> 3
// 3 ** 3 -> 27
// Результат: 27
console.log(3 ** (9 / 3)); // 27

// 14. !!'false' == !!'true'
// !!'false' -> true (будь-який непорожній рядок є істинним)
// !!'true' -> true
// true == true -> true
// Результат: true
console.log(!!'false' == !!'true'); // true

// 15. 0 || '0' && 1
// 0 || '0' -> '0'
// '0' && 1 -> 1
// Результат: 1
console.log(0 || '0' && 1); // 1

// 16. (+null == false) < 1
// +null -> 0
// 0 == false -> true
// true < 1 -> true
// Результат: true
console.log((+null == false) < 1); // true

// 17. false && true || true
// false && true -> false
// false || true -> true
// Результат: true
console.log(false && true || true); // true

// 18. false && (false || true)
// false || true -> true
// false && true -> false
// Результат: false
console.log(false && (false || true)); // false

// 19. (+null == false) < 1 ** 5
// +null -> 0
// 0 == false -> true
// 1 ** 5 -> 1
// true < 1 -> true
// Результат: true
console.log((+null == false) < 1 ** 5); // true

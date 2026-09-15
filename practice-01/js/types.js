"use strict";

// 1. Ожидание до запуска: "82", тип string
const result1 = "8" + 2;
console.log('"8" + 2');
console.log("Результат:", result1);
console.log("Тип результата:", typeof result1);

// 2. Ожидание до запуска: 6, тип number
const result2 = "8" - 2;
console.log('"8" - 2');
console.log("Результат:", result2);
console.log("Тип результата:", typeof result2);

// 3. Ожидание до запуска: 10, тип number
const result3 = Number("8") + 2;
console.log('Number("8") + 2');
console.log("Результат:", result3);
console.log("Тип результата:", typeof result3);

// 4. Ожидание до запуска: false, тип boolean
const result4 = "12" > "3";
console.log('"12" > "3"');
console.log("Результат:", result4);
console.log("Тип результата:", typeof result4);

// 5. Ожидание до запуска: false, тип boolean
const result5 = 12 === "12";
console.log('12 === "12"');
console.log("Результат:", result5);
console.log("Тип результата:", typeof result5);

// 6. Ожидание до запуска: 0, тип number
const result6 = Number("");
console.log('Number("")');
console.log("Результат:", result6);
console.log("Тип результата:", typeof result6);

// 7. Ожидание до запуска: NaN, тип number
const result7 = Number("text");
console.log('Number("text")');
console.log("Результат:", result7);
console.log("Тип результата:", typeof result7);

// 8. Ожидание до запуска: true, тип boolean
const result8 = Boolean("false");
console.log('Boolean("false")');
console.log("Результат:", result8);
console.log("Тип результата:", typeof result8);

// 9. Ожидание до запуска: "object", тип string
const result9 = typeof null;
console.log('typeof null');
console.log("Результат:", result9);
console.log("Тип результата:", typeof result9);

// 10. Ожидание до запуска: "number", тип string
const result10 = typeof NaN;
console.log('typeof NaN');
console.log("Результат:", result10);
console.log("Тип результата:", typeof result10);


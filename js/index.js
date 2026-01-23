// for while do ... while

// 1 - ключове слово
// 2 - лічильник
// 3 - умова роботи
// 4 -  i++ - рух лічильника
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// while - це цикл з умовою(він виконужться поки виконується умова)

let attempts = 3;
const password = "QWERTY12345";

while (attempts > 0) {
  const test = prompt("Введи пароль");
  if (test === password) {
    alert("Ласково просимо");
    break;
  } else {
    attempts--;
    alert(`Помилка, залишилось ${attempts} спроб`);
  }
}

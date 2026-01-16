const message = "Приивіт";

const index = message.indexOf("и", 3);

console.log(index);

const message1 = "Hello";

console.log(message1.toLowerCase().includes("E"));

//

// const phone = prompt("Введи номер телефону");

// if (phone.startsWith("+380")) {
//   console.log("наш номер");
// } else {
//   console.log("закордонний номер, ми їмо трафік");
// }

const img = "src/asssets/img.png";

if (img.endsWith(".jpg")) {
  console.log("Додавати елемент можна");
} else {
  console.log("Все інше пкои відкидаємо");
}

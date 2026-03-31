// Імперативний та декларативний код
// 90%

// ІМПЕРА
// const arr = [2, 4, 6, 8];

// for (const element of arr) {
//   console.log(element * 2);
// }
// DECLAR

// arr.forEach((number) => console.log(number * 2));

// чисті функції
//Приклади та задачі

// function filterNam(arr3) {
//   const arr4 = [];
//   for (const element of arr3) {
//     if (element > 5) {
//       arr4.push(element);
//     }
//   }
//   return arr4;
// }
// console.log(filterNam(arr3));

// const filterArr = arr3.filter((number) => number > 5);

// console.log(filterArr);

// map;

const arr3 = [1, 4, 7, 9, 10, 3, 5, 6];

const multiply = arr3.map((number) => number * 2);
console.log(arr3);
console.log(multiply);

const cart = [
  { id: 1, title: "Phone", price: 500 },
  { id: 2, title: "Laptop", price: 1200 },
  { id: 3, title: "Mouse", price: 50 },
];

const users = [
  { id: 2, name: "Maria", age: 17, isActive: false },
  { id: 3, name: "John", age: 30, isActive: true },
  { id: 1, name: "Alex", age: 25, isActive: true },
  { id: 4, name: "Kate", age: 22, isActive: false },
];
console.log(users);

const copyArr = [...users];
const copyArr1 = users.slice();

console.log(copyArr);
console.log(copyArr1);

// const sortedUsers = copyArr1.xsort((a, b) => b.age - a.age);

// console.log(sortedUsers);

// localecompare;

// const sortedUsersByName =

console.log(copyArr.sort((a, b) => b.name - a.name));

// console.log(sortedUsersByName);

const a = "réservé"; // With accents, lowercase
const b = "RESERVE"; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// Expected output: 0

// const string = ["c", "d", "y", "b"];

// console.log(string.sort());

const characters = [
  {
    id: 1,
    name: "Arthas",
    class: "Paladin",
    level: 80,
    health: 12000,
    faction: "Alliance",
  },
  {
    id: 2,
    name: "Thrall",
    class: "Shaman",
    level: 75,
    health: 9500,
    faction: "Horde",
  },
  {
    id: 3,
    name: "Sylvanas",
    class: "Ranger",
    level: 85,
    health: 8000,
    faction: "Horde",
  },
  {
    id: 4,
    name: "Jaina",
    class: "Mage",
    level: 78,
    health: 6500,
    faction: "Alliance",
  },
  {
    id: 5,
    name: "Uther",
    class: "Paladin",
    level: 90,
    health: 15000,
    faction: "Alliance",
  },
  {
    id: 6,
    name: "Gul'dan",
    class: "Warlock",
    level: 82,
    health: 7000,
    faction: "Horde",
  },
  {
    id: 7,
    name: "Illidan",
    class: "Demon Hunter",
    level: 99,
    health: 20000,
    faction: "Neutral",
  },
  {
    id: 8,
    name: "Malfurion",
    class: "Druid",
    level: 88,
    health: 11000,
    faction: "Alliance",
  },
  {
    id: 9,
    name: "Vol'jin",
    class: "Shadow Hunter",
    level: 72,
    health: 8800,
    faction: "Horde",
  },
  {
    id: 10,
    name: "Tyrande",
    class: "Priest",
    level: 84,
    health: 7500,
    faction: "Alliance",
  },
];

const number = [1, 2, 3, 4, 5];

const sum = number.reduce((acc, number) => {
  return (acc += number);
}, 0);

console.log(sum);

const users = [
  { id: 1, name: "Anna", active: true },
  { id: 2, name: "Ivan", active: true },
  { id: 3, name: "Olena", active: true },
];

const activeUsersIsHere = users.some(({ active }) => active);

console.log(activeUsersIsHere);

const allHere = users.every(({ active }) => active);

console.log(allHere);

// some;
// every;

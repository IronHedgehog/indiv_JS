const pirat = {
  name: "Petro",
  pseudo: "Jack",
  money: 0,

  goWalk() {
    this.money += 100;
    console.log(pirat);
  },
};

pirat.goWalk();

Math;
Number(0);

// class - заводи з виробництва обʼєктів
// class - креслення обʼєкта за яким ти можеш створювати нові обʼєкти

class BasePirate {
  constructor(name, pseudo, money) {
    this.name = name;
    this.pseudo = pseudo;
    this.money = money;
  }
}

const Bill = new BasePirate("North", "tirn", 0);

for (let i = 0; i < 100; i++) {
  console.log(new BasePirate(`North${i}`, `tirn${i}`, `${i}`));
}
console.log(BasePirate);
console.log(Bill);

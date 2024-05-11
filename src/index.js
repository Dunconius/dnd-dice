const { rollDice, rollWithAdvantage, rollWithDisadvantage } = require("./diceRolling");


console.log(rollDice());
console.log(rollDice(20));
console.log(rollDice(12));
console.log(rollWithAdvantage(20));
console.log(rollWithDisadvantage(20));
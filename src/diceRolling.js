
/**
 * Generate a random number between 1 and a given size.
 * @param [diceSize=6] -  represents size of die
 * @returns A random number between 1 and given size
 */
function rollDice(diceSize = 6){
    let rollResult = Math.floor(Math.random() * diceSize) + 1
    return rollResult;
}

/**
 * Generate a random number between 1 and a given size twice, and returns highest value.
 * @param [diceSize=6] -  represents size of die
 * @returns A random number between 1 and given size twice, then highest of those 2
 */
function rollWithAdvantage(diceSize = 6) {
    let result = {
        finalResult: null,
        rolls: []
    };
    
    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ];
    
    result.finalResult = Math.max(...result.rolls);
    return result;
}

/**
 * Generate a random number between 1 and a given size twice, and returns lowest value.
 * @param [diceSize=6] -  represents size of die
 * @returns A random number between 1 and given size twice, then lowest of those 2
 */
function rollWithDisadvantage(diceSize = 6) {
    let result = {
        finalResult: null,
        rolls: []
    };
    
    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ];
    
    result.finalResult = Math.min(...result.rolls);
    return result;
}


module.exports = {
    rollDice,
    rollWithAdvantage,
    rollWithDisadvantage
}
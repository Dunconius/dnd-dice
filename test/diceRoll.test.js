const { rollDice } = require("../src/diceRolling")

beforeEach(() => {
    console.log('A test has been started!');
});

afterEach(() => {
    console.log('A test has finished!');
});

beforeAll(() => {
    console.log('Testing will now begin!');
});

afterAll(() => {
    console.log('All testing is complete!');
});

describe('As a casual gamer...', () => {
    
    test('... I want to roll a D6', () => {
        
        let result = rollDice();
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(6);
        
    })

})
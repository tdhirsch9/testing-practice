import { add, capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index'


test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('capitalizes first letter in a string', () => {
  expect(capitalize('hello sir')).toBe('Hello sir')
})

test('takes a string and returns it reversed', () => {
    expect(reverseString('penguin')).toBe('niugnep')
})

test('adds two numbers together', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

test('subtracts one number from another', () => {
    expect(calculator.subtract(2, 1)).toBe(1)
})

test('multiplies two numbers together', () => {
    expect(calculator.multiply(1, 2)).toBe(2)
})

test('divides one number from another', () => {
    expect(calculator.divide(4, 2)).toBe(2)
})

test('takes a string and a shift factor and returns each character shifted', () => {
    expect(caesarCipher('Hello, World! 123', 3)).toBe("Khoor, Zruog! 123")
})

test('takes an array and returns an object with the following properties: average, min, max and length', () => {
    const result = analyzeArray([1,8,3,4,2,6]);

    expect(result).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
    })
})
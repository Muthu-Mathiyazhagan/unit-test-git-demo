const lib = require('../lib');

// 90232
describe('Absolute : 90232 : Muthu Mathiyazhagan K', () => {
    it('It Should return Positive Number if the Input is Postive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    })


    it('It Should return Positive Number if the Input is Negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    })

    it('It Should return 0 if the Input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    })
})
////I90494
describe("FizzBuzz : I90494 : Atharsh S", () => {
    it("should return 'FizzBuzz' if input can be divide by 5 and 3", () => {
        const result = lib.FizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    })
    it("should return 'Fizz' if input can be divide by 5", () => {
        const result = lib.FizzBuzz(5);
        expect(result).toBe('Fizz');
    })
    it("should return 'Buzz' if input can be divide by 3", () => {
        const result = lib.FizzBuzz(3);
        expect(result).toBe('Buzz');
    })
    it("should return 'BuzzBuzz' if input can be divide by 11", () => {
        const result = lib.FizzBuzz(11);
        expect(result).toBe('BuzzBuzz');
    })

})

// 90487
describe('evenodd : 90487 :  Sakthi Praba V', () => {
    it('It Should return 1 if the Input is even number', () => {
        const result = lib.evenodd(2);
        expect(result).toBe(1);
    })


    it('It Should return 0 if the Input is odd number', () => {
        const result = lib.evenodd(1);
        expect(result).toBe(0);
    })
})

//90486
describe('Vowel : 90486 : Priyadharshini M', () => {
    it('If a lowercase character a,e,i,o,u is given it Should return Yes', () => {
        const result = lib.vowel('a');
        expect(result).toBe("Yes");
    })


    it('If a uppercase character A,E,I,O,U is given it Should return Yes', () => {
        const result = lib.vowel('E');
        expect(result).toBe("Yes");
    })

    it('If except a,e,i,o,u other character is given it Should return No', () => {
        const result = lib.vowel('b');
        expect(result).toBe('No');
    })

    it('If otherthan character is given it Should return Invalid', () => {
        const result = lib.vowel(8);
        expect(result).toBe('Invalid');
    })
})

describe('validateEmail : 90502 : Vijay M', () => {
    it('It Should return Valid Email if the Input is Contains anystring@anystring.anystring pattern', () => {
        const result = lib.validateEmail("vijay98430@gmail.com");
        expect(result).toBe('valid email');
    })

    it('It Should return InValid Email if the Input is Contains anystring@anystring.anystring pattern', () => {
        const result = lib.validateEmail("vijay98430#gmail.com");
        expect(result).toBe('invalid email');
    })

    it('It Should return InValid Email if the Input is Contains anystring@anystring.anystring pattern', () => {
        const result = lib.validateEmail("vijay98430#gmail");
        expect(result).toBe('invalid email');
    })
})

// 90490
describe('divisible_by_5 : 90490 :  Aarthi S', () => {
    it('It Should return Yes if the Input is divisible by 5', () => {
        const result = lib.divisible_by_5(20);
        expect(result).toBe("Yes");
    })


    it('It Should return No if the Input is not divisible by 5', () => {
        const result = lib.divisible_by_5(13);
        expect(result).toBe("No");
    })
})

    //90501

    describe('checkIsEven : 90501 : Pavan ', () => {

        it('If input is multiple of 2 it should reply true', () => {
            const result = lib.checkIsEven(2)
            expect(result).toBe(true);
        })
    })
    describe('checkIsEven : 90501 : Pavan ', () => {

        it('If input is not a multiple of 2 it should reply false', () => {
            const result = lib.checkIsEven(1)
            expect(result).toBe(false);
        })
    })
    describe('checkIsEven : 90501 : Pavan ', () => {
        it('If input is negative multiple of 2 result is true', () => {
            const result = lib.checkIsEven(-2)
            expect(result).toBe(true);
        })
    })
    describe('checkIsEven : 90501 : Pavan ', () => {
        it('If input is <0 and not a multiple of 2 result is false', () => {
            const result = lib.checkIsEven(-1)
            expect(result).toBe(false);
        })
    })
    describe('checkIsEven : 90501 : Pavan ', () => {
        it('If input is not a multiple of 2 it should reply false', () => {
            const result = lib.checkIsEven(-1)
            expect(result).toBe(false);
        })
    })
//90489
describe('noofdays : 90489 :  Reshma S', () => {
    it('It Should return "No of days in a month" if the Input is between 28 and 31', () => {
        const result = lib.noofdays(31);
        expect(result).toBe("No of days in a month");
    })


    it('It Should return "Enter number between 28 and 31" if the Input is not between 28 and 31', () => {
        const result = lib.noofdays(13);
        expect(result).toBe("Enter number between 28 and 31");
    })
})

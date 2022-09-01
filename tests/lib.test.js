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

//90491
describe('whole : 90491 : Kannathal AR ', () => {
    it('It Should return " Whole number" if the Input is greater than or equal to 0', () => {
    const result = lib.whole(20);
    expect(result).toBe("Whole number");
    })
    
    it('It Should return "Not a whole number" if the Input less than 0', () => {
    const result = lib.whole(-13);
    expect(result).toBe("Not a whole number");
    })
    })
//90498
describe('primeornot : 90498 : Sailochana R', () => {
    it('It should return False if the Input is equal to 1' , () => {
        const result=lib.primeornot(1);
        expect(result).toBe(false);
    })
    it('It should return True if the Input is equal to 2' , () => {
        const result=lib.primeornot(2);
        expect(result).toBe(true);
    })
    it('It should return False if the Input is divisible by x' , () => {
        const result=lib.primeornot(15);
        expect(result).toBe(false);
    })
    it('It should return True if the Input is not divisible by x' , () => {
        const result=lib.primeornot(13);
        expect(result).toBe(true);
    })
})
//90497
describe('Fact : 90497 : Mohammed Sithik S',()=>{
    it('It should return Factorial of 5 => 120',()=>{
        const result=lib.Factorial(5);
        expect(result).toBe(120);
    })
    it('It should return Factorial of 6 => 720',()=>{
        const result=lib.Factorial(6);
        expect(result).toBe(720);
    })
})

//I90499
describe('Eligibility vote : 90499 : Neela Kanta Reddy',()=>{
    it('I age less than 0 please enter a valid age',()=>{
        const result=lib.VoteEligibility(-1);
        expect(result).toBe(msg);
    })
    it('If Age greater than 18 eligible to vote',()=>{
        const result=lib.VoteEligibility(19);
        expect(result).toBe(true);
    })
    it('I age less than 18 not eligible to vote',()=>{
        const result=lib.VoteEligibility(17);
        expect(result).toBe(false);
    })
})

//90500
describe('armstrong:90500:Anil_C',()=>{
    it('it should return true if input number is armstrong',()=>{
        const result=lib.Armstrong(153);
        expect(result).toBe(true);
    })
    it('it should return false if the number is not an armstrong number',()=>{
        const result=lib.Armstrong(152);
        expect(result).toBe(false);
    })
    it('it should gives messae if the number is less than zero',()=>{
        const result=lib.Armstrong(-12);
        expect(result).toBe('please enter positive number');
    })
})
//90495
describe('LeapYear:90495:Vijesh_S',()=>{
    it('it should return "leap" if the year is leap year',()=>{
        const result=lib.LeapYear(2000);
        expect(result).toBe("leap");
    })
    it('it should return "not leap" if the year is not a leap year',()=>{
        const result=lib.LeapYear(2019);
        expect(result).toBe("not leap");
    })
    it('it should return "leap" if the year is leap year',()=>{
        const result=lib.LeapYear(2012);
        expect(result).toBe("leap");
    })
})


//90496

describe('countVowel : 90496 : Anbu V', () => {
    it('It Should return the count of vowels', () => {
        const result = lib.countVowel("anbu");
        expect(result).toBe(2);
    })


    it('It Should return the count of vowels', () => {
        const result = lib.countVowel("vijesh");
        expect(result).toBe(2);
    })

    it('It Should return the count of vowels', () => {
        const result = lib.countVowel("stanly");
        expect(result).toBe(1);
    })
})
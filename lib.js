// 90232 
module.exports.absolute = function (number) {
    return (number >= 0) ? number : -number;
}
//I90494
module.exports.FizzBuzz = function (number) {
    if(number%5==0 && number%3==0){
        return "FizzBuzz";
    }
    else if(number%5==0){
        return "Fizz";
    }
    else if(number%3==0){
        return "Buzz";
    }
    else if(number%11==0){
        return "BuzzBuzz"
    }

}
// I90487
module.exports.evenodd = function (num) {
    if(num % 2 == 0) {
        return 1;
    }
    else {
        return 0;
    }
    }
    
 // 90486
module.exports.vowel = function (ch){
    if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z'))
   {
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
             return "Yes";
        else if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
             return "Yes";
        else
             return "No";
    }
    else
        return "Invalid";
}   

//90502
module.exports.validateEmail= function(email) 
    {
        var re = /\S+@\S+\.\S+/;
    if(re.test(email)==true){
        return "valid email";
    }
    else{
        return "invalid email";
    }
}

//90490
module.exports.divisible_by_5 = function (n) {
    if(n % 5 == 0) {
        return "Yes";
    }
    else {
        return "No";
    }
    }

//90501
module.exports.checkIsEven = function (num){
    // Checks if given number is even or not 
    if(num%2==0) return true;
    else return false;
}

//90489
module.exports.noofdays=function(days){
    if(days==30||days==31||days==28||days==29){
        return "No of days in a month";
    }else{
        return "Enter number between 28 and 31";
    }
}

//90491
module.exports.whole=function(i){
    if(i>=0){
        return "Whole number";
    }else{
        return "Not a whole number";
    }
}
//90498
module.exports.primeornot=function(n)
{

  if (n==1)
  {
    return false;
  }
  else if(n == 2)
  {
    return true;
  }
  else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x == 0)
      {
        return false;
      }
    }
    return true;  
  }
}
//90497
module.exports.Factorial=function(n)
{
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}


//90500

module.exports.Armstrong=function(n)
{
    let sum = 0;
    let temp = n;
    if (n<0)
    {
        return 'please enter positive number';
    }
    while (temp > 0) {
        // finding the one's digit
        let remainder = temp % 10;

        sum += remainder * remainder * remainder;

        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
    // check the condition
    if (sum == n) {
        return true;
    }
    else {
        return false;
    }
}

//90495
module.exports.LeapYear=function(year){
    if (year % 4 == 0) {
        if (year % 100 == 0) {
          if (year % 400 == 0)
            return "leap";
          else
            return "not leap";
        }
        else
          return "leap";
    }
    else
        return "not leap";
    
}

//90496
const vowels = ["a", "e", "i", "o", "u"]

module.exports.countVowel = function(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}

//i90511
module.exports.addition = function(n,m)
{
    let sum = n+m;
    return sum;
}

//I90512
module.exports.VoteEligibility= function(n){
    return (n>=18)?"Eligible":"Not Eligible";
}

//I90488
module.exports.odd=function(n){
    return (n%2==0)?"No":"Yes";
}
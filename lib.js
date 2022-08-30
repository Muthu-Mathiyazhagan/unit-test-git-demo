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

//90489
module.exports.noofdays=function(days){
    if(days==30||days==31||days==28||days==29){
        return "No of days in a month";
    }else{
        return "Enter number between 28 and 31";
    }
}
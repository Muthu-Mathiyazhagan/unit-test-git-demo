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



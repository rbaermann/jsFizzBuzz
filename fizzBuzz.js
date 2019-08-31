function fizzBuzz(num) {
    if(!num > 0) {
        return null;
    }
    var string = "";
    var i = 1;
    while(i <= num) {
        if(i % 3 === 0 && i % 5 === 0 && i != num) {
            string += "FizzBuzz, ";
        }
        else if(i % 3 === 0 && i != num) {
            string += "Fizz, ";
        }
        else if(i % 5 === 0 && i != num) {
            string += "Buzz, ";
        }
        else if(i != num) {
            string += i + ", ";
        }
        if(i % 3 === 0 && i % 5 === 0 && i === num) {
            string += "FizzBuzz.";
        }
        else if(i % 3 === 0 && i === num) {
            string += "Fizz.";
        }
        else if(i % 5 === 0 && i === num) {
            string += "Buzz.";
        }
        else if(i === num) {
            string += i + ".";
        }
    i++;
    }
    return string;
}
console.log(fizzBuzz(15));
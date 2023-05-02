
let numbers = [2,4,6,8,11,20,15,22]
const oddNumbers = []
for(let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) {
    oddNumbers.push(numbers[index])
  }
}

console.log(oddNumbers)

let word  = "hello"
let vowelcount=0 
let consonantcount=0
const vowels = ["a","e","i","o","u"]
for(let i = 0; i < word.length; i++) { 
  
    if(vowels.includes(word[i])) {
      vowelcount++
    } else{
      consonantcount++
    }
} 
let result = word +  " has "  + consonantcount  + "  consonants and "  +  vowelcount + " vowels "
//"hello has 3 consonants and 2 vowels"
console.log(result)

const numbers2 = [ 1, 2, 3 ];

numbers.reverse();

console.log (numbers)
// "result is [3,2,1]"

for(let i = 0; i < 100; i++) 
{
console.log(i)
}

for(let i = 1; i <= 100; i++) 
{
  if( i% 3 ===0 && i% 5 ===0){
    console.log("FizzBuzz")
  }

  else if(i% 3 === 0) {
    console.log("Fizz")
  }
  else if ( i% 5 === 0){
    console.log("Buzz")
  }
  else{
    console.log(i)
  }

}
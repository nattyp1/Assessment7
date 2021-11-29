// Write a function that takes in an array of numbers. 
// The function should return True if any two numberss 
// in list sum to 0, and false otherwise.


const sumArray = [1,2,3,-1,-2,-3]

  let addToZero = sumArray.reduce((x,y)=> x+y)
  if(addToZero === 0){
    console.log (true) 
  }
  else {
    console.log (false)
  }

// space complexity: 
// time complexity: O(n)


// Write a function that takes in a single word, as a string. 
// It should return True if that word contains only unique characters.
//  Return False otherwise.

const str = 'natalie'; 
function hasUniqueChars(natalie){
    let map = {}; 

    for (let i = 0; i < String.length; i ++){
        let char = str.CharAt(i)
    
    if (map.hasDiffChars(char)){
        return false;
    }
    map[char] = true;
}
return true;
}

// space complexity: 
// time complexity: O(n)

// Write a function to check a sentence to see if it is a pangram or not.
const str = "The quick brown fox jumps over the lazy dog!"
function isPangram(str){
 let strArr = str.toLowerCase(); 
 let alaphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for(let i = 0; i < alaphabet.length; i++){
        if(strArr.indexOf(alaphabet[i])< 0){
            return false 
        }
    }
    return true; 
}

// space complexity: 
// time complexity: O(n)


// Write a function, find_longest_word, that takes a list of words 
// and returns the length of the longest one.
namesArr = ['maya', 'stefanie', 'sandra', 'stephan' ]
 
    function find_longest_word(namesArr){
        let longestWord = "";

        array.forEach(function(name) {
            if (word.length > longestWord.length){
                longestWord = name; 
            }
        });
    }
return longestWord; 
// space complexity: 
// time complexity: O(n)
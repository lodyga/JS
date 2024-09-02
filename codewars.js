// Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/
console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);
console.log(countBits(1234), 5);
console.log(countBits(9990957657), 16);


var countBits = (n) => n.toString(2).split('0').join('').length
var countBits = (n) => n.toString(2).split('').filter(x => x === '1').length
var countBits = (n) => n.toString(2).split('').filter(function (x) { return x === '1'}).length
function countBits(n) {return n.toString(2).split('0').join('').length}


var countBits = function(n) {
  let counnter = 0;

  for (num of n.toString(2)) {
    if (num == '1') {
      counnter += 1
    }
  }
  return counnter
}


// JavaScript uses 32-bit integers for bitwise operations, which means that when 
// use the >> (right shift) operator on large numbers, it can lose precision and lead to incorrect results.
var countBits = function(n) {
  let num = '';
  let counter = 0;
  
  while (true) {
    let mod = n % 2;
    n = n >> 1;  // n = Math.floor(n / 2);

    num = mod + num;

    if (mod) {
      counter += 1
    }

    if (!n) {
      break
    }
  }
  return counter
}





// Sum of Digits / Digital Root
// https://www.codewars.com/kata/541c8630095125aba6000c00/train/
console.log(digitalRoot(16), 7)
console.log(digitalRoot(169), 7)
console.log(digitalRoot(942), 6)
console.log(digitalRoot(132189), 6)
console.log(digitalRoot(493193), 2)


function digitalRoot(n) {
  let nStr = n.toString()
  while (nStr.length != 1) {
    let currentSum = 0;
    
    for (digit of nStr) {
      currentSum += Number(digit)
    }
    nStr = currentSum.toString();
  }
  return Number(nStr)
}


function digitalRoot(n) {
  while (n.toString().length != 1) {
    n = n.toString().split('').reduce((a, b) => (Number(a) + Number(b)))
  }
  return n
}





// Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/
console.log(isPangram("The quick, brown fox jumps over the lazy dog!"), true)
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"), true)


function isPangram(sentence) {
  const letters = new Set();

  for (let letter of sentence.toLowerCase()) {
    if (letter.match(/[a-z]/)) {
      letters.add(letter)
    }
  }
  return letters.size == 26
}





// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/
console.log(solution(4), 3)
console.log(solution(6), 8)
console.log(solution(16), 60)
console.log(solution(3), 0)
console.log(solution(5), 3)
console.log(solution(15), 45)
console.log(solution(0), 0)
console.log(solution(-1), 0)
console.log(solution(10), 23)
console.log(solution(20), 78)
console.log(solution(200), 9168)


function solution(nums){
  let divSum = 0;

  for (let num = 0; num < nums; num++) {
    if (!(num % 3) || !(num % 5)) {
      divSum += num;
    }
  }
 return divSum 
}





// The Hashtag Generator
// https://www.codewars.com/kata/52449b062fb80683ec000024
console.log(generateHashtag(" Hello there thanks for trying my Kata"), "#HelloThereThanksForTryingMyKata")
console.log(generateHashtag("    Hello     World   "), "#HelloWorld")
console.log(generateHashtag(''), false)  // 'Expected an empty string to return false'
console.log(generateHashtag('Do We have A Hashtag')[0], '#')  // 'Expeted a Hashtag (#) at the beginning.'
console.log(generateHashtag('Codewars'), '#Codewars')  // 'Should handle a single word.'
console.log(generateHashtag('Codewars      '), '#Codewars')  // 'Should handle trailing whitespace.'
console.log(generateHashtag('Codewars Is Nice'), '#CodewarsIsNice')  // 'Should remove spaces.'
console.log(generateHashtag('codewars is nice'), '#CodewarsIsNice')  // 'Should capitalize first letters of words.'
console.log(generateHashtag('CodeWars is nice'), '#CodewarsIsNice')  // 'Should capitalize all letters of words - all lower case but the first.'
console.log(generateHashtag('c i n'), '#CIN')  // 'Should capitalize first letters of words even when single letters.'
console.log(generateHashtag('codewars  is  nice'), '#CodewarsIsNice')  // 'Should deal with unnecessary middle spaces.'
console.log(generateHashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'), false)  // 'Should return false if the final word is longer than 140 chars.'
console.log(generateHashtag('    '), false)


function generateHashtag(sentence) {
  if (!sentence.trim()) {
      return false
  }
  let hashtag = '#';

  for (let word of sentence.split(' ')) {
      hashtag += word.charAt(0).toUpperCase() + word.slice(1,)

      if (hashtag.length > 140) {
          return false
      }
  }
  return hashtag
}


function generateHashtag(sentence) {
  if (!sentence.trim()) {
      return false
  }
  let hashtag =
      '#' +
      sentence
          .split(' ')
          .map(x => x.charAt(0).toUpperCase() + x.slice(1,))
          .join('');

  if (hashtag.length > 140) {
      return false
  } else {
      return hashtag
  }

}





// Product of consecutive Fib numbers
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a
console.log(productFib(714), [21, 34, true])
console.log(productFib(800), [34, 55, false])
console.log(productFib(4895), [55, 89, true])
console.log(productFib(5895), [89, 144, false])
console.log(productFib(0), [0, 1, true])



function productFib(prod){
  let a = 0;
  let b = 1;

  while (a * b < prod) {
    [a, b] = [b, a + b];
    // b = a + b;
    // a = b - a;
  }

  return [a, b, a * b === prod]
}





// Write Number in Expanded Form
// https://www.codewars.com/kata/5842df8ccbd22792a4000245
console.log(expandedForm(12), '10 + 2')
console.log(expandedForm(42), '40 + 2')
console.log(expandedForm(70304), '70000 + 300 + 4')


function expandedForm(num) {
  const expanded = [];
  let numStr = num.toString();

  for (index in numStr) {
    let digit = Number(numStr[index]);
    let power = numStr.length - index - 1;
    
    if (digit) {
      expanded.push(digit * 10 ** power);
    }
  }

  return expanded.join(' + ')
}


var expandedForm = (num) =>
  num
    .toString()
    .split('')
    .reverse()
    .map((digit, index) => digit * 10 ** index)
    .filter(x => x)
    .reverse()
    .join(' + ')











// Directions Reduction
var dir_reduc = (directions) => {
  const oppos_direction = { "NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST" };
  const seen = [];

  for (let direction of directions) {
    if (oppos_direction[direction] === seen[seen.length - 1]) {
      seen.pop();
    } else {
      seen.push(direction)
    }
  }
  return seen
}
console.log(dir_reduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), ['WEST'])
console.log(dir_reduc(['NORTH', 'EAST', 'WEST', 'SOUTH', 'WEST', 'WEST']), ['WEST', 'WEST'])
console.log(dir_reduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), ['NORTH', 'WEST', 'SOUTH', 'EAST'])
console.log(dir_reduc([]), [])





//   
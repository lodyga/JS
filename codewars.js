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
var countBits = (n) => n.toString(2).split('').filter(function (x) { return x === '1' }).length
function countBits(n) { return n.toString(2).split('0').join('').length }


var countBits = function (n) {
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
var countBits = function (n) {
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


function solution(nums) {
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



function productFib(prod) {
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





// RGB To Hex Conversion
// https://www.codewars.com/kata/513e08acc600c94f01000001
console.log(rgb(0, 0, 0), "000000")  // "testing zero values"
console.log(rgb(1, 2, 3), "010203")  // "testing near zero values"
console.log(rgb(255, 255, 255), "FFFFFF")  // "testing max values"
console.log(rgb(254, 253, 252), "FEFDFC")  // "testing near max values"
console.log(rgb(-20, 275, 125), "00FF7D")  // "testing out of range values"


function rgb(r, g, b) {
  function digitToHex(color) {
    color = Math.max(Math.min(color, 255), 0);
    color = color.toString(16);
    color = color.toUpperCase();

    if (color.length === 1) {
      color = '0' + color;
    }

    return color
  }

  return digitToHex(r) + digitToHex(g) + digitToHex(b)
}





// The observed PIN
// https://www.codewars.com/kata/5263c6999e0f40dee200059d
console.log(getPINs('8'), ['5', '7', '8', '9', '0'])
console.log(getPINs('11'), ["11", "22", "44", "12", "21", "14", "41", "24", "42"])


// pin as a shared variable (list)
function getPINs(observed) {
  const pin = [];
  const pins = [];
  const adjacent = {
    "0": "08",
    "1": "124",
    "2": "1235",
    "3": "326",
    "4": "1457",
    "5": "45682",
    "6": "6593",
    "7": "748",
    "8": "57890",
    "9": "986"
  }

  function dfs(index) {
    if (index === observed.length) {
      pins.push(pin.join(''));
      return
    }

    for (let digit of adjacent[observed[index]]) {
      pin.push(digit);
      dfs(index + 1);
      pin.pop();
    }
  }

  dfs(0)

  return pins
}


// pin as an argument (string) to the dfs function, slower than the list approach
function getPINs(observed) {
  let some_str = 'ala';
  const pins = [];
  const adjacent = {
    "0": "08",
    "1": "124",
    "2": "1235",
    "3": "326",
    "4": "1457",
    "5": "45682",
    "6": "6593",
    "7": "748",
    "8": "57890",
    "9": "986"
  }

  function dfs(index, pin) {
    if (index === observed.length) {
      pins.push(pin);
      return
    }

    for (let digit of adjacent[observed[index]]) {
      pin += digit;
      dfs(index + 1, pin);
      pin = pin.slice(0, -1);  // pin = pin.slice(0, pin.length - 1)

    }
  }

  dfs(0, '')

  return pins
}





// Weight for weight
// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/
console.log(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
console.log(orderWeight(""), "")


function orderWeight(number) {
  const numberList = number.split(' ')

  // const sum = (c) => {return c.split('').map(z => Number(z)).reduce((x, y) => x + y)}
  // function sum(c) {return c.split('').map(z => Number(z)).reduce((x, y) => x + y)}
  const sum = (c) => c.split('').map(z => Number(z)).reduce((x, y) => x + y)

  numberList.sort((a, b) => {
    let aSum = sum(a);
    let bSum = sum(b);

    if (aSum < bSum) return -1
    else if (aSum > bSum) return 1
    else {
      if (a < b) return -1
      else if (a > b) return 1
      else return 0
    }
  })
  return numberList.join(' ')
}





// Strip Comments
// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/python
console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']))
console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']), 'apples, pears\ngrapes\nbananas')
console.log(solution(' a #b\nc\nd $e f g', ['#', '$']), ' a\nc\nd')
console.log(solution('a #b\nc\nd $e f g', ['#', '$']), 'a\nc\nd')
console.log(solution("' = lemons\napples pears\n. avocados\n= ! bananas strawberries avocados !\n= oranges", ['!', '^', '#', '@', '=']), "'\napples pears\n. avocados\n\n")
console.log(solution('aa bb cc', []), 'aa bb cc')
console.log(solution('aa bb\n#cc dd', ['#']), 'aa bb\n')


function solution(text, markers) {
  if (markers.length === 0) {
    return text.trimEnd()
  }

  let sentences = text.split('\n');
  sentences = sentences.map(x => x.trimEnd());

  for (let marker of markers) {
    const clean_sentences = [];

    for (let sentence of sentences) {
      if (sentence.includes(marker)) {
        sentence = sentence.split(marker)[0].trimEnd();
      }

      clean_sentences.push(sentence);
    }

    sentences = clean_sentences;
  }
  return sentences.join('\n')
}





// Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/ 
console.log(formatDuration(0), "now")
console.log(formatDuration(1), "1 second")
console.log(formatDuration(2), "2 seconds")
console.log(formatDuration(62), "1 minute and 2 seconds")
console.log(formatDuration(120), "2 minutes")
console.log(formatDuration(3600), "1 hour")
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds")
console.log(formatDuration(8237710), "95 days, 8 hours, 15 minutes and 10 seconds")


function formatDuration(num) {
  if (!num) return 'now'

  const howManySeconds = [
    ['year', 60 * 60 * 24 * 365],
    ['day', 60 * 60 * 24],
    ['hour', 60 * 60],
    ['minute', 60],
    ['second', 1]
  ]

  const durationNums = [];    // how many years, days, hours, minutes, seconds int list
  for (let howMany of howManySeconds) {
    durationNums.push(Math.floor(num / howMany[1]));
    num = num % howMany[1]
  }

  const durationStrs = [];  // formated to string date chunks
  for (let index = 0; index < durationNums.length; index++) {
    let duration = '';
    
    if (durationNums[index]) {  // if chunk is not 0
      duration = `${durationNums[index]} ${howManySeconds[index][0]}`
      
      if (durationNums[index] > 1) {  // if plural
        duration += 's';
      }
      durationStrs.push(duration);
    }  
  }

  if (durationStrs.length === 1) {  // in only one chunk
    return durationStrs[0]
  } else {
    // join chunks all exept the last one with ", " and the last one with " and "
    return (
      durationStrs.slice(0, durationStrs.length - 1).join(', ') +
      ' and ' +
      durationStrs.slice(durationStrs.length - 1));
  }
}














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





// Persistent Bugger.
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
console.log(persistence(39), 3)
console.log(persistence(4), 0)
console.log(persistence(25), 2)
console.log(persistence(999), 4)


function persistence(num) {
  let counter = 0;
  
  while (num > 9) {
    counter++;
    num = num.toString().split('').reduce((a , b) => a * b);

  }
  return counter
}


function persistence(num) {
  let counter = 0;
  
  while (num > 9) {
    counter++;
    let currentProduct = 1;

    for (let digit of String(num)) {
      currentProduct *= digit;
    }

    num = currentProduct;

  }
  return counter
}





// Number of People in the Bus
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099
console.log(number([[10, 0], [3, 5], [5, 8]]), 5)
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17)
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21)


var number = function (busStops) {
  let numberOfPeople = 0;
  for (const busStop of busStops) {
    numberOfPeople += busStop[0] - busStop[1];

    if (numberOfPeople < 0) {
      return false
    }
  }

  return numberOfPeople
}





// Count of positives / sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65])
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]), [8, -50])
console.log(countPositivesSumNegatives([1]), [1, 0])
console.log(countPositivesSumNegatives([-1]), [0, -1])
console.log(countPositivesSumNegatives([0, 0, 0, 0, 0, 0, 0, 0, 0]), [0, 0])
console.log(countPositivesSumNegatives([]), [])
console.log(countPositivesSumNegatives([0, 0]), [])


function countPositivesSumNegatives(numbers) {
  if (numbers.length === 0) return []

  let positiveCounter = 0;
  let negativeSum = 0;

  for (let num of numbers) {
    if (num > 0) {
      positiveCounter++
    } else if (num < 0) {
      negativeSum += num
    }
  }
  return [positiveCounter, negativeSum]
}





// String repeat
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/solutions/python
console.log(isSquare(-1), false,) //  "-1: Negative numbers cannot be square numbers"
console.log(isSquare(0), true,) //  "0 is a square number (0 * 0)"
console.log(isSquare(3), false,) //  "3 is not a square number"
console.log(isSquare(4), true,) //  "4 is a square number (2 * 2)"
console.log(isSquare(25), true,) //  "25 is a square number (5 * 5)"
console.log(isSquare(26), false,) //  "26 is not a square number"


var isSquare = function (number) {
  return (
    number >= 0 && 
    !(number ** 0.5 % 1))
}


var isSquare = function (number) {
  return Number.isInteger(number ** 0.5)
}


var isSquare = function (number) {
  return Number.isInteger(Math.sqrt(number))
}





// Build a pile of Cubes
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/
console.log(findNb(4183059834009), 2022)
console.log(findNb(24723578342962), -1)
console.log(findNb(135440716410000), 4824)
console.log(findNb(40539911473216), 3568)
console.log(findNb(26825883955641), 3218)


function findNb(number) {
  let cumulativeSum = 0;  // cumulative sum
  let index = 0;

  while (cumulativeSum < number) {  // while cumulative sum is lower than target number
    index++;
    cumulativeSum += index ** 3;  // cumulative sum at ith position
  }

  return cumulativeSum === number ? index : -1  // if there is match reutrn number of cubes
}





// Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/
console.log(past(0, 1, 1), 61000)
console.log(past(1, 1, 1), 3661000)
console.log(past(0, 0, 0), 0)
console.log(past(1, 0, 1), 3601000)
console.log(past(1, 0, 0), 3600000)


function past(h, m, s) {
  return ((((h * 60) + m) * 60) + s) * 1000
}





// Find the next perfect square!
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/solutions/
console.log(findNextSquare(121), 144)
console.log(findNextSquare(625), 676)
console.log(findNextSquare(319225), 320356)
console.log(findNextSquare(15241383936), 15241630849)
console.log(findNextSquare(155), -1)
console.log(findNextSquare(342786627), -1)


function findNextSquare(number) {
  const result = number ** .5;
  return result % 1 ? -1 : (number + 1) ** 2
}





//  Find the unique number
//  https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2)
console.log(findUniq([0, 0, 0.55, 0, 0]), 0.55)
console.log(findUniq([3, 10, 3, 3, 3]), 10)


function findUniq(nums) {
  if (nums[0] === nums[1]) {
    for (let num of nums) {
      if (num != nums[0]) {
        return num
      }
    }
  } else {
    return nums[0] === nums[2] ? nums[1] : nums[0];
  }
}





// Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python
console.log(descendingOrder(15), 51)
console.log(descendingOrder(123456789), 987654321)
console.log(descendingOrder(0), 0)


function descendingOrder(number) {
  return Number(
    number
      .toString()
      .split('')
      .sort()
      .reverse()
      .join('')
  )
}





// Duplicate Encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python
console.log(duplicateEncode("din"),"(((")
console.log(duplicateEncode("recede"),"()()()")
console.log(duplicateEncode("Success"),")())())")
console.log(duplicateEncode("(( @"),"))((")


function duplicateEncode(word){
  const counter = new Map();
  
  for (let letter of word.toLowerCase()) {
    counter.set(letter, (counter.get(letter) ?? 0) + 1)
  }

  let parentheses = '';
  for (let letter of word.toLowerCase()) {
    if (counter.get(letter) === 1) {
      parentheses += '(';
    } else {
      parentheses += ')';
    }
  }
  return parentheses
}





// Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556/train/

console.log(countSheeps([null,  true,  true,  false]), 2)
console.log(countSheeps([]), 0)

function countSheeps(sheep) {
  return sheep.filter(Boolean).length
}

function countSheeps(sheep) {
  return sheep.reduce((a, b) => a + (Boolean(b) ? 1 : 0), 0)
}

function countSheeps(sheep) {
  return sheep.map(a => Boolean(a) ? 1 : 0 ).reduce((a, b) => a + b, 0)
}





// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9")
console.log(highAndLow("1 2 3"), "3 1")


function highAndLow(sequence){
  const numList = sequence.split(" ");
  
  return `${Math.max(...numList)} ${Math.min(...numList)}`
}


function highAndLow(sequence){
  const numList = sequence.split(" ").map(a => Number(a));
  let highest = -Infinity;
  let lowest = Infinity;
  
  for (num of numList) {
    if (num > highest) {
      highest = num
    }

    if (num < lowest) {
      lowest = num
    }
  }

  return `${highest} ${lowest}`
}



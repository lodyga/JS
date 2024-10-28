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





// Maximum subarray sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
console.log(maxSequence([-2, 1, -3, 4, -1, 2]), 5)
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)  // sum([4, -1, 2, 1]) = 6
console.log(maxSequence([-2]), 0)
console.log(maxSequence([]), 0)
console.log(maxSequence([-2, 1]), 1)
console.log(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]), 155)


// dp, tabulation
// O(n), O(n)
var maxSequence = function (nums) {
  if (nums.length === 0) return 0  // Return 0 if the input list is empty

  const tabul = new Array(nums.length);  // Initialize the array
  tabul[0] = Math.max(nums[0], 0);  // Initialize the first element (either nums[0] or 0)

  for (index = 1; index < nums.length; index++) {
    tabul[index] = Math.max(tabul[index - 1] + nums[index], 0);  // Update current element with max of (previous sum + current num) or 0
  }

  return Math.max(...tabul)  // Return the maximum value from the tabul list
}


// dp, tabulation
// O(n), O(1)
var maxSequence = function (nums) {
  if (nums.length === 0) return 0  // Return 0 if the input list is empty

  let maxSum = 0;  // Initialize max_sum to track the maximum sum encountered
  let current = Math.max(nums[0], 0);  // Initialize current with either nums[0] or 0

  for (index = 1; index < nums.length; index++) {
    let next = Math.max(current + nums[index], 0);  // Calculate the next potential sum (current + num or 0)
    maxSum = Math.max(maxSum, next);  // Update max_sum if next is greater
    current = next;  // Move to the next number by updating current
  }

  return maxSum  // Return the largest sum found
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





// Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/solutions/
console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "")


const compareDigits = (a, b) => {
  const numA = a.match(/\d+/g).join('');
  const numB = b.match(/\d+/g).join('');
  return numA - numB
}

function order(words) {
  return words
    .split(' ')
    .sort(compareDigits)
    .join(' ')
}
 
  
function order(words) {
  return words
    .split(' ')
    .sort((a, b) => {
      const numA = a.match(/\d+/g).join('');
      const numB = b.match(/\d+/g).join('');
      return numA - numB
    })
    .join(' ')
}





// Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/python
console.log(century(1705), 18)  // 'Testing for year 1705'
console.log(century(1900), 19)  // 'Testing for year 1900'
console.log(century(1601), 17)  // 'Testing for year 1601'
console.log(century(2000), 20)  // 'Testing for year 2000'
console.log(century(356), 4)  // 'Testing for year 356'
console.log(century(89), 1)  // 'Testing for year 89'


function century(year) {
  const remainder = year % 100;
  return (year - remainder) / 100 + Boolean(remainder)
}





// Reversed Strings
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/solutions/
console.log(solution('world'), 'dlrow')
console.log(solution('hello'), 'olleh')
console.log(solution(''), '')
console.log(solution('h'), 'h')


function solution(word){
  return word.split('').reverse().join('')
}


const times = (y) => {
  return function (x) {
    return x * y
  }
}





// Calculating with Functions
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/
console.log(seven(times(five())), 35)
console.log(one(plus(seven(times(five())))), 36)
console.log(four(plus(nine())), 13)
console.log(eight(minus(three())), 5)
console.log(six(divided_by(two())), 3)


const zero = (f = null) => f ? f(0) : 0
const one = (f = null) => f ? f(1) : 1
const two = (f = null) => f ? f(2) : 2
const three = (f = null) => f ? f(3) : 3
const four = (f = null) => f ? f(4) : 4
const five = (f = null) => f ? f(5) : 5
const six = (f = null) => f ? f(6) : 6
const seven = (f = null) => f ? f(7) : 7
const eight = (f = null) => f ? f(8) : 8
const nine = (f = null) => f ? f(9) : 9


function plus(y) {
  return function (x) {
    return x + y
  }
}

// const minus = y => x => x - y
// const minus = y => x => { return x - y}
// const minus = y => { return x => { return x - y}}
// const minus = y => { return x => x - y}
// const minus = (y) => { return (x) => { return x - y}}

const minus = (y) => {
  return function (x) {
    return x - y
  }
}

const times = (y) => {
  return function (x) {
    return x * y
  }
}

const divided_by = (y) => {
  return function (x) {
    return (x - x % y) / y
  }
}





// You only need one - Beginner
// https://www.codewars.com/kata/57cc975ed542d3148f00015b
console.log(check([66, 101], 66), true)
console.log(check([101, 45, 75, 105, 99, 107], 107), true)
console.log(check(['t', 'e', 's', 't'], 'e'), true)
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false)


const check = (sequence, element) => sequence.includes(element)


function check(sequence, element) {
  return sequence.includes(element)
}


function check(sequence, element_check) {
  for (const element of sequence) {
    if (element === element_check)
    {return true}
  }

  return false
}





// Count the smiley faces!
// https://www.codewars.com/kata/583203e6eb35d7980400002a
console.log(countSmileys([':)', ';(', ';}', ':-D']), 2)
console.log(countSmileys([';D', ':-(', ':-)', ';~)']), 3)
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1)
console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4)


function countSmileys(smileyList) {
  let counter = 0;

  for (const smiley of smileyList) {
      if (!smiley.search(/[:;][-~]?[\)D]/)) {
          counter++;
      }
  }
  return counter
}


function countSmileys(smileyList) {
  const pattern = /^[:;][-~]?[\)D]$/
  return smileyList.filter(smiley => pattern.test(smiley)).length
}





// Consecutive strings
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3), "")
console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")


function longestConsec(wordList, k) {
  if (k < 1) {
    return ''
  }

  let longestConcat = ''

  for (index = 0; index < wordList.length - k + 1; index++) {
    const currentConcat = wordList.slice(index, index + k).join('');

    if ( currentConcat.length > longestConcat.length) {
      longestConcat = currentConcat;
    }
  }

  return longestConcat
}





// Build Tower
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/
console.log(towerBuilder(1), ['*'])
console.log(towerBuilder(2), [' * ', '***'])
console.log(towerBuilder(3), ['  *  ', ' *** ', '*****'])


function towerBuilder(floors) {
  const tower = [];

  for (let floor = 0; floor < floors; floor++) {
    const blackSpace = ' '.repeat(floors - floor - 1);
    let currentFloor = blackSpace;
    currentFloor += '*'.repeat(2*floor + 1)
    currentFloor += blackSpace
    tower.push(currentFloor);
  }

  return tower
}





// Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6
console.log(sumArray(null), 0)
console.log(sumArray([]), 0)
console.log(sumArray([3]), 0)
console.log(sumArray([-3]), 0)
console.log(sumArray([3, 5]), 0)
console.log(sumArray([-3, -5]), 0)
console.log(sumArray([6, 2, 1, 8, 10]), 16)
console.log(sumArray([6, 0, 1, 10, 10]), 17)
console.log(sumArray([-6, -20, -1, -10, -12]), -28)
console.log(sumArray([-6, 20, -1, 10, -12]), 3)


function sumArray(nums) {
  if (!nums ||
    nums.length < 3
  ) {
    return 0
  }

  let minNum = nums[0];
  let maxNum = nums[0];
  let numSum = 0;

  for (const num of nums) {
    numSum += num;

    if (num < minNum) {
      minNum = num;
    } else if (num > maxNum) {
      maxNum = num;
    }
  }
  return numSum - minNum - maxNum
}





// Are You Playing Banjo?
// https://www.codewars.com/kata/53af2b8861023f1d88000832
console.log(areYouPlayingBanjo("martin"), "martin does not play banjo")
console.log(areYouPlayingBanjo("Rikke"), "Rikke plays banjo")
console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo")
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo")


function areYouPlayingBanjo(name) {
  if (name[0].toUpperCase() == 'R') {
    return  `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}





// Remove the minimum
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b
console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5])
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4])
console.log(removeSmallest([1, 2, 3, 1, 1]), [2, 3, 1, 1])
console.log(removeSmallest([]), [])


function removeSmallest(nums) {
  if (
    !nums ||
    nums.length < 2
  ) {
    return []
  }

  const numsCopy = nums.slice();
  const minNum = Math.min(...nums);
  const minNumIndex = nums.indexOf(minNum);
  numsCopy.splice(minNumIndex, 1);
  
  return numsCopy
}


function removeSmallest(nums) {
  const minNum = Math.min(...nums);
  const minNumIndex = nums.indexOf(minNum);

  return [...nums.slice(0, minNumIndex), ...nums.slice(minNumIndex + 1,)]
}


function removeSmallest(nums) {
  const minNum = Math.min(...nums);
  const minNumIndex = nums.indexOf(minNum);

  return nums.filter((num, index) => index !== minNumIndex)
}





// Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac
console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")

const longest = (word1, word2) => [...new Set(word1 + word2)].sort().join('');

function longest(word1, word2) {
  // const union = new Set([...word1, ...word2]);
  const union = new Set(word1 + word2);
  // return Array.from(union).sort().join('');
  return [...union].sort().join('');
}





// Unique In Order
// https://www.codewars.com/kata/54e6533c92449cc251001667
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3])
console.log(uniqueInOrder([]), [])


var uniqueInOrder = function (iterable) {
  if (iterable.length == 0) {
    return []
  }

  const uniqueInOrderList = [iterable[0]];

  for (const element of iterable.slice(1,)) {
    if (element !== uniqueInOrderList[uniqueInOrderList.length - 1]) {
      uniqueInOrderList.push(element);
    }
  }
  return uniqueInOrderList
}


const uniqueInOrder = (iterable) => [...iterable].filter((value, index) => value !== iterable[index - 1])





// Bouncing Balls
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047
console.log(bouncingBall(2, 1, 1), -1)
console.log(bouncingBall(2, 0.5, 1), 1)
console.log(bouncingBall(3, 0.66, 1.5), 3)
console.log(bouncingBall(30, 0.66, 1.5), 15)
console.log(bouncingBall(30, 0.75, 1.5), 21)


function bouncingBall(height, bounce, window) {
  if (
    height <= 0 ||
    bounce <= 0 ||
    bounce >= 1 ||
    window >= height
  ) {
    return -1
  }

  let counter = 1;

  while (height * bounce > window) {
    counter += 2;
    height *= bounce;
  }

  return counter
}




// Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381
console.log(positiveSum([1, -4, 7, 12]), 20)
console.log(positiveSum([1, 2, 3, 4, 5]), 15)
console.log(positiveSum([1, -2, 3, 4, 5]), 13)
console.log(positiveSum([-1, 2, 3, 4, -5]), 9)
console.log(positiveSum([]), 0)


function positiveSum(nums) {
  return nums.reduce((a, b) => a + (b > 0 ? b : 0), 0)
  // return nums.filter(num => num > 0).reduce((a, b) => a + b, 0)
}





// Beginner - Lost Without a Map
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e
console.log(maps([1, 2, 3]), [2, 4, 6])
console.log(maps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18])
console.log(maps([]), [])


const maps = (nums) => nums.map(num => num * 2)


function maps(nums) {
  return nums.map(num => (num * 2))
}





// String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/
console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
console.log(solution('abcde', ''), true)


function solution(str, ending){
  return str.endsWith(ending)
}


function solution(str, ending){
  return (
    !ending ||
    str.slice(-ending.length,) == ending
  )
}





// Is this a triangle?
// https://www.codewars.com/kata/56606694ec01347ce800001b
console.log(isTriangle(1, 2, 2), true)
console.log(isTriangle(7, 2, 2), false)
console.log(isTriangle(1, 2, 3), false)
console.log(isTriangle(1, 3, 2), false)
console.log(isTriangle(3, 1, 2), false)
console.log(isTriangle(5, 1, 2), false)
console.log(isTriangle(1, 2, 5), false)
console.log(isTriangle(2, 5, 1), false)
console.log(isTriangle(4, 2, 3), true)
console.log(isTriangle(5, 1, 5), true)
console.log(isTriangle(2, 2, 2), true)


function isTriangle(a, b, c) {
  return (
    a < b + c &&
    b < a + c &&
    c < a + b
  )
}





// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python
console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")
console.log(alphabetPosition(""), "")
console.log(alphabetPosition(',6?->(?)'), "")

function letterToOrd(letter) {
  return letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1
}

function alphabetPosition(text) {
  const letterList = text.match(/[a-z]/ig)
  if (!letterList) return ''

  return letterList.map(letterToOrd).join(' ')
}





// Mexican Wave
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
console.log(wave('hello'), ["Hello", "hEllo", "heLlo", "helLo", "hellO"])
console.log(wave('codewars'), ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"])
console.log(wave(' gap'), [' Gap', ' gAp', ' gaP'])
console.log(wave(''), "")


function wave(word) {
  const mexicanWave = []

  for (let index = 0; index < word.length; index++) {
    const searchResult = word[index].match(/[a-z]/g);

    if (searchResult) {
      mexicanWave.push(
        word.slice(0, index) +
        searchResult[0].toUpperCase() +
        word.slice(index + 1,)
      )
    }
  }
  
  return mexicanWave
}





// Find the first non-consecutive number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]), 6)
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]), null)
console.log(firstNonConsecutive([4, 6, 7, 8, 9, 11]), 6)
console.log(firstNonConsecutive([4, 5, 6, 7, 8, 9, 11]), 11)
console.log(firstNonConsecutive([31, 32]), null)
console.log(firstNonConsecutive([-3, -2, 0, 1]), 0)
console.log(firstNonConsecutive([-5, -4, -3, -1]), -1)


function firstNonConsecutive (nums) {
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] != nums[index - 1] + 1) {
      return nums[index]
    }
  }

  return null
}





// Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"), "How Can Mirrors Be Real If Our Eyes Aren't Real")


function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1,)
}

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(capitalize)
    .join(' ')
}





// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4)
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5)
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1)
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5)
console.log(findOdd([10]), 10)
console.log(findOdd([10, 10, 10]), 10)
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10)
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1)


function findOdd(nums) {
  const counter = new Map();

  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1)
  }

  for (const key of counter.keys()) {
    if (counter.get(key) % 2) {
      return key
    }
  }

  return null
}


function findOdd(nums) {
  const counter = {};

  for (const num of nums) {
    counter[num] = (counter[num] ?? 0) + 1
  }

  for (const key in counter) {
    if (counter[key] % 2) {
      return key
    }
  }

  return null
}





// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
console.log(high('man i need a taxi up to ubud'), 'taxi')
console.log(high('what time are we climbing up the volcano'), 'volcano')
console.log(high('take me to semynak'), 'semynak')
console.log(high('aa b'), 'aa')
console.log(high('b aa'), 'b')
console.log(high('bb d'), 'bb')
console.log(high('d bb'), 'd')
console.log(high("aaa b"), "aaa")


function countWordScore(word) {
  return (
    word
      .split('')
      .map(letter => (letter.charCodeAt() - 'a'.charCodeAt() + 1))
      .reduce((a, b) => a + b)
  )
}

function high(text) {
  let topWord = '';
  let topWordScore = 0;

  for (const word of text.split(' ')) {
    if (countWordScore(word) > topWordScore) {
      topWord = word;
      topWordScore = countWordScore(word);
    }
  }

  return topWord
}





// Reverse words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god')
console.log(reverseWords('apple'), 'elppa')
console.log(reverseWords('a b c d'), 'a b c d')
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow')


function reverseWords(text) {
  return (
    text
      .split(' ')
      .map(word => word
        .split('')
        .reverse()
        .join(''))
      .join(' '))
}

function reverseWords(text) {
  return (
    text
      .split(' ')
      .reverse()
      .join(' ')
      .split('')
      .reverse()
      .join('')
  )
}





// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3
console.log(getCount("abracadabra"), 5)


function getCount(word) {
  return (word.match(/[aeiou]/ig) ?? []).length
  // return (word.match(/[aeiou]/ig) || []).length
}


function isVowel(letter) {
  return letter.match(/[aeiou]/)
  // return letter.search(/[aeiou]/) + 1
}

function getCount(word) {
  return word.split('').filter(isVowel).length
  // return word.split('').map(letter => isVowel(letter)).filter(Boolean).length
}





// Is n divisible by x and y?
// https://www.codewars.com/kata/5545f109004975ea66000086/train
console.log(isDivisible(8, 2, 4), true)
console.log(isDivisible(12, -3, 4), true)
console.log(isDivisible(8, 3, 4), false)
console.log(isDivisible(48, 2, -5), false)
console.log(isDivisible(-100, -25, 10), true)
console.log(isDivisible(10000, 5, -3), false)
console.log(isDivisible(4, 4, 2), true)
console.log(isDivisible(5, 2, 3), false)
console.log(isDivisible(-96, 25, 17), false)
console.log(isDivisible(33, 1, 33), true)


function isDivisible(number, divider1, divider2) {
  return (
    !(number % divider1) &&
    !(number % divider2)
  )
}

function isDivisible(number, divider1, divider2) {
  return !((number % divider1) || (number % divider2))
}





// Poker cards encoder/decoder
// https://www.codewars.com/kata/52ebe4608567ade7d700044a/
console.log(encode(['Ac', 'Ks', '5h', 'Td', '3c']), [0, 2, 22, 30, 51])
console.log(encode(["Td", "8c", "Ks"]), [7, 22, 51])
console.log(encode(["Qh", "5h", "Ad"]), [13, 30, 37])
console.log(encode(["8c", "Ks", "Td"]), [7, 22, 51])
console.log(encode(["Qh", "Ad", "5h"]), [13, 30, 37])
console.log(encode(["5h", "7c", "Qh", "Qs", "Ad"]), [6, 13, 30, 37, 50])

console.log(decode([0, 51, 30, 22, 2]), ['Ac', '3c', 'Td', '5h', 'Ks'])
console.log(decode([7, 22, 51]), ["8c", "Td", "Ks"])
console.log(decode([13, 30, 37]), ["Ad", "5h", "Qh"])
console.log(decode([7, 51, 22]), ["8c", "Td", "Ks"])
console.log(decode([13, 37, 30]), ["Ad", "5h", "Qh"])


const suits = 'cdhs';
const figures = "A23456789TJQK";

function encode (cards) {
  const encodedCards = [];

  cards.forEach(card => {
    encodedCards.push(suits.indexOf(card[1]) * 13 + figures.indexOf(card[0]))
  })

  return encodedCards.sort((a, b) => a - b);
}

function decode (cards) {
  cards.sort((a, b) => a - b);
  const decodedCards = [];

  cards.forEach(card => {
    decodedCards.push(figures.charAt(card % 13) + suits.charAt((card - (card % 13)) / 13))
  })
  return decodedCards
}


const suits = 'cdhs';
const figures = "A23456789TJQK";

function encode(cards) {
  return (
    cards
      .map(card => suits.indexOf(card[1]) * 13 + figures.indexOf(card[0]))
      .sort((a, b) => a - b)
  )
}

function decode (cards) {
  return (
    cards
    .sort((a, b) => a - b)
    .map(card => figures.charAt(card % 13) + suits.charAt((card - (card % 13)) / 13))
  )
}





// Simple Events !!!
// https://www.codewars.com/kata/52d3b68215be7c2d5300022f/
function f() {
  f.calls = (f.calls || 0) + 1;
  f.args = Array.prototype.slice.call(arguments);
}

var event_1 = new Event();
event_1.subscribe(f);
event_1.emit(1, 'foo', true);
console.log(f.calls === 1)
console.log(f.args) /// [1, 'foo', true]
event_1.unsubscribe(f);
event_1.emit(2);
console.log(f.calls === 1)

// Class Syntax (Methods Defined in the Class Body)
// The methods are still stored on the prototype of the class, so all instances share the same methods, which is memory-efficient.
class Event {
  constructor() {
    this.handlers = new Set()
  }

  subscribe(fun) {
    this.handlers.add(fun)
  }
  
  unsubscribe(fun) {
    this.handlers.delete(fun)
  }
  
  emit(...args) {
    this.handlers.forEach(handler => handler(...args))
  }
}


// Class with Prototype Methods Defined Separately
// The methods are defined on the prototype outside of the class declaration
class Event {
  constructor() {
    this.handlers = new Set()
  }
}

Event.prototype.subscribe = function (fun) {
  this.handlers.add(fun)
}

Event.prototype.unsubscribe = function (fun) {
  this.handlers.delete(fun)
}

Event.prototype.emit = function (...args) {
  this.handlers.forEach(handler => handler(...args))
}


// Constructor with Prototype Methods (Function Syntax)
// Only the data (handlers) is instance-specific, while the methods are shared.
function Event() {
  this.handlers = new Set();
}

Event.prototype.subscribe = function (fun) {
  this.handlers.add(fun)
}

Event.prototype.unsubscribe = function (fun) {
  this.handlers.delete(fun)
}

Event.prototype.emit = function (...args) {
  this.handlers.forEach(handler => handler(...args))
}


// Constructor with Inline Methods (Arrow Functions)
// Higher memory usage because every instance has its own copy of subscribe, unsubscribe, and emit methods.
function Event() {
  this.handlers = new Set();

  this.subscribe = (fun) => {
    this.handlers.add(fun)
  }
  
  this.unsubscribe = (fun) => {
    this.handlers.delete(fun)
  }
  
  this.emit = (...args) => {
    this.handlers.forEach(handler => handler(...args))
  }
}

// Constructor with Inline Methods (Regular Functions)
// Higher memory usage because every instance has its own copy of subscribe, unsubscribe, and emit methods.
function Event() {
  this.handlers = new Set();

  this.subscribe = function (fun) {
    this.handlers.add(fun);
  };
  
  this.unsubscribe = function (fun) {
    this.handlers.delete(fun);
  };
  
  this.emit = function (...args) {
    this.handlers.forEach(handler => handler(...args));
  };
}





// Mongodb ObjectID
// https://www.codewars.com/kata/52fefe6cb0091856db00030e/
console.log(isValid('507f1f77bcf86cd799439011'), true)
console.log(isValid('507f1f77bcf86cz799439011'), false)
console.log(isValid('111111111111111111111111'), true)
console.log(isValid(111111111111111111111111), false)
console.log(isValid('507f1f77bcf86cD799439011'), false)
console.log(isValid(false), false)
console.log(isValid([]), false)
console.log(isValid(1234), false)
console.log(isValid('123476sd'), false)
console.log(isValid('507f1f77bcf86cd79943901'), false)
console.log(isValid('507f1f77bcf86cd799439016'), true)


function isValid(id) {
  return (
    typeof id === 'string' &&
    id.length === 24 &&
    id.split('').filter(char => '0123456789abcdef'.includes(char)).length === 24
  )
}


console.log(getTimestamp('507f1f77bcf86cd799439011'), '2012-10-17T21:13:27.000Z')  // Wed Oct 17 2012 21:13:27 GMT-0700 (Pacific Daylight Time)
console.log(getTimestamp('507f1f77bcf86cz799439011'), false)
console.log(getTimestamp('507f1f77bcf86cd79943901'), false)
console.log(getTimestamp('111111111111111111111111'), '1979-01-28T00:25:53.000Z')  // Sun Jan 28 1979 00:25:53 GMT-0800 (Pacific Standard Time)
console.log(getTimestamp(111111111111111111111111), false)
console.log(getTimestamp(false), false)
console.log(getTimestamp([]), false)
console.log(getTimestamp(1234), false)
console.log(getTimestamp('123476sd'), false)
console.log(getTimestamp('507f1f77bcf86cd79943901'), false)
console.log(getTimestamp('507f1f77bcf86cd799439016'), '2012-10-17T21:13:27.000Z')


function getTimestamp(id) {
  return (
    isValid(id) &&
    new Date(Number('0x' + id.slice(0, 8)) * 1000)
  )
}


var Mongo = {
  'isValid' : function(s){
      return false;
  },
  'getTimestamp' : function(s){
      return new Date();
  }
}

var Mongo = {
  isValid: function (id) {
    return (
      typeof id === 'string' &&
      id.length === 24 &&
      id.split('').filter(char => '0123456789abcdef'.includes(char)).length === 24
    )
  },
  getTimestamp: function (id) {
    return (
      this.isValid(id) &&
      new Date(Number('0x' + id.slice(0, 8)) * 1000)
    )
  }
}





// Prime number decompositions
// https://www.codewars.com/kata/53c93982689f84e321000d62
console.log(getAllPrimeFactors(100), [2, 2, 5, 5])
console.log(getUniquePrimeFactorsWithCount(100), [[2, 5], [2, 2]])
console.log(getUniquePrimeFactorsWithProducts(100), [4, 25])


function getAllPrimeFactors(num) {
  if (
    typeof num !== 'number' ||
    num < 1 ||
    num % 1
  ) {
    return []
  } else if (num === 1) {
    return [1]
  }

  const dividers = []

  while (num !== 1) {
    for (let divider = 2; divider <= num; divider++) {
      if (!(num % divider)) {
        dividers.push(divider);
        num /= divider;
        break
      }
    }
  }

  return dividers
}


function getUniquePrimeFactorsWithCount(nums) {
  const allPrimeFactors = getAllPrimeFactors(nums);
  const counter = new Map();

  for (let prime of allPrimeFactors) {
    counter.set(prime, (counter.get(prime) ?? 0) + 1)
  }

  return [[...counter.keys()], [...counter.values()]]
}


function getUniquePrimeFactorsWithProducts(nums) {
  const primes = getUniquePrimeFactorsWithCount(nums)

  return (
    primes[0]
      .map((element, index) => [element, primes[1][index]])
      .map(element => element[0] ** element[1])
  )
}





// Strings Mix
// https://www.codewars.com/kata/5629db57620258aa9d000014
console.log(mix("my&friend&Paul has heavy hats! &", "my friend John has many many friends &"), "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss")
console.log(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
console.log(mix("Sadus:cpms>orqn3zecwGvnznSgacs", "MynwdKizfd$lvse+gnbaGydxyXzayp"), '2:yyyy/1:ccc/1:nnn/1:sss/2:ddd/=:aa/=:zz')
console.log(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
console.log(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
console.log(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
console.log(mix("codewars", "codewars"), "")
console.log(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")


function toLowerCaseCounter(sentence) {
  const counter = new Map();

  for (let char of sentence.split('')) {
    if (char.match(/[a-z]/)) {
      counter.set(char, (counter.get(char) ?? 0) + 1);
    }
  }

  return counter
}

function customSort(a, b) {
  if (a.length > b.length) return -1  // if shorter move left
  else if (a.length < b.length) return 1  // if longer move right
  else if (a[0] < b[0]) return -1  // if index lower move left
  else if (a[0] > b[0]) return 1  // if index higher move right
  else if (a[2] < b[2]) return -1  // if letter lower move left
  else return 1  // move right

}

function mix(s1, s2) {
  const counter1 = toLowerCaseCounter(s1);
  const counter2 = toLowerCaseCounter(s2);
  const maxCounter = new Map;
  const mixList = [];

  for (const [key, val] of counter1) {
    maxCounter.set(key, Math.max(maxCounter.get(key) ?? 0, val))
  }

  for (const [key, val] of counter2) {
    maxCounter.set(key, Math.max(maxCounter.get(key) ?? 0, val))
  }

  for (const [key, val] of maxCounter) {
    if (val > 1) {
      if ((counter1.get(key) ?? 0) === (counter2.get(key) ?? 0)) {
        mixList.push(`3:${key.repeat(val)}`)
      } else if ((counter1.get(key) ?? 0) > (counter2.get(key) ?? 0)) {
        mixList.push(`1:${key.repeat(val)}`)
      } else {
        mixList.push(`2:${key.repeat(val)}`)
      }
    }
  }

  mixList.sort(customSort)

  return mixList.join('/').replaceAll('3', '=')
}





// Tribonacci Sequence
// https://www.codewars.com/kata/556deca17c58da83c00002db
console.log(tribonacci([1, 1, 1], 10), [1, 1, 1, 3, 5, 9, 17, 31, 57, 105])
console.log(tribonacci([0, 0, 1], 10), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
console.log(tribonacci([0, 1, 1], 10), [0, 1, 1, 2, 4, 7, 13, 24, 44, 81])
console.log(tribonacci([1, 0, 0], 10), [1, 0, 0, 1, 1, 2, 4, 7, 13, 24])
console.log(tribonacci([0, 0, 0], 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
console.log(tribonacci([1, 2, 3], 10), [1, 2, 3, 6, 11, 20, 37, 68, 125, 230])
console.log(tribonacci([3, 2, 1], 10), [3, 2, 1, 6, 9, 16, 31, 56, 103, 190])
console.log(tribonacci([1, 1, 1], 1), [1])
console.log(tribonacci([300, 200, 100], 0), [])
console.log(tribonacci([0.5, 0.5, 0.5], 30), [0.5, 0.5, 0.5, 1.5, 2.5, 4.5, 8.5, 15.5, 28.5, 52.5, 96.5, 177.5, 326.5, 600.5, 1104.5, 2031.5, 3736.5, 6872.5, 12640.5, 23249.5, 42762.5, 78652.5, 144664.5, 266079.5, 489396.5, 900140.5, 1655616.5, 3045153.5, 5600910.5, 10301680.5])
console.log(tribonacci([5], 1), [])


// dp, bottom-up, tabulation
function tribonacci(nums, counter) {
  if (counter < 3) {
    return nums.slice(0, counter)
  }

  const zeroArray = Array(counter - nums.length).fill(0);
  const tab = [...nums, ...zeroArray];

  for (let index = 3; index < counter; index++) {
    tab[index] = tab[index - 1] + tab[index - 2] + tab[index - 3]
  }

  return tab
}

// dp, top-bottom, memoization
function tribonacci(nums, counter) {
  if (counter < 3) {
    return nums.slice(0, counter)
  }

  const zeroArray = Array(counter - nums.length).fill(0)
  const memo = [...nums, ...zeroArray]

  function dfs(counter) {
    if (counter === 0) return memo[0]
    else if (counter === 1) return memo[1]
    else if (counter === 2) return memo[2]
    else if (memo[counter]) return memo[counter]

    memo[counter] = dfs(counter - 1) + dfs(counter - 2) + dfs(counter - 3)
    
    return memo[counter]
  }

  dfs(counter - 1)

  return memo
}





// Simple Fun #166: Best Match
// https://www.codewars.com/kata/58b38256e51f1c2af0000081
console.log(bestMatch([6, 4], [1, 2]), 1)
console.log(bestMatch([1], [0]), 0)
console.log(bestMatch([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]), 4)
console.log(bestMatch([3, 4, 3], [1, 1, 2]), 2)
console.log(bestMatch([4, 3, 4], [1, 1, 1]), 1)


function compareArrays(a, b) {
  if (a[0] < b[0]) return -1
  else if (a[0] > b[0]) return 1
  else if (a[1] > b[1]) return -1
  else return 1
}

function bestMatchKey([goals1, goals2]) {
  return [goals1 - goals2, goals2];
}

function bestMatch(goals1, goals2) {
  return goals1
    .map((g1, index) => [g1, goals2[index], index])
    .reduce((best, match) =>
      compareArrays(bestMatchKey(match), bestMatchKey(best)) < 0 ? match : best
    )[2];
}


function bestMachSort(a, b) {
  if (a[0] < b[0]) return -1
  else if (a[0] > b[0]) return 1
  else if (a[1] > b[1]) return -1
  else if (a[1] < b[1]) return 1
  else if (a[2] < b[2]) return -1
  else return 1
}

function bestMatch(goals1, goals2) {
  return (
    goals2
    .map((element, index) => [goals1[index] - element, element, index])
    .sort(bestMachSort)[0][2]
  )
}





// Roman Numerals Decoder
// https://www.codewars.com/kata/51b6249c4612257ac0000005
console.log(solution('XXI'), 21)
console.log(solution('I'), 1)
console.log(solution('IV'), 4)
console.log(solution('MMVIII'), 2008)
console.log(solution('MDCLXVI'), 1666)


const to_roman = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
}

const roman_subtract = {
  "IV": -2,  // 6 => 4
  "IX": -2,
  "XL": -20,
  "XC": -20,
  "CD": -200,
  "CM": -200
}

function solution(roman) {
  let rawSum = roman
    .split('')
    .map(letter => to_roman[letter])
    .reduce((a, b) => a + b);

  for (const num in roman_subtract) {
    if (roman.match(new RegExp(`${num}`))) {
      rawSum += roman_subtract[num]
    }
  }

  return rawSum
}





// Friend or Foe?
// https://www.codewars.com/kata/55b42574ff091733d900002f
console.log(friend(["Ryan", "Kieran", "Mark",]), ["Ryan", "Mark"])
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])


function friend(friends){
  return friends.filter(friend => friend.length === 4)
}





// A Needle in the Haystack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
console.log(findNeedle(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false]), 'found the needle at position 3')
console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']), 'found the needle at position 5')
console.log(findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]), 'found the needle at position 30')
console.log(findNeedle(['3', '123124234', true, false]), "'needle' is not in list")


function findNeedle(haystack) {
  const index = haystack.indexOf('needle')
  if (index != -1) return `found the needle at position ${index}`
  else return "'needle' is not in list"

}

function findNeedle(haystack) {
  for (let index = 0; index < haystack.length; index++) {
    if (haystack[index] === 'needle') {
      return `found the needle at position ${index}`
    }
  }

  return "'needle' is not in list"
}





// Grasshopper - Personalized Message
// https://www.codewars.com/kata/5772da22b89313a4d50012f7
console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')


function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}





// The Feast of Many Beasts
// https://www.codewars.com/kata/5aa736a455f906981800360d/
console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)


function feast(beast, dish) {
  return (
    beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
  )
}

function feast(beast, dish) {
  return (
    beast[0] === dish[0] &&
    beast.slice(-1) === dish.slice(-1)
  )
}

function feast(beast, dish) {
  return (
    beast.startsWith(dish[0]) &&
    beast.endsWith(dish[dish.length - 1])
  )
}





// Break camelCase
// https://www.codewars.com/kata/5208f99aee097e6552000148/
console.log(solution("helloWorld"), "hello World")
console.log(solution("camelCase"), "camel Case")
console.log(solution("breakCamelCase"), "break Camel Case")


function solution(string) {
  let camelCase = '';

  for (const letter of string) {
    if (letter.match(/[A-Z]/)) {
      camelCase += ' ';
    }

    camelCase += letter;
  }

  return camelCase
}

function solution(string) {
  return string.replace(/([A-Z])/g, ` $1`)
}

function solution(string) {
  return (
    string
      .split('')
      .map(letter => (letter.match(/[A-Z]/)) ? ` ${letter}` : letter)
      .join(''))
}





// Printer Errors
// https://www.codewars.com/kata/56541980fa08ab47a0000040
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"), "3/56")
console.log(printerError("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"), "6/60")
console.log(printerError("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"), "11/65")


function printerError(word) {
  let errorCounter = 0;

  for (const letter of word) {
    if (letter > 'm') errorCounter++
  }

  return `${errorCounter}/${word.length}`
}


function printerError(word) {
  const errorCounter = word.match(/[n-z]/g).length
  return `${errorCounter}/${word.length}`
}


function printerError(word) {
  return `${word.replace(/[a-m]/g, '').length}/${word.length}`
}





// Rock Paper Scissors!
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
console.log(rps('rock', 'scissors'), "Player 1 won!")
console.log(rps('scissors', 'rock'), "Player 2 won!")
console.log(rps('rock', 'rock'), 'Draw!')

const rps = (player1, player2) => {
  const nextWin = {
    'rock': 'paper',
    'paper': 'scissors',
    'scissors': 'rock'
  }

  if (player1 === player2) return 'Draw!'
  else if (nextWin[player1] === player2) return 'Player 2 won!'
  else return 'Player 1 won!'
}


const rps = (player1, player2) => {
  const nextWin = ['rock', 'paper', 'scissors']

  if (player1 === player2) return 'Draw!'
  else if (nextWin[(nextWin.indexOf(player1) + 1) % 3] === player2) {
    return 'Player 2 won!'
  }
  else return 'Player 1 won!'
}


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
console.log(isPangram('The quick, brown fox jumps over the lazy dog!'), true)
console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'), true)


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
console.log(generateHashtag(' Hello there thanks for trying my Kata'), '#HelloThereThanksForTryingMyKata')
console.log(generateHashtag('    Hello     World   '), '#HelloWorld')
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
    num = num.toString().split('').reduce((a, b) => a * b);

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
console.log(duplicateEncode("din"), "(((")
console.log(duplicateEncode("recede"), "()()()")
console.log(duplicateEncode("Success"), ")())())")
console.log(duplicateEncode("(( @"), "))((")


function duplicateEncode(word) {
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

console.log(countSheeps([null, true, true, false]), 2)
console.log(countSheeps([]), 0)

function countSheeps(sheep) {
  return sheep.filter(Boolean).length
}

function countSheeps(sheep) {
  return sheep.reduce((a, b) => a + (Boolean(b) ? 1 : 0), 0)
}

function countSheeps(sheep) {
  return sheep.map(a => Boolean(a) ? 1 : 0).reduce((a, b) => a + b, 0)
}





// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9")
console.log(highAndLow("1 2 3"), "3 1")


function highAndLow(sequence) {
  const numList = sequence.split(" ");

  return `${Math.max(...numList)} ${Math.min(...numList)}`
}


function highAndLow(sequence) {
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


function solution(word) {
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
    if (element === element_check) { return true }
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

    if (currentConcat.length > longestConcat.length) {
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
    currentFloor += '*'.repeat(2 * floor + 1)
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
    return `${name} plays banjo`
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


function solution(str, ending) {
  return str.endsWith(ending)
}


function solution(str, ending) {
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


function firstNonConsecutive(nums) {
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

function encode(cards) {
  const encodedCards = [];

  cards.forEach(card => {
    encodedCards.push(suits.indexOf(card[1]) * 13 + figures.indexOf(card[0]))
  })

  return encodedCards.sort((a, b) => a - b);
}

function decode(cards) {
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

function decode(cards) {
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
  'isValid': function (s) {
    return false;
  },
  'getTimestamp': function (s) {
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


function friend(friends) {
  return friends.filter(friend => friend.length === 4)
}





// A Needle in the Haystack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
console.log(findNeedle(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false]), 'found the needle at position 3')
console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']), 'found the needle at position 5')
console.log(findNeedle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]), 'found the needle at position 30')
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


function greet(name, owner) {
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





// Basic Mathematical Operations
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/
console.log(basicOp('+', 4, 7), 11)
console.log(basicOp('-', 15, 18), -3)
console.log(basicOp('*', 5, 5), 25)
console.log(basicOp('/', 49, 7), 7)


function basicOp(operation, value1, value2) {
  if (operation === '+') return value1 + value2
  else if (operation === '-') return value1 - value2
  else if (operation === '*') return value1 * value2
  else if (operation === '/') return value1 / value2
}


function basicOp(operation, value1, value2) {
  return eval(`${value1}${operation}${value2}`)
}





// The Supermarket Queue
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86
console.log(queueTime([2], 5), 2)
console.log(queueTime([5], 1), 5)
console.log(queueTime([1, 2, 3, 4, 5], 1), 15)
console.log(queueTime([1, 2, 3, 4, 5], 100), 5)
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9)
console.log(queueTime([], 1), 0)


function queueTime(customerList, cashiers) {
  const cashierList = Array(cashiers).fill(0);

  for (const customer of customerList) {
    const minIndex = cashierList.indexOf(Math.min(...cashierList));
    cashierList[minIndex] += customer;
  }

  return Math.max(...cashierList)
}





// Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]), true)
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]), false)
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 190 * 190, 161 * 161, 19 * 19, 144 * 144, 19 * 19]), false)
console.log(comp(null, []), false)

// O(nlogn)
function comp(nums1, nums2) {
  if (!nums1 || !nums2) return false
  if (nums1.length != nums2.length) return false

  nums1.sort()
  nums2.sort()

  return nums1.map(num => num ** 2).every((num, index) => num === nums2[index])
}


// O(n2)
function comp(nums1, nums2) {
  if (!nums1 || !nums2) return false
  if (nums1.length != nums2.length) return false

  const squared = nums1.map(num => num ** 2)

  for (let index = 0; index < nums1.length; index++) {
    const indOf = nums2.indexOf(squared[index]);

    if (indOf === -1) return false
    else nums2.splice(indOf, 1)
  }

  return true
}





// Directions Reduction
// https://www.codewars.com/kata/550f22f4d758534c1100025a
function dirReduc(directions) {
  const oppositeDirection = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST'
  }
  let reducted = [];

  for (const direction of directions) {
    if (direction === oppositeDirection[reducted[reducted.length - 1]]) {
      reducted.pop();
    } else {
      reducted.push(direction)
    }
  }
  return reducted
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]), ["WEST", "WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc([]), [])





// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a
console.log(XO('xo'), true)
console.log(XO('xo0'), true)
console.log(XO('ooxx'), true)
console.log(XO('xooxx'), false)
console.log(XO('ooxXm'), true)
console.log(XO('zpzpzpp'), true)
console.log(XO('zzoo'), false)


function XO(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .filter(letter => letter === 'x').length ==
    text
      .toLowerCase()
      .split('')
      .filter(letter => letter === 'o').length
  )
}


function XO(text) {
  const xCount = (text.match(/x/gi) || []).length
  const oCount = (text.match(/o/gi) || []).length
  return xCount === oCount
}





// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// https://www.codewars.com/kata/5626b561280a42ecc50000d1
console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
console.log(sumDigPow(10, 89), [89])
console.log(sumDigPow(10, 100), [89])
console.log(sumDigPow(90, 100), [])
console.log(sumDigPow(89, 135), [89, 135])


function isSumDigPowEqual(num) {
  const numSum = num.toString()
    .split('')
    .map(num => Number(num))
    .reduce((total, current, index) => total + (Number(current) ** (index + 1)))

  return num === numSum
}

function sumDigPow(a, b) {
  const nums = [];

  for (let num = a; num <= b; num++) {
    if (isSumDigPowEqual(num)) {
      nums.push(num)
    }
  }
  return nums
}





// Categorize New Member
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([[16, 23], [73, 1], [56, 20], [1, -1]]), ['Open', 'Open', 'Senior', 'Open'])


function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    (age > 54 && handicap > 7) ? 'Senior' : 'Open')
}





// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083
console.log(lovefunc(1, 4), true)
console.log(lovefunc(2, 2), false)
console.log(lovefunc(0, 1), true)
console.log(lovefunc(0, 0), false)


function lovefunc(flower1, flower2) {
  return Boolean((flower1 + flower2) % 2)
}


function lovefunc(flower1, flower2) {
  return Boolean(flower1 % 2 ^ flower2 % 2)
}





// Playing with digits
// https://www.codewars.com/kata/5552101f47fc5178b1000050
console.log(digPow(695, 2), 2)
console.log(digPow(89, 1), 1)
console.log(digPow(92, 1), -1)
console.log(digPow(46288, 3), 51)


function digPow(number, power) {
  const total = number
    .toString()
    .split('')
    .map((digit, index) => Number(digit) ** (index + power))
    .reduce((total, current) => total + current)

  return (total % number) ? -1 : (total / number)
}


function digPow(number, power) {
  const total = number
    .toString()
    .split('')
    .reduce((total, current, index) => total + current ** (index + power), 0)

  return (total % number) ? -1 : (total / number)
}





// L1: Set Alarm
// https://www.codewars.com/kata/568dcc3c7f12767a62000038
console.log(setAlarm(true, true), false)
console.log(setAlarm(false, true), false)
console.log(setAlarm(false, false), false)
console.log(setAlarm(true, false), true)


function setAlarm(employed, vacation) {
  return employed && !vacation
}





// Will there be enough space?
// https://www.codewars.com/kata/5875b200d520904a04000003
console.log(enough(10, 5, 5), 0)
console.log(enough(100, 60, 50), 10)
console.log(enough(20, 5, 5), 0)


function enough(cap, on, wait) {
  return Math.max(wait - (cap - on), 0)
}





// Sum of the first nth term of Series
// https://www.codewars.com/kata/555eded1ad94b00403000071
console.log(SeriesSum(0), "0.00")
console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")


function SeriesSum(number) {
  const sequence = [];

  for (let index = 0; index < number; index++) {
    sequence.push(1 / ((index * 3) + 1))
  }

  const sequenceSum = sequence.reduce((total, current) => total + current, 0);
  return sequenceSum.toFixed(2)
}


function SeriesSum(number) {
  let sequenceSum = 0;

  for (let index = 0; index < number; index++) {
    sequenceSum += (1 / ((index * 3) + 1))
  }

  return sequenceSum.toFixed(2)
}





// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
console.log(digitize(348597), [7, 9, 5, 8, 4, 3])
console.log(digitize(35231), [1, 3, 2, 5, 3])
console.log(digitize(0), [0])
console.log(digitize(23582357), [7, 5, 3, 2, 8, 5, 3, 2])
console.log(digitize(984764738), [8, 3, 7, 4, 6, 7, 4, 8, 9])
console.log(digitize(45762893920), [0, 2, 9, 3, 9, 8, 2, 6, 7, 5, 4])
console.log(digitize(548702838394), [4, 9, 3, 8, 3, 8, 2, 0, 7, 8, 4, 5])


function digitize(number) {
  return number.toString().split('').reverse().map(digit => Number(digit))
}

function digitize(number) {
  return number.toString().split('').map(Number).reverse()
}

function digitize(number) {
  return Array.from(number.toString(), Number).reverse()
}





// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028
console.log(getMiddle("test"), "es")
console.log(getMiddle("testing"), "t")
console.log(getMiddle("middle"), "dd")
console.log(getMiddle("A"), "A")
console.log(getMiddle("of"), "of")


function getMiddle(text) {
  const textLength = text.length;

  if (textLength % 2) {
    return text.slice((textLength - 1) / 2, (textLength - 1) / 2 + 1)
  } else {
    return text.slice(textLength / 2 - 1, textLength / 2 + 1)
  }
}





// Transportation on vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016
console.log(rentalCarCost(1), 40)
console.log(rentalCarCost(4), 140)
console.log(rentalCarCost(7), 230)
console.log(rentalCarCost(8), 270)


function rentalCarCost(days) {
  if (days >= 7) return days * 40 - 50
  else if (days >= 3) return days * 40 - 20
  else return days * 40
}





// Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
console.log(abbrevName("Sam Harris"), "S.H")
console.log(abbrevName("patrick feenan"), "P.F")
console.log(abbrevName("Evan C"), "E.C")
console.log(abbrevName("P Favuzzi"), "P.F")
console.log(abbrevName("David Mendieta"), "D.M")


function abbrevName(name) {
  return (
    name
      .split(' ')
      .map(word => word[0].toUpperCase())
      .join('.')
  )
}





// Count by X
// https://www.codewars.com/kata/5513795bd3fafb56c200049e
console.log(countBy(1, 5), [1, 2, 3, 4, 5])
console.log(countBy(2, 5), [2, 4, 6, 8, 10])
console.log(countBy(3, 5), [3, 6, 9, 12, 15])
console.log(countBy(50, 5), [50, 100, 150, 200, 250])
console.log(countBy(100, 5), [100, 200, 300, 400, 500])


function countBy(number, times) {
  const range = [];

  for (let index = number; index < number * times + 1; index += number) {
    range.push(index)
  }

  return range
}


function countBy(number, times) {
  return Array.from({ length: times }, (e, index) => (index + 1) * number)
}





// Beginner Series #1 School Paperwork
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
console.log(paperwork(5, 5), 25)
console.log(paperwork(-5, 5), 0)
console.log(paperwork(5, -5), 0)
console.log(paperwork(-5, -5), 0)
console.log(paperwork(5, 0), 0)


function paperwork(classmate, page) {
  return (classmate > 0 && page > 0) ? classmate * page : 0
}

function paperwork(classmate, page) {
  return Math.max(classmate, 0) * Math.max(page, 0)
}

function paperwork(classmate, page) {
  if (classmate > 0 && page > 0) return classmate * page
  else return 0
}





// Ones and Zeros
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c
console.log(binaryArrayToNumber([0, 0, 0, 1]), 1)
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2)
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15)
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6)


const binaryArrayToNumber = (numbers) => {
  const binaryStr = numbers.join('')
  return parseInt(binaryStr, 2)
}





// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3)
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3)
console.log(findShort("lets talk about javascript the best language"), 3)
console.log(findShort("i want to travel the world writing code one day"), 1)
console.log(findShort("Lets all go on holiday somewhere very cold"), 2)
console.log(findShort("Let's travel abroad shall we"), 2)


function findShort(text) {
  return Math.min(
    ...text
      .split(' ')
      .map(word => word.length)
  )
}





// Fake Binary
// https://www.codewars.com/kata/57eae65a4321032ce000002d
console.log(fakeBin("45385593107843568"), "01011110001100111")
console.log(fakeBin("509321967506747"), "101000111101101")
console.log(fakeBin("366058562030849490134388085"), "011011110000101010000011011")
console.log(fakeBin("15889923"), "01111100")
console.log(fakeBin("800857237867"), "100111001111")


function fakeBin(number) {
  return (
    number
      .split('')
      .map(digit => digit < '5' ? '0' : '1')
      .join('')
  )
}

function fakeBin(number) {
  return number.replace(/\d/g, digit => digit < '5' ? '0' : '1')
}





// Take a Ten Minutes Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), true)
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), false)
console.log(isValidWalk(['w']), false)
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), false)


function count(directions, direction) {
  return directions.filter(letter => letter === direction).length
}

function isValidWalk(directions) {
  return (
    directions.length === 10 &&
    count(directions, 'n') === count(directions, 's') &&
    count(directions, 'e') === count(directions, 'w')
  )
}


Array.prototype.count = function (letter) {
  return this.filter(currentLetter => currentLetter === letter).length
}

function isValidWalk(directions) {
  return (
    directions.length === 10 &&
    directions.count('n') === directions.count('s') &&
    directions.count('e') === directions.count('w')
  )
}





// Calculate average
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
console.log(findAverage([1, 2, 3]), 2)
console.log(findAverage([]), 0)

function findAverage(numbers) {
  if (numbers.length === 0) return 0
  else {
    const sum = numbers.reduce((total, current) => total + current);
    return sum / numbers.length
  }
}





// Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009
console.log(sumMix([9, 3, '7', '3']), 22)
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41)
console.log(sumMix(['1', '5', '8', 8, 9, 9, 2, '3']), 45)
console.log(sumMix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]), 61)


function sumMix(numbers) {
  return (
    numbers
      .map(Number)
      .reduce((total, current) => (total + current))
  )
}





// Switch it Up!
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
console.log(switchItUp(0), "Zero")
console.log(switchItUp(9), "Nine")


function switchItUp(digit) {
  return (
    'Zero One Two Three Four Five Six Seven Eight Nine'
      .split(' ')[digit]
  )
}


function switchItUp(digit) {
  switch (digit) {
    case 0: return "Zero"
    case 1: return "One"
    case 2: return "Two"
    case 3: return "Three"
    case 4: return "Four"
    case 5: return "Five"
    case 6: return "Six"
    case 7: return "Seven"
    case 8: return "Eight"
    case 9: return "Nine"
  }
}





// Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009
console.log(arrayDiff([1, 2], [1]), [2])
console.log(arrayDiff([1, 2, 2], [1]), [2, 2])
console.log(arrayDiff([1, 2, 2], [2]), [1])
console.log(arrayDiff([1, 2, 2], []), [1, 2, 2])
console.log(arrayDiff([], [1, 2]), [])
console.log(arrayDiff([1, 2, 3], [1, 2]), [3])


function arrayDiff(numbers, tabuList) {
  const tabuSet = new Set(tabuList);

  return numbers.filter(digit => !tabuSet.has(digit))
}


function arrayDiff(numbers, tabuList) {
  return numbers.filter(digit => !tabuList.includes(digit))
}





// Welcome!
// https://www.codewars.com/kata/577ff15ad648a14b780000e7
console.log(greet('english'), 'Welcome')
console.log(greet('dutch'), 'Welkom')
console.log(greet('IP_ADDRESS_INVALID'), 'Welcome')
console.log(greet(''), 'Welcome')
console.log(greet(2), 'Welcome')


const languageToGreet = {
  'english': 'Welcome',
  'czech': 'Vitejte',
  'danish': 'Velkomst',
  'dutch': 'Welkom',
  'estonian': 'Tere tulemast',
  'finnish': 'Tervetuloa',
  'flemish': 'Welgekomen',
  'french': 'Bienvenue',
  'german': 'Willkommen',
  'irish': 'Failte',
  'italian': 'Benvenuto',
  'latvian': 'Gaidits',
  'lithuanian': 'Laukiamas',
  'polish': 'Witamy',
  'spanish': 'Bienvenido',
  'swedish': 'Valkommen',
  'welsh': 'Croeso'
}

function greet(language) {
  return languageToGreet[language] ?? languageToGreet['english']
}


function greet(language) {
  return languageToGreet[language] || languageToGreet['english']
}


function greet(language) {
  return language in languageToGreet ? languageToGreet[language] : languageToGreet["english"]
}


function greet(language) {
  if (Object.keys(languageToGreet).includes(language)) {
    return languageToGreet[language]
  } else {
    return languageToGreet['english']
  }
}


function greet(language) {
  const languageToGreetMap = new Map(Object.entries(languageToGreet))
  return languageToGreetMap.get(language) ?? languageToGreetMap.get('english')
}





// Area or Perimeter
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
console.log(areaOrPerimeter(4, 4), 16)
console.log(areaOrPerimeter(6, 10), 32)


const areaOrPerimeter = function (height, width) {
  return (height === width) ? height ** 2 : 2 * (height + width)
}


const areaOrPerimeter = function (height, width) {
  if (height === width) return height ** 2
  else return 2 * (height + width)
}





// Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131
console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']), 30)
console.log(points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']), 10)
console.log(points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4']), 0)
console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4']), 15)
console.log(points(['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4']), 12)


function points(games) {
  let points = 0;

  for (const game of games) {
    let [teamA, teamB] = game.split(':')  // let [teamA, teamB] = game.match(/\d+/g)
    teamA = Number(teamA);
    teamB = Number(teamB);

    if (teamA > teamB) points += 3
    else if (teamA === teamB) points += 1
  }

  return points
}





// Two Sum
// https://www.codewars.com/kata/52c31f8e6605bcc646000082
console.log(twoSum([1, 2, 3], 4), [0, 2])
console.log(twoSum([1234, 5678, 9012], 14690), [1, 2])
console.log(twoSum([2, 2, 3], 4), [0, 1])


function twoSum(numbers, target) {
  const seenNumbers = {};

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    const diff = target - number;

    if (diff in seenNumbers) return [seenNumbers[diff], index]
    else seenNumbers[number] = index
  }
}





// How good are you really?
// https://www.codewars.com/kata/5601409514fc93442500010b
console.log(betterThanAverage([2, 3], 5), true)
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true)
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), true)
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false)
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false)


function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  const classPointsSum = classPoints.reduce((total, current) => total + current)

  return yourPoints > (classPointsSum / classPoints.length)
}





// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// https://www.codewars.com/kata/56efc695740d30f963000557
console.log('hello world'.toAlternatingCase(), 'HELLO WORLD');
console.log('HELLO WORLD'.toAlternatingCase(), 'hello world');
console.log('hello WORLD'.toAlternatingCase(), 'HELLO world');
console.log('HeLLo WoRLD'.toAlternatingCase(), 'hEllO wOrld');
console.log('12345'.toAlternatingCase(), '12345');
console.log('1a2b3c4d5e'.toAlternatingCase(), '1A2B3C4D5E');
console.log('String.prototype.toAlternatingCase'.toAlternatingCase(), 'sTRING.PROTOTYPE.TOaLTERNATINGcASE');
console.log('Hello World'.toAlternatingCase().toAlternatingCase(), 'Hello World');


function swapCase(letter) {
  return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()
}

String.prototype.toAlternatingCase = function () {
  return (
    this
      .split('')
      .map(letter => swapCase(letter))
      .join('')
  )
}





// Sort the odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
console.log(sortArray([]), [])
console.log(sortArray([1, 11, 2, 8, 3, 4, 5]), [1, 3, 2, 8, 5, 4, 11])


function sortArray(numbers) {
  const oddNumbers = numbers
    .filter(number => number % 2)
    .sort((a, b) => a - b)
    .reverse()

  return numbers.map(number => number % 2 ? oddNumbers.pop() : number)
}





// Double Char
// https://www.codewars.com/kata/56b1f01c247c01db92000076
console.log(doubleChar("String"), "SSttrriinngg")
console.log(doubleChar("Hello World"), "HHeelllloo  WWoorrlldd")
console.log(doubleChar("1234!_ "), "11223344!!__  ")


function doubleChar(word) {
  return (
    word
      .split('')
      .map(letter => `${letter}${letter}`)  // letter + letter
      .join('')
  )
}





// Calculate BMI
// https://www.codewars.com/kata/57a429e253ba3381850000fb
console.log(bmi(50, 1.80), "Underweight")
console.log(bmi(80, 1.80), "Normal")
console.log(bmi(90, 1.80), "Overweight")
console.log(bmi(110, 1.80), "Obese")
console.log(bmi(50, 1.50), "Normal")
console.log(bmi(100, 2.00), "Normal")


function bmi(weight, height) {
  const bmi = weight / height ** 2

  if (bmi <= 18.5) return 'Underweight'
  else if (bmi <= 25) return 'Normal'
  else if (bmi <= 30) return 'Overweight'
  else return 'Obese'
}





// Sort array by string length
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
console.log(sortByLength(["beg", "life", "i", "to"]), ["i", "to", "beg", "life"])
console.log(sortByLength(["", "moderately", "brains", "pizza"]), ["", "pizza", "brains", "moderately"])
console.log(sortByLength(["longer", "longest", "short"]), ["short", "longer", "longest"])
console.log(sortByLength(["dog", "food", "a", "of"]), ["a", "of", "dog", "food"])
console.log(sortByLength(["", "dictionary", "eloquent", "bees"]), ["", "bees", "eloquent", "dictionary"])
console.log(sortByLength(["a longer sentence", "the longest sentence", "a short sentence"]), ["a short sentence", "a longer sentence", "the longest sentence"])


function sortByLength(itemList) {
  return itemList.sort((a, b) => a.length - b.length)
}





// Make a function that does arithmetic!
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a
console.log(arithmetic(1, 2, 'add'), 3)
console.log(arithmetic(8, 2, 'subtract'), 6)
console.log(arithmetic(5, 2, 'multiply'), 10)
console.log(arithmetic(8, 2, 'divide'), 4)


function arithmetic(a, b, operator) {
  switch (operator) {
    case 'add': return a + b
    case 'subtract': return a - b
    case 'multiply': return a * b
    case 'divide': return a / b
  }
}





// Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053
console.log(getSum(1, 0), 1)
console.log(getSum(1, 2), 3)
console.log(getSum(0, 1), 1)
console.log(getSum(1, 1), 1)
console.log(getSum(-1, 0), -1)
console.log(getSum(-1, 2), 2)


function getSum(a, b) {
  if (b < a) [a, b] = [b, a]

  let sum = 0;

  for (let index = a; index <= b; index++) {
    sum += index;
  }

  return sum
}





// Equal Sides Of An Array
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3)
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1)
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), -1)
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3)
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]), 0)
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]), 6)
console.log(findEvenIndex([0, 0, 0, 0, 0]), 0)
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]), 3)


function findEvenIndex(numbers) {
  let left = 0;
  let right = numbers.reduce((total, current) => total + current);

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    right -= number;

    if (left === right) return index

    left += number;
  }

  return -1
}





// Simple multiplication
// https://www.codewars.com/kata/583710ccaa6717322c000105
console.log(simpleMultiplication(2), 16)
console.log(simpleMultiplication(1), 9)
console.log(simpleMultiplication(8), 64)
console.log(simpleMultiplication(4), 32)
console.log(simpleMultiplication(5), 45)


function simpleMultiplication(number) {
  return number % 2 ? number * 9 : number * 8
}


function simpleMultiplication(number) {
  return (number % 2 ? 9 : 8) * number
}





// Sum of a sequence
// https://www.codewars.com/kata/586f6741c66d18c22800010a
console.log(sequenceSum(2, 6, 2), 12)
console.log(sequenceSum(1, 5, 1), 15)
console.log(sequenceSum(1, 5, 3), 5)
console.log(sequenceSum(0, 15, 3), 45)
console.log(sequenceSum(16, 15, 3), 0)
console.log(sequenceSum(2, 24, 22), 26)
console.log(sequenceSum(2, 2, 2), 2)
console.log(sequenceSum(2, 2, 1), 2)
console.log(sequenceSum(1, 15, 3), 35)
console.log(sequenceSum(15, 1, 3), 0)


const sequenceSum = (begin, end, step) => {
  let sequenceSum = 0;

  for (let index = begin; index < end + 1; index += step) {
    sequenceSum += index
  }

  return sequenceSum
};





// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b
console.log(domainName("http://google.com"), "google")
console.log(domainName("https://google.com"), "google")
console.log(domainName("https://www.codewars.com"), "codewars")
console.log(domainName("https://google.co.jp"), "google")
console.log(domainName("www.xakep.ru"), "xakep")
console.log(domainName("https://hyphen-site.org"), "hyphen-site")
console.log(domainName("icann.org"), "icann")


function domainName(url) {
  const match = url.match(/(https?:\/\/)?(www\.)?([\w-]+)\..*/)
  return match[3]
}


function domainName(url) {
  return url.replace(/(https?:\/\/)?(www\.)?([\w-]+)\..*/, `$3`)
}





// Find the middle element
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
console.log(gimme([2, 3, 1]), 0)
console.log(gimme([5, 10, 14]), 1)


function gimme(triplet) {
  const sorted = [...triplet].sort((a, b) => a - b)

  return triplet.indexOf(sorted[1]);
}





// Grasshopper - Messi goals function
// https://www.codewars.com/kata/55f73be6e12baaa5900000d4
console.log(goals(0, 0, 0), 0)
console.log(goals(5, 10, 2), 17)


function goals(...args) {
  return args.reduce((total, current) => total + current)
}





// Beginner Series #4 Cockroach
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
console.log(cockroachSpeed(1.08), 30)
console.log(cockroachSpeed(0.42174049178626793), 11)


function cockroachSpeed(speed) {
  return Math.floor(speed * 100_000 / 3600)
}
console.log(cockroachSpeed(1.08), 30)





// Two fighters, one winner.
// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew'), 'Lew')
console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Harry'), 'Harry')
console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harry'), 'Harald')
console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harald'), 'Harald')
console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Jerry'), 'Harald')
console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Harald'), 'Harald')


class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; };
  }
}

function attackOrder(fighter1, fighter2, firstAttacker) {
  if (fighter1.name === firstAttacker) return [fighter1, fighter2]
  else return [fighter2, fighter1]
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  const [first, second] = attackOrder(fighter1, fighter2, firstAttacker)
  const rounds = [[first, second], [second, first]];

  while (true) {
    for (const [attacker, defender] of rounds) {
      defender.health -= attacker.damagePerAttack;

      if (defender.health <= 0) return attacker.name
    }
  }
}





// Primes in numbers
// https://www.codewars.com/kata/54d512e62a5e54c96200019e/
console.log(primeFactors(86240), "(2**5)(5)(7**2)(11)")
console.log(primeFactors(7775460), "(2**2)(3**3)(5)(7)(11**2)(17)")
console.log(primeFactors(7919), "(7919)")


function primeFactors(number) {
  // get dividers
  const dividers = [];

  while (number > 1) {
    for (let divider = 2; divider <= number; divider++) {
      if (!(number % divider)) {
        number /= divider
        dividers.push(divider)
        break
      }
    }
  }

  // count dividers
  const counter = {};

  for (const divider of dividers) {
    counter[divider] = (counter[divider] ?? 0) + 1
  }

  // set answer string
  let answerString = '';
  for (const [key, value] of Object.entries(counter)) {
    answerString += `(${key}` + (value === 1 ? ')' : `**${value})`)
  }

  return answerString
}





// Count the divisors of a number
// https://www.codewars.com/kata/542c0f198e077084c0000c2e
console.log(getDivisorsCnt(1), 1)
console.log(getDivisorsCnt(4), 3)
console.log(getDivisorsCnt(5), 2)
console.log(getDivisorsCnt(12), 6)
console.log(getDivisorsCnt(30), 8)
console.log(getDivisorsCnt(4096), 13)


function getDivisorsCnt(number) {
  let counter = 0;

  // count pairs with different values
  for (let divider = 1; divider < Math.sqrt(number); divider++) {
    if (number % divider === 0) counter += 2;
  }

  // case with same values in pair
  if (Math.sqrt(number) % 1 === 0) counter++

  return counter
}





// Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/
console.log(squareDigits(9119), 811181)
console.log(squareDigits(0), 0)


function squareDigits(number) {
  return (
    Number(number
      .toString()
      .split('')
      .map(digit => digit ** 2)
      .join(''))
  )
}





// Powers of 2
// https://www.codewars.com/kata/57a083a57cb1f31db7000028
console.log(powersOfTwo(0), [1])
console.log(powersOfTwo(1), [1, 2])
console.log(powersOfTwo(4), [1, 2, 4, 8, 16])


function powersOfTwo(number) {
  const range = [];

  for (let index = 0; index <= number; index++) {
    range.push(2 ** index)
  }

  return range
}


function powersOfTwo(number) {
  return Array.from({ length: number + 1 }, (_, index) => 2 ** index)
}


function powersOfTwo(number) {
  return Array(number + 1).fill(0).map((_, index) => 2 ** index)
}





// Thinkful - Logic Drills: Traffic light
// https://www.codewars.com/kata/58649884a1659ed6cb000072
console.log(updateLight('green'), 'yellow')
console.log(updateLight('yellow'), 'red')
console.log(updateLight('red'), 'green')


function updateLight(color) {
  const colors = ['green', 'yellow', 'red'];
  const indexOfColor = colors.indexOf(color);

  return colors[(indexOfColor + 1) % 3]
}


function updateLight(color) {
  const next_color = {
    'green': 'yellow',
    'yellow': 'red',
    'red': 'green'
  }

  return next_color[color]
}





// Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/
console.log(twiceAsOld(36, 7), 22)
console.log(twiceAsOld(55, 30), 5)
console.log(twiceAsOld(42, 21), 0)
console.log(twiceAsOld(22, 1), 20)
console.log(twiceAsOld(29, 0), 29)


function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
}





// Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e
console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

function disemvowel(text) {
  return text.replace(/[aeoiu]/ig, '')
}


function isNotVovel(letter) {
  return !'aeoiuAEOIOU'.includes(letter)
}

function disemvowel(text) {
  return text.split('').filter(isNotVovel).join('')
}





// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1
console.log(isIsogram("Dermatoglyphics"), true)
console.log(isIsogram("isogram"), true)
console.log(isIsogram("aba"), false)
console.log(isIsogram("moOse"), false)
console.log(isIsogram("isIsogram"), false)
console.log(isIsogram(""), true)


function isIsogram(text) {
  const lowerCaseText = text.toLowerCase()

  return text.length === new Set(lowerCaseText).size
}





// I love you, a little , a lot, passionately ... not at all
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
console.log(howMuchILoveYou(7), "I love you")
console.log(howMuchILoveYou(3), "a lot")
console.log(howMuchILoveYou(6), "not at all")


function howMuchILoveYou(number) {
  const numberToPhrase = [
    "I love you", "a little", "a lot",
    "passionately", "madly", "not at all"
  ]

  return numberToPhrase[(number - 1) % 6]
}


function howMuchILoveYou(number) {
  const numberToPhrase = {
    0: "I love you",
    1: "a little",
    2: "a lot",
    3: "passionately",
    4: "madly",
    5: "not at all",
  }

  return numberToPhrase[(number - 1) % 6]
}





// Who likes it?
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
console.log(likes([]), 'no one likes this')
console.log(likes(['Peter']), 'Peter likes this')
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this')
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this')
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')


function likes(names) {
  if (names.length === 0) {
    return 'no one likes this'
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}





// Count the Digit
// https://www.codewars.com/kata/566fc12495810954b1000030/train/
console.log(nbDig(5750, 0), 4700)
console.log(nbDig(11011, 2), 9481)
console.log(nbDig(12224, 8), 7733)
console.log(nbDig(11549, 1), 11905)
console.log(nbDig(14550, 7), 8014)
console.log(nbDig(8304, 7), 3927)
console.log(nbDig(10576, 9), 7860)
console.log(nbDig(12526, 1), 13558)
console.log(nbDig(7856, 4), 7132)
console.log(nbDig(14956, 1), 17267)

function nbDig(number, digitToSearch) {
  let occurences = 0;

  for (let index = 0; index <= number; index++) {
    occurences += (index ** 2)
      .toString()
      .split('')
      .filter(digit => digit == digitToSearch).length
  }

  return occurences
}


function nbDig(number, digitToSearch) {
  const range = Array.from({ length: number + 1 }, (_, index) => index ** 2)

  return (
    range
      .join('')
      .split('')
      .filter(digit => digit == digitToSearch)
      .length
  )
}





// Sum The Strings
// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/
console.log(sumStr('4', '5'), '9')
console.log(sumStr('34', '5'), '39')
console.log(sumStr('9', ''), '9')
console.log(sumStr('', '9'), '9')
console.log(sumStr('', ''), '0')


function sumStr(number1, number2) {
  return (Number(number1) + Number(number2)).toString()
}


function sumStr(number1, number2) {
  return ((parseInt(number1) || 0) + (parseInt(number2) || 0)).toString()
}


function sumStr(number1, number2) {
  return (+number1 + +number2).toString()
}





// If you can't sleep, just count sheep!!
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/
console.log(countSheep(0), '')
console.log(countSheep(1), '1 sheep...')
console.log(countSheep(2), '1 sheep...2 sheep...')
console.log(countSheep(3), '1 sheep...2 sheep...3 sheep...')


var countSheep = function (number) {
  return Array.from({ length: number }, (_, index) => `${index + 1} sheep...`).join('')
}


var countSheep = function (number) {
  let sheepString = '';

  for (let index = 1; index <= number; index++) {
    sheepString += `${index} sheep...`
  }

  return sheepString
}





// Anagram Detection
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/
console.log(isAnagram("foefet", "toffee"), true,)
console.log(isAnagram("Buckethead", "DeathCubeK"), true)
console.log(isAnagram("Twoo", "WooT"), true)
console.log(isAnagram("dumble", "bumble"), false)
console.log(isAnagram("ound", "round"), false)
console.log(isAnagram("apple", "pale"), false)


// counter as Object()
var isAnagram = function (word1, word2) {
  if (word1.length !== word2.length) return false

  const counter1 = {};

  for (const letter of word1.toLowerCase()) {
    counter1[letter] = (counter1[letter] || 0) + 1
  }

  // subtract occurences in word2 from word1
  for (const letter of word2.toLowerCase()) {
    //if (!(letter in counter1)) return false
    if (!counter1[letter]) return false

    counter1[letter] -= 1;

    if (counter1[letter] === -1) return false
  }

  // if anagram evely value should be 0
  for (const val of Object.values(counter1)) {
    if (val != 0) return false
  }

  return true
}


// counter as Map()
var isAnagram = function (word1, word2) {
  if (word1.length !== word2.length) return false

  const counter1 = new Map();

  for (const letter of word1.toLowerCase()) {
    counter1.set(letter, (counter1.get(letter) || 0) + 1)
  }

  // subtract occurences in word2 from word1
  for (const letter of word2.toLowerCase()) {
    if (!counter1.has(letter)) return false

    counter1.set(letter, counter1.get(letter) - 1)

    if (counter1.get(letter) === -1) return false
  }

  // if anagram evely value should be 0
  for (const val of counter1.values()) {
    if (val !== 0) return false
  }

  return true
}





// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"])
console.log(number([]), [])


var number = function (letters) {
  return letters.map((letter, index) => `${index + 1}: ${letter}`)
}





// Delete occurrences of an element if it occurs more than n times
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/
console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21])


function deleteNth(numbers, occurence) {
  const seenNumbers = {};
  const numbersLimitedByOccurence = [];

  for (const number of numbers) {
    if (seenNumbers[number] != occurence) {
      seenNumbers[number] = (seenNumbers[number] || 0) + 1;
      numbersLimitedByOccurence.push(number);
    }
  }

  return numbersLimitedByOccurence
}





// Sort and Star
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n')
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e')
console.log(twoSort(["lets", "talk", "about", "javascript", "the", "best", "language"]), 'a***b***o***u***t')
console.log(twoSort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]), 'c***o***d***e')
console.log(twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"]), 'L***e***t***s')


function twoSort(wordList) {
  return wordList.sort()[0].split('').join('***')
}





// Find the capitals
// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/
console.log(capitals('CodEWaRs'), [0, 3, 4, 6])


var capitals = function (word) {
  const upperIndexes = [];

  for (let index = 0; index < word.length; index++) {
    if (word[index] === word[index].toUpperCase()) {
      upperIndexes.push(index);
    }
  }

  return upperIndexes
}





// List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/
console.log(filter_list([1, 2, 'a', 'b']), [1, 2])
console.log(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15])
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123])


function filter_list(elements) {
  return elements.filter(element => typeof element === 'number')
}





// Give me a Diamond
// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/
console.log(diamond(5), '  *\n ***\n*****\n ***\n  *\n')
console.log(diamond(1), '*\n')
console.log(diamond(3), ' *\n***\n *\n')
console.log(diamond(0), null)
console.log(diamond(2), null)
console.log(diamond(-3), null)


function diamond(number) {
  if (number % 2 === 0 ||
    number < 0
  ) return null

  const half = (number - 1) / 2;
  const upperDiamond = [];
  const lowerDiamond = [];

  for (let index = 0; index <= half; index++) {
    upperDiamond.push(' '.repeat(half - index) + '*'.repeat(index * 2 + 1));
  }

  for (let index = 0; index < half; index++) {
    lowerDiamond.push(' '.repeat(index + 1) + '*'.repeat(2 * (half - index) - 1));
  }

  // return upperDiamond.concat(lowerDiamond).join('\n') + '\n'
  return [...upperDiamond, ...lowerDiamond].join('\n') + '\n'
}





// Round up to the next multiple of 5
// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/
console.log(roundToNext5(0), 0)
console.log(roundToNext5(2), 5)
console.log(roundToNext5(3), 5)
console.log(roundToNext5(12), 15)
console.log(roundToNext5(21), 25)
console.log(roundToNext5(30), 30)
console.log(roundToNext5(-2), 0)
console.log(roundToNext5(-5), -5)


function roundToNext5(number) {
  return Math.ceil(number / 5) * 5
}


function roundToNext5(number) {
  return Math.floor(number / 5) * 5 + (number % 5 === 0 ? 0 : 5)
}





// Quarter of the year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/
console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)


const quarterOf = (month) => {
  return Math.floor((month - 1) / 3) + 1
}


const quarterOf = (month) => {
  return Math.ceil(month / 3)
}





// Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/
console.log(sumTwoSmallestNumbers([5, 8, 12, 18, 22]), 13)
console.log(sumTwoSmallestNumbers([7, 15, 12, 18, 22]), 19)
console.log(sumTwoSmallestNumbers([25, 42, 12, 18, 22]), 30)


function sumTwoSmallestNumbers(numbers) {
  const minNumber = Math.min(...numbers);
  numbers.splice(numbers.indexOf(minNumber), 1);

  return minNumber + Math.min(...numbers)
}





// Simple Encryption #1 - Alternating Split
// https://www.codewars.com/kata/57814d79a56c88e3e0000786/solutions
console.log(encrypt('012345', 1), '135024')
console.log(encrypt('01234', 1), '13024')
console.log(encrypt('This is a test!', 0), 'This is a test!')
console.log(encrypt('This is a test!', 1), 'hsi  etTi sats!')
console.log(encrypt('This is a test!', 2), 's eT ashi tist!')
console.log(encrypt('This is a test!', 3), ' Tah itse sits!')
console.log(encrypt('This is a test!', 4), 'This is a test!')
console.log(encrypt('This is a test!', -1), 'This is a test!')
console.log(encrypt('This kata is very interesting!', 1), 'hskt svr neetn!Ti aai eyitrsig')
console.log(encrypt('', 0), '')
console.log(encrypt(null, 0), null)


function encrypt(text, number) {
  if (text === null) return null

  for (let index = 0; index < number; index++) {
    let odd_text = '';
    let even_text = '';

    for (let index = 0; index < text.length; index++) {
      if (index % 2) {
        odd_text += text[index];
      } else {
        even_text += text[index]
      }
    }

    text = odd_text + even_text;
  }

  return text
}


console.log(decrypt('This is a test!', 0), 'This is a test!')
console.log(decrypt('hsi  etTi sats!', 1), 'This is a test!')
console.log(decrypt('s eT ashi tist!', 2), 'This is a test!')
console.log(decrypt(' Tah itse sits!', 3), 'This is a test!')
console.log(decrypt('This is a test!', 4), 'This is a test!')
console.log(decrypt('This is a test!', -1), 'This is a test!')
console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1), 'This kata is very interesting!')
console.log(decrypt('135024', 1), '012345')
console.log(decrypt('13024', 1), '01234')
console.log(decrypt('304152', 2), '012345')
console.log(decrypt('32104', 2), '01234')
console.log(decrypt('', 0), '')
console.log(decrypt(null, 0), null)


function decrypt(text, number) {
  if (text === null) return null

  const middle = text.length >> 1

  for (let index = 0; index < number; index++) {
    let odd_text = text.slice(0, middle);
    let even_text = text.slice(middle,);
    text = '';

    for (let index = 0; index < even_text.length; index++) {
      text += even_text[index]
      text += odd_text[index] || ''
    }
  }
  return text
}





// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/
console.log(dnaStrand('AAAA'), 'TTTT')
console.log(dnaStrand('ATTGC'), 'TAACG')
console.log(dnaStrand('GTAT'), 'CATA')


const toComplement = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
}

function dnaStrand(dna) {
  return (
    dna
      .split('')
      .map(letter => toComplement[letter])
      .join('')
  )
}


function dnaStrand(dna) {
  return dna.replace(/\w/g, letter => toComplement[letter])
}


function dnaStrand(dna) {
  return (
    Array
      .from({ length: dna.length }, (_, index) => toComplement[dna[index]])
      .join('')
  )
}


function dnaStrand(dna) {
  let complement = '';

  for (const letter of dna) {
    complement += toComplement[letter]
  }

  return complement
}





// Super Duper Easy
// https://www.codewars.com/kata/55a5bfaa756cfede78000026/solutions
console.log(problem(1), 56)
console.log(problem("hello"), "Error")


function problem(element) {
  if (typeof element === 'number') {
    return 50 * element + 6
  } else return 'Error'
}


function problem(element) {
  return typeof element === 'number' ? 50 * element + 6 : 'Error'
}





// Add Length
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/
console.log(addLength('apple ban'), ["apple 5", "ban 3"])
console.log(addLength('you will win'), ["you 3", "will 4", "win 3"])
console.log(addLength('you'), ["you 3"])
console.log(addLength('y'), ["y 1"])


function addLength(text) {
  return (
    text
      .split(' ')
      .map(word => `${word} ${word.length}`))
}





// Regex validate PIN code
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/
console.log(validatePIN('1234'), true)
console.log(validatePIN('1'), false)
console.log(validatePIN('12'), false)
console.log(validatePIN('123'), false)
console.log(validatePIN('12345'), false)
console.log(validatePIN('1234567'), false)
console.log(validatePIN('-1234'), false)
console.log(validatePIN('-12345'), false)
console.log(validatePIN('1.234'), false)
console.log(validatePIN('00000000'), false)
console.log(validatePIN('0000'), true)
console.log(validatePIN('12.0'), false)


function isDigit(number) {
  numberLength = number
    .split('')
    .filter(digit => Number.parseInt(digit).toString().length === 1)
    .length
  return numberLength === number.length
}

function validatePIN(pin) {

  return (
    [4, 6].includes(pin.length) &&
    isDigit(pin)
  )
}


function isDigit(number) {
  return number.match(/\d/g).length == number.length
}

function validatePIN(pin) {

  return (
    [4, 6].includes(pin.length) &&
    isDigit(pin)
  )
}


function validatePIN(pin) {
  return Boolean(pin.match(/^(\d{4}|\d{6})$/))
}





// Rot13
// https://www.codewars.com/kata/530e15517bc88ac656000716/train/
console.log(rot13('test'), 'grfg')
console.log(rot13('Test'), 'Grfg')
console.log(rot13('aA bB zZ 1234 *!?%'), 'nN oO mM 1234 *!?%')


function encode(letter) {
  if (!(letter.match(/[a-z]/i))) return letter

  if (
    letter.charCodeAt() >= 'a'.charCodeAt() &&
    letter.charCodeAt() <= 'z'.charCodeAt()
  ) {
    const new_letter = letter.charCodeAt() + 13;
    return new_letter <= 'z'.charCodeAt() ? String.fromCharCode(new_letter) : String.fromCharCode(new_letter - 26)
  }

  if (
    letter.charCodeAt() >= 'A'.charCodeAt() &&
    letter.charCodeAt() <= 'Z'.charCodeAt()
  ) {
    const new_letter = letter.charCodeAt() + 13;
    return new_letter <= 'Z'.charCodeAt() ? String.fromCharCode(new_letter) : String.fromCharCode(new_letter - 26)
  }
}

function rot13(message) {
  return message.split('').map(letter => encode(letter)).join('')
}





// Difference of Volumes of Cuboids
// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/
console.log(findDifference([3, 2, 5], [1, 4, 4]), 14)
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106)


function findDifference(dimensions1, dimensions2) {
  const volume1 = dimensions1.reduce((total, current) => total * current);
  const volume2 = dimensions2.reduce((total, current) => total * current);

  return Math.abs(volume1 - volume2)
}





// Multiplication table for number
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/
console.log(multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50')
console.log(multiTable(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10')


function multiTable(number) {
  return (
    Array
      .from({ length: 10 }, (_, index) => `${index + 1} * ${number} = ${(index + 1) * number}`)
      .join('\n')
  )
}


function multiTable(number) {
  const table = [];

  for (let index = 1; index <= 10; index++) {
    table.push(`${index + 1} * ${number} = ${(index + 1) * number}`)
  }

  return table.join('\n')
}





// Beginner - Reduce but Grow
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/
console.log(grow([596, 321, 384, 132, 649, 224, 157, 729, 531, 115, 555, 540, 838, 243, 168, 538, 667, 53, 613, 10, 486, 437, 143, 167, 722, 422, 866, 534, 261, 3, 505, 881, 228, 203, 102, 237, 152, 32, 320, 731, 943, 723, 557, 730, 525, 353, 606, 274, 613, 582, 96, 585, 120, 426, 513, 232, 52, 584, 591, 806, 417, 70, 96, 902, 538, 681, 341, 927, 301, 97, 812, 30, 32, 405, 923, 730, 118, 64, 795, 226, 840, 653, 388, 784, 651, 332, 418, 682, 241, 781, 592, 150, 23, 134, 144, 626, 536, 482, 195, 811, 208, 707, 344, 735, 535, 945, 277, 725, 627, 135, 304, 585, 580, 409, 556, 839, 659, 1000, 861, 416, 914, 571, 691, 554, 502, 399, 111, 885, 142, 445, 880, 592, 255, 662, 423, 682, 384, 103, 722, 847, 320, 189, 693, 653, 230, 411, 204, 608, 481, 814, 297, 394, 864, 594, 549, 197, 628, 40, 185, 485, 162, 671, 395, 585, 428, 733, 811, 854, 344, 660, 475, 936, 807, 879, 404, 704, 515, 919, 549, 178, 942, 307, 553, 840, 451, 335, 44, 531, 726, 547, 238, 549, 987, 345, 368, 549, 107, 932, 521, 23, 95, 35, 488, 513, 573, 667, 388, 951, 654, 685, 974, 142, 533, 370, 847, 574, 848, 729, 237, 968, 185, 738, 660, 827, 110, 930, 497, 390, 542, 535, 223, 366, 98, 194, 771, 948, 864, 200, 801, 588, 468, 672, 61, 689, 893, 980, 525, 365, 593, 948, 920, 593, 939, 288, 424, 886, 203, 229, 911, 814, 157, 112, 390, 88, 312, 477, 35, 795, 959, 370, 950, 824, 456, 648, 184, 106, 896]), 39029291620533010931129397295638983676725789177704602999079246351960844311593368912916110759003546377363578700370528243472804365949406949497517632959300394381672629864499924571880170912950325917874291622475321852787750467982683462492413674077024767456900833305256057070814787993483437568900168885202988121573996032301947160895766083716920940392997066971600219779272071440586637340222479790337403296194462108557626985880202413695626127589511963083206906054187744691157794555256034617365518450400009739705212922378004697474916382004021566893720617727317115823822122740759685929320959643767556306049064966612902298901059029531313109353576527822848000000000000000000000000000000000000000000000000000000000000000000000000)


function grow(numbers) {
  return numbers.reduce((total, current) => total * current)
}





// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/
console.log(replace("Hi!"), "H!!")
console.log(replace("!Hi! Hi!"), "!H!! H!!")
console.log(replace("aeiou"), "!!!!!")
console.log(replace("ABCDE"), "!BCD!")


function replace(text) {
  return text.replace(/[aeoiu]/ig, '!')
}





// Fix string case
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/
console.log(solve("code"), "code")
console.log(solve("CODe"), "CODE")
console.log(solve("COde"), "code")
console.log(solve("Code"), "code")


function solve(text) {
  const lowerCaseLength = text.split('').filter(letter => letter === letter.toLowerCase()).length

  if (lowerCaseLength / text.length >= 0.5) {
    return text.toLowerCase()
  } else {
    return text.toUpperCase()
  }
}





// Welcome to the City
// https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
console.log(sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
console.log(sayHello(['Wallace', 'Russel', 'Osbourne'], 'Albany', 'New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')
console.log(sayHello(['Lupin', 'the', 'Third'], 'Los Angeles', 'California'), 'Hello, Lupin the Third! Welcome to Los Angeles, California!')
console.log(sayHello(['Marlo', 'Stanfield'], 'Baltimore', 'Maryland'), 'Hello, Marlo Stanfield! Welcome to Baltimore, Maryland!')


function sayHello(name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}





// Reversing Words in a String
// https://www.codewars.com/kata/57a55c8b72292d057b000594/train/
console.log(reverse('Hello World'), 'World Hello')
console.log(reverse('Hi There.'), 'There. Hi')

function reverse(text) {
  return text.split(' ').reverse().join(' ')
}





// Alternate capitalization
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/
console.log(capitalize("abcdef"), ['AbCdEf', 'aBcDeF'])
console.log(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS'])
console.log(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa'])
console.log(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS'])
console.log(capitalize("indexinglessons"), ['InDeXiNgLeSsOnS', 'iNdExInGlEsSoNs'])
console.log(capitalize("codingisafunactivity"), ['CoDiNgIsAfUnAcTiViTy', 'cOdInGiSaFuNaCtIvItY'])


function capitalize(word) {
  let oddWord = '';
  let evenWord = '';

  for (let index = 0; index < word.length; index++) {
    const letter = word[index];

    if (index % 2) {
      oddWord += letter.toUpperCase();
      evenWord += letter;
    } else {
      oddWord += letter;
      evenWord += letter.toUpperCase();
    }
  }

  return [evenWord, oddWord]
}





// Tortoise racing
// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/
console.log(race(720, 850, 70), [0, 32, 18])
console.log(race(80, 91, 37), [3, 21, 49])
console.log(race(820, 81, 550), null)


function race(v1, v2, g) {
  if (v1 >= v2) return null

  const x = (v1 * g) / (v2 - v1)
  const t = x / v1

  const hours = Math.floor(t)
  const minutes = Math.floor((t % 1) * 60)
  const seconds = Math.floor(((t % 1) * 60) % 1 * 60)

  return [hours, minutes, seconds]
}





// How many lightsabers do you own?
// https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/train/
console.log(howManyLightsabersDoYouOwn('Zach'), 18)
console.log(howManyLightsabersDoYouOwn(), 0)
console.log(howManyLightsabersDoYouOwn('zach'), 0)


function howManyLightsabersDoYouOwn(name) {
  return name == 'Zach' ? 18 : 0
}





// Enumerable Magic - Does My List Include This?
// https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/
console.log(include(numebers, 100), false)
console.log(include(numebers, 2), true)
console.log(include(numebers, 11), true)
console.log(include(numebers, "2"), false)
console.log(include(numebers, 0), true)
console.log(include([], 0), false)


function include(itemList, item) {
  return itemList.includes(item)
}
const numebers = [0, 1, 2, 3, 5, 8, 13, 2, 2, 2, 11]


function include(itemList, item) {
  return itemList.indexOf(item) !== -1
}





// Is the string uppercase?
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/
console.log('c'.isUpperCase(), false)
console.log('C'.isUpperCase(), true)
console.log('hello I AM DONALD'.isUpperCase(), false)
console.log('HELLO I AM DONALD'.isUpperCase(), true)
console.log('$%&'.isUpperCase(), true)


String.prototype.isUpperCase = function () {
  return this === this.toUpperCase()
}


String.prototype.isUpperCase = function () {
  const filerLength = (
    this
      .split('')
      .filter(letter => letter === letter.toUpperCase())
      .length
  )

  return filerLength === this.length
}


String.prototype.isUpperCase = function () {
  return !this.match(/[a-z]/g)
}


String.prototype.isUpperCase = function () {
  return (
    this
      .split('')
      .every(letter => letter === letter.toUpperCase())
  )
}





// Remove anchor from URL
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/
console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')


function removeUrlAnchor(url) {
  return url.split('#')[0]
}


function removeUrlAnchor(url) {
  return url.replace(/#.*/g, '')
}


function removeUrlAnchor(url) {
  const anchorIndex = url.indexOf('#');

  return anchorIndex === -1 ? url : url.slice(0, anchorIndex)
}





// Find the Remainder
// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/
console.log(remainder(17, 5), 2)
console.log(remainder(13, 72), 7)  // 'The order the arguments are passed should not matter.'
console.log(remainder(1, 0), NaN)  // 'Divide by zero should return NaN'
console.log(remainder(0, 0), NaN)  // 'Divide by zero should return NaN'
console.log(remainder(0, 1), NaN)  // 'Divide by zero should return NaN'
console.log(remainder(-1, 0), 0)  // 'Divide by zero should only be checked for the lowest number'
console.log(remainder(0, -1), 0)  // 'Divide by zero should only be checked for the lowest number'
console.log(remainder(-13, -13), 0)  // 'Should handle negative numbers'
console.log(remainder(-60, 340), -20)  // 'Should handle negative numbers'
console.log(remainder(60, -40), -20)  // 'Should handle negative numbers'


function remainder(number1, number2) {
  return number1 > number2 ? number1 % number2 : number2 % number1
}


function remainder(number1, number2) {
  if (number2 > number1) {
    [number1, number2] = [number2, number1]
  }

  if (number2 === 0) return NaN
  if (number1 === 0) return 0
  // if (number1 < 0 && number2 < 0) {
  //   [number1, number2] = [-number1, -number2]
  // }

  if (number2 < 0) {
    return (number1 % -number2) || 0
    // return number2 + (number1 % -number2) || 0
  }

  return (number1 % number2) || 0
}





// Regular Ball Super Ball
// https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/
const ball1 = new Ball();
const ball2 = new Ball("super");
console.log(ball1.ballType, 'regular')
console.log(ball2.ballType, 'super')


class Ball {
  constructor(ballType = 'regular') {
    this.ballType = ballType;
  }
}


var Ball = function (ballType = 'regular') {
  this.ballType = ballType
}





// Sum of Pairs
// https://www.codewars.com/kata/54d81488b981293527000c8f
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7])
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7])
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6])
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7])
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6])
console.log(sumPairs([20, -13, 40], -7), undefined)
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1])
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7])
console.log(sumPairs([4, -2, 3, 3, 4], 8), [4, 4])
console.log(sumPairs([0, 2, 0], 0), [0, 0])
console.log(sumPairs([5, 9, 13, -3], 10), [13, -3])


function sumPairs(numbers, target) {
  const seen_numbers = new Set();

  for (const number of numbers) {
    const diff = target - number;

    if (seen_numbers.has(diff)) return [diff, number]
    else seen_numbers.add(number)
  }

  return undefined
}





// Find the stray number
// https://www.codewars.com/kata/57f609022f4d534f05000024/train/
console.log(stray([1, 1, 1, 1, 1, 1, 2]), 2)
console.log(stray([2, 3, 2, 2, 2]), 3)
console.log(stray([3, 2, 2, 2, 2]), 3)


function stray(numbers) {
  const counter = {};

  for (const number of numbers) {
    counter[number] = (counter[number] || 0) + 1;
  }

  for (const [key, val] of Object.entries(counter)) {
    if (val === 1) return Number(key)
  }
}





// Summing a number's digits
// https://www.codewars.com/kata/52f3149496de55aded000410/train/
console.log(sumDigits(10), 1)
console.log(sumDigits(99), 18)
console.log(sumDigits(-32), 5)


function sumDigits(number) {
  return (
    Math.abs(number)
      .toString()
      .split('')
      .reduce((total, current) => total + Number(current), 0))
}


function sumDigits(number) {
  return (
    Math.abs(number)
      .toString()
      .split('')
      .reduce((total, current) => +total + +current))
}





// Sum of odd numbers
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/
console.log(rowSumOddNumbers(1), 1)
console.log(rowSumOddNumbers(2), 8)
console.log(rowSumOddNumbers(3), 27)
console.log(rowSumOddNumbers(13), 2197)
console.log(rowSumOddNumbers(19), 6859)
console.log(rowSumOddNumbers(41), 68921)


function rowSumOddNumbers(number) {
  return number ** 3
}





// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/
console.log(accum('ZpglnRxqenU'), 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu')
console.log(accum('NyffsGeyylB'), 'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb')
console.log(accum('MjtkuBovqrU'), 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu')
console.log(accum('EvidjUnokmM'), 'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm')
console.log(accum('HbideVbxncC'), 'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc')


function accum(text) {
  return (
    text
      .split('')
      .map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index))
      .join('-')
  )
}





// Remove First and Last Character Part Two
// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/
console.log(array('1,2,3'), '2')
console.log(array('1,2,3,4'), '2 3')
console.log(array('1, 2, 3, 4'), '2 3')
console.log(array('1,2,3,4,5'), '2 3 4')
console.log(array(''), null)
console.log(array('1'), null)
console.log(array('1,2'), null)


function array(text) {
  return (
    text
      .split(',')
      .map(digit => digit.trim())
      .slice(1, -1)
      .join(' ') ||
    null)
}





// Sum of Multiples
// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/
console.log(sumMul(2, 9), 20)
console.log(sumMul(3, 13), 30)
console.log(sumMul(4, 123), 1860)
console.log(sumMul(123, 4567), 86469)
console.log(sumMul(0, 0), 'INVALID')
console.log(sumMul(4, -7), 'INVALID')
console.log(sumMul(11, 1111), 55550)



function sumMul(start, end) {
  if (
    start <= 0 ||
    end <= 0
  ) return 'INVALID'

  let total = 0;

  for (let index = start; index < end; index += start) {
    total += index;
  }

  return total
}





// Sorted? yes? no? how?
// https://www.codewars.com/kata/580a4734d6df748060000045/train/
console.log(isSortedAndHow([1, 2]), 'yes, ascending')
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending')
console.log(isSortedAndHow([4, 2, 30]), 'no')


function compare(numbers, numbersCompare) {
  if (numbers.length !== numbersCompare.length) return false

  return numbers.every((digit, index) => digit === numbersCompare[index])
}

function isSortedAndHow(numbers) {
  const ascendingNumbers = numbers.slice().sort((a, b) => a - b)

  if (compare(numbers, ascendingNumbers)) {
    return 'yes, ascending'
  } else if (compare(numbers, ascendingNumbers.reverse())) {
    return 'yes, descending'
  } else return 'no'

}





// Find Multiples of a Number
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/
console.log(findMultiples(5, 25), [5, 10, 15, 20, 25])
console.log(findMultiples(1, 2), [1, 2])


function findMultiples(start, end) {
  const arrayLength = Math.floor(end / start)

  return Array.from({ length: arrayLength }, (_, index) => start * (index + 1))
}





// Regex Password Validation
// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/
const data_table = [
  ['fjd3IR9', true],
  ['ghdfj32', false],
  ['DSJKHD23', false],
  ['dsF43', false],
  ['4fdg5Fj3', true],
  ['DHSJdhjsU', false],
  ['fjd3IR9.;', false],
  ['fjd3  IR9', false],
  ['djI38D55', true],
  ['a2.d412', false],
  ['JHD5FJ53', false],
  ['!fdjn345', false],
  ['jfkdfj3j', false],
  ['123', false],
  ['abc', false],
  ['123abcABC', true],
  ['ABC123abc', true],
  ['Password123', true],
]

for (const [word, bool] of data_table) {
  console.log(REGEXP.test(word), bool)
}


const REGEXP = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d+)[A-Za-z\d]{6,}$/;





// Help the bookseller !
// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/
console.log(stockList(['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B', 'C', 'D']), '(A : 0) - (B : 1290) - (C : 515) - (D : 600)')
console.log(stockList(['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B']), '(A : 200) - (B : 1140)')
console.log(stockList([''], ['B', 'R', 'D', 'X']), '')


function stockList(bookQuantities, categories) {
  if (
    bookQuantities.length === 0 ||
    categories.length === 0 ||
    bookQuantities[0] === ''
  ) return ''

  const categoryQuantities = {};

  for (const bookQuantity of bookQuantities) {
    const [book, quantity] = bookQuantity.split(' ')
    const category = book[0];

    categoryQuantities[category] = (categoryQuantities[category] || 0) + Number(quantity)
  }

  const bookQuantitiesTruncked = [];

  for (const category of categories) {
    bookQuantitiesTruncked.push(`(${category} : ${categoryQuantities[category] || 0})`)
  }
  return bookQuantitiesTruncked.join(' - ')
}





// Factorial
// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/
const tests = [
  [0, 1],
  [1, 1],
  [2, 2],
  [3, 6],
  [4, 24],
  [5, 120],
  [6, 720],
  [7, 5040],
]

for (const test of tests) {
  const [inp, exp] = test
  console.log(factorial(inp), exp)
}


// recursion
function factorial(number) {
  if (number === 0) return 1

  return number * factorial(number - 1)
}


// iteration
function factorial(number) {
  let total = 1;

  for (let index = 1; index <= number; index++) {
    total *= index;
  }

  return total
}


function factorial(number) {
  return number ? number * factorial(number - 1) : 1
}

const factorial = number => number ? number * factorial(number - 1) : 1





// Remove duplicates from list
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/
console.log(distinct([1]), [1])
console.log(distinct([1, 2]), [1, 2])
console.log(distinct([1, 1, 2]), [1, 2])
console.log(distinct([1, 1, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
console.log(distinct([1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7]), [1, 2, 3, 4, 5, 6, 7])


function distinct(numbers) {
  const seenSet = new Set();
  const seenList = [];

  for (const number of numbers) {
    if (!seenSet.has(number)) {
      seenSet.add(number);
      seenList.push(number);
    }
  }

  return seenList
}


function distinct(numbers) {
  return [...new Set(numbers)]
}





// Convert to Binary
// https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/
console.log(toBinary(1), 1)
console.log(toBinary(2), 10)
console.log(toBinary(3), 11)
console.log(toBinary(5), 101)


function toBinary(number) {
  return +number.toString(2)
}





// Factorial
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/
console.log(factorial(0), 1)
console.log(factorial(1), 1)
console.log(factorial(2), 2)
console.log(factorial(3), 6)
console.log(factorial(13), '[Function: RangeError]')


function factorial(number) {
  if (
    number < 0 ||
    number > 12
  ) throw new RangeError("Invalid range")
  
  let total = 1;

  for (let index = 1; index <= number; index++) {
    total *= index;
  }

  return total
}





// Simple Fun #176: Reverse Letter
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/
console.log(reverseLetter("krishan"), "nahsirk")
console.log(reverseLetter("ultr53o?n"), "nortlu")
console.log(reverseLetter("ab23c"), "cba")
console.log(reverseLetter("krish21an"), "nahsirk")


function reverseLetter(word) {
  return (
    word
      .match(/[a-z]/g)
      .reverse()
      .join('')
  )
}


function reverseLetter(word) {
  return (
    word
      .replace(/[^a-z]/g, '')
      .split('')
      .reverse()
      .join('')
  )
}


function isAlpha(letter) {
  return /[a-z]/.test(letter)
}

function reverseLetter(word) {
  return (
    word
      .split('')
      .reverse()
      .filter(letter => isAlpha(letter))
      .join('')
  )
}





// Alphabet war
// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/
console.log(alphabetWar('z'), 'Right side wins!')
console.log(alphabetWar('zdqmwpbs'), 'Let\'s fight again!')
console.log(alphabetWar('wq'), 'Left side wins!')
console.log(alphabetWar('zzzzs'), 'Right side wins!')
console.log(alphabetWar('wwwwww'), 'Left side wins!')


function alphabetWar(word) {
  const leftLetters = 'sbpw';
  const rightLetters = 'zdqm';
  let score = 0;

  for (const letter of word) {
    if (leftLetters.includes(letter)) {
      score -= leftLetters.indexOf(letter) + 1;
    }
    else if (rightLetters.includes(letter)) {
      score += rightLetters.indexOf(letter) + 1;
    }
  }

  if (score < 0) return 'Left side wins!'
  else if (score > 0) return 'Right side wins!'
  else return 'Let\'s fight again!'
}





// Predict your age!
// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86)


function predictAge(...args) {
  return (
    args
      .map(number => number ** 2)
      .reduce((total, current) => total + current) ** 0.5 / 2 | 0
  )
}


function predictAge(...args) {
  return (
    Math.hypot(...args) / 2 | 0
  )
}





// Multiplication table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/
console.log(multiplicationTable(1), [[1]])
console.log(multiplicationTable(2), [[1, 2], [2, 4]])
console.log(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]])
console.log(multiplicationTable(4), [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]])
console.log(multiplicationTable(5), [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]])


function multiplicationTable (size) {
  const matrix = [];

  for (let row = 1; row <= size; row++)
    matrix.push(Array.from({ length: size }, (_, index) => (index + 1) * row))

  return matrix
}


function multiplicationTable (size) {
  const matrix = [];

  for (let row = 0; row < size; row++) {
    matrix[row] = [];

    for (let col = 0; col < size; col++) {
      matrix[row][col] = (row + 1) * (col + 1)
    }
  }

  return matrix
}


function multiplicationTable (size) {
  const matrix = [];

  for (let row = 0; row < size; row++) {
    const current_row = [];

    for (let col = 0; col < size; col++) {
      current_row.push((row + 1) * (col + 1))
    }

    matrix.push(current_row);
  }

  return matrix
}





// Integers: Recreation One
// https://www.codewars.com/kata/55aa075506463dac6600010d/train/
console.log(listSquared(1, 1), [1, 1])
console.log(listSquared(246, 246), [246, 84100])
console.log(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
console.log(listSquared(42, 250), [[42, 2500], [246, 84100]])
console.log(listSquared(250, 500), [[287, 84100]])


function getDividers(number) {
  const dividers = new Set();

  for (let index = 1; index <= (Math.sqrt(number) | 0 + 1); index++) {
    if (number % index === 0) {
      dividers.add(index);
      dividers.add(number / index);
    }
  }
  return Array.from(dividers)
}

console.log(getDividers(12))

function getDivisorsSquaredSum(number) {
  return (
    getDividers(number)
      .map(number => number ** 2)
      .reduce((total, current) => total + current)
  )
}

console.log(getDivisorsSquaredSum(246))

function isDivisorsSquaredSumRoot(number) {
  return !(getDivisorsSquaredSum(number) ** 0.5 % 1)
}

console.log(isDivisorsSquaredSumRoot(246))

function listSquared(start, end) {
  const solution = [];
  
  for (let index = start; index <= end; index++) {
    if (isDivisorsSquaredSumRoot(index)) {
      solution.push([index, getDivisorsSquaredSum(index)])
    }
  }

  return solution
}





// Money, Money, Money
// https://www.codewars.com/kata/563f037412e5ada593000114/train/
console.log(calculateYears(1000, 0.05, 0.18, 1100), 3)
console.log(calculateYears(1000, 0.01625, 0.18, 1200), 14)
console.log(calculateYears(1000, 0.05, 0.18, 1000), 0)


function calculateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired) {
    principal += principal * interest - principal * interest * tax;
    years++;
  }

  return years
}





// Printing Array elements with Comma delimiters
// https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/
console.log(printArray([2, 4, 5, 2]), "2,4,5,2")


function printArray(numbers) {
  return numbers.join()
}





// Find the vowels
// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/python
console.log(vowelIndices("mmm"), [])
console.log(vowelIndices("apple"), [1, 5])
console.log(vowelIndices("123456"), [])
console.log(vowelIndices("UNDISARMED"), [1, 4, 6, 9])


function vowelIndices(word){
  const vovelIndex = [];

  for (let index = 0; index < word.length; index++) {
    if ('aeoiuyAEOIUY'.includes(word[index])) {
      vovelIndex.push(index + 1);
    }
  }
  return vovelIndex
}





// Sort Numbers
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/
console.log(solution([1, 2, 3, 10, 5]), [1, 2, 3, 5, 10])
console.log(solution(null), [])
console.log(solution([]), [])
console.log(solution([20, 2, 10]), [2, 10, 20])
console.log(solution([2, 20, 10]), [2, 10, 20])


function solution(numbers) {
  return (numbers || []).sort((a, b) => a - b)
}


function solution(numbers) {
  return numbers ? numbers.sort((a, b) => a - b) : []
}


function solution(numbers) {
  if (!numbers) return []

  return numbers.sort((a, b) => a - b)
}





// A Rule of Divisibility by 13
// https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/
console.log(thirt(1234567), 87)
console.log(thirt(8529), 79)
console.log(thirt(85299258), 31)
console.log(thirt(5634), 57)
console.log(thirt(1111111111), 71)
console.log(thirt(987654321), 30)


function thirt(number) {
  const factors = [1, 10, 9, 12, 3, 4, 1];

  while (number > 99) {
    number = number
      .toString()
      .split('')
      .reverse()
      .map((digit, index) => +digit * factors[index % 6])
      .reduce((total, current) => total + current)
  }

  return number
}





// Odd or Even?
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/
console.log(oddOrEven([0, 1, 2]), "odd")
console.log(oddOrEven([0, 1, 3]), "even")
console.log(oddOrEven([1023, 1, 2]), "even")
console.log(oddOrEven([]), "even")


function oddOrEven(numbers) {
  const sum = numbers.reduce((total, current) => total + current, 0)

  return sum % 2 ? 'odd' : 'even'
}




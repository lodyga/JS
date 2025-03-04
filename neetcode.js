// Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
// Using Plain Object:
var twoSum = (nums, target) => {
  const seen = {}
  const numsLength = nums.length

  for (let index = 0; index < numsLength; index++) {
    let num = nums[index];
    let diff = target - num;

    if (diff in seen) {
      return [seen[diff], index];
    } else {
      seen[num] = index;
    };
  };

  return [-1, -1]
};
console.log(twoSum([2, 7, 11, 15], 9), [0, 1])
console.log(twoSum([3, 2, 4], 6), [1, 2])


// Using Map:
var twoSum = (nums, target) => {
  const seen = new Map()
  const numsLength = nums.length;

  for (let index = 0; index < numsLength; index++) {
    const num = nums[index];
    const diff = target - num;

    if (seen.has(diff)) {
      return [seen.get(diff), index];
    } else {
      seen.set(num, index);
    };
  };

  return [-1, -1]
};





// Contains Duplicate
// Set - Early exit
console.log(containsDuplicate([1, 2, 3, 1]), true)
console.log(containsDuplicate([1, 2, 3]), false)
console.log(containsDuplicate([1, 2, 3, 4]), false)
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  const seen = new Set();

  for (const num of nums) {

    if (seen.has(num)) {
      return true
    } else {
      seen.add(num)
    };
  };

  return false
};


// Set
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  const seen = new Set(nums);

  return !(nums.length == seen.size)
};





// Valid Anagram
// Map
console.log(isAnagram("anagram", "nagaram"), true)
console.log(isAnagram("rat", "car"), false)
console.log(isAnagram("a", "ab"), false)


var isAnagram = (word1, word2) => {
  const word1_count = counter(word1);
  const word2_count = counter(word2);

  if (word1.length != word2.length) {
    return false
  };

  for (let key of word1_count.keys()) {
    if (word1_count.get(key) != word2_count.get(key)) {
      return false
    };
  };

  return true
};

const counter = (word) => {
  const counter = new Map();

  for (let letter of word) {
    let count = (counter.get(letter) ?? 0) + 1;
    counter.set(letter, count);
  };

  return counter
};


// compare two Objects
var isAnagram = (word1, word2) => {
  const word1_count = counter(word1);
  const word2_count = counter(word2);

  for (let key in { ...word1_count, ...word2_count }) {
    if (word1_count[key] != word2_count[key]) {
      return false
    };
  };

  return true
};

const counter = (word) => {
  const counter = {};

  for (let letter of word) {
    if (counter[letter]) {
      counter[letter] = counter[letter] + 1;
    } else {
      counter[letter] = 1;
    };
  };
  return counter
};


// subtract one Object from another
var isAnagram = (word1, word2) => {
  const counter = {};
  const word1_dict = count_add(counter, word1);
  const word2_dict = count_subtract(word1_dict, word2);

  for (let key in word2_dict) {
    if (word2_dict[key]) {
      return false
    }
  }
  return true;
};

const count_add = (counter, word) => {
  for (let letter of word) {
    if (counter[letter]) {
      counter[letter] = counter[letter] + 1;
    } else {
      counter[letter] = 1;
    };
  };
  return counter;

};

const count_subtract = (counter, word) => {
  for (let letter of word) {
    if (counter[letter]) {
      counter[letter] = counter[letter] - 1;
    } else {
      counter[letter] = -1;
    };
  };
  return counter;

};





// Group Anagrams
// key as a 26 digit string, Map()
var groupAnagrams = (words) => {
  const groupedAnagrams = new Map();

  for (let word of words) {
    // Initialize an array to store the frequency of each letter
    const key = new Array(26).fill(0);

    // Count the frequency of each letter in the word
    for (let letter of word) {
      key[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Convert the frequency array to a string to use as the key in the dictionary
    const keyStr = key.join(',');

    if (!groupedAnagrams.has(keyStr)) {
      groupedAnagrams.set(keyStr, [])
    }

    groupedAnagrams.get(keyStr).push(word);

  }
  return Array.from(groupedAnagrams.values())
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])
console.log(groupAnagrams([""]), [[""]])
console.log(groupAnagrams(["a"]), [["a"]])
console.log(groupAnagrams(["tin", "ram", "zip", "cry", "pus", "jon", "zip", "pyx"]), [['tin'], ['ram'], ['zip', 'zip'], ['cry'], ['pus'], ['jon'], ['pyx']])
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]), [["bdddddddddd"], ["bbbbbbbbbbc"]])


// key as a 26 digit string, Object
var groupAnagrams = (words) => {
  const groupedAnagrams = {};

  for (let word of words) {
    // Initialize an array to store the frequency of each letter
    const key = new Array(26).fill(0);

    // Count the frequency of each letter in the word
    for (let letter of word) {
      key[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Convert the frequency array to a string to use as the key in the dictionary
    const keyStr = key.join(',');

    if (!groupedAnagrams[keyStr]) {
      groupedAnagrams[keyStr] = [];
    }

    groupedAnagrams[keyStr].push(word);

  }
  // return Array.from(groupedAnagrams.values())
  return Object.values(groupedAnagrams)
}


// sort(), Map()
var groupAnagrams = (words) => {
  const groupedAnagrams = new Map();

  for (let word of words) {
    let key = word.split('').sort().join(); // ''

    if (!groupedAnagrams.has(key)) {
      groupedAnagrams.set(key, [])
    }

    groupedAnagrams.get(key).push(word); // key, []

  }
  return Array.from(groupedAnagrams.values())
}


// sort(), Object
var groupAnagrams = (words) => {
  const groupedAnagrams = {};

  for (let word of words) {
    let key = word.split('').sort().join('')

    if (!groupedAnagrams[key]) {
      groupedAnagrams[key] = []
    }

    groupedAnagrams[key].push(word);
  }

  return Object.values(groupedAnagrams)
}





// Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Map(), bucket - frequency list
var topKFrequent = (nums, solution_len) => {
  counts = new Map();
  bucket = new Array(nums.length + 1).fill(0);
  solution = [];

  // counts values
  for (let num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1)
  }

  // bucket as a list of lists
  // [[], [3], [2], [1], [], [], []]
  for (let [key, val] of counts) {
    if (!bucket[val]) {
      bucket[val] = [];
    }

    bucket[val].push(key);
  }

  bucket.reverse()

  // get top solution_len values
  for (let numbers of bucket) {
    if (numbers) {
      for (let number of numbers) {
        solution.push(number);

        if (solution.length == solution_len) {
          return solution
        }
      }
    }
  }

  return -1
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2])
console.log(topKFrequent([1], 1), [1])
console.log(topKFrequent([5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0, 2, 2, 2, 4, -2, -4, 8, -7, -7, 2, -8, 0, -8, 10, 8, -8, -2, -9, 4, -7, 6, 6, -1, 4, 2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1, -3, 7, 0, 8, -2, -3, -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6, -8, -9, -1, 9, -9, 3, 5, 1, 6, -1, -2, 4, 2, 4, -6, 4, 4, 5, -5], 7), [4, -1, 2, -5, 0, 8, -8])


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Object(), bucket - frequency list
var topKFrequent = (nums, solution_len) => {
  counts = {};
  bucket = new Array(nums.length + 1).fill(0);
  solution = [];

  // counts values
  for (let num of nums) {
    counts[num] = (counts[num] ?? 0) + 1
  }

  // bucket as a list of lists
  for (let key of Object.keys(counts)) {
    let val = counts[key];

    if (!bucket[[val]]) {
      bucket[val] = [];
    }

    bucket[val].push(key);
  }

  // get top solution_len values
  for (let numbers of bucket.reverse()) {
    if (numbers) {
      for (let number of numbers) {
        solution.push(number);

        if (solution.length == solution_len) {
          return solution
        }
      }
    }
  }

  return -1
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Map(), sort()
var topKFrequent = (nums, solution_len) => {
  counts = new Map();
  bucket = new Map();
  solution = [];

  // counts values
  for (let num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1)
  }

  // reverse counts {key: val} pairs as bucket
  for (let [key, val] of counts) {
    if (!bucket.has(val)) {
      bucket.set(val, []);
    }
    bucket.get(val).push(key);
  }

  // sort frequencies descending
  let keys = (Array.from(bucket.keys())).sort((a, b) => b - a);

  // get top solution_len values
  for (let key of keys) {
    for (let number of bucket.get(key)) {
      solution.push(number);

      if (solution.length == solution_len) {
        return solution
      }
    }
  }

  return -1
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Object, sort()
var topKFrequent = (nums, solution_len) => {
  counts = {};
  bucket = {};
  solution = [];

  // counts values
  for (let num of nums) {
    counts[num] = (counts[num] ?? 0) + 1;
  }

  // reverse counts {key: val} pairs as bucket
  for (let key in counts) {
    if (!bucket[counts[key]]) {
      bucket[counts[key]] = [];
    }

    bucket[counts[key]].push(key);
  }

  // sort frequencies descending
  let keys = Object.keys(bucket).sort((a, b) => b - a);

  // get top solution_len values
  for (let key of keys) {
    for (let number of bucket[key]) {
      solution.push(number);

      if (solution.length == solution_len) {
        return solution
      }
    }
  }

  return -1
}





// Encode and Decode Strings
var encode = (words) => {
  let encoded = '';

  for (let word of words) {
    encoded += 'Τ';
    encoded += word.length;
    encoded += word;
  }

  return encoded
}

var decode = (word) => {
  let decoded = [];

  while (word) {
    if (word[0] == 'Τ') {
      word = word.slice(1);
      let len = '';

      while (word && word[0].search(/\d/) != -1) {
        len += word[0];
        word = word.slice(1);
      }

      len = Number(len);
      decoded.push(word.slice(0, len));
      word = word.slice(len);
    }
  }
  return decoded
}
console.log(encode(["code", "site", "love", "you"]), 'Τ4codeΤ4siteΤ4loveΤ3you')
console.log(decode(encode(["code", "site", "love", "you"])), ["code", "site", "love", "you"])
console.log(decode(encode([])), [])
console.log(decode(encode([''])), [''])




// Product of Array Except Self
var productExceptSelf = (nums) => {
  const prefix = [];
  prefix[0] = 1;
  const postfix = [];
  postfix[nums.length - 1] = 1;
  const solution = [];

  for (index = 0; index < nums.length - 1; index++) {
    prefix[index + 1] = nums[index] * prefix[index]
  }

  for (index = nums.length - 1; index > 0; index--) {
    solution[index] = prefix[index] * postfix[index]
    postfix[index - 1] = nums[index] * postfix[index]
  }
  solution[0] = prefix[0] * postfix[0]

  return solution
}
console.log(productExceptSelf([2, 3, 4, 5]), [60, 40, 30, 24])
console.log(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6])
// 3*4*5=60, 2 * 4*5=40, 2*3 * 5=30, 2*3*4=24





// Valid Sudoku
/**
 * @param {character[][]} board
 * @return {boolean}
 */
class Solution {
  isSubboxValid(row, col) {
    const seen = new Set();

    for (let r = row; r < row + 3; r++) {
      for (let c = col; c < col + 3; c++) {
        let digit = this.board[r][c];

        if (digit != '.') {
          if (seen.has(digit)) {
            return false
          } else {
            seen.add(digit);
          }
        }
      }
    }
    return true
  }

  isValidSudoku(board) {
    this.board = board
    let rows = board.length;
    let cols = board[0].length;

    // validating rows
    for (const row of board) {
      const seen = new Set();

      for (let digit of row) {
        if (digit != '.') {
          if (seen.has(digit)) {
            return false
          } else {
            seen.add(digit);
          }
        }
      }
    }

    // validating columns
    for (let col = 0; col < cols; col++) {
      const seen = new Set();

      for (let row = 0; row < rows; row++) {
        let digit = board[row][col];

        if (digit != '.') {
          if (seen.has(digit)) {
            return false
          } else {
            seen.add(digit);
          }
        }
      }
    }

    // validating sub-boxes
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (!this.isSubboxValid(3 * row, 3 * col)) {
          return false
        }
      }
    }

    return true
  }
}
console.log(new Solution().isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]],), true)
console.log(new Solution().isValidSudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]), false)
console.log(new Solution().isValidSudoku([[".", ".", ".", ".", "5", ".", ".", "1", "."], [".", "4", ".", "3", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", "3", ".", ".", "1"], ["8", ".", ".", ".", ".", ".", ".", "2", "."], [".", ".", "2", ".", "7", ".", ".", ".", "."], [".", "1", "5", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", "2", ".", ".", "."], [".", "2", ".", "9", ".", ".", ".", ".", "."], [".", ".", "4", ".", ".", ".", ".", ".", "."]]), false)





// Longest Consecutive Sequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums) => {
  const numSet = new Set(nums);
  let solution = 0

  for (let num of numSet.values()) {
    if (!numSet.has(num - 1)) {
      let counter = 1;

      while (numSet.has(num + counter)) {
        counter++
      }
      solution = Math.max(solution, counter);
    }
  }
  return solution
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]), 4)
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9)





// Valid Palindrome
// O(n), O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = (sentence) => {
  let l = 0;
  let r = sentence.length - 1;

  while (l < r) {
    while ((l < r) && (sentence[l].match(/[\W_]/))) {
      l++
    }

    while ((l < r) && (sentence[r].match(/[\W_]/))) {
      r--
    }

    if (sentence[l].toLowerCase() != sentence[r].toLowerCase()) {
      return false
    } else {
      l++
      r--
    }
  }
  return true
}
console.log(isPalindrome("A man, a plan, a canal: Panama"), true)
console.log(isPalindrome("race a car"), false)
console.log(isPalindrome(" "), true)
console.log(isPalindrome("0P"), false)
console.log(isPalindrome("ab_a"), true)


// O(n), O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Filter alphanumeric
  s = s.replace(/[\W_]/ig, '').toLowerCase();

  // Reverse the string
  reversed = s.split('').reverse().join('');

  return s === reversed
}





// Two Sum II - Input Array Is Sorted
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    currSum = nums[left] + nums[right]

    if (currSum < target) {
      left++
    } else if (currSum > target) {
      right--
    } else {
      return [++left, ++right]
    }
  }
  return -1
}
console.log(twoSum([2, 7, 11, 15], 9), [1, 2])
console.log(twoSum([2, 3, 4], 6), [1, 3])
console.log(twoSum([-1, 0], -1), [1, 2])





// 3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const solution = [];

  for (index = 0; index < nums.length - 2; index++) {
    let num = nums[index];
    // Skip positive nums
    if (num > 0) {
      break
    }

    // Skip same num values
    if (index && nums[index] == nums[index - 1]) {
      continue
    }

    let left = index + 1;
    let right = nums.length - 1;

    // two pointers
    while (left < right) {
      let currSum = num + nums[left] + nums[right];

      if (currSum < 0) {  // if sum is less than 0
        left++;
      } else if (currSum > 0) {  // if sum is greater than 0
        right--;
      } else {  // if sum is equal to 0
        solution.push([num, nums[left], nums[right]])
        left++;
        right--;

        // skip same left pointer values
        while ((left < right) && (nums[left] == nums[left - 1])) {
          left++;
        }
      }
    }
  }
  return solution
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]])
console.log(threeSum([3, 0, -2, -1, 1, 2]), [[-2, -1, 3], [-2, 0, 2], [-1, 0, 1]])
console.log(threeSum([1, 1, -2]), [[-2, 1, 1]])
console.log(threeSum([-1, 1, 1]), [])
console.log(threeSum([0, 0, 0]), [[0, 0, 0]])
console.log(threeSum([-2, 0, 0, 2, 2]), [[-2, 0, 2]])





// Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = (heights) => {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    let currArea = (right - left) * Math.min.apply(null, [heights[left], heights[right]]);
    maxArea = Math.max.apply(null, [maxArea, currArea])

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)
console.log(maxArea([1, 1]), 1)
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]), 17)





// Trapping Rain Water
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = (heights) => {
  let left = 0;
  let right = heights.length - 1;
  let trappedWater = 0;
  let leftMaxHeight = 0;
  let rightMaxHeight = 0;

  // two pointers
  while (left < right) {
    if (heights[left] < heights[right]) {  // choose the lower height because it gets to higher eventually
      leftMaxHeight = Math.max(leftMaxHeight, heights[left]);
      let currentTrap = leftMaxHeight - heights[left];
      trappedWater += currentTrap;
      left++;
    } else {
      rightMaxHeight = Math.max(rightMaxHeight, heights[right]);
      let currentTrap = rightMaxHeight - heights[right];
      trappedWater += currentTrap;
      right--;
    }
  }
  return trappedWater
}
console.log(trap([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2]), 8)
console.log(trap([5, 8]), 0)
console.log(trap([3, 1, 2]), 1)
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6)
console.log(trap([4, 2, 0, 3, 2, 5]), 9)





// Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (brackets) => {
  const oppos_brackets = { ']': '[', '}': '{', ')': '(' };
  const seen = [];

  for (let bracket of brackets) {
    if (bracket in oppos_brackets) {
      if (oppos_brackets[bracket] == seen[seen.length - 1]) {
        seen.pop();
      } else {
        return false
      }
    } else {
      seen.push(bracket)
    }
  }
  return !Boolean(seen.length)
}
console.log(isValid("()"), true)
console.log(isValid("({})"), true)
console.log(isValid("(})"), false)
console.log(isValid("([)"), false)
console.log(isValid("(]"), false)
console.log(isValid(""), true)
console.log(isValid("["), false)





// Min Stack
// https://leetcode.com/problems/min-stack/
// In the constructor function-based approach, methods are usually added either
// by directly attaching them to the object inside the constructor 
// or by adding them to the prototype.

// adding methods with prototype
var MinStack = function () {
  this.stack = [];
  this.stackMin = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  val = Math.min(val, this.stackMin[this.stackMin.length - 1] ?? val)
  this.stackMin.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.stackMin.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stackMin[this.stackMin.length - 1]
};

minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
console.log(minStack.getMin());
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2




// methods are attached directly
var MinStack = function () {
  this.stack = [];
  this.stackMin = [];

  this.push = function (val) {
    this.stack.push(val);
    val = Math.min(val, this.stackMin[this.stackMin.length - 1] ?? val)
    this.stackMin.push(val)
  };

  this.pop = function () {
    this.stack.pop();
    this.stackMin.pop();
  };

  this.top = function () {
    return this.stack[this.stack.length - 1]
  };

  this.getMin = function () {
    return this.stackMin[this.stackMin.length - 1]
  };
};


// In the class-based approach, you define the object using the class keyword and the methods directly within the class body.
// Class
class MinStack {
  constructor() {
    this.stack = [];
    this.stackMin = [];
  }

  push = function (val) {
    this.stack.push(val);
    val = Math.min(val, this.stackMin[this.stackMin.length - 1] ?? val)
    this.stackMin.push(val)
  };

  pop = function () {
    this.stack.pop();
    this.stackMin.pop();
  };

  top = function () {
    return this.stack[this.stack.length - 1]
  };

  getMin = function () {
    return this.stackMin[this.stackMin.length - 1]
  };
};





// Evaluate Reverse Polish Notation
/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const stack = [];

  for (let token of tokens) {
    if (token == '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (token == '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (token == '-') {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(a - b);
    } else if (token == '/') {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(Math.trunc(a / b));
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0]
}
console.log(evalRPN(["2", "1", "+", "3", "*"]), 9)
console.log(evalRPN(["4", "13", "5", "/", "+"]), 6)
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]), 22)
console.log(evalRPN(["18"]), 18)





// Daily Temperatures
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// O(n)
function dailyTemperatures(temps) {
  const daysDelta = Array(temps.length).fill(0)
  const stack = [];

  for (let index = 0; index < temps.length; index++) {
    let temp = temps[index];

    while (stack.length && stack[stack.length - 1][1] < temp) {    // check for lower temps
      stack_index = stack[stack.length - 1][0];  // take top stack element index

      daysDelta[stack_index] = index - stack_index;  // update delta_days
      stack.pop();  // pop lower temp
    }

    stack.push([index, temp]);
  }
  return daysDelta
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0])
console.log(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0])
console.log(dailyTemperatures([30, 60, 90]), [1, 1, 0])


// O(n2)
function dailyTemperatures(temps) {
  const daysDelta = Array(temps.length).fill(0)

  for (let indL = 0; indL < temps.length - 1; indL++) {
    for (let indR = indL + 1; indR < temps.length; indR++) {
      if (temps[indL] < temps[indR]) {
        daysDelta[indL] = indR - indL;
        break
      }
    }
  }
  return daysDelta
}





// Car Fleet
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
function carFleet(target, positions, speeds) {
  const fleetStack = [];

  // const cars = Array(positions.length).fill(0);
  // for (let index = 0; index < positions.length; index++) {  // zip positions and speed
  //     cars[index] = [positions[index], speeds[index]]
  // }

  const cars = positions.map((position, index) => [position, speeds[index]]);

  cars.sort((a, b) => (b[0] - a[0]));  // sort the cars so to start with the one closest to the target

  for (let [position, speed] of cars) {
    let currDist = (target - position) / speed;  // distance to the target
    if (fleetStack && currDist <= fleetStack[fleetStack.length - 1]) {  // if the car behind cought up next car
      continue
    }
    fleetStack.push(currDist);  // push a car to a stack
  }

  return fleetStack.length
}
console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]), 3)
console.log(carFleet(10, [3], [3]), 1)
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]), 1)
console.log(carFleet(10, [0, 4, 2], [2, 1, 3]), 1)





// Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {  // two poionters
    let mid = Math.trunc((left + right) / 2)  // find mid index
    // let mid = ((left + right) >> 1);  // shift bits

    if (target == nums[mid]) {  // if target found
      return mid
    } else if (target < nums[mid]) {  // if target is less than middle, choose left chunk
      right = mid - 1;
    } else {  // # if target is greater than middle, choose rigth chunk
      left = mid + 1;
    }
  }
  return -1
}
console.log(search([-1, 0, 3, 5, 9, 12], -1), 0)
console.log(search([-1, 0, 3, 5, 9, 12], 0), 1)
console.log(search([-1, 0, 3, 5, 9, 12], 3), 2)
console.log(search([-1, 0, 3, 5, 9, 12], 5), 3)
console.log(search([-1, 0, 3, 5, 9, 12], 9), 4)
console.log(search([-1, 0, 3, 5, 9, 12], 12), 5)
console.log(search([-1, 0, 3, 5, 9, 12], 2), -1)





// Search a 2D Matrix
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  let left = 0;  // boundries
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (top <= bottom) {  // two poionters to find the right row
    mid_row = (top + bottom) >> 1;  // find middle row index

    if (target >= matrix[mid_row][left] &&
      target <= matrix[mid_row][right]) {  // if target row found
      break
    } else if (target < matrix[mid_row][left]) {  // if target is less than the most left, choose top chunk
      bottom = mid_row - 1;
    } else {  // if target is grater than the most right, choose bottom chunk
      top = mid_row + 1;
    }
  }

  while (left <= right) {  // two poionters to find the right column
    mid_col = (left + right) >> 1;  // find middle column index

    if (target == matrix[mid_row][mid_col]) {  // if target column found
      return true
    } else if (target < matrix[mid_row][mid_col]) {  // if target is less than middle colum, choose left chunk
      right = mid_col - 1;
    } else {  // if target is greater than middle colum, choose rigth chunk
      left = mid_col + 1;
    }
  }

  return false
}
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3), true)
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13), false)





// Koko Eating Bananas
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, hours) {
  let left = 1;
  let right = Math.max.apply(null, piles);
  let solution;  // Declare solution outside the loop

  while (left <= right) {
    let mid = (left + right) >> 1;

    // let timeToEat = 0
    // for (let pile of piles) {
    //     timeToEat += Math.ceil(pile / mid);
    // }

    let timeToEat = piles.reduce((totalTime, pile) => totalTime + Math.ceil(pile / mid), 0);

    // time to guard to get back >= time to eat all bananas
    if (hours >= timeToEat) {  // enough time, this might be the solution but also eat a little slower
      solution = mid;  // Store the potential solution
      right = --mid;  // Try to eat slower
    } else {  // not enough time
      left = ++mid;  // need to eat faster
    }
  }

  return solution
}
console.log(minEatingSpeed([3, 6, 7, 11], 8), 4)
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5), 30)
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6), 23)
console.log(minEatingSpeed([312884470], 312884469), 2)
console.log(minEatingSpeed([3], 2), 2)





// Find Minimum in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  let currMin = nums[0]; // assign some value

  while (left <= right) {  // two pointers
    let mid = (left + right) >> 1;  // get the middle index
    currMin = Math.min(currMin, nums[mid])  // check if the value in the middle it lower than currten min

    if (nums[mid] < nums[right]) {  // if the middle value is lower than the most right value
      right = --mid;  // then the left part should be searched
    } else {
      left = ++mid;  // else the right part should be searched
    }
  }
  return currMin
}
console.log(findMin([1, 2, 3, 4]), 1)
console.log(findMin([4, 1, 2, 3]), 1)
console.log(findMin([2, 3, 4, 1]), 1)
console.log(findMin([3, 4, 1, 2]), 1)
console.log(findMin([4, 5, 1, 2, 3]), 1)
console.log(findMin([5, 1, 2, 3, 4]), 1)
console.log(findMin([1, 2, 3, 4, 5]), 1)
console.log(findMin([2, 3, 4, 5, 1]), 1)
console.log(findMin([3, 4, 5, 1, 2]), 1)
console.log(findMin([4, 5, 6, 7, 0, 1, 2]), 0)
console.log(findMin([11, 13, 15, 17]), 11)
console.log(findMin([1]), 1)
console.log(findMin([3, 1, 2]), 1)





// Search in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {  // two pointers
    let mid = (left + right) >> 1; // get middle index

    if (target == nums[mid]) {  // if target found
      return mid
    } else if (nums[mid] < nums[right]) {  // [5, 1, 2, 3, 4] the right chunk [3, 4] is ascending the other has a pivot
      if (nums[mid] < target && target <= nums[right]) {
        left = ++mid;
      } else {
        right = --mid;
      }
    } else {  // [2, 3, 4, 5, 1] the left chunk [2, 3] is ascending the other has a pivot
      if (nums[left] <= target && target < nums[mid]) {
        right = --mid;
      } else {
        left = ++mid
      }
    }
  }
  return -1
}
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8), 4)
console.log(search([1, 3, 5], 5), 2)
console.log(search([3, 5, 1], 3), 0)
console.log(search([3, 5, 1], 1), 2)
console.log(search([5, 1, 3], 3), 2)
console.log(search([4, 5, 6, 7, 0, 1, 2], 0), 4)
console.log(search([4, 5, 6, 7, 0, 1, 2], 3), -1)
console.log(search([1], 0), -1)
console.log(search([5, 1, 3], 4), -1)
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8), 4)





// Time Based Key-Value Store
// using class, store as Object()
class TimeMap {
  constructor() {
    this.store = {};
  }

  set = function (key, value, timestamp) {
    if (!this.store[key]) {
      this.store[key] = [];
    }

    this.store[key].push([value, timestamp])
  }

  get = function (key, timestamp) {
    if (!this.store[key]) {
      return ''
    }

    let left = 0;
    let right = this.store[key].length - 1;
    let solution = '';

    while (left <= right) {
      let mid = (left + right) >> 1;
      let midValue = this.store[key][mid];

      if (timestamp == midValue[1]) {
        return midValue[0]
      } else if (timestamp < midValue[1]) {
        right = --mid;
      } else {
        left = ++mid;
        solution = midValue[0];
      }
    }
    return solution
  }
}


/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// Example 1
obj = new TimeMap()
// console.log(obj.set("foo", "bar", 1))
// console.log(obj.get("foo", 1))
// console.log(obj.get("foo", 3))
// console.log(obj.set("foo", "bar2", 4))
// console.log(obj.get("foo", 4))
// console.log(obj.get("foo", 5))
// Output: [null,null,"bar","bar",null,"bar2","bar2"]

// Example 2
obj = new TimeMap()
// console.log(obj.set("love", "high", 10))
// console.log(obj.set("love", "low", 20))
// console.log(obj.get("love", 5))
// console.log(obj.get("love", 10))
// console.log(obj.get("love", 15))
// console.log(obj.get("love", 20))
// console.log(obj.get("love", 25))
// Ouput: [null,null,null,"","high","high","low","low"]

// Example 3
// obj = new TimeMap()
// console.log(obj.set("a", "bar", 1))
// console.log(obj.set("x", "b", 3))
// console.log(obj.get("b", 3))
// console.log(obj.set("foo", "bar2", 4))
// console.log(obj.get("foo", 4))
// console.log(obj.get("foo", 5))
// Output: [null,null,null,"",null,"bar2","bar2"]


// methods with prototype, store as Map()
var TimeMap = function () {
  this.store = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.store.has(key)) {
    this.store.set(key, []);
  }

  this.store.get(key).push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.store.has(key)) {
    return ''
  }

  let left = 0;
  let right = this.store.get(key).length - 1;
  let solution = '';

  while (left <= right) {
    let mid = (left + right) >> 1;
    let midValue = this.store.get(key)[mid];

    if (timestamp == midValue[1]) {
      return midValue[0]
    } else if (timestamp < midValue[1]) {
      right = --mid;
    } else {
      left = ++mid;
      solution = midValue[0];
    }
  }
  return solution
}

// Example 3
obj = new TimeMap()
console.log(obj.set("a", "bar", 1))
console.log(obj.set("x", "b", 3))
console.log(obj.get("b", 3))
console.log(obj.set("foo", "bar2", 4))
console.log(obj.get("foo", 4))
console.log(obj.get("foo", 5))
// Output: [null,null,null,"",null,"bar2","bar2"]





// Best Time to Buy and Sell Stock
// pointers as indexes
console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5)
console.log(maxProfit([7, 6, 4, 3, 1]), 0)
console.log(maxProfit([2, 4, 1]), 2)
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]), 2)
console.log(maxProfit([1, 2]), 1)


/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let left = 0;  // the left pointer as index
  let right = 1;  // the right pointer as index
  let maxProfit = 0;

  while (right < prices.length) {  // bound the right pointer
    if (prices[left] > prices[right]) {  // if price is lower buy
      left = right;
    } else {  // if price is higher calculate revenue
      let currentProfit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, currentProfit);
    }
    right++;
  }
  return maxProfit
}


// pointers as values
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let left = prices[0];  // the left pointer as value
  let maxProfit = 0;

  for (right of prices) {  // the right pointer as value
    if (left > right) {  // if price is lower buy
      left = right;
    } else {  // if price is higher calculate revenue
      let currentProfit = right - left;
      maxProfit = Math.max(maxProfit, currentProfit);
    }
  }
  return maxProfit
}


/**
 * treat as dp with O(n) cache
 * O(n), O(n)
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let minPrice = prices[0]

  for (index = 0; index < prices.length; index++) {
    let price = prices[index];
    if (price < minPrice) {
      minPrice = price;
    }

    prices[index] -= minPrice;
  }
  return Math.max.apply(null, prices)
}


/**
 * treat as dp with O(1) cache
 * O(n), O(1)
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (index = 0; index < prices.length; index++) {
    let price = prices[index];

    if (price < minPrice) {
      minPrice = price;
    }

    let profit = price - minPrice;
    maxProfit = Math.max(maxProfit, profit)
  }
  return maxProfit
}





// Longest Substring Without Repeating Characters
// # O(n), O(n)
// window as set()
// both pointers as indexes
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(word) {
  const window = new Set();  // slidiong window without repeating characters
  let longest = 0;
  let left = 0;  // left pointer

  for (let right in word) {  // right pointer
    while (window.has(word[right])) {  // if duplicate found
      window.delete(word[left]);  // delete (remove, discard) that charactr with every preceding character
      left++;  // increase the left pointer
    }

    window.add(word[right]);  // add an unique letter
    longest = Math.max(longest, right - left + 1);  // update the length of the longest substring
  }
  return longest
}
console.log(lengthOfLongestSubstring("abcabcbb"), 3)
console.log(lengthOfLongestSubstring("bbbbb"), 1)
console.log(lengthOfLongestSubstring("pwwkew"), 3)
console.log(lengthOfLongestSubstring("aabaab!bb"), 3)
console.log(lengthOfLongestSubstring("aab"), 2)


// window as set()
// right pointer as a value (letter), left as index
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(word) {
  const window = new Set();  // slidiong window without repeating characters
  let longest = 0;
  let index = 0;  // index of the first 'letter' in the 'word'

  for (let right of word) {  // right pointer
    while (window.has(right)) {  // if duplicate found
      window.delete(word[index]);  // delete (remove, discard) that charactr with every preceding character
      index++;  // increase the index
    }

    window.add(right);  // add an unique letter
    longest = Math.max(longest, window.size);  // update the length of the longest substring
  }
  return longest
}





// Longest Repeating Character Replacement
// window as Map()
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(word, joker) {
  const window = new Map();
  let left = 0;
  let longest = 0;

  for (let right in word) {
    window.set(word[right], (window.get(word[right]) ?? 0) + 1)

    if ((right - left + 1) - Math.max(...window.values()) > joker) {
      window.set(word[left], window.get(word[left]) - 1);
      left++;
    }

    longest = Math.max(longest, (right - left + 1));
  }
  return longest
}
console.log(characterReplacement("ABAB", 2), 4)
console.log(characterReplacement("AABABBA", 1), 4)


// window as Object()
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(word, joker) {
  const window = {};
  let left = 0;
  let longest = 0;

  for (let right in word) {
    window[word[right]] = (window[word[right]] ?? 0) + 1

    if ((right - left + 1) - Math.max(...Object.values(window)) > joker) {
      window[word[left]] -= 1;
      left++;
    }

    longest = Math.max(longest, (right - left + 1));
  }
  return longest
}





// Permutation in String
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  let counter = 0;  // counts how many keys (letters) in 'window' have exactly match in 's1_count'
  let left = 0;  // left pointer
  const window = new Map();  // window as Map()
  const s1Count = new Map();  // Map() from s1

  for (letter of s1) {  // Map() from s1
    s1Count.set(letter, (s1Count.get(letter) ?? 0) + 1);
  }

  for (right in s2) {  // right pointer
    let letter = s2[right];
    window.set(letter, (window.get(letter) ?? 0) + 1);  // add a letter to the window

    if (s1Count.get(letter) == window.get(letter)) {  // if letter occurences match
      counter++;

      if (counter == s1Count.size) {  // if cunter is equal to s1Count that means all letter occurences are matching
        return true
      }
    }

    if (s1.length > right - left + 1) {  // if window is not long enough
      continue
    }

    // if the letter at left pointer that's going to be removed is significant then need to lower the 'counter'
    if (s1Count.get(s2[left]) == window.get(s2[left])) { // if letter occurences match
      counter--;
    }

    window.set(s2[left], window.get(s2[left]) - 1)  // remove a letter at the left pointer from the window
    left++;
  }
  return false
  u
}
console.log(checkInclusion("ab", "eidbaooo"), true)
console.log(checkInclusion("ab", "eidboaoo"), false)
console.log(checkInclusion("ccc", "cbac"), false)
console.log(checkInclusion("ab", "a"), false)
console.log(checkInclusion("abcdxabcde", "abcdeabcdx"), true)
console.log(checkInclusion("adc", "dcda"), true)
console.log(checkInclusion("hello", "ooolleoooleh"), false)
console.log(checkInclusion("mart", "karma"), false)
console.log(checkInclusion("abc", "ccccbbbbaaaa"), false)





// Minimum Window Substring
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(outer_string, substring) {
  if (outer_string.length < substring.length) {  // when substring in longer than searched string
    return ''
  }

  const substringCount = new Map();  // substring Map()
  const window = new Map();  // window as Map()
  let counter = 0;  // counts how many keys (letters) in 'window' have exactly match in searched string
  let left = 0;  // left pointer
  let minWindow = outer_string + 'Τ';  // holds solution string

  for (letter of substring) {  // substring Map()
    substringCount.set(letter, (substringCount.get(letter) ?? 0) + 1);
  }

  for (let right in outer_string) {  // right pointer
    let letter = outer_string[right];

    if (substringCount.has(letter)) {  // if letter is significant
      window.set(letter, (window.get(letter) ?? 0) + 1);  // add letter to the window

      if (window.get(letter) == substringCount.get(letter)) {  // if letter occurences match
        counter++;
      }

    }
    while (counter == substringCount.size) {  // if all letter occurences are matching
      if ((right - left + 1) < minWindow.length) {  // if shorter window found
        minWindow = outer_string.slice(left, right + 1);  // update minWindow
        if (minWindow.length == substring.length) {  // if the length of minWindow is as short as it can be => equal to the length of the substring
          return minWindow  // fast exit
        }
      }
      let leftLetter = outer_string[left];  // letter at left poionter

      if (substringCount.has(leftLetter)) {  // if letter is significant
        if (window.get(leftLetter) == substringCount.get(leftLetter)) {  // if left_letter occurences match
          counter--;  // lower the counter
        }
        window.set(leftLetter, window.get(leftLetter) - 1);  // lower significant letter occurence
      }
      left++;  // update the left counter
    }
  }
  if (minWindow != outer_string + 'Τ') {
    return minWindow;
  } else {
    return ''
  }
}
console.log(minWindow("ADOBECODEBANC", "ABC"), "BANC")
console.log(minWindow("a", "a"), "a")
console.log(minWindow("a", "aa"), "")
console.log(minWindow("a", "b"), "")
console.log(minWindow("ab", "b"), "b")
console.log(minWindow("bba", "ab"), "ba")
console.log(minWindow("abc", "a"), "a")





// Sliding Window Maximum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, windowSize) {
  const window = [];  // slidiong window as a list
  let left = 0;  // left pointer
  const currentMax = [];  // array with max value from each sliding window

  for (let right in nums) {  // right pointer
    let num = nums[right];  // current num

    while (window[0] < left) {  // remove left out of bounds indexes
      window.shift();
    }

    while (nums[window[window.length - 1]] <= num) {  // remove right indexes with nums less than current num
      window.pop();
    }

    if (num > num[window[0]]) {  // if num is greater than the left most num append it left
      window.splice(0, 0, right); // append it left
    } else {
      window.push(right);  // append it right
    }

    if (right - left + 1 == windowSize) {  // if the window is the right size
      currentMax.push(nums[window[0]]);  // get the left (max) value
      left++;  // update left pointer
    }
  }
  return currentMax
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7])
console.log(maxSlidingWindow([1], 1), [1])
console.log(maxSlidingWindow([7, 2, 4], 2), [7, 4])
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3), [3, 3, 2, 5])





// Subsets
// https://leetcode.com/problems/subsets/
console.log(subsets([1, 2, 3]), [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
console.log(subsets([0]), [[], [0]])


/**
 * @param {number[]} nums
 * @return {number[][]}
 * "dfs" method inside "subsets" method
 */
var subsets = function (nums) {
  const subset = [];  // current subcet
  const subsetList = [];  // solution

  // let dfs = (level) => {
  function dfs(level) {
    if (level == nums.length) {  // target level reached
      subsetList.push(subset.slice())  // push subset to subset_list
      return
    }

    subset.push(nums[level]);  // Include the current element in the subset
    dfs(level + 1);  // Explore the path with the current element
    subset.pop();  // Backtrack by removing the current element from the subset
    dfs(level + 1);  // Explore the path without including the current element
  }

  dfs(0);  // start dfs with level = 0

  return subsetList
}


// "dfs" inside "subset" inside a class
class Solution {
  constructor() {
    this.subset = [];
    this.subsetList = [];
  }

  subsets(nums) {
    const dfs = (level) => {
      if (level === nums.length) {
        this.subsetList.push(this.subset.slice())
        return
      }

      dfs(level + 1)
      this.subset.push(nums[level])

      dfs(level + 1)
      this.subset.pop()
    }

    dfs(0)
    return this.subsetList
  }
}


// "dfs" and "subset" methods inside a class
class Solution {
  constructor() {
    this.subset = [];
    this.subsetList = [];
  }

  // dfs = (level) => {
  dfs(level) {
    if (level == this.nums.length) {
      this.subsetList.push(this.subset.slice())
      return
    }

    this.subset.push(this.nums[level]);
    this.dfs(level + 1);
    this.subset.pop();
    this.dfs(level + 1);
  }

  // subsets = (nums) => {
  subsets(nums) {
    this.nums = nums;
    this.dfs(0);

    return this.subsetList
  }

}





// Subsets II
// https://leetcode.com/problems/subsets-ii/
console.log(subsetsWithDup([1, 2, 2]), [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]])
console.log(subsetsWithDup([0]), [[], [0]])
console.log(subsetsWithDup([4, 4, 4, 1, 4]), [[], [1], [1, 4], [1, 4, 4], [1, 4, 4, 4], [1, 4, 4, 4, 4], [4], [4, 4], [4, 4, 4], [4, 4, 4, 4]])


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort();
  const subset = [];  // current subcet
  const subsetList = [];  // solution

  function dfs(index) {
    if (index == nums.length) {  // target level reached
      subsetList.push(subset.slice());  // push subset to subsetList
      return
    }

    subset.push(nums[index]);  // Include the current element in the subset
    dfs(index + 1);  // Explore the path with the current element
    subset.pop();  // Backtrack by removing the current element from the subset

    // If num at the current index (that was poped previously) is the same as
    // the num at next index skip it.
    while (index + 1 < nums.length &&
      nums[index + 1] == nums[index]) {
      index++;
    }

    dfs(index + 1);  // Explore the path without including the current element
  }

  dfs(0);  // start dfs with level = 0

  return subsetList
}





// Combination Sum
// https://leetcode.com/problems/combination-sum/
console.log(combinationSum([2, 3, 6, 7], 7), [[2, 2, 3], [7]])
console.log(combinationSum([2, 3, 5], 8), [[2, 2, 2, 2], [2, 3, 3], [3, 5]])
console.log(combinationSum([2], 1), [])


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const combination = [];
  const combinationList = [];

  const dfs = (index) => {
    const combinationSumValue = combination.reduce((a, b) => a + b, 0);

    if (combinationSumValue === target) {  // target sum reached
      combinationList.push(combination.slice());  // push combination to combination list
      return
    } else if (
      combinationSumValue > target || // if value is too large or
      index === candidates.length  // index out of bounds
    ) {
      return
    }

    combination.push(candidates[index]);  // Include the current element in the combinatioin
    dfs(index);  // Explore the path with the current element
    combination.pop();  // Backtrack by removing the current element from the subset 
    dfs(index + 1);  // Explore the path without including the current element
  }

  dfs(0)

  return combinationList
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // sort candidates to ensure that candidate with index + 1 is greater than previous to not reapat solution
  candidates.sort();
  const combination = [];  // current combination
  const combinationList = [];  // solution

  function dfs(value, startIndex) {
    if (value == target) {  // target sum reached
      combinationList.push(combination.slice());  // push subset to subset_list
      return
    } else if (value > target) {  // if value is too large
      return
    }

    // check only equal or higher candidates
    for (let index = startIndex; index < candidates.length; index++) {
      let candidate = candidates[index];
      combination.push(candidate);
      dfs(value + candidate, index);
      combination.pop();
    }
  }

  dfs(0, 0);

  return combinationList
}





// Combination Sum II
// https://leetcode.com/problems/combination-sum-ii/
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8), [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]])
console.log(combinationSum2([2, 5, 2, 1, 2], 5), [[1, 2, 2], [5]])
console.log(combinationSum2([6], 6), [[6]])


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort()
  const combination = [];
  const combinationList = [];

  const dfs = (index) => {
    const combinatioinSumValue = combination.reduce((a, b) => a + b, 0);

    if (combinatioinSumValue === target) {
      combinationList.push(combination.slice());
      return
    } else if (
      combinatioinSumValue > target ||
      index === candidates.length
    ) {
      return
    }

    combination.push(candidates[index]);
    dfs(index + 1)

    while (
      index + 1 < candidates.length &&
      candidates[index] === candidates[index + 1]
    ) {
      index++;
    }

    combination.pop();
    dfs(index + 1)
  }

  dfs(0)

  return combinationList
}


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort();
  const combination = [];
  const combinationList = [];


  function dfs(index, value) {
    if (value == target) {
      combinationList.push(combination.slice());
      return
    } else if (
      index == candidates.length || 
      value > target
    ) {
      return
    }

    combination.push(candidates[index]);
    dfs(index + 1, value + candidates[index]);
    combination.pop();

    while (
      index + 1 < candidates.length && 
      candidates[index + 1] == candidates[index]
    )
      index++

    dfs(index + 1, value);
  }

  dfs(0, 0);

  return combinationList
}






//Permutations
//https://leetcode.com/problems/permutations/
console.log(permute([1, 2, 3]), [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])
console.log(permute([0, 1]), [[0, 1], [1, 0]])
console.log(permute([1]), [[1]])


/**
 * O(n!), O(n)
 * backtracking
 * @param {number[]} numbers
 * @return {number[][]}
 */
var permute = function (numbers) {
  const permutationList = [];

  const dfs = (left) => {
    if (left === numbers.length) {
      permutationList.push(numbers.slice());
      return
    }

    for (let right = left; right < numbers.length; right++) {
      [numbers[left], numbers[right]] = [numbers[right], numbers[left]];
      dfs(left + 1);
      [numbers[left], numbers[right]] = [numbers[right], numbers[left]];
    }
  }

  dfs(0);
  return permutationList
}


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const permutationList = [];

  const dfs = (permutation, nums) => {
    if (nums.length === 0) {
      permutationList.push(permutation.slice());
      return 
    }

    for (let index = 0; index < nums.length; index++) {
      dfs(
        [...permutation, nums[index]], 
        [...nums.slice(0, index), ...nums.slice(index + 1,)]
        // nums.slice(0, index).concat(nums.slice(index + 1,))
      )
    }
  }

  dfs([], nums)

  return permutationList
}





// Word Search
// https://leetcode.com/problems/word-search/
console.log(exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], "AAB"), true)
console.log(exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], "AACA"), true)
console.log(exist([["A", "A"]], "AAA"), false)
console.log(exist([["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]], "ABCEFSADEESE"), true)
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "AB"), true)
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "AZ"), false)
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABFS"), true)
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"), true)
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"), true)
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"), false)


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  tabu = new Set();  // set of visited (forbidden) cells

  const dfs = (row, col, index) => {
    if (index === word.length) {
      return true
    }
    
    tabu.add(`${row},${col}`);  // add cell pair to tabu set

    // check up, down, left, right for neighbouns
    if (
      col + 1 < cols &&  // check if out of bounds and
      !tabu.has(`${row},${col + 1}`) &&  // if cell is not in tabo set
      word[index] === board[row][col + 1] &&  // Check if the current position matches the word's character
      dfs(row, col + 1, index + 1)  // Switch to that letter and check its neighbors
    ) {
      return true
    }
    if (
      row + 1 < rows &&
      !tabu.has(`${row + 1},${col}`) &&
      word[index] === board[row + 1][col] &&
      dfs(row + 1, col, index + 1)
    ) {
      return true
    }
    if (
      col - 1 >= 0 &&
      !tabu.has(`${row},${col - 1}`) &&
      word[index] === board[row][col - 1] &&
      dfs(row, col - 1, index + 1)
    ) {
      return true
    }
    if (
      row - 1 >= 0 &&
      !tabu.has(`${row - 1},${col}`) &&
      word[index] === board[row - 1][col] &&
      dfs(row - 1, col, index + 1)
    ) {
      return true
    }

    // Backtrack: remove from tabu
    tabu.delete(`${row},${col}`);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (word[0] === board[row][col]) {  // if first letter matches
        if (dfs(row, col, 1)) {  // check its heighbors
          return true
        }
      }
    }
  }
  return false  // if word was not found return False
}





// Palindrome Partitioning
// https://leetcode.com/problems/palindrome-partitioning/
console.log(partition("aa"), [['a', 'a'], ['aa']])
console.log(partition("a"), [["a"]])
console.log(partition("ab"), [["a", "b"]])
console.log(partition("aaa"), [['a', 'a', 'a'], ['a', 'aa'], ['aa', 'a'], ['aaa']])
console.log(partition("aab"), [["a", "a", "b"], ["aa", "b"]])
console.log(partition("aba"), [["a", "b", "a"], ["aba"]])



/**
 * passing "word" in dfs(), "palindrome" as a side effect
 * @param {string} word
 * @return {string[][]}
 */
var partition = function (word) {
  const currenPartition = [];  // This will track the current partition
  const partitionList = [];  // This will store all valid palindrome partitions

  function isPalindrome(word) {
    let l = 0;
    let r = word.length - 1

    while (l < r) {
      if (word[l] !== word[r]) return false

      l++;
      r--;
    }
    return true
  }

  function dfs(word) {
    if (word.length === 0) {  // if word is empty that means all letters folded into palindrom
      partitionList.push(currenPartition.slice())
    }

    for (let index = 0; index < word.length; index++) {  // index starts from '1' because the first element is word[:index]
      let substring = word.slice(0, index + 1);

      if (isPalindrome(substring)) {  // if substring is a palindrme
        currenPartition.push(substring);  // Add it to the current partition
        dfs(word.slice(index + 1,));  // Explore the path with the current palindrome and look for the palindrome in the next part of the "word"
        currenPartition.pop();  // Backtrack by removing the last added palindrome
      }
    }
  }
  dfs(word)  // Start DFS with "word"

  return partitionList
}


/**
 * passing current partition and "word" in dfs()
 * @param {string} word
 * @return {string[][]}
 */
var partition = (word) => {
  const palindrmeList = []

  const isPalindrome = (substring) => {
    return substring === substring.split('').reverse().join('')
  }

  const dfs = (palindrome, word) => {
    if (word.length === 0) {
      palindrmeList.push(palindrome.slice())
      return
    }

    for (let index = 0; index < word.length; index++) {
      const substring = word.slice(0, index + 1)

      if (isPalindrome(substring)) {
        dfs([...palindrome, substring], word.slice(index + 1,))
      }
    }
  }

  dfs([], word)

  return palindrmeList
}





// Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
console.log(letterCombinations("2"), ["a", "b", "c"])
console.log(letterCombinations("23"), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
console.log(letterCombinations(""), [])


/**
 * passing index to dfs, combination as a shared variable (side effect)
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []

  const combination = [];
  const combinationList = [];
  const digitToLetter = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  function dfs(index) {
    if (index === digits.length) {
      combinationList.push(combination.join(''));
      return
    }

    for (let digit of digitToLetter[digits[index]]) {
      combination.push(digit)
      dfs(index + 1)
      combination.pop()
    }
  }

  dfs(0)

  return combinationList
}


/**
 * passing index and combination to dfs
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if (digits.length === 0) return []

  const combinationList = [];
  const digitToLetter = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }

  const dfs = (index, combination) => {
    if (index === digits.length) {
      combinationList.push(combination);
      return
    }

    for (const letter of digitToLetter[digits[index]]) {
      dfs(index + 1, combination + letter)
    }
  }

  dfs(0, "")

  return combinationList
}





// N-Queens
// https://leetcode.com/problems/n-queens/
console.log(solveNQueens(4), [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]])
console.log(solveNQueens(1), [["Q"]])


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const boardList = [];
  const tabuCol = new Set();
  const tabuDiag = new Set();  // for each diagonal (col_ind - row_ind) = const
  const tabuAdiag = new Set();  // for each aiti-diagonal (con_ind + row_ind) = const
  const board = Array.from({ length: n }, () => Array(n).fill('.'));  // n * n board filled with '.'


  function dfs(row) {
    if (row === n) {  // if all rows are filled with Queens
      // boardList.push(board.map(row => row.slice()));
      joinedBoard = board.map(row => row.join(''))  // ['.', 'Q', '.', '.'] => ['.Q..']
      boardList.push(joinedBoard);
      return
    }

    for (let col = 0; col < n; col++) {
      // if there is another Queen in the same diagonal or the same col
      if (tabuCol.has(col) ||
        tabuDiag.has(row - col) ||
        tabuAdiag.has(row + col)) {
        continue
      }

      // update tabu and board
      board[row][col] = 'Q';
      tabuCol.add(col);
      tabuDiag.add(row - col)
      tabuAdiag.add(row + col)

      // check another row
      dfs(row + 1)

      // backtrack
      board[row][col] = '.'
      tabuCol.delete(col)
      tabuDiag.delete(row - col);
      tabuAdiag.delete(row + col);
    }
  }

  dfs(0)

  return boardList
}





// Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/description/
console.log(generateParenthesis(1), ["()"])
console.log(generateParenthesis(2), ["(())", "()()"])
console.log(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"])


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (num) {
  const parenthesis = [];  // current parenthesis sequence
  const parenthesisList = [];  // list of parenthesis sequences

  function dfs(open, close) {
    if (open + close === 2 * num) {  // if all opening and closing parenthesis are used
      parenthesisList.push(parenthesis.join(''));  // push current sequence
      return
    }

    if (open < num) {  // not all "(" have been used
      parenthesis.push('(');
      dfs(open + 1, close);  // check this branch
      parenthesis.pop();  // backtrack
    }

    if (close < open) {  // the number of ")" must not be greater than "("
      parenthesis.push(')');
      dfs(open, close + 1);  // check this branch
      parenthesis.pop();  // backtrack
    }
  }

  dfs(0, 0)  // start with no parenthesis
  return parenthesisList
}





// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
console.log(climbStairs(0), 0)
console.log(climbStairs(1), 1)
console.log(climbStairs(2), 2)
console.log(climbStairs(3), 3)
console.log(climbStairs(4), 5)
console.log(climbStairs(5), 8)


/**
 * Fibonnacci problem
 * dp, bottom-up with no auxiliary memory space
 * O(n), O(1)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 4) return n

  let a = 0;
  let b = 1;

  for (index = 0; index < n; index++) {
    b = a + b;
    a = b - a;
    // [a, b] = [b, a + b]
  }
  return b
}


/**
 * Fibonnacci problem
 * dp, bottom-up
 * O(n), O(n)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 4) return n

  const dp = new Array(n + 2).fill(0);
  dp[1] = 1;

  for (index = 2; index < n + 2; index++) {
    dp[index] = dp[index - 1] + dp[index - 2];
  }

  return dp.slice(-1)[0]
}


/**
 * Fibonnacci problem
 * dp, top-down with memoization
 * O(n), O(n)
 * @param {number} n
 * @return {number}
 */

const memo = new Map();

var climbStairs = function (n) {
  if (n < 4) return n

  if (memo.has(n)) {
    return memo.get(n)
  } else {
    memo.set(n, (climbStairs(n - 1) + climbStairs(n - 2)));
    return memo.get(n);
  }
}


/**
 * Fibonnacci problem
 * dp, top-down with memoization as a class variable
 * O(n), O(n)
 * @param {number} n
 * @return {number}
 */

class Solution {
  constructor() {
    this.memo = new Map();
  }

  //climbStairs = function (n) {
  climbStairs(n) {
    if (n < 4) return n

    if (this.memo.has(n)) {
      return this.memo.get(n)
    } else {
      this.memo.set(n, (this.climbStairs(n - 1) + this.climbStairs(n - 2)));
      return this.memo.get(n);
    }
  }
}

console.log(new Solution().climbStairs(0), 0)
console.log(new Solution().climbStairs(1), 1)
console.log(new Solution().climbStairs(2), 2)
console.log(new Solution().climbStairs(3), 3)
console.log(new Solution().climbStairs(4), 5)
console.log(new Solution().climbStairs(5), 8)


/**
 * Fibonnacci problem
 * dfs, unefficient
 * O(2^n), O(n)
 * counter as shared variable (list)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const counter = [];

  function dfs(index) {
    if (index > n) return

    if (index === n) {
      counter.push(1)
      return
    }

    dfs(index + 1);
    dfs(index + 2);
  }

  dfs(0)

  return counter.length
}


/**
 * Fibonnacci problem
 * dfs, unefficient
 * O(2^n), O(n)
 * 'counter' as a return statement from dfs
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  function dfs(index) {
    if (index > n) return 0

    if (index === n) return 1

    return dfs(index + 1) + dfs(index + 2);
  }

  return dfs(0)
}





// Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/
console.log(minCostClimbingStairs([10, 15, 20]), 15)
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6)


/**
 * dp, bottom-up
 * O(n), O(n)
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  for (let index = 2; index < cost.length; index++) {
    cost[index] = Math.min(cost[index - 1], cost[index - 2]) + cost[index];
  }
  return Math.min.apply(null, cost.slice(-2))
}


/**
 * dp, bottom-up
 * O(n), O(1)
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let a = cost[0];
  let b = cost[1];

  for (let index = 2; index < cost.length; index++) {
    let temp = Math.min(a, b) + cost[index];
    a = b;
    b = temp;
  }

  return Math.min(a, b)
}





// Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
console.log(maxSubArray([1]), 1)
console.log(maxSubArray([5, 4, -1, 7, 8]), 23)
console.log(maxSubArray([-4, -2, -1, -3]), -1)


/**
 * dp, bottom-up, dp list => 2 variables: cumulative, maxSum
 * O(n), O(1)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let cumulative = nums[0];
  let maxSum = nums[0];

  for (index = 1; index < nums.length; index++) {
    cumulative = Math.max(cumulative, 0) + nums[index];
    maxSum = Math.max(maxSum, cumulative);
  }

  return maxSum
}


/**
 * dp, bottom-up, use nums as dp
 * O(n), O(n)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  for (index = 1; index < nums.length; index++) {
    nums[index] += Math.max(nums[index - 1], 0);
  }

  return Math.max.apply(null, nums)
}


/**
 * dp, bottom-up
 * O(n), O(n)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = new Array(nums.length)
  dp[0] = nums[0];

  for (index = 1; index < nums.length; index++) {
    dp[index] = Math.max(dp[index - 1], 0) + nums[index];
  }

  return Math.max.apply(null, dp)
}





// House Robber
// https://leetcode.com/problems/house-robber/
console.log(rob([2, 100, 9, 3, 100]), 200)
console.log(rob([100, 9, 3, 100, 2]), 200)
console.log(rob([1, 2, 3, 1]), 4)
console.log(rob([2, 7, 9, 3, 1]), 12)
console.log(rob([0]), 0)
console.log(rob([2, 1]), 2)


/**
 * dp, bottom-up
 * O(n), O(1), cache only two last elements
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  house1 = nums[0];
  house2 = Math.max(nums[0], nums[1]);

  for (index = 2; index < nums.length; index++) {
    let temp = house2;
    house2 = Math.max(nums[index] + house1, house2);
    house1 = temp;
  }
  return house2
}


/**
 * dp, bottom-up
 * O(n), O(n), cache every robbery
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (index = 2; index < nums.length; index++) {
    dp[index] = Math.max(nums[index] + dp[index - 2], dp[index - 1])
  }
  return dp[nums.length - 1]
}


/**
 * dp, top-down, with memoization
 * memo as an argument (map) to the rob function
 * O(n), O(n)
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums, index = 1, memo = new Map()) {
  if (nums.length === 1) {  // if one element in nums
    return nums[0];
  }

  if (nums.length - index == 0) {  // if index is 0
    return nums[0]
  }

  if (nums.length - index == 1) {  // if index is 1
    return Math.max(nums[0], nums[1]);
  }

  if (!memo.has(index + 1)) {  // if "index + 1" is not in the memo
    memo.set(index + 1, rob(nums, index + 1, memo))  // calculate it
  }
  let prev = memo.get(index + 1);  // take it

  if (!memo.has(index + 2)) {
    memo.set(index + 2, rob(nums, index + 2, memo))
  }
  let prevPrev = memo.get(index + 2);

  return Math.max(nums[nums.length - index] + prevPrev, prev)
}


/**
 * class
 * dp, top-down, with memoization
 * O(n), O(n)
 * @param {number[]} nums
 * @return {number}
 */

class Solution {
  constructor() {
    this.memo = new Map();  // memoization cache
  }


  rob = function (nums, index = 1, memo = new Map()) {
    if (nums.length === 1) {  // if one element in nums
      return nums[0];
    }

    if (nums.length - index == 0) {  // if index is 0
      return nums[0]
    }

    if (nums.length - index == 1) {  // if index is 1
      return Math.max(nums[0], nums[1]);
    }

    if (!this.memo.has(index + 1)) {  // if "index + 1" is not in the this.memo
      this.memo.set(index + 1, this.rob(nums, index + 1))  // calculate it
    }
    let prev = this.memo.get(index + 1);  // take it

    if (!this.memo.has(index + 2)) {
      this.memo.set(index + 2, this.rob(nums, index + 2))
    }
    let prevPrev = this.memo.get(index + 2);

    return Math.max(nums[nums.length - index] + prevPrev, prev)
  }
}

console.log(new Solution().rob([2, 100, 9, 3, 100]), 200)


/**
 * dp, top-down, with memoization
 * memo inside 'rob' function used as a shared variable (map) between rob_inner 
 * O(n), O(n)
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums, index = 1) {
  const memo = new Map()

  var rob_inner = function (nums, index) {
    if (nums.length === 1) {  // if one element in nums
      return nums[0];
    }

    if (nums.length - index == 0) {  // if index is 0
      return nums[0]
    }

    if (nums.length - index == 1) {  // if index is 1
      return Math.max(nums[0], nums[1]);
    }

    if (!memo.has(index + 1)) {  // if "index + 1" is not in the memo
      memo.set(index + 1, rob_inner(nums, index + 1))  // calculate it
    }
    let prev = memo.get(index + 1);  // take it

    if (!memo.has(index + 2)) {
      memo.set(index + 2, rob_inner(nums, index + 2))
    }
    let prevPrev = memo.get(index + 2);

    return Math.max(nums[nums.length - index] + prevPrev, prev)
  }
  return rob_inner(nums, 1)
}





// House Robber II
// https://leetcode.com/problems/house-robber-ii/
console.log(rob([2, 3, 2]), 3)
console.log(rob([1, 2, 3, 1]), 4)
console.log(rob([1, 2, 3]), 3)
console.log(rob([1]), 1)
console.log(rob([0, 0]), 0)
console.log(rob([1, 3, 1, 3, 100]), 103)


/**
 * O(n), 0(1)
 * function in function
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 3) {
    return Math.max.apply(null, nums)
  }

  function rob_straight(nums) {
    let house1 = nums[0];
    let house2 = Math.max(nums[0], nums[1]);

    for (let num of nums.slice(2,)) {
      let temp = house2;
      house2 = Math.max(num + house1, house2);
      house1 = temp;
    }
    return house2
  }
  return Math.max(
    rob_straight(nums.slice(0, nums.length - 1)),
    rob_straight(nums.slice(1,)))
}


/**
 * O(n), 0(1)
 * both functions directly under class
 * @param {number[]} nums
 * @return {number}
 */
class Solution {
  rob = function (nums) {
    if (nums.length < 3) {
      return Math.max.apply(null, nums)
    }
    return Math.max(
      this.rob_straight(nums.slice(0, nums.length - 1)),
      this.rob_straight(nums.slice(1,)))
  }

  rob_straight(nums) {
    let house1 = nums[0];
    let house2 = Math.max(nums[0], nums[1]);

    for (let num of nums.slice(2,)) {
      let temp = house2;
      house2 = Math.max(num + house1, house2);
      house1 = temp;
    }

    return house2
  }
}
console.log(new Solution().rob([2, 3, 2]), 3)
console.log(new Solution().rob([1, 2, 3, 1]), 4)
console.log(new Solution().rob([1, 2, 3]), 3)
console.log(new Solution().rob([1]), 1)
console.log(new Solution().rob([0, 0]), 0)
console.log(new Solution().rob([1, 3, 1, 3, 100]), 103)





// Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
console.log(longestPalindrome("babad"), "bab")
console.log(longestPalindrome("a"), "a")
console.log(longestPalindrome("cbbd"), "bb")
console.log(longestPalindrome(""), "")
console.log(longestPalindrome("bb"), "bb")
console.log(longestPalindrome("ab"), "a")
console.log(longestPalindrome("aacabdkacaa"), "aca")
console.log(longestPalindrome("abdka"), "a")
console.log(longestPalindrome("aaaa"), "aaaa")


/**
 * @param {string} word
 * @return {string}
 */
var longestPalindrome = function (word) {
  let longestPaliStr = '';

  for (let index = 0; index < word.length; index++) {
    // odd length palindrome
    let edge = 1;

    while (index - edge >= 0 &&  // check if not out of bounds left
      index + edge < word.length &&  // check if not out of bounds right
      word.charAt(index - edge) == word.charAt(index + edge)) {  // if letter match
      edge++;  // 1 -> 3, 2i + 1 increase palindrome length
    }

    if (2 * edge - 1 > longestPaliStr.length) {  // if longer palindrome found
      longestPaliStr = word.slice(index - edge + 1, index + edge)
    }

    // even length palindrome
    edge = 0;

    while (index - edge >= 0 &&  // check if not out of bounds left
      index + 1 + edge < word.length &&  // check if not out of bounds right
      word.charAt(index - edge) == word.charAt(index + 1 + edge)) {  // if letter match
      edge++;  // 2 -> 4, 2i increase palindrome length
    }

    if (2 * edge > longestPaliStr.length) {  // if longer palindrome found
      longestPaliStr = word.slice(index - edge + 1, index + edge + 1)
    }

  }
  return longestPaliStr
}





// Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/
console.log(countSubstrings("abc"), 3)
console.log(countSubstrings("aaa"), 6)


/**
 * @param {string} word
 * @return {number}
 */
var countSubstrings = function (word) {
  let counterSum = 0;

  for (index = 0; index < word.length; index++) {
    // odd length palindrome
    let counter = 1;

    while (index - counter >= 0 &&  // check if not out of bounds left
      index + counter < word.length &&  // check if not out of bounds right
      word[index - counter] == word[index + counter]  // if letter match
    ) {
      counter++;  // update counter_sum
    }
    counterSum += counter;

    // even length palindrome
    counter = 0;

    while (index - counter >= 0 &&
      index + 1 + counter < word.length &&
      word[index - counter] == word[index + 1 + counter]
    ) {
      counter++;
    }
    counterSum += counter;
  }

  return counterSum
}





// Decode Ways
// https://leetcode.com/problems/decode-ways/description/
console.log(numDecodings("12"), 2)
console.log(numDecodings("226"), 3)
console.log(numDecodings("06"), 0)
console.log(numDecodings("0"), 0)
console.log(numDecodings(""), 0)
console.log(numDecodings("2101"), 1)
console.log(numDecodings("111111111111111111111111111111111111111111111"), 1836311903)


/**
 * DP, Bottom-up
 * O(n), O(n)
 * @param {string} code
 * @return {number}
 */
var numDecodings = function (code) {
  const dp = new Map([[code.length, 1]]);  // assume "code" is a prefix and everything after would be foleded into "1" possible path

  for (index = code.length - 1; index >= 0; index--) {  // check every number in reversed order
    if (code[index] !== '0') {  // check if number is not statring with 0
      // one digit number case
      dp.set(index, (dp.get(index) ?? 0) + (dp.get(index + 1) ?? 0));  // continue legit one digit number path

      // two digits number case
      if (index + 1 < code.length &&  // if index in bounds
        Number(code.slice(index, index + 2)) <= 26) {  // if two digit number between <10, 27)
        dp.set(index, (dp.get(index) ?? 0) + (dp.get(index + 2) ?? 0));  // continue legit two digit number path
      }
    }
  }
  return dp.get(0) ?? 0  // get first value from the dictionary or if code is not legit return 0
}


/**
 * DP, Top-down with memoization
 * O(n), O(n)
 * @param {string} code
 * @return {number}
 */
var numDecodings = function (code) {
  const dp = new Map([[code.length, 1]]);  // assume "code" is a prefix and everything after would be foleded into "1" possible path

  function dfs(index) {
    if (dp.has(index)) {  // if memoized
      return dp.get(index)  // Return memoized result if already computed.
    }

    if (code[index] === '0') {  // check if number is not statring with 0
      return 0
    }

    // one digit number case
    dp.set(index, (dp.get(index) ?? 0) + dfs(index + 1));  // continue legit one digit number path

    // two digits number case
    if (index + 1 < code.length &&  // if index in bounds
      Number(code.slice(index, index + 2)) <= 26) {  // if two digit number between <10, 27)
      dp.set(index, (dp.get(index) ?? 0) + dfs(index + 2));  // continue legit two digit number path
    }

    return dp.get(index)  // Return the result for this index.
  }

  return dfs(0)  // Start decoding from the first index.
}





// Coin Change
// https://leetcode.com/problems/coin-change/
console.log(coinChange([2, 5, 10, 1], 27), 4)
console.log(coinChange([1, 2, 5], 11), 3)
console.log(coinChange([2], 3), -1)
console.log(coinChange([1], 0), 0)
console.log(coinChange([186, 419, 83, 408], 6249), 20)


/**
 * dp, bottom-up
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // min number of coins needed to get target amount (equal to the index)
  // "anmount + 1" an imposbile value stays when the last element of min_coins was not modified
  const minCoins = new Array(amount + 1).fill(amount + 1);
  minCoins[0] = 0;    // no coins needed to get 0

  for (let coin of coins) {  // check every coin
    for (let index = coin; index <= amount; index++) {  // check each 'minCoins' index
      // choose current amount of coins or get ammount without current coin and add 1
      minCoins[index] = Math.min(minCoins[index], minCoins[index - coin] + 1);
    }
  }

  if (minCoins[amount] == amount + 1) {  // if the last value was not modified so there is no valid combination
    return -1
  } else {
    return minCoins[amount]  // valid combination
  }
}





// Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/
console.log(maxProduct([-4, -3]), 12)
console.log(maxProduct([2, 3, -2, 4]), 6)
console.log(maxProduct([-2]), -2)
console.log(maxProduct([-4, -3]), 12)
console.log(maxProduct([-2, 0, -1]), 0)
console.log(maxProduct([-2, -3, 7]), 42)
console.log(maxProduct([2, -5, -2, -4, 3]), 24)
console.log(maxProduct([-2]), -2)
console.log(maxProduct([0]), 0)
console.log(maxProduct([-2, 0]), 0)
console.log(maxProduct([0, 2]), 2)


/**
 * dp, bottom-up
 * O(n), O(1)
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  dp_0 = [nums[0], nums[0]];  // O(1) cache
  let maxProductVal = nums[0];  // track max product with default value

  for (index = 1; index < nums.length; index++) {  // check all nums indexes
    // multiply prefix values with current value to get min, max or
    // current value only when prefix is [0, 0]
    const triplet = [
      dp_0[0] * nums[index],
      dp_0[1] * nums[index],
      nums[index]];

    dp_0 = [Math.max.apply(null, triplet), Math.min.apply(null, triplet)];  // append min, max pair
    maxProductVal = Math.max(maxProductVal, Math.max.apply(null, triplet));  // update max product

  }
  return maxProductVal
}


/**
 * dp, bottom-up
 * O(n), O(n)
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const dp = new Array(nums.length);  // min, max pair list for tabulation
  dp[0] = [nums[0], nums[0]];  // insert the first element
  let maxProductVal = nums[0];  // track max product with default value

  for (index = 1; index < nums.length; index++) {  // check all nums indexes
    // multiply prefix values with current value to get min, max or
    // current value only when prefix is [0, 0]
    const triplet = [
      dp[index - 1][0] * nums[index],
      dp[index - 1][1] * nums[index],
      nums[index]];

    dp[index] = [Math.max.apply(null, triplet), Math.min.apply(null, triplet)];  // append min, max pair
    maxProductVal = Math.max(maxProductVal, Math.max.apply(null, triplet));  // update max product

  }
  return maxProductVal
}





// Word Break
// https://leetcode.com/problems/word-break/
console.log(wordBreak("leetcode", ["leet", "code"]), true)
console.log(wordBreak("applepenapple", ["apple", "pen"]), true)
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]), false)
console.log(wordBreak("cars", ["car", "ca", "rs"]), true)


/**
 * dp, bottom-up
 * O(n2), O(n)
 * @param {string} sencence
 * @param {string[]} wordList
 * @return {boolean}
 */
var wordBreak = function (sentence, wordList) {
  // cache where each elemet tells if sentece can be fold from this index to the right
  const canFold = new Array(sentence.length + 1).fill(false);
  canFold[canFold.length - 1] = true;// dummy element tells that everything after "sentence can be folded"

  for (index = sentence.length; index >= 0; index--) {  // go through every index reversed
    for (word of wordList) {  // go through every word
      if (sentence.slice(index, index + word.length) === word) {  // if found the word
        canFold[index] = canFold[index] || canFold[index + word.length];  // update can fold
      }
    }
  }
  return canFold[0]
}





// Longest Increasing Subsequence
// https://leetcode.com/problems/longest-increasing-subsequence/
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4)
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4)
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]), 1)


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);  // LIS lengths

  for (right = 0; right < nums.length; right++) {  // check every right (index)
    for (left = 0; left < right; left++) {  // check every left (index) lower than right
      if (nums[left] < nums[right]) {  // if right num is greater
        dp[right] = Math.max(dp[right], dp[left] + 1);  // update LIS lengths 
      }
    }
  }
  return Math.max.apply(null, dp)
}





// Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum
console.log(canPartition([14, 9, 8, 4, 3, 2]), true)
console.log(canPartition([1, 2, 5]), false)
console.log(canPartition([1, 5, 11, 5]), true)
console.log(canPartition([3, 3, 3, 4, 5]), true)
console.log(canPartition([1, 2, 3, 5]), false)
console.log(canPartition([1]), false)
console.log(canPartition([2, 2, 1, 1]), true)


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  if (nums.reduce((a, b) => a + b) % 2) return false  // if odd sum (cannot be split in half)

  let half = nums.reduce((a, b) => a + b) >> 1;  // half of the sum
  const seen_numbers = new Set();  // numbers seen in previous loop

  for (let num of nums) {  // for every number
    let new_numbers = new Set(seen_numbers);  // copy of seen numbers

    for (let new_number of new_numbers) {
      seen_numbers.add(new_number + num);  // add new numbers in current loop
    }

    seen_numbers.add(num);  // add current num

    if (seen_numbers.has(half)) {  // check if half is in seen numbers
      return true
    }
  }

  return false
}





// Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/description/

// function TreeNode(val, left, right) {
//   this.val = val ?? 0
//   this.left = left ?? null
//   this.right = right ?? null
// }

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}

tree_from_list = buildTreeFromList([4, 2, 7, 1, 3, 6, 9])
`
TreeNode {
  val: 4,
  left: TreeNode {
    val: 2,
    left: TreeNode { val: 1, left: null, right: null },
    right: TreeNode { val: 3, left: null, right: null }
  },
  right: TreeNode {
    val: 7,
    left: TreeNode { val: 6, left: null, right: null },
    right: TreeNode { val: 9, left: null, right: null }
  }
}
`

// Function create a list from a binary tree in level-order (breadth-first traversal)
function levelOrderTraversal(root) {
  if (!root && root.length === 0) {
    return null
  }

  const nodeList = [];
  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let node = queue.shift();
    nodeList.push(node.val);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return nodeList
}

// console.log(levelOrderTraversal(tree_from_list))
// [4, 2, 7, 1, 3, 6, 9]



console.log(
  levelOrderTraversal(
    invertTree(
      buildTreeFromList(
        [4, 2, 7, 1, 3, 6, 9]))), [4, 7, 2, 9, 6, 3, 1])

console.log(invertTree([4, 2, 7, 1, 3, 6, 9]), [4, 7, 2, 9, 6, 3, 1])
console.log(invertTree([2, 1, 3]), [2, 3, 1])
console.log(invertTree([]), [])

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root) {
    [root.left, root.right] = [root.right, root.left];

    invertTree(root.left);
    invertTree(root.right);
  }
  return root
}


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root || root.length === 0) {
    return root
  }

  [root.left, root.right] = [root.right, root.left]
  invertTree(root.left)
  invertTree(root.right)

  return root
}





// Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
console.log(maxDepth(buildTreeFromList([3, 9, 20, null, null, 15, 7])), 3)
console.log(maxDepth(buildTreeFromList(([1, null, 2]))), 2)


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


tree_from_list = buildTreeFromList([4, 2, 7, 1, 3, 6, 9])


/**
 * dp, dfs, recursion
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }

  return (Math.max(
    maxDepth(root.left),
    maxDepth(root.right))
    + 1)
}


/**
 * dp, bfs, iteration, dequeue, level order traversal
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }

  const queue = [];
  queue[0] = root;
  let depth = 0;

  while (queue.length !== 0) {
    depth++;
    const currenQueueLength = queue.length;

    for (let index = 0; index < currenQueueLength; index++) {
      let node = queue.shift();
      
      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  return depth
}


/**
 * dp, dfs, iteration, stack, pre-order dfs
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }

  const stack = [];
  stack.push([root, 1])
  maxDepthValue = 1

  while (stack.length !== 0) {
    let [node, depth] = stack.pop();

    if (node.left) {
      stack.push([node.left, depth + 1]);
      maxDepthValue = Math.max(maxDepthValue, depth + 1);
    }

    if (node.right) {
      stack.push([node.right, depth + 1]);
      maxDepthValue = Math.max(maxDepthValue, depth + 1);
    }
  }

  return maxDepthValue
}





// Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/description/
console.log(diameterOfBinaryTree(buildTreeFromList([1, 2, 3, 4, 5])), 3)


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


/**
 * dp, dfs, recursion
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let longestDiameter = 0;

  function dfs(node) {
    if (!node) {
      return 0
    }

    let left = dfs(node.left);  // left branch depth
    let right = dfs(node.right);  // right branch depth

    longestDiameter = Math.max(longestDiameter, left + right);  // left + rigth = path between two nodes

    return Math.max(left, right) + 1  // current node max depth
  }

  dfs(root)

  return longestDiameter
}





// Balanced Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/description/
console.log(isBalanced(buildTreeFromList([3, 9, 20, null, null, 15, 7])), true)
console.log(isBalanced(buildTreeFromList([1, 2, 2, 3, 3, null, null, 4, 4])), false)


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let isBalancedBool = true  // default valuef for balanced tree

  function dfs(node) {
    if (!node) {
      return 0
    }

    let left = dfs(node.left);  // left branch depth
    let right = dfs(node.right);  // right branch depth

    if (Math.abs(left - right) > 1) {  // if deep of the two subtrees differs more than by 1
      isBalancedBool = false;  // then tree in not balanced
      return -1  // early return
    }

    return Math.max(left, right) + 1  // the depth of the current node
  }

  dfs(root)  // run dfs

  return isBalancedBool
}





// Same Tree
// https://leetcode.com/problems/same-tree/description/
console.log(isSameTree(buildTreeFromList([1, 2, 3]), buildTreeFromList([1, 2, 3])), true)
console.log(isSameTree(buildTreeFromList([1, 2]), buildTreeFromList([1, null, 2])), false)
console.log(isSameTree(buildTreeFromList([1, 2, 1]), buildTreeFromList([1, 1, 2])), false)
console.log(isSameTree(buildTreeFromList([10, 5, 15]), buildTreeFromList([10, 5, null, null, 15])), false)
console.log(isSameTree(buildTreeFromList([1, null, 2, 3]), buildTreeFromList([1, null, 2, null, 3])), false)


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


/**
 * dp, dfs, recursive
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) {  // if both nodes are null
    return true
  }

  if (
    p && q &&  // if both nodes exist
    p.val == q.val  // and have equal values
  ) {
    return (
      isSameTree(p.left, q.left) &&  // left subtree is the same
      isSameTree(p.right, q.right)  // right subtree is the same
    )
  } else {
    return false
  }
}


/**
 * dp, bfs, iteration, queue
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) {  // p and q are empty
    return true
  }

  if (!p || !q) {  // p or q is empyt
    return false
  }

  const pQueue = [];  // initiate dequeues
  const qQueue = [];
  pQueue.push(p);
  qQueue.push(q);

  while (pQueue.length || qQueue.length) {  // if both queues not empty
    let queueLength = Math.max(pQueue.length, qQueue.length);
    
    for (let index = 0; index < queueLength; index++) {  // for every node in queue
      pNode = pQueue.shift();  // take a node
      qNode = qQueue.shift();

      if (pNode.val != qNode.val) {  // compare p and q values
        return false
      }

      if (!pNode.left && !qNode.left) {  // if p and q are None
        // pass
      } else if (
        pNode.left && qNode.left &&  // if p and q exist
        pNode.left.val === qNode.left.val) {  // if p and q left value is the same
          pQueue.push(pNode.left);  // append p left value to queue
          qQueue.push(qNode.left);  // append q left value to queue
      } else {
        return false
      }

      if (!pNode.right && !qNode.right) {
        // pass
      } else if (
        pNode.right && qNode.right &&
        pNode.right.val === qNode.right.val) {
          pQueue.push(pNode.right);
          qQueue.push(qNode.right);
      } else {
        return false
      }
    }
  }
  return true
}





// Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/description/
console.log(isSameTree(buildTreeFromList([4, 1, 2]),
  (buildTreeFromList([4, 1, 2]))), true)
console.log(isSameTree(buildTreeFromList([3, 4, 5, 1, 2]),
  buildTreeFromList([4, 1, 2])), false)
console.log(isSubtree(buildTreeFromList([3, 4, 5, 1, 2]),
  buildTreeFromList([4, 1, 2])), true)
console.log(isSubtree(buildTreeFromList([3, 4, 5, 1, 2, null, null, null, null, 0]),
  buildTreeFromList([4, 1, 2])), false)


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * dp, dfs, recursive
 * O(n2), O(n)
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!subRoot) {  // if no subRoot then always True
    return true
  }
  if (!root) {  // if no root then no match found
    return false
  }
  if (isSameTree(root, subRoot)) {  // if tres are equal
    return true
  }
  return (
    isSubtree(root.left, subRoot) ||  // check if subtree if in left tree branch
    isSubtree(root.right, subRoot)  // check if subtree if in right tree branch
  )
}


var isSameTree = function (p, q) {
  if (!p && !q) {  // if both nodes are null
    return true
  }

  if (
    pd && q &&  // if both nodes exist
    p.val == q.val  // and have equal values
  ) {
    return (
      isSameTree(p.left, q.left) &&  // left subtree is the same
      isSameTree(p.right, q.right)  // right subtree is the same
    )
  } else {
    return false
  }
}

console.log(isSameTree(buildTreeFromList([4, 1, 2]),
  (buildTreeFromList([4, 1, 2]))), true)
console.log(isSameTree(buildTreeFromList([3, 4, 5, 1, 2]),
  buildTreeFromList([4, 1, 2])), false)
console.log(isSubtree(buildTreeFromList([3, 4, 5, 1, 2]), buildTreeFromList([4, 1, 2])), true)
console.log(isSubtree(buildTreeFromList([3, 4, 5, 1, 2, null, null, null, null, 0]), buildTreeFromList([4, 1, 2])), false)


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * dp, dfs, recursive
 * O(n2), O(n)
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!subRoot) {  // if no subRoot then always True
    return true
  }
  if (!root) {  // if no root then no match found
    return false
  }
  if (isSameTree(root, subRoot)) {  // if tres are equal
    return true
  }
  return (
    isSubtree(root.left, subRoot) ||  // check if subtree if in left tree branch
    isSubtree(root.right, subRoot)  // check if subtree if in right tree branch
  )
}


var isSameTree = function (p, q) {
  if (!p && !q) {  // if both nodes are null
    return true
  }

  if (
    pd && q &&  // if both nodes exist
    p.val == q.val  // and have equal values
  ) {
    return (
      isSameTree(p.left, q.left) &&  // left subtree is the same
      isSameTree(p.right, q.right)  // right subtree is the same
    )
  } else {
    return false
  }
}





// Lowest Common Ancestor of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
console.log((
  lowestCommonAncestor(
    buildTreeFromList([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
    buildTreeFromList(2),
    buildTreeFromList(8))).val,
  6)
console.log((
  lowestCommonAncestor(
    buildTreeFromList([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
    buildTreeFromList(2),
    buildTreeFromList(4))).val,
  2)
console.log((
  lowestCommonAncestor(
    buildTreeFromList([2, 1]),
    buildTreeFromList(2),
    buildTreeFromList(1))).val,
  2)


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


/**
 * dp, dfs, iteration
 * O(logn), O(1)
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (true) {
    if (  // if p and q are lower than the current value
      p.val < root.val &&
      q.val < root.val
    ) {
      root = root.left;  // lower common ancestor node is in the left branch
    } else if (  // if p and q are highter than the current value
      p.val > root.val &&
      q.val > root.val
    ) {
      root = root.right;  // lower common ancestor node is in the right branch
    } else {  // if one is lower and the other one is higher, THIS is the LCA
      return root
    }
  }
}


/**
 * dp, dfs, recursive
 * O(logn), O(h) # O(h) for recursion stack height
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (  // if p and q are lower than the current value
    p.val < root.val &&
    q.val < root.val
  ) {
    return lowestCommonAncestor(root.left, p, q)  // lower common ancestor node is in the left branch
  } else if (  // if p and q are highter than the current value
    p.val > root.val &&
    q.val > root.val
  ) {
    return lowestCommonAncestor(root.right, p, q)  // lower common ancestor node is in the right branch
  } else {
    return root
  }
}





// Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/description/
console.log(levelOrder(buildTreeFromList([3, 9, 20, null, null, 15, 7])), [[3], [9, 20], [15, 7]])
console.log(levelOrder(buildTreeFromList([1])), [[1]])
console.log(levelOrder(buildTreeFromList([])), [])


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


/**
 * dp, bfs, iteration, dequeue, level order traversal
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }

  const queue = [];  // Create the root node
  queue.push(root);
  const levelOrderList = [];  // solution
  levelOrderList.push([root.val]);

  while (queue.length !== 0) {  // while queue is not empty
    const currentLevelList = [];  // constant queue length for current level
    let queueLength = queue.length  // current level soultion

    for (index = 0; index < queueLength; index++) {  // for every node
      let node = queue.shift();  // take that node

      if (node.left) {  // if left Subnode is not empty
        queue.push(node.left);  // append it to queue
        currentLevelList.push(node.left.val)  // append its value to current level solution
      }

      if (node.right) {  // if right Subnode is not empty
        queue.push(node.right);  // append it to queue
        currentLevelList.push(node.right.val)  // append its value to current level solution
      }
    }

    if (currentLevelList.length != 0) {  // if current level list has any elements
      levelOrderList.push(currentLevelList);  // add them to the solution
    }
  }

  return levelOrderList
}





// Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/description/
console.log(rightSideView(buildTreeFromList([1, 2, 3, null, 5, null, 4])), [1, 3, 4])
console.log(rightSideView(buildTreeFromList([1, null, 3])), [1, 3])
console.log(rightSideView(buildTreeFromList([])), [])


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


/**
 * dp, bfs, iteration, dequeue, level order traversal
 * O(n2), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return []
  }

  const queue = [];  // Create the root node
  queue.push(root);
  const rightSideList = [];  // solution
  rightSideList.push(root.val);

  while (queue.length !== 0) {  // while queue is not empty
    const queueLength = queue.length;  // constant queue length for current level

    for(let index = 0; index < queueLength; index++)  // for every node
    {
      let node = queue.shift();  // take that node

      if (node.left) {  // if left subnode is not empty
        queue.push(node.left);  // append it to queue
      }

      if (node.right) {// if right subnode is not empty
        queue.push(node.right);  // append it to queue
      }
    }
    if (queue.length !== 0) {// if queue is not empty
      rightSideList.push(queue[queue.length - 1].val)  // append the most right value
    }
  }
  return rightSideList
}





//  Count Good Nodes in Binary Tree
//  https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/
console.log(goodNodes(buildTreeFromList([3, 1, 4, 3, null, 1, 5])), 4)
console.log(goodNodes(buildTreeFromList([3, 3, null, 4, 2])), 3)
console.log(goodNodes(buildTreeFromList([1])), 1)


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


/**
 * dp, bfs, iteration, queue
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  if (!root) {
    return null
  }
  
  const queue = [];  // Create the root node
  queue.push([root, root.val]);
  let goodNodesCounter = 1;  // solution

  while (queue.length !== 0) {  // while queue is not empty
    let queueLength = queue.length;

    for (let index = 0; index < queueLength;  index++) {  // for every node
      const [node, maxValue] = queue.shift();  // take that node

      if (node.left) {  // if left subnode is not empty
        queue.push([node.left, Math.max(node.left.val, maxValue)]);  // append it to queue
        if (maxValue <= node.left.val) {  // if max value from root to current node is less or equal to current node left value
          goodNodesCounter++;  // increase counter
        }
      }

      if (node.right) {  // if right subnode is not empty
        queue.push([node.right, Math.max(node.right.val, maxValue)]);  // append it to queue
        if (maxValue <= node.right.val) {  // if max value from root to current node is less or equal to current node right value
          goodNodesCounter++;  // increase counter
        }
      }
    }
  }
  return goodNodesCounter
}


/**
 * dp, dfs, iteration, stack, pre-order traversal
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  if (!root) {
    return null
  }

  const stack = [];  // create the stack with root node
  stack.push([root, root.val]);
  let goodNodesCounter = 1;  // solution

  while (stack.length !== 0) {  // while stack is not empty
    const [node, maxValue] = stack.pop();  // take that node

    if (node.left) {  // if left subnode is not empty
      stack.push([node.left, Math.max(node.left.val, maxValue)]);  // append it to stack
      if (maxValue <= node.left.val) {  // if max value from root to current node is less or equal to current node left value
        goodNodesCounter++;  // increase counter
      }
    }

    if (node.right) {  // if right subnode is not empty
      stack.push([node.right, Math.max(node.right.val, maxValue)]);  // append it to stack
      if (maxValue <= node.right.val) {  // if max value from root to current node is less or equal to current node right value
        goodNodesCounter++;  // increase counter
      }
    }
  }
  return goodNodesCounter
}


/**
 * dp, dfs, recursion, in-order traversal, functional recursion
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  function dfs(node, maxTillRoot) {
    if (!node) {  // if None node (nothing to add)
      return 0
    }

    let nodeValue = maxTillRoot <= node.val ? 1 : 0;  // if there are no nodes with a value greater than max till root value.
    nodeValue += dfs(node.left, Math.max(maxTillRoot, node.val));  // calculate left subnode
    nodeValue += dfs(node.right, Math.max(maxTillRoot, node.val));  // calculate right subnode
    
    return nodeValue  // return current level sum
  }

  return dfs(root, root.val)
}


/**
 * dp, dfs, recursion, in-order traversal, stateful recursion
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let goodNodesCounter = 0;

  function dfs(node, maxTillRoot) {
    if (!node) {  // if None node (nothing to add)
      return 0
    }

    goodNodesCounter += maxTillRoot <= node.val ? 1 : 0;  // if there are no nodes with a value greater than max till root value.
    dfs(node.left, Math.max(maxTillRoot, node.val));  // calculate left subnode
    dfs(node.right, Math.max(maxTillRoot, node.val));  // calculate right subnode
  }

  dfs(root, root.val)

  return goodNodesCounter
}


/**
 * class, arrow function
 * dp, dfs, recursion, in-order traversal
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
class Solution {
  constructor() {
    this.goodNodesCounter = 0;
  }

  goodNodes(root) {
    // The context of this changes inside inner dfs function. To maintain the correct reference to this, arrow funciton is used.
    // Arrow function, which automatically binds this from the outer scope (i.e., the Solution class) and ensures this.goodNodesCounter correctly refers to the class property.
    const dfs = (node, maxTillRoot) => {
      // function dfs(node, maxTillRoot) {  // wrong reference
      // const dfs = function (node, maxTillRoot) {  // wrong reference
      if (!node) {  // if None node (nothing to add)
        return 0
      }

      this.goodNodesCounter += maxTillRoot <= node.val ? 1 : 0;  // if there are no nodes with a value greater than max till root value.
      dfs(node.left, Math.max(maxTillRoot, node.val));  // calculate left subnode
      dfs(node.right, Math.max(maxTillRoot, node.val));  // calculate right subnode
    }

    dfs(root, root.val)

    return this.goodNodesCounter
  }
}
console.log(new Solution().goodNodes(buildTreeFromList([3, 1, 4, 3, null, 1, 5])), 4)
console.log(new Solution().goodNodes(buildTreeFromList([3, 3, null, 4, 2])), 3)
console.log(new Solution().goodNodes(buildTreeFromList([1])), 1)


/**
 * class, self as this
 * dp, dfs, recursion, in-order traversal
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
class Solution {
  constructor() {
    this.goodNodesCounter = 0;
  }

  goodNodes(root) {
    // Save a reference to this and use it in the inner function. Assigned 'this' to a 'self' variable
    const self = this;
    // function dfs(node, maxTillRoot) {
    const dfs = function (node, maxTillRoot) {

      if (!node) {  // if None node (nothing to add)
        return 0
      }
      // used self.goodNodesCounter instad of this.goodNodesCounter
      self.goodNodesCounter += maxTillRoot <= node.val ? 1 : 0;  // if there are no nodes with a value greater than max till root value.
      dfs(node.left, Math.max(maxTillRoot, node.val));  // calculate left subnode
      dfs(node.right, Math.max(maxTillRoot, node.val));  // calculate right subnode
    }

    dfs(root, root.val)

    return this.goodNodesCounter
  }
}
console.log(new Solution().goodNodes(buildTreeFromList([3, 1, 4, 3, null, 1, 5])), 4)
console.log(new Solution().goodNodes(buildTreeFromList([3, 3, null, 4, 2])), 3)
console.log(new Solution().goodNodes(buildTreeFromList([1])), 1)





// Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/description/
console.log(isValidBST(buildTreeFromList([2, 1, 3])), true)
console.log(isValidBST(buildTreeFromList([5, 1, 4, null, null, 3, 6])), false)
console.log(isValidBST(buildTreeFromList([2, 2, 2])), false)


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


/**
 * dp, dfs, recursion, in-order traversal
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function dfs(node, leftMin, rightMax) {
    if (!node) {  // if node is None then the current branch i legit
      return true
    }

    if (  // if value not in bounds
      (leftMin >= node.val) ||
      (node.val >= rightMax)
    ) {
      return false
    }

    return (
      dfs(node.left, leftMin, node.val) &&  // branch left
      dfs(node.right, node.val, rightMax)  // branch right
    )
  }

  return dfs(root, -Infinity, Infinity)
}


/**
 * dp, bfs, iteration, level order traversal
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) {
    return false
  }

  const queue = [];
  queue.push([root, -Infinity, Infinity]);

  while (queue.length !== 0) {
    const queueLength = queue.length;

    for (index = 0; index < queueLength; index++) {
      const [node, minLeft, maxRight] = queue.shift();

      if (
        node.val <= minLeft ||
        node.val >= maxRight
      ) {
        return false
      }

      if (node.left) {
        queue.push([node.left, minLeft, Math.min(maxRight, node.val)])
      }

      if (node.right) {
        queue.push([node.right, Math.max(minLeft, node.val), maxRight])
      }
    }
  }
  return true
}





// Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
console.log(kthSmallest(buildTreeFromList([5, 3, 7, 2, 4, null, 8]), 3), 4)
console.log(kthSmallest(buildTreeFromList([3, 1, 4, null, 2]), 1), 1)
console.log(kthSmallest(buildTreeFromList([5, 3, 6, 2, 4, null, null, 1]), 3), 3)
console.log(kthSmallest(buildTreeFromList([41, 37, 44, 24, 39, 42, 48, 1, 35, 38, 40, null, 43, 46, 49, 0, 2, 30, 36, null, null, null, null, null, null, 45, 47, null, null, null, null, null, 4, 29, 32, null, null, null, null, null, null, 3, 9, 26, null, 31, 34, null, null, 7, 11, 25, 27, null, null, 33, null, 6, 8, 10, 16, null, null, null, 28, null, null, 5, null, null, null, null, null, 15, 19, null, null, null, null, 12, null, 18, 20, null, 13, 17, null, null, 22, null, 14, null, null, 21, 23]), 25), 24)


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function to create a binary tree from a list (level-order traversal)
function buildTreeFromList(nodeList) {
  if (!nodeList || nodeList.length === 0) return null

  if (Number.isInteger(nodeList)) {  // case when the node list is a single value
    nodeList = [nodeList];
  }

  const root = new TreeNode(nodeList[0]);  // Create the root node
  const queue = [];
  queue.push(root);
  let index = 1;

  // Process the list and construct the tree
  while (index < nodeList.length) {
    let node = queue.shift();

    // Assign the left child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.left = new TreeNode(nodeList[index]);
      queue.push(node.left)
    }
    index++;

    // Assign the right child if available
    if (index < nodeList.length && nodeList[index] != null) {
      node.right = new TreeNode(nodeList[index]);
      queue.push(node.right)
    }
    index++;
  }
  return root
}


/**
 * dp, dfs, recursion, in-order traversal
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const valueList = [];

  function dfs(node) {
    if (!node) {  // if no Node
      return
    }

    dfs(node.left)  // traverse left

    if (valueList.length === k) {  // early exit
      return
    }

    valueList.push(node.val);  // push current node value
    dfs(node.right)  // traverse right
  }

  dfs(root)

  return valueList[valueList.length - 1]  // recurn kth element
}


/**
 * dp, dfs, iteration, in-order traversal
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const queue = [];
  let node = root;

  while (queue || node) {  // while stack and node are not empty
    while (node) {  // while node is not empty
      queue.push(node);  // push node to stack
      node = node.left;  // branch left
    }

    node = queue.pop();  // take a node
    k--;  //  decrement counter

    if (!k) {  // if counter = 0
      return node.val  // current node value is kth element
    }

    node = node.right;  // branch right
  }
  return false
}





// Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
console.log(levelOrderTraversal(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])), [3, 9, 20, null, null, 15, 7])
console.log(levelOrderTraversal(buildTree([-1], [-1])), [-1])


class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Function create a list from a binary tree in level-order (breadth-first traversal)
function levelOrderTraversal(root) {
  if (root.length === 0) {
    return []
  }

  const nodeList = [];
  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let node = queue.shift();
    
    if (node) {
      nodeList.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      nodeList.push(null);
    }
  }
  while (nodeList.length > 0 && nodeList[nodeList.length - 1] === null) {
    nodeList.pop();
  }

  return nodeList
}

//console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))

/**
 * dp, dfs, recursion, in-order traversal, pre-order traversal
 * O(n), O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null  // if return empty leetcode complains
  }

  let node = new TreeNode(preorder[0]);
  const split_index = inorder.indexOf(preorder[0]);  
  node.left = buildTree(preorder.slice(1, split_index + 1), inorder.slice(0, split_index));
  node.right = buildTree(preorder.slice(split_index + 1,), inorder.slice(split_index + 1,));

  return node
}





// Combination Sum IV
// https://leetcode.com/problems/combination-sum-iv/description/
console.log(combinationSum4([1, 2, 3], 4), 7)
console.log(combinationSum4([9], 3), 0)
console.log(combinationSum4([4, 2, 1], 32), 39882198)
console.log(combinationSum4([2, 3], 7), 3)


/**
 * dp, bottom-up, iteration, tabulation (with List)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  // Initialize a list of zeros for tabulation, where tab[i] is the number of ways to make sum i
  const tab = new Array(target + 1).fill(0);
  // Base case: 1 way to make target 0 (empty combination)
  tab[0] = 1;

  // Iterate through all indices from 1 to target
  for (let index = 1; index <= target; index++) {
    // For each number in nums, check if it can contribute to the current target (index)
    for (const num of nums) {
      // If num can be subtracted from index, add the number of ways to make (index - num)
      if (index - num >= 0) {
        tab[index] += tab[index - num]
      }
    }
  }
  // Return the result for the target, which is stored in the last element of the list
  return tab[tab.length - 1]
}


/**
 * dp, bottom-up, iteration, tabulation (with Dictionary)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  // Tabulation dictionary, storing base case: 1 way to make target 0 (empty combination)
  const tab = new Map();
  // Base case: 1 way to make target 0 (empty combination)
  tab.set(0, 1);

  // Iterate through all indices from 1 to target
  for (let index = 1; index <= target; index++) {
    // For each number in nums, check if it can contribute to the current target (index)
    for (const num of nums) {
      // If num can be subtracted from index, add the number of ways to make (index - num)
      if (index - num >= 0) {
        tab.set(index, (tab.get(index) ?? 0) + (tab.get(index - num) ?? 0))
      }
    }
  }
  // Return the result for the target value, default to 0 if no combinations
  return tab.get(target) ?? 0
}


/**
 * dp,  dfs, top-down, recursion, memoization (with List)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  // Memoization dictionary, storing base case: 1 way to make target 0 (empty combination)
  const memo = new Array(target + 1).fill(-1);
  memo[0] = 1;

  // Helper function that performs depth-first search (DFS)
  var dfs = (index) => {
    // If the index is negative, no valid combination can be made, return 0
    if (index < 0) {
      return 0
      // If the value has already been computed, return it (memoization check)
    } else if (memo[index] !== -1) {
      return memo[index]
    }
    
    // Initialize the number of ways to make the current index
    memo[index] = 0;

    // Iterate over each number in the list
    for (const num of nums) {
      // Recursively compute number of combinations by reducing the target (index - num)
      memo[index] += dfs(index - num)
    }
    // Return the computed value for the current target (index)
    return memo[index]
  }

  // Start the recursion with the target value
  return dfs(target)
}





//Number of Islands
//https://leetcode.com/problems/number-of-islands/description/
console.log(numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]), 1)
console.log(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]), 3)


/**
 * dfs, recursion
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length;  // Number of rows in the grid.
  const cols = grid[0].length;  // Number of columns in the grid.
  const visitedLand = new Set();  // Set to keep track of visited land cells.
  let islandCounter = 0;  // Counter for the number of islands found.

  const dfs = (row, col) => {
    visitedLand.add(`${row},${col}`);  // Mark the current cell as visited.

    // Iterate over the possible directions (right, left, down, up).
    for ([di, dj] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      const i = row + di;
      const j = col + dj;
      
      // If the neighbor is within bounds, not visited, and is land, explore it.
      if (
        i < rows &&
        j < cols &&
        i >= 0 &&
        j >= 0 &&
        !visitedLand.has(`${i},${j}`) &&
        grid[i][j] === '1'
      ) {
        dfs(i, j)
      }
    }
  }

  // Check each cell in the grid.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Start a new DFS for every unvisited land cell, indicating a new island.
      if (
        grid[row][col] === '1' &&
        !visitedLand.has(`${row},${col}`)
      ) {
          islandCounter++;  // Increment the island counter.
          dfs(row, col)  // Perform DFS to mark the entire island.
        }
    }
  }

  return islandCounter  // Return the total number of islands found.
}





// Max Area of Island
// https://leetcode.com/problems/max-area-of-island/description/
console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]), 6)
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]), 0)


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const rows = grid.length;  // Get the number of rows and columns in the grid
  const cols = grid[0].length;
  let maxIslandArea = 0;  // Variable to store the maximum island area found so far
  const visitedLand = new Set();  // Set to keep track of visited land cells (as strings of "row,col")
  
  const dfs = (row, col) => {  // Depth-First Search (DFS) function to explore the island
    visitedLand.add(`${row},${col}`);  // Mark the current cell as visited
    let adjecentArea = 0;  // Variable to track the adjacent area of the current island
    const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];  // Define the four possible directions: right, down, up, and left

    for (const [di, dj] of directions) {  // Explore neighboring cells
      const i = row + di;  // Row in the new direction
      const j = col + dj;  // Column in the new direction
      
      if (  // Check if the new cell is within bounds, hasn't been visited, and is land (grid[i][j] == 1)
        i < rows &&
        j < cols &&
        i >= 0 &&
        j >= 0 &&
        !visitedLand.has(`${i},${j}`) &&
        grid[i][j] === 1
      ) {
        adjecentArea += dfs(i, j);  // Recursively explore neighboring land cells and accumulate their area
      }
    }
    return adjecentArea + 1  // Return the current cell's area (1) plus the adjacent area found
  }

  for (let row = 0; row < rows; row++) {  // Iterate through each cell in the grid
    for (let col = 0; col < cols; col++) {
      if (  // If the current cell is land and hasn't been visited
        grid[row][col] === 1 &&
        !visitedLand.has(`${row},${col}`)
      ) {
        maxIslandArea = Math.max(maxIslandArea, dfs(row, col));  // Perform DFS from this cell and update the maximum island area
      }
    }
  }
  
  return maxIslandArea;  // Return the largest island area found
}





// Clone Graph
// https://leetcode.com/problems/clone-graph/description/


// Definition for a _Node.
class _Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
};


/**
 * @param {_Node} node
 * @return {_Node}
*/
var cloneGraph = function (node) {
  if (node === null) {// Return null if input node is null
    return null
  }
  const oldToNew = new Map();  // Dictionary to map original nodes to their clones

  const clone = (node) => {
    if (oldToNew.has(node)) {  // If the node is already cloned, return the clone
      return oldToNew.get(node)
    }

    const new_node = new _Node(node.val);  // Create a new node with the same value
    oldToNew.set(node, new_node);  // Map the original node to the new clone

    for (const neighbor of node.neighbors) {  // Iterate through all neighbors
      new_node.neighbors.push(clone(neighbor))  // Recursively clone neighbors and add to the clone's neighbor list
    }
    
    return new_node  // Return the cloned node
  }

  return clone(node)  // Return cloned graph
}

// [[2, 4], [1, 3], [2, 4], [1, 3]]

node1 = new _Node(1)
node2 = new _Node(2)
node3 = new _Node(3)
node4 = new _Node(4)

node1.neighbors = [node2, node4]
node2.neighbors = [node1, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node1, node3]
// console.log(node4.neighbors)
console.log(node4.neighbors[0].val)

new_node = cloneGraph(node1)
console.log(new_node.val)





// Islands and Treasure (Walls and Gates)
// https://neetcode.io/problems/islands-and-treasure
console.log(new Solution().islandsAndTreasure([[0, -1], [2147483647, 2147483647]]), [[0, -1], [1, 2]])
console.log(new Solution().islandsAndTreasure([[2147483647, 2147483647, 2147483647], [2147483647, -1, 2147483647], [0, 2147483647, 2147483647]]), [[2, 3, 4], [1, -1, 3], [0, 1, 2]])
console.log(new Solution().islandsAndTreasure([[2147483647, -1, 0, 2147483647], [2147483647, 2147483647, 2147483647, -1], [2147483647, -1, 2147483647, -1], [0, -1, 2147483647, 2147483647]]), [[3, -1, 0, 1], [2, 2, 1, -1], [1, -1, 2, -1], [0, -1, 3, 4]])


class Solution {
  /**
   * dfs, recursion
   * O(n4), O(n2)  - O(n4) = O(n2)2 - may vistit the same land more than once
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    const rows = grid.length;  // Get the number of rows
    const cols = grid[0].length;  // Get the number of columns

    const dfs = (row, col, distance) => {
      grid[row][col] = distance;  // Set the distance for the current cell
      const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];  // Define possible directions

      for (const [di, dj] of directions) {
        const i = row + di;  // Calculate the new row
        const j = col + dj;  // Calculate the new column

        if (
          i < rows &&  // Ensure row is within bounds
          j < cols &&  // Ensure column is within bounds
          i >= 0 &&  // Ensure row is not negative
          j >= 0 &&  // Ensure column is not negative
          grid[i][j] != 0 &&  // Skip water cells
          grid[i][j] != -1 &&  // Skip visited cells
          grid[i][j] > distance + 1  // Ensure current distance is valid
        ) {
          dfs(i, j, distance + 1);  // Perform DFS on the next cell
        }
      }
    }

    for (let row = 0; row < rows; row++) {  // Iterate through each row
      for (let col = 0; col < cols; col++) {  // Iterate through each column
        if (grid[row][col] === 0) {  // If the cell is water, start DFS
          dfs(row, col, 0);  // Start DFS with distance 0
        }
      }
    }
    return grid;  // Return the modified grid
  }
}


class Solution {
  /**
   * bfs, iteration, queue
   * O(n2), O(n2)
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    const rows = grid.length;  // Get the number of rows
    const cols = grid[0].length;  // Get the number of columns
    const queue = [];  // Initialize an empty queue for BFS
    const visitedLand = new Set();  // Set to keep track of visited cells

    const bfs = (row, col) => {
      const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];  // Define 4 possible directions (right, down, left, up)

      for (const [di, dj] of directions) {  // Iterate over each direction
        const i = row + di;  // Calculate new row
        const j = col + dj;  // Calculate new column

        if (
          i < rows &&  // Ensure row is within bounds
          j < cols &&  // Ensure column is within bounds
          i >= 0 &&  // Ensure row is not negative
          j >= 0 &&  // Ensure column is not negative
          grid[i][j] != -1 &&  // Skip if the cell is water or already processed (-1)
          !visitedLand.has(`${i},${j}`)  // Skip if the cell has already been visited
        ) {
          queue.push([i, j]);  // Add valid neighboring cells to the queue
          visitedLand.add(`${i},${j}`);  // Mark as visited immediately when enqueued
        }
      }
    };

    for (let row = 0; row < rows; row++) {  // Iterate through each row
      for (let col = 0; col < cols; col++) {  // Iterate through each column
        if (grid[row][col] === 0) {  // If the cell is land (0)
          queue.push([row, col]);  // Add the land cell to the queue
          visitedLand.add(`${row},${col}`);  // Mark it as visited when added to the queue
        }
      }
    }

    let distance = 0;  // Initialize distance from the treasure

    while (queue.length !== 0) {  // Continue while there are cells in the queue
      let queueLength = queue.length;  // Get the number of cells in the current layer

      for (let index = 0; index < queueLength; index++) {  // Iterate over all cells in the current queue
        const [row, col] = queue.shift();  // Dequeue the next cell
        grid[row][col] = distance;  // Set the distance in the grid
        bfs(row, col);  // Explore the neighboring cells
      }
      distance++;  // Increment the distance for the next layer of cells
    }

    return grid;  // Return the modified grid
  }
}





// Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/description/
console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]), 4)
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]), -1)
console.log(orangesRotting([[0, 2]]), 0)
console.log(orangesRotting([[0]]), 0)


/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  const visitedCells = new Set();
  const freshOranges = new Set();

  // BFS to process adjacent cells
  const bfs = (row, col) => {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];  // Right, down, left, up

    for (const [di, dj] of directions) {
      const i = row + di;
      const j = col + dj;

      if (
        i < rows &&   // Check row bounds
        j < cols &&   // Check column bounds
        i >= 0 && 
        j >= 0 &&
        !visitedCells.has(`${i},${j}`) &&  // Cell should not have been visited
        grid[i][j] === 1  // Must be a fresh orange
      ) {
        queue.push([i, j]);  // Add fresh orange to the queue
        visitedCells.add(`${i},${j}`);  // Mark as visited
        freshOranges.delete(`${i},${j}`);  // Remove from fresh oranges set
      }
    }
  };

  // Iterate over the grid to initialize the queue and fresh oranges set
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 2) {  // Rotten orange
        queue.push([row, col]);  // Add to queue for BFS
        visitedCells.add(`${row},${col}`);  // Mark as visited
      } else if (grid[row][col] === 1) {  // Fresh orange
        freshOranges.add(`${row},${col}`);  // Add to the fresh oranges set
      }
    }
  }

  // If there are no fresh oranges, return 0
  if (freshOranges.size === 0) {
    return 0;
  }

  let counter = -1;  // Initialize counter for time

  // Perform BFS
  while (queue.length !== 0) {
    counter++;  // increment the time
    const queueLength = queue.length;

    for (let index = 0; index < queueLength; index++) {
      const [row, col] = queue.shift();  // Dequeue rotten orange
      bfs(row, col);  // Rot neighboring fresh oranges
    }

  }
  
  // If there are still fresh oranges, return -1. Otherwise, return the time counter.
  return freshOranges.size === 0 ? counter : -1;
}





// Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/description/
/**
 * Definition for singly-linked list.
*/
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = head;
  let previous = null;

  while (node) {
    const nextNode = node.next;
    node.next = previous;
    previous = node;
    node = nextNode;
  }

  return previous
}

const node2 = new ListNode(2, null);
const node1 = new ListNode(1, node2);
const node0 = new ListNode(0, node1);

console.log(node2.next)
console.log(node2)
console.log(node1.next)

reverseList(node0)

console.log(node2.next)
console.log(node1)
console.log(node0.next)





// Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/description/
/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
*/
var mergeTwoLists = function (list1, list2) {
  const anchor = new ListNode();
  let node = anchor;

  while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
          node.next = list1;
          list1 = list1.next;
      } else {
          node.next = list2;
          list2 = list2.next;
      }
      node = node.next;
  }
  node.next = list1 || list2;

  return anchor.next
}

const nodeA2 = new ListNode(4, null);
const nodeA1 = new ListNode(2, nodeA2);
const nodeA0 = new ListNode(1, nodeA1);

const nodeB2 = new ListNode(4, null);
const nodeB1 = new ListNode(3, nodeB2);
const nodeB0 = new ListNode(1, nodeB1);

console.log(mergeTwoLists(nodeA0, nodeB0))





// Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


// O(n), O(1)
// Floyd's tortoise and hare
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (
    fast != null &&
    fast.next != null
  ) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true
  }
  return false
}


/**
 * O(n), O(n)
 * set for node store
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const seen = new Set();

  while (head !== null) {
    if (seen.has(head)) {
      return true
    } else {
      seen.add(head);
      head = head.next;
    }
  }
  return false
}





// Reorder List
// https://leetcode.com/problems/reorder-list/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * O(n), O(1)
 * linked list (Reverse And Merge)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  node = slow.next;
  previous = null;
  slow.next = null;

  while (node) {
    nextNode = node.next;
    node.next = previous;
    previous = node;
    node = nextNode;
  }

  let left = head;
  let right = previous;

  while (right) {
    nextLeft = left.next;
    nextRight = right.next;
    left.next = right;
    right.next = nextLeft;
    left = nextLeft;
    right = nextRight;
  }
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * O(n), O(n)
 * linked list to list of nodes
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let node = head;
  const nodes = [];

  while (node !== null) {
    nodes.push(node)
    node = node.next
  }

  let left = 0;
  let right = nodes.length - 1;

  while (left < right) {
    nodes[left].next = nodes[right];
    left++;

    if (left == right) break

    nodes[right].next = nodes[left];
    right--;
  }
  nodes[left].next = null;
}





// Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * O(n), O(1)
 * two pointers
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let anchor = new ListNode(0, head);
  let left = anchor;
  let right = anchor;

  while (n) {
    right = right.next;
    n--;
  }

  while (right.next) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return anchor.next
}


/**
 * # O(n), O(n)
 * # List
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const nodes = [];
  let node = head;

  while (node) {
    nodes.push(node);
    node = node.next;
  }

  if (n === nodes.length) return head.next
  else {
    const index = nodes.length - n;
    nodes[index - 1].next = nodes[index].next;
    return head
  }
}





// Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/description/
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * O(n), O(n):
 * dictionary (two pass)
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  const nodeCopy = new Map();
  nodeCopy.set(null, null)
  let node = head;

  while (node) {
    nodeCopy.set(node, new _Node(node.val));
    node = node.next;
  }

  node = head;

  while (node) {
    nodeCopy.get(node).next = nodeCopy.get(node.next);
    nodeCopy.get(node).random = nodeCopy.get(node.random);
    node = node.next;
  }

  return nodeCopy.get(head)
}



const node2 = new _Node(2, null);
const node1 = new _Node(1, node2);
const node0 = new _Node(0, node1);

console.log(node2.next)
console.log(node2)
console.log(node1.next)

console.log(copyRandomList(node0))





// Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * O(n), O(1)
 * Iteration
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (head1, head2) {
  let node1 = head1;
  let node2 = head2;
  const dummy = new ListNode();
  let node = dummy;
  carry = 0;

  while (node1 || node2) {r
    const firstValue = node1 ? node1.val : 0;
    const secondValue = node2 ? node2.val : 0;
    let value = firstValue + secondValue + carry;
    carry = value / 10 | 0;
    value = value % 10;

    node.next = new ListNode(value);
    node = node.next;
    node1 = node1 ? node1.next : null;
    node2 = node2 ? node2.next : null;
  }

  if (carry) {
    node.next = new ListNode(carry);
  }

  return dummy.next
}





// LRU Cache
// https://leetcode.com/problems/lru-cache/description/
class Node {
  constructor(key = 0, value = 0, prev = null, next = null) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.first = new Node();
  this.last = new Node();
  this.first.next = this.last;
  this.last.prev = this.first;

  this.remove = (node) => {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  this.insert = function (node) {
    const prev = this.last.prev;
    const next = this.last;
    prev.next = node;
    next.prev = node;
    node.prev = prev;
    node.next = next;
  }
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
    this.insert(this.cache.get(key));
    return this.cache.get(key).value
  } else return -1
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
  } else if (this.capacity) {
    this.capacity--;
  } else {
    const lru = this.first.next;
    this.remove(lru);
    this.cache.delete(lru.key);
  }

  const node = new Node(key, value);
  this.cache.set(key, node);
  this.insert(node);
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lRUCache = new LRUCache(2)
lRUCache.put(2, 1)
lRUCache.put(1, 1)
lRUCache.put(2, 3)
lRUCache.put(4, 1)
console.log(lRUCache.get(1))  // -1
console.log(lRUCache.get(2))  // 3





// Largest Rectangle in Histogram
// https://leetcode.com/problems/largest-rectangle-in-histogram/description/
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10)
console.log(largestRectangleArea([2, 4]), 4)
console.log(largestRectangleArea([2, 1, 2]), 3)


/**
 * @param {number[]} heights - An array representing the heights of histogram bars.
 * @return {number} - The largest rectangle area that can be formed.
 */
var largestRectangleArea = function (heights) {
  const stack = [];  // Stack to store [index, height] pairs.
  let maxArea = 0;   // Variable to track the maximum rectangle area found.

  // Iterate through the histogram bars.
  for (let index = 0; index < heights.length; index++) {
    const height = heights[index]; // Current bar height.
    let startIndex = index;        // Initialize the start index of the rectangle.

    // While the stack is not empty and the current height is less than
    // the height of the bar at the top of the stack.
    while (stack.length !== 0 && height < stack[stack.length - 1][1]) {
      // Pop the top bar from the stack.
      const [prevIndex, prevHeight] = stack.pop();
      
      // Calculate the area with the popped bar as the smallest height.
      maxArea = Math.max(maxArea, prevHeight * (index - prevIndex));
      
      // Update the start index to the index of the popped bar
      // as it defines the left boundary of the rectangle.
      startIndex = prevIndex;
    }

    // Push the current bar onto the stack with the updated start index.
    stack.push([startIndex, height]);
  }

  // Process the remaining bars in the stack.
  for (const [index, height] of stack) {
    // Calculate the area for rectangles extending to the end of the array.
    maxArea = Math.max(maxArea, height * (heights.length - index));
  }

  // Return the largest rectangle area found.
  return maxArea
}





// Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/description/
console.log(getConcatenation([1, 2, 1]), [1, 2, 1, 1, 2, 1])
console.log(getConcatenation([1, 3, 2, 1]), [1, 3, 2, 1, 1, 3, 2, 1])


/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var getConcatenation = function (numbers) {
  return [...numbers, ...numbers]
}


/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var getConcatenation = function (numbers) {
  return Array.from({ length: numbers.length * 2 }, (_, index) => numbers[index % numbers.length])
}


/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var getConcatenation = function (numbers) {
  const concatArray = Array(numbers.length * 2);
  const numbersLength = numbers.length;

  for (let index = 0; index < numbersLength; index++) {
    concatArray[index] = numbers[index];
    concatArray[index + numbers.length] = numbers[index];
  }

  return concatArray
}





// Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii/description/
console.log(validPalindrome("aba"), true)
console.log(validPalindrome("abca"), true)
console.log(validPalindrome("abc"), false)
console.log(validPalindrome("eeccccbebaeeabebccceea"), false)
console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"), true)


/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      const wordSkipLeft = word.slice(left + 1, right + 1);
      const wordSkipRight = word.slice(left, right);

      return (
        // wordSkipLeft === wordSkipLeft.split('').reverse().join('') ||
        // wordSkipRight === wordSkipRight.split('').reverse().join('')
        isPalindrome(wordSkipLeft) ||
        isPalindrome(wordSkipRight)
      )
    }
  }
  return true
}

function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1

  while (left < right) {
    if (word[left] != word[right]) return false
    left++;
    right--;
  }

  return true
}


/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      const wordSkipLeft = word.slice(left + 1, right + 1);
      const wordSkipRight = word.slice(left, right);

      return (
        wordSkipLeft === wordSkipLeft.split('').reverse().join('') ||
        wordSkipRight === wordSkipRight.split('').reverse().join('')
      )
    }
  }
  return true
}





// Baseball Game
// https://leetcode.com/problems/baseball-game/description/
console.log(calPoints(["5", "2", "C", "D", "+"]), 30)
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]), 27)
console.log(calPoints(["1", "C"]), 0)


/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = [];

  for (const operation of operations) {
    if (operation === 'C') {
      stack.pop()
    } else if (operation === 'D') {
      stack.push(stack[stack.length - 1] * 2)
    } else if (operation === '+') {
      const x = stack.pop();
      const y = stack.pop();
      stack.push(y);
      stack.push(x);
      stack.push(x + y);
    } else {
      stack.push(Number(operation));
    }
  }

  return stack.reduce((total, current) => total + current, 0)
}





// Replace Elements with Greatest Element on Right Side
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/
console.log(replaceElements([17, 18, 5, 4, 6, 1]), [18, 6, 6, 6, 1, -1])
console.log(replaceElements([400]), [-1])


/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var replaceElements = function (numbers) {
  const greatestRight = Array(numbers.length).fill(-1);
  const numbersReversed = numbers.reverse()

  for (let index = 0; index < numbers.length - 1; index++) {
    greatestRight[index + 1] = Math.max(greatestRight[index], numbersReversed[index]);
  }

  return greatestRight.reverse()
}


/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var replaceElements = function (numbers) {
  const greatestRight = Array(numbers.length).fill(-1);

  for (let index = numbers.length - 2; index >= 0; index--) {
    greatestRight[index] = Math.max(greatestRight[index + 1], numbers[index + 1]);
  }

  return greatestRight
}


/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var replaceElements = function (numbers) {
  numbers.shift();
  numbers.push(-1)

  for (let index = numbers.length - 2; index >= 0; index--) {
    numbers[index] = Math.max(numbers[index], numbers[index + 1]);
  }

  return numbers
}





// Minimum Difference Between Highest and Lowest of K Scores
// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/
console.log(minimumDifference([90], 1), 0)
console.log(minimumDifference([9, 4, 1, 7], 2), 2)
console.log(minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6), 74560)


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (numbers, k) {
  numbers.sort((a, b) => a - b);
  let min_value = Infinity

  for (let index = 0; index < numbers.length - k + 1; index++) {
    const current_min = numbers[index + k - 1] - numbers[index]
    
    if (current_min < min_value) {
      min_value = current_min;
    }
  }
  
  return min_value
}





// Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/description/
console.log(mergeAlternately("abc", "pqr"), "apbqcr")
console.log(mergeAlternately("ab", "pqrs"), "apbqrs")
console.log(mergeAlternately("abcd", "pq"), "apbqcd")


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let merged = '';
  
  for (let index = 0; index < Math.max(word1.length, word2.length); index++) {
    merged += word1[index] || '';
    merged += word2[index] ?? '';
  }

  return merged
}





// Implement Stack using Queues
// https://leetcode.com/problems/implement-stack-using-queues/description/


var MyStack = function() {
  this.queue = [];
}

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.queue.push(x);
}

/**
* @return {number}
*/
MyStack.prototype.pop = function() {
  for (let index = 0; index < this.queue.length - 1; index++) {
      this.queue.push(this.queue.shift());
  }
  return this.queue.shift()
}

/**
* @return {number}
*/
MyStack.prototype.top = function() {
  for (let index = 0; index < this.queue.length - 1; index++) {
      this.queue.push(this.queue.shift());
  }
  const popped = this.queue.shift();
  this.queue.push(popped);
  return popped
}

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.queue.length === 0 ? true : false
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/





// Is Subsequence
// https://leetcode.com/problems/is-subsequence/description/
console.log(isSubsequence("abc", "ahbgdc"), true)
console.log(isSubsequence("axc", "ahbgdc"), false)
console.log(isSubsequence("", "ahbgdc"), true)
console.log(isSubsequence("", ""), true)


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (word1, word2) {
  if (word1.length === 0) return true

  let left = 0;

  for (let right = 0; right < word2.length; right++) {
    if (word2[right] === word1[left]) {
      left++;
    }

    if (left === word1.length) return true
  }

  return false
}





// Length of Last Word
// https://leetcode.com/problems/length-of-last-word/description/
console.log(lengthOfLastWord("Hello World"), 5)
console.log(lengthOfLastWord("   fly me   to   the moon  "), 4)
console.log(lengthOfLastWord("luffy is still joyboy"), 6)


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (text) {
  return text.trim().split(' ').reverse()[0].length
}





// Reverse String
// https://leetcode.com/problems/reverse-string/description/
console.log(reverseString(["h", "e", "l", "l", "o"]), ["o", "l", "l", "e", "h"])
console.log(reverseString(["H", "a", "n", "n", "a", "h"]), ["h", "a", "n", "n", "a", "H"])


/**
 * O(n), O(1)
 * build-in function
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  s = s.reverse();
}


/**
 * O(n), O(1)
 * two pointers
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}



/**
 * O(n), O(n)
 * stack
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const stack = [];

  for (const letter of s) {
    stack.push(letter);
  }

  let index = 0;

  while (stack.length !== 0) {
    s[index] = stack.pop();
    index++;
  }
}


/**
 * O(n), O(n)
 * recursion
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  function localReverse(left, right) {
    if (left < right) {
        [s[left], s[right]] = [s[right], s[left]]
        localReverse(left + 1, right - 1)
    }
  }
  localReverse(0, s.length - 1)
}





// Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/description/
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3), true)
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1), true)
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false)


/**
 * O(n), O(n)
 * sliding window
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (numbers, window_length) {
  const window = new Set();
  let left = 0;

  for (let right = 0; right < numbers.length; right++) {
    const number = numbers[right];

    if (window.has(number)) return true
    else window.add(number)

    if (right - left + 1 !== window_length + 1) continue

    window.delete(numbers[left]);
    left++;
  }

  return false
}





// Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/description/
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3), true)
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1), true)
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false)


var MyQueue = function () {
  this.stack = [];
  this.stackReversed = [];
}

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stackReversed.length !== 0) {
    return this.stackReversed.pop();
  }

  while (this.stack.length !== 0) {
    this.stackReversed.push(this.stack.pop());
  }

  return this.stackReversed.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stackReversed.length !== 0) {
    return this.stackReversed[this.stackReversed.length - 1]
  }

  while (this.stack.length !== 0) {
    this.stackReversed.push(this.stack.pop());
  }

  return this.stackReversed[this.stackReversed.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.stack.length === 0 &&
    this.stackReversed.length === 0
  ) return true
  else return false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */





// Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/description/
console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl")
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "")


/**
 * @param {string[]} words
 * @return {string}
 */
var longestCommonPrefix = function (words) {
  let prefix = words[0];

  for (const word of words.slice(1,)) {
    for (let index = 0; index < prefix.length; index++) {
      if (prefix[index] !== word[index]) {
        prefix = prefix.slice(0, index)
        break
      }
    }
  }
  return prefix
}





// Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/description/
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), [1, 2, 2, 3, 5, 6])
console.log(merge([1], 1, [], 0), [1])
console.log(merge([0], 0, [1], 1), [1])
console.log(merge([2, 0], 1, [1], 1), [1, 2])
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3), [-1, 0, 0, 1, 2, 2, 3, 3, 3])
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3), [1, 2, 3, 4, 5, 6])


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  m--;
  n--;

  for (let index = m + n + 1; index >= 0; index--) {
    if (n === -1) return nums1

    if (m === - 1) break

    if (nums1[m] > nums2[n]) {
      nums1[index] = nums1[m];
      m--;
    } else {
      nums1[index] = nums2[n];
      n--;
    }
  }

  for (let index = 0; index <= n; index++) {
    nums1[index] = nums2[index];
  }

  return nums1
}





// Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/
console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4), 3)
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5), 6)
console.log(numOfSubarrays([8246,1867,193,4539,2650,4721,2944,5777,8055,7502,4334,2137,3658,4156,4628,1139,7963,8035,6008,8427,1841,9169,1059,6158,9116,8052,7074,7866,584,666,192,8081,8273,2809,3017,7852,1869,3395,4649,5366,8834,9100,1643,9511,4136,3897,7193,2500,2721,8477,2887,8300,3922,579,4228,7983,4247,5362,5581,9270,8602,1944,240,6044,6036,1219,6901,2007,2123,9699,3388,390,9144,7697,5160,6442,7078,9758,8841,2064,4096,146,7362,3952,2346,4171,7598,1201,1860,9101,8979,8437,1989,5349,5148,9422,7217,1406,8414,3586,5935,7395,2257,7802,9449,3824,6874,3684,4252,3947,8985,1052,7295,2976,2045,2315,4887,307,8784,988,942,7960,747,1593,1112,7874], 1, 307), 122)


/**
 * @param {number[]} numbers
 * @param {number} size
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (numbers, size, threshold) {
  let counter = 0;
  let subarraySum = 0;

  for (let index = 0; index < numbers.length - size + 1; index++) {
    if (index === 0) {
      subarraySum = numbers.slice(0, size).reduce((total, current) => total + current)
    } else {
      subarraySum += - numbers[index - 1] + numbers[index + size - 1]
    }

    if (subarraySum / size >= threshold) {
      counter++;
    }
  }
  
  return counter
}





// Make The String Great
// https://leetcode.com/problems/make-the-string-great/description/
console.log(makeGood("leEeetcode"), "leetcode")
console.log(makeGood("abBAcC"), "")
console.log(makeGood("s"), "s")
console.log(makeGood("Mc"), "MC")


/**
 * @param {string} word astats
 * @return {string}
 */
var makeGood = function (word) {
  const stack = []; // Initialize an empty stack to store characters.

  // Iterate through each character in the input string.
  for (let letter of word) {
    if (
      stack.length !== 0 &&  // stack not empty
      letter !== stack[stack.length - 1] &&  // and if the top of the stack differs the current letter
      letter.toLowerCase() === stack[stack.length - 1].toLowerCase()  // and both lowercase are the same
     ) {
      stack.pop(); // Remove the top character from the stack.
    } else {
      stack.push(letter); // Otherwise, add the current character to the stack.
    }
  }

  // Return the resulting string by joining the stack.
  return stack.join('');
}


/**
 * Adds a method to the `String` prototype to check if a string is entirely in lowercase.
 * @return {boolean} Returns true if the string is in lowercase, otherwise false.
 */
String.prototype.isLowerCase = function () {
  // Compare the string to its lowercase version.
  return this === this.toLowerCase() ? true : false;
}

/**
 * Removes adjacent pairs of letters that are the same character but with differing cases
 * (e.g., 'aA' or 'Bb') from the input string, until no such pairs remain.
 * @param {string} word The input string to be processed.
 * @return {string} A new string with all problematic pairs removed.
 */
String.prototype.isUpperCase = function () {
  // Compare the string to its uppercase version.
  return this === this.toUpperCase() ? true : false;
}

/**
 * @param {string} word astats
 * @return {string}
 */
var makeGood = function (word) {
  const stack = []; // Initialize an empty stack to store characters.

  // Iterate through each character in the input string.
  for (let letter of word) {
    // Check if the stack is not empty and if the top of the stack matches the current letter
    // in a case-insensitive way, while being opposite in case sensitivity.
    if (
      stack.length !== 0 &&
      letter.toLowerCase() === stack[stack.length - 1].toLowerCase() && // Same character ignoring case
      (
        (letter.isLowerCase() && stack[stack.length - 1].isUpperCase()) || // One is lowercase, the other is uppercase
        (letter.isUpperCase() && stack[stack.length - 1].isLowerCase())
      )
    ) {
      stack.pop(); // Remove the top character from the stack.
    } else {
      stack.push(letter); // Otherwise, add the current character to the stack.
    }
  }

  // Return the resulting string by joining the stack.
  return stack.join('');
}



function isLowerCase(letter) {
  return letter === letter.toLowerCase() ? true : false
}

function isUpperCase(letter) {
  return letter === letter.toUpperCase() ? true : false
}

/**
 * @param {string} word
 * @return {string}
 */
var makeGood = function (word) {
  const stack = [];

  for (let letter of word) {
    // Check if the stack is not empty and if the top of the stack matches the current letter
    // in a case-insensitive way, while being opposite in case sensitivity.
    if (
      stack.length !== 0 &&
      letter.toLowerCase() === stack[stack.length - 1].toLowerCase() && // Same character ignoring case
      (isLowerCase(letter) && isUpperCase(stack[stack.length - 1]) || // One is lowercase, the other is uppercase
        isUpperCase(letter) && isLowerCase(stack[stack.length - 1])
      )
    ) {
      stack.pop(); // Remove the top character from the stack.
    } else {
      stack.push(letter) // Otherwise, add the current character to the stack.
    }
  }
  return stack.join('')
}





// Search Insert Position
// https://leetcode.com/problems/search-insert-position/description/
console.log(searchInsert([1, 3, 5, 6], 0), 0)
console.log(searchInsert([1, 3, 5, 6], 1), 0)
console.log(searchInsert([1, 3, 5, 6], 2), 1)
console.log(searchInsert([1, 3, 5, 6], 3), 1)
console.log(searchInsert([1, 3, 5, 6], 4), 2)
console.log(searchInsert([1, 3, 5, 6], 5), 2)
console.log(searchInsert([1, 3, 5, 6], 6), 3)
console.log(searchInsert([1, 3, 5, 6], 7), 4)


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const middle = (left + right) / 2 | 0  // div 2 operation
    const middleNumber = numbers[middle];

    if (target === middleNumber) {
      return middle
    } else if (target < middleNumber) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left
}





// Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/description/
console.log(generate(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
console.log(generate(1), [[1]])


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [];

  for (let index = 0; index < numRows; index++) {
      if (index === 0) {
          triangle.push([1]);
      } else {
          const row = [1];

          for (let number = 0; number < index - 1; number++) {
              const first = triangle[triangle.length - 1][number];
              const second = triangle[triangle.length - 1][number + 1];
              row.push(first + second);
          }

          row.push(1);
          triangle.push(row);
      }
  }
  return triangle
}





// Move Zeroes
// https://leetcode.com/problems/move-zeroes/description/
console.log(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0])
console.log(moveZeroes([0]), [0])
console.log(moveZeroes([1]), [1])


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroCounter = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
      const number = nums[right];

      if (number === 0) {
          zeroCounter++;
      } else {
          nums[left] = number;
          left++;
      }
  }

  for (let index = nums.length - zeroCounter; index < nums.length; index++) {
      nums[index] = 0;
  }

  return nums
}


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
      const number = nums[right];

      if (number !== 0) {
        [nums[left], nums[right]] = [number, nums[left]];
        left++;
      } 
  }
  // return nums
}





// Frequency of the Most Frequent Element
// https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/
console.log(maxFrequency([1, 2, 4], 5), 3)
console.log(maxFrequency([1, 4, 8, 13], 5), 2)
console.log(maxFrequency([3, 9, 6], 2), 1)
console.log(maxFrequency([9930, 9923, 9983, 9997, 9934, 9952, 9945, 9914, 9985, 9982, 9970, 9932, 9985, 9902, 9975, 9990, 9922, 9990, 9994, 9937, 9996, 9964, 9943, 9963, 9911, 9925, 9935, 9945, 9933, 9916, 9930, 9938, 10000, 9916, 9911, 9959, 9957, 9907, 9913, 9916, 9993, 9930, 9975, 9924, 9988, 9923, 9910, 9925, 9977, 9981, 9927, 9930, 9927, 9925, 9923, 9904, 9928, 9928, 9986, 9903, 9985, 9954, 9938, 9911, 9952, 9974, 9926, 9920, 9972, 9983, 9973, 9917, 9995, 9973, 9977, 9947, 9936, 9975, 9954, 9932, 9964, 9972, 9935, 9946, 9966], 3056), 73)


/**
 * O(nlogn), O(1)
 * sliding window
 * @param {number[]} numbers
 * @param {number} k total increments
 * @return {number}
 */
var maxFrequency = function (numbers, k) {
  numbers.sort((a, b) => a - b);
  let left = 0;
  let total = 0;
  let frequency = 1;

  for (let right = 0; right < numbers.length; right++) {
    const number = numbers[right];
    total += number;  // Add the current number to the total sum of the window.

    // Check if the current window is valid:
    // `(number * (right - left + 1))` represents the total sum needed
    // to make all elements in the window equal to `number`.
    // If the required total exceeds the available increment `k`, shrink the window.
    while (number * (right - left + 1) - total > k) {
      total -= numbers[left];  // Remove the element at the left pointer from the total sum.
      left++;  // Move the left pointer to the right, shrinking the window.
    }

    frequency =  Math.max(right - left + 1, frequency);  // Update the maximum frequency found so far.
 }

 return frequency
}





// Removing Stars From a String
// https://leetcode.com/problems/removing-stars-from-a-string/description/
console.log(removeStars("leet**cod*e"), "lecoe")
console.log(removeStars("erase*****"), "")


/**
 * @param {string} word
 * @return {string}
 */
var removeStars = function (word) {
  const stack = [];

  for (const letter of word) {
    if (stack.length !== 0 && letter === '*') {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }
  return stack.join('')
}





// Guess Number Higher or Lower
// https://leetcode.com/problems/guess-number-higher-or-lower/description/
console.log(guessNumber(10), 6)


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
      const middle = (left + right) / 2 | 0;  // === (left + right) div 2
      currentGuess = guess(middle);

      if (currentGuess === 0) {
          return middle
      } else if (currentGuess === 1) {
          left = middle + 1;
      } else {
          right = middle - 1;
      }
  }
}





// Remove Element
// https://leetcode.com/problems/remove-element/description/
console.log(removeElement([3, 2, 2, 3], 3), [2, 2])
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), [0, 1, 3, 4, 2])


/**
 * @param {number[]} numbers
 * @param {number} val
 * @return {number}
 */
var removeElement = function(numbers, value) {
  let left = 0;

  for (const number of numbers) {
      if (number !== value) {
          numbers[left] = number;
          left++;
      }
  }
  return left
}





// Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/description/


/**
 * O(n), O(1)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // Find the middle of the list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  // Reverse the second half of the list
  previous = null

  while (slow) {
      nextNode = slow.next;
      slow.next = previous;
      previous = slow;
      slow = nextNode;
  }

  // Compare the two halves
  left = head;
  right = previous;

  while (right) {
      if (left.val != right.val) {
          return false
      }

      left = left.next;
      right = right.next;
  }

  return true
}





// Remove Linked List Elements
// https://leetcode.com/problems/remove-linked-list-elements/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let anchor = new ListNode();
  let node = anchor;
  node.next = head;

  while (node.next) {
      if (node.next.val === val) {
          node.next = node.next.next
      } else {
          node = node.next;
      }
  }

  return anchor.next
}





// Unique Email Addresses
// https://leetcode.com/problems/unique-email-addresses/description/
console.log(numUniqueEmails(['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com']), 2)
console.log(numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']), 3)


/**
 * O(n2), O(n)
 * regex
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const clean_emails = new Set();

  for (const email of emails) {
    let [name, domain] = email.split('@');

    // remove "." from the name
    name = name.replace(/\./g, '');

    // remove all after "+" in the name
    name = name.match(/(\w+)(\+?)/)[1]

    clean_emails.add(name + '@' + domain);
  }

  return clean_emails.size
}





// Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
console.log(removeDuplicates([1, 1, 2]), 2)
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5)


/**
 * # O(n), O(1)
 * # two pointers
 * @param {number[]} numbers
 * @return {number}
 */
var removeDuplicates = function (numbers) {
  let left = 0;

  for (const number of numbers.slice(1,)) {
    if (number > numbers[left]) {
      left++;
      numbers[left] = number;
    }
  }

  return left + 1
}





// Fruit Into Baskets
// https://leetcode.com/problems/fruit-into-baskets/description/
console.log(totalFruit([1, 2, 1]), 3)
console.log(totalFruit([0, 1, 2, 2]), 3)
console.log(totalFruit([1, 2, 3, 2, 2]), 4)
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]), 5)
console.log(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3]), 5)


/**
 * O(n), O(1)
 * sliding window, map()
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let left = 0;
  const basket = new Map();
  let maxFruit = 0;

  for (let right = 0; right < fruits.length; right++) {
    const fruit = fruits[right];

    basket.set(fruit, (basket.get(fruit) || 0) + 1)  // add a fruit to the basket

    while (basket.size > 2) {  // while too many fruit types
      const leftFruit = fruits[left];  // `left` fruit type
      basket.set(leftFruit, basket.get(leftFruit) - 1);  // remove one `left` fruit from basket
      left++;  // increase the left pointer

      if (basket.get(leftFruit) === 0) {  // if no `left` fruit
        basket.delete(leftFruit);  // pop that fruit type
      }
    }

    if ((right - left + 1) > maxFruit) {  // update max fruit counter
      maxFruit = (right - left + 1)
    }
  }

  return maxFruit
}


/**
 * O(n), O(1)
 * sliding window, object
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let left = 0;
  const basket = {};
  let maxFruit = 0;

  for (let right = 0; right < fruits.length; right++) {
    const fruit = fruits[right];

    basket[fruit] = (basket[fruit] || 0) + 1 // add a fruit to the basket

    while (Object.keys(basket).length > 2) {  // while too many fruit types
      const leftFruit = fruits[left];  // `left` fruit type
      basket[leftFruit] -= 1;  // remove one `left` fruit from basket
      left++;  // increase the left pointer

      if (basket[leftFruit] === 0) {  // if no `left` fruit
        delete basket[leftFruit];  // pop that fruit type // delete basket.leftFruit;
      }
    }

    if ((right - left + 1) > maxFruit) {  // update max fruit counter
      maxFruit = (right - left + 1)
    }
  }

  return maxFruit
}





// Validate Stack Sequences
// https://leetcode.com/problems/validate-stack-sequences/description/
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]), true)
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]), false)
console.log(validateStackSequences([2, 1, 0], [1, 2, 0]), true)


/**
 * O(n), O(n)
 * stack
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [];

  for (const number of pushed) {
    stack.push(number);

    while (
      stack.length !== 0 &&
      stack[stack.length - 1] === popped[0]
    ) {
      stack.pop();
      popped.shift();
    }
  }

  if (
    stack.length !== 0 ||
    popped.length !== 0) {
    return false
  } else return true
}





// Arranging Coins
// https://leetcode.com/problems/arranging-coins/description/
console.log(arrangeCoins(5), 2)
console.log(arrangeCoins(8), 3)
console.log(arrangeCoins(2), 1)


/**
 * @param {number} coins
 * @return {number}
 */
var arrangeCoins = function (coins) {
  let left = 1;
  let right = coins;

  while (left <= right) {
      const middle = (left + right) / 2 | 0;
      const coinStack = (1 + middle) / 2 * middle;

      if (coins === coinStack) {
          return middle
      } else if (coins < coinStack) {
          right = middle - 1;
      } else {
          left = middle + 1;
      }
  }

  return right
}





// Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head
  }

  let node = head;

  while (node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head
}





// Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/description/
console.log(isIsomorphic("egg", "add"), true)
console.log(isIsomorphic("foo", "bar"), false)
console.log(isIsomorphic("paper", "title"), true)
console.log(isIsomorphic("badc", "baba"), false)


/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isIsomorphic = function (word1, word2) {
  let isoMap = new Map();
  let values = new Set();

  for (let index = 0; index <= word1.length; index++) {
    const letter = word1[index];

    if (isoMap.has(letter)) {
      if (isoMap.get(letter) != word2[index]) return false
    } else {
      if (values.has(word2[index])) return false

      isoMap.set(letter, word2[index]);
      values.add(word2[index]);
    }
  }

  return true
}





// Assign Cookies
// https://leetcode.com/problems/assign-cookies/description/
console.log(findContentChildren([1, 2, 3], [1, 1]), 1)
console.log(findContentChildren([1, 2], [1, 2, 3]), 2)
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]), 2)


/**
 * @param {number[]} children
 * @param {number[]} cookies
 * @return {number}
 */
var findContentChildren = function (children, cookies) {
  children.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);
  let left = 0;

  for (let right = 0; right < cookies.length; right++) {
    const cookie = cookies[right];

    if (children[left] <= cookie) {   // if child is content
      left++;  // move to the next child
    }
  }

  return left
}





// Maximum Number of Vowels in a Substring of Given Length
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/
console.log(maxVowels("abciiidef", 3), 3)
console.log(maxVowels("aeiou", 2), 2)
console.log(maxVowels("leetcode", 3), 2)


/**
 * @param {string} word
 * @param {number} substringLength
 * @return {number}
 */
var maxVowels = function(word, substringLength) {
  const vovels = 'aeoiu';
  let left = 0;
  let vovelCounter = 0;
  let maxVovels = 0;

  for (let right = 0; right < word.length; right++) {
      const letter = word[right];

      if (vovels.includes(letter)) {
          vovelCounter++;
      }

      if (right - left + 1 === substringLength + 1) {
          const leftLetter = word[left];
          left++;

          if (vovels.includes(leftLetter)) {
              vovelCounter--;
          }
      }

      if (vovelCounter > maxVovels) maxVovels = vovelCounter
  }

  return maxVovels
}





// Asteroid Collision
// https://leetcode.com/problems/asteroid-collision/description/
console.log(asteroidCollision([5, 10, -5]), [5, 10])
console.log(asteroidCollision([8, -8]), [])
console.log(asteroidCollision([10, 2, -5]), [10])
console.log(asteroidCollision([-2, -1, 1, 2]), [-2, -1, 1, 2])
console.log(asteroidCollision([1, 2, -5]), [-5])
console.log(asteroidCollision([-2, -2, 1, -2]), [-2, -2, -2])
console.log(asteroidCollision([-2, -1, 1, -2]), [-2, -1, -2])
console.log(asteroidCollision([-2, 2, 1, -2]), [-2])


/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  let asteroid;

  for (asteroid of asteroids) {
    while (stack.length !== 0 &&
      asteroid < 0 &&
      stack[stack.length - 1] > 0
    ) {
      const diff = stack[stack.length - 1] + asteroid;

      if (diff === 0) {
        stack.pop();
        asteroid = 0;
      } else if (diff > 0) {
        asteroid = 0;
      } else {
        stack.pop();
      }
    }
    
    if (asteroid !== 0) stack.push(asteroid);
  }

  return stack
}





// Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/description/
console.log(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100])
console.log(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121])
console.log(sortedSquares([1, 2, 3]), [1, 4, 9])
console.log(sortedSquares([-3, -2, -1]), [1, 4, 9])
console.log(sortedSquares([0]), [0])
console.log(sortedSquares([0, 1]), [0, 1])
console.log(sortedSquares([-10000, -9999, -7, -5, 0, 0, 10000]), [0, 0, 25, 49, 99980001, 100000000, 100000000])
console.log(sortedSquares([-1, 1]), [1, 1])
console.log(sortedSquares([-1, 1, 1]), [1, 1, 1])
console.log(sortedSquares([-3, -3, -2, 1]), [1, 4, 9, 9])


/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var sortedSquares = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;
  const sortedSquaresList = [];

  while (left <= right) {
    if (numbers[left] ** 2 > numbers[right] ** 2) {
      sortedSquaresList.push(numbers[left] ** 2);
      left++;
    } else {
      sortedSquaresList.push(numbers[right] ** 2);
      right--;
    }
  }

  return sortedSquaresList.reverse()
}





// Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  return slow
}





// Can Place Flowers
// https://leetcode.com/problems/can-place-flowers/description/
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1), true)
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2), false)
console.log(canPlaceFlowers([1, 0, 0, 0], 1), true)
console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0), true)
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1), true)
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2), true)
console.log(canPlaceFlowers([0, 0, 0], 2), true)


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let spaces = 1;

  for (const place of flowerbed) {
    if (place) {
      if (spaces > 2) {
        n -= (spaces - 1) / 2 | 0
      }

      if (n <= 0) return true

      spaces = 0;
    } else {
      spaces++
    }
  }
  n -= spaces / 2 | 0

  return n <= 0
}





// Find First Palindromic String in the Array
// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']), 'ada')
console.log(firstPalindrome(['notapalindrome', 'racecar']), 'racecar')
console.log(firstPalindrome(['def', 'ghi']), '')


/**
 * O(n), O(1)
 * build-in function
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    if (word === word.split('').reverse().join('')) return word
  }

  return ''
}


/**
 * O(n), O(1)
 * two pointers
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
      if (word[left] !== word[right]) break

      left++;
      right--;
    }

    if (left >= right) return word
  }

  return ''
}





// Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/description/
console.log(sortArrayByParity([3, 1, 2, 4]), [2, 4, 3, 1])
console.log(sortArrayByParity([1, 2, 3, 4]), [2, 4, 3, 1])
console.log(sortArrayByParity([0]), [0])


/**
 * O(n), O(1)
 * two pointers
 * @param {number[]} numbers
 * @return {number[]}
 */
var sortArrayByParity = function (numbers) {
  let left = 0;

  for (let right = 0; right < numbers.length; right++) {
    const number = numbers[right];

    if (number % 2 === 0) {
      [numbers[left], numbers[right]] = [numbers[right], numbers[left]]
      left++;
    }
  }

  return numbers
}





// Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA != nodeB) {
    nodeA = nodeA === null ? headB : nodeA.next;
    nodeB = nodeB === null ? headA : nodeB.next;
  }

  return nodeA
}





// Majority Element
// https://leetcode.com/problems/majority-element/description/
console.log(majorityElement([3, 2, 3]), 3)
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2)


/**
 * @param {number[]} numbers
 * @return {number}
 */
var majorityElement = function (numbers) {
  let [key, value] = [0, 0];

  for (const number of numbers) {
    if (value === 0) key = number;

    value += key === number ? 1 : -1;
  }

  return key
}





// Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/
console.log(reverseWords("Let's take LeetCode contest"), "s'teL ekat edoCteeL tsetnoc")
console.log(reverseWords("Mr Ding"), "rM gniD")
console.log(reverseWords("hehhhhhhe"), "ehhhhhheh")


/**
 * O(n), O(n)
 * build-in function
 * @param {string} text
 * @return {string}
 */
var reverseWords = function (text) {
  return text
    .split('')
    .reverse()
    .join(' ')
    .split(' ')
    .reverse()
    .join('')
}





// Minimum Number of Flips to Make the Binary String Alternating
// https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/description/
console.log(minFlips("111000"), 2)
console.log(minFlips("010"), 0)
console.log(minFlips("1110"), 1)


/**
 * O(n), O(n)
 * sliding window
 * @param {string} numbers
 * @return {number}
 */
var minFlips = function (numbers) {
  let left = 0
  const targetA = '01'.repeat(numbers.length);
  const targetB = '10'.repeat(numbers.length);
  const doubleNumbers = numbers.repeat(2);
  let flipA = 0;
  let flipB = 0;
  let minFlipA = numbers.length;
  let minFlipB = numbers.length;
  
  for (let right = 0; right < doubleNumbers.length; right++) {
      const number = doubleNumbers[right];

      if (number !== targetA[right]) flipA++;
      if (number !== targetB[right]) flipB++;

      if (right - left + 1 === numbers.length) {
          minFlipA = Math.min(minFlipA, flipA);
          minFlipB = Math.min(minFlipB, flipB);

          if (minFlipA === 0 || minFlipB === 0) return 0

          if (doubleNumbers[left] !== targetA[left]) flipA--;
          if (doubleNumbers[left] !== targetB[left]) flipB--;

          left++;
      }
  }

  return Math.min(minFlipA, minFlipB)
}





// Online Stock Span
// https://leetcode.com/problems/online-stock-span/description/


/**
 * O(n2), O(n)
 * stack
 */
class StockSpanner {
  constructor() {
    this.prices = [];  // [price, counter]
  }

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let right = this.prices.length - 1;
    let counter = 1;

    while (
      right >= 0 &&
      price >= this.prices[this.prices.length - 1][0]
    ) {
      const [_, currentCounter] = this.prices.pop()
      counter += currentCounter;
      right--;
    }

    this.prices.push([price, counter]);

    return counter;
  }
}


/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var StockSpannerObj = new StockSpanner()
console.log(StockSpannerObj.next(100))
console.log(StockSpannerObj.next(80))
console.log(StockSpannerObj.next(60))
console.log(StockSpannerObj.next(70))



/**
 * O(n2), O(n)
 * brute force
 */
class StockSpanner {
  constructor() {
    this.prices = [];
  }
  
  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    this.prices.push(price);
    let counter = 0;

    for (const currentPrice of this.prices.slice().reverse()) {
      if (price >= currentPrice) {
        counter++;
      } else break;
    }

    return counter;
  }
}





// Valid Perfect Square
// https://leetcode.com/problems/valid-perfect-square/description/
console.log(isPerfectSquare(16), true)
console.log(isPerfectSquare(14), false)


/**
 * O(logn), O(1)
 * binary search
 * @param {number} number
 * @return {boolean}
 */
var isPerfectSquare = function (number) {
  let left = 0;
  let right = number;

  while (left <= right) {
    const middle = (left + right) / 2 | 0;

    if (middle ** 2 === number) return true
    else if (middle ** 2 > number) {
      right = middle - 1;
    } else left = middle + 1;
  }

  return false
}





// Merge In Between Linked Lists
// https://leetcode.com/problems/merge-in-between-linked-lists/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * O(n), O(1)
 * linked list
 * @param {ListNode} head1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} head2
 * @return {ListNode}
 */
var mergeInBetween = function (head1, a, b, head2) {
  let node = head1;
  let counter = 0;
  let start = node;

  while (counter !== b + 1) {
    if (counter === a - 1) {
      start = node;
    }

    counter++;
    node = node.next;
  }

  start.next = head2;
  while (head2.next) head2 = head2.next;
  head2.next = node;

  return head1
}





// Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/description/
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1])
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]), [3, -1])
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]), [7, 7, 7, 7, 7])


/**
 * O(n), O(1)
 * stack
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @return {number[]}
 */
var nextGreaterElement = function (numbers1, numbers2) {
  const numbers1Index = new Map(numbers1.map((number, index) => [number, index]));
  const stack = [];
  const nextGreater = new Array(numbers1.length).fill(-1);

  for (const number of numbers2) {
    while (number > stack[stack.length - 1]) {
      const value = stack.pop();
      const index = numbers1Index.get(value);
      nextGreater[index] = number;
    }
    
    if (numbers1Index.has(number)) {
      stack.push(number);
    }
  }
  return nextGreater
}





// Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/description/
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2)
console.log(minSubArrayLen(4, [1, 4, 4]), 1)
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]), 0)

/**
 * O(n), O(1)
 * sliding window
 * @param {number} target
 * @param {number[]} numbers
 * @return {number}
 */
var minSubArrayLen = function (target, numbers) {
  let left = 0;
  let windowSum = 0;
  let windowLength = numbers.length + 1;

  for (let right = 0; right <= numbers.length; right++) {
    const number = numbers[right];
    windowSum += number;

    while (windowSum >= target) {
      windowLength = Math.min(windowLength, right - left + 1);
      windowSum -= numbers[left];
      left++;
    }
  }

  return windowLength === numbers.length + 1 ? 0 : windowLength
}





// Backspace String Compare
// https://leetcode.com/problems/backspace-string-compare/description/
console.log(backspaceCompare("ab#c", "ad#c"), true)
console.log(backspaceCompare("ab##", "c#d#"), true)
console.log(backspaceCompare("a#c", "b"), false)
console.log(backspaceCompare("xywrrmp", "xywrrmu#p"), true)
console.log(backspaceCompare("nzp#o#g", "b#nzp#o#g"), true)


function nextValidChar(index, text) {
  let joker = 0;

  while (index >= 0 && (text[index] == '#' || joker)) {
    text[index] == '#' ? joker++ : joker--;
    index--;
  }

  return index
}

/**
 * O(n), O(1)
 * two pointers
 * @param {string} text1
 * @param {string} text2
 * @return {boolean}
 */
var backspaceCompare = function (text1, text2) {
  let index1 = text1.length - 1;
  let index2 = text2.length - 1;

  while (index1 >= 0 && index2 >= 0) {
    index1 = nextValidChar(index1, text1);
    index2 = nextValidChar(index2, text2);

    if (text1[index1] !== text2[index2]) return false

    if (index1 === 0 && index2 === 0) return true

    index1--;
    index2--;
  }
  return nextValidChar(index1, text1) === nextValidChar(index2, text2)
}





// Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/description/
console.log(pivotIndex([1, 7, 3, 6, 5, 6]), 3)
console.log(pivotIndex([1, 2, 3]), -1)
console.log(pivotIndex([2, 1, -1]), 0)


/**
 * O(n), O(1)
 * prefix sum
 * @param {number[]} numbers
 * @return {number}
 */
var pivotIndex = function (numbers) {
  let rightSum = numbers.reduce((total, current) => total + current);
  let leftSum = 0;

  for (let index = 0; index <= numbers.length; index++) {
    const number = numbers[index];
    rightSum -= number;
    leftSum += index === 0 ? 0 : numbers[index - 1];

    if (leftSum === rightSum) return index

  }
  return -1
}





// Find K Closest Elements
// https://leetcode.com/problems/find-k-closest-elements/description/
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3), [1, 2, 3, 4])
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1), [1, 1, 2, 3])


/**
 * O(n), O(1)
 * sliding window
 * @param {number[]} numbers
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (numbers, k, x) {
  let left = 0;
  let right = numbers.length - 1;

  while (right - left + 1 > k) {
    const leftAbs = Math.abs(numbers[left] - x);
    const rightAbs = Math.abs(numbers[right] - x);
    leftAbs > rightAbs ? left++ : right--;
    
  }
  return numbers.slice(left, right + 1)
}


/**
 * O(n), O(n)
 * brute force
 * @param {number[]} numbers
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (numbers, k, x) {
  while (numbers.length > k) {
    const left = Math.abs(numbers[0] - x);
    const right = Math.abs(numbers[numbers.length - 1] - x);

    left > right ? numbers.shift() : numbers.pop();
  }
  return numbers
}





// Range Sum Query - Immutable
// https://leetcode.com/problems/range-sum-query-immutable/description/


/**
   * # O(1), O(n)
   * prefix sum
   */
class NumArray {
  /**
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.prefixes = [];
    let prefix = 0;

    for (const number of numbers) {
      prefix += number;
      this.prefixes.push(prefix);
    }
  }
  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    if (left) return this.prefixes[right] - this.prefixes[left - 1];
    else return this.prefixes[right];
  }
}


/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */


/**
 * O(n), O(1)
 */
/**
 * @param {number[]} numbers
 */
var NumArray = function (numbers) {
  this.numbers = numbers;
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return (
    this.numbers.
      slice(left, right + 1).
      reduce((total, current) => total + current)
  )
}





// Check If Two String Arrays are Equivalent
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/
console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']), true)
console.log(arrayStringsAreEqual(['a', 'cb'], ['ab', 'c']), false)
console.log(arrayStringsAreEqual(['abc', 'd', 'defg'], ['abcddefg']), true)
console.log(arrayStringsAreEqual(['abc', 'd', 'defg'], ['abcddef']), false)


/**
 * O(n), O(n)
 * buind-in function
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (words1, words2) {
  return words1.join('') == words2.join('')
}


/**
 * O(n), O(1)
 * two pointers
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (words1, words2) {
  let indexWord1 = 0;
  let indexWord2 = 0;
  let indexLetter1 = 0;
  let indexLetter2 = 0;

  while (
    indexWord1 < words1.length &&
    indexWord2 < words2.length
  ) {
    if (words1[indexWord1][indexLetter1] != words2[indexWord2][indexLetter2]) return false

    indexLetter1++;
    indexLetter2++;

    if (indexLetter1 == words1[indexWord1].length) {
      indexLetter1 = 0;
      indexWord1++;
    }
    if (indexLetter2 == words2[indexWord2].length) {
      indexLetter2 = 0;
      indexWord2++;
    }
  }

  return (
    indexWord1 == words1.length &&
    indexWord2 == words2.length
  )
}





// Minimum Operations to Reduce X to Zero
// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/description/
console.log(minOperations([1, 1, 4, 2, 3], 5), 2)
console.log(minOperations([5, 6, 7, 8, 9], 4), -1)
console.log(minOperations([3, 2, 20, 1, 1, 3], 10), 5)
console.log(minOperations([5, 2, 3, 1, 1], 5), 1)
console.log(minOperations([8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309], 134365), 16)


/**
 * O(n), O(1)
 * sliding window
 * @param {number[]} numbers
 * @param {number} x
 * @return {number}
 */
var minOperations = function (numbers, x) {
  let windowLength = numbers.length + 1;
  let windowSum = 0;
  let left = 0;
  const target = numbers.reduce((total, current) => total + current) - x

  for (let right = 0; right < numbers.length; right++) {
    const number = numbers[right];
    windowSum += number;

    while (left <= right && windowSum > target) {
      windowSum -= numbers[left];
      left += 1;
    }

    if (windowSum == target) {
      windowLength = Math.min(windowLength, numbers.length - (right - left + 1));
    }
  }

  return windowLength == numbers.length + 1 ? -1 : windowLength
}





// Simplify Path
// https://leetcode.com/problems/simplify-path/description/
console.log(simplifyPath("/home/"), "/home")
console.log(simplifyPath("/home//foo/"), "/home/foo")
console.log(simplifyPath("/home/user/Documents/../Pictures"), "/home/user/Pictures")
console.log(simplifyPath("/../"), "/")
console.log(simplifyPath("/.../a/../b/c/../d/./"), "/.../b/d")
console.log(simplifyPath("/a/../../b/../c//.//"), "/c")
console.log(simplifyPath("/."), "/")
console.log(simplifyPath("/..hidden"), "/..hidden")


/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  path += '/';
  let cache = '';

  for (const char of path) {
    if (char === '/') {
      if (cache == '..') stack.pop()
      else if (cache && cache != '.') stack.push(cache)
      cache = '';
    }
    else cache += char;
  }

  return '/' + stack.join('/')
}





// Sqrt(x)
// https://leetcode.com/problems/sqrtx/description/
console.log(mySqrt(4), 2)
console.log(mySqrt(8), 2)


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = x;

  while (left <= right) {
    const middle = (left + right) / 2 | 0;

    if (middle ** 2 === x) return middle
    else if (middle ** 2 > x) right = middle - 1;
    else left = middle + 1;
  }

  return right
}





// Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6])
console.log(findDisappearedNumbers([1, 1]), [2])


/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var findDisappearedNumbers = function (numbers) {
  const disappeared = [];

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    numbers[Math.abs(number) - 1] = -Math.abs(numbers[Math.abs(number) - 1]);
  }

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];

    if (number > 0) disappeared.push(index + 1);
  }

  return disappeared
}





// Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/description/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * O(n), O(n)
 * dfs, recursive
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const nodeList = [];

  var dfs = function (node) {
    if (node === null) return

    dfs(node.left);
    nodeList.push(node.val);
    dfs(node.right);
  }

  dfs(root)

  return nodeList
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * O(n), O(n)
 * dfs, iterative
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const nodeList = [];
  const stack = [];
  let node = root;

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    nodeList.push(node.val);
    node = node.right;
  }

  return nodeList
}





// Maximum Number of Balloons
// https://leetcode.com/problems/maximum-number-of-balloons/
console.log(maxNumberOfBalloons("nlaebolko"), 1)
console.log(maxNumberOfBalloons("loonbalxballpoon"), 2)
console.log(maxNumberOfBalloons("leetcode"), 0)
console.log(maxNumberOfBalloons("balon"), 0)


/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const balloon = { 'b': 1, 'a': 1, 'l': 2, 'o': 2, 'n': 1 }
  const textMap = new Map();
  let maxBalloons = text.length;

  for (const letter of text) {
    textMap.set(letter, (textMap.get(letter) || 0) + 1);
  }

  for (const letter in balloon) {
    if (textMap.has(letter)) {
      maxBalloons = Math.min(
        maxBalloons,
        textMap.get(letter) / balloon[letter] | 0)
    }
    else return 0
  }

  return maxBalloons
}





// Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/description/
console.log(preorderTraversal(buildTreeFromList([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9], TreeNode)), [1, 2, 4, 5, 6, 7, 3, 8, 9])
console.log(preorderTraversal(buildTreeFromList([1, null, 2, 3], TreeNode)), [1, 2, 3])
console.log(preorderTraversal(buildTreeFromList([], TreeNode)), [])
console.log(preorderTraversal(buildTreeFromList([1], TreeNode)), [1])


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * O(n), O(n)
 * dfs, recursion
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const nodeList = [];  // initialize the preorder traversal value list

  function dfs(node) {
    if (node === null) return  // if node is null return

    nodeList.push(node.val);  // add its value to node list
    dfs(node.left)  // traverse left
    dfs(node.right)  // traverse right
  }

  dfs(root)

  return nodeList
}


/**
 * O(n), O(n)
 * dfs, iteration, stack
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (root === null) return []  // if node is null return
  const nodeList = [];  // initialize the preorder traversal value list
  const stack = [root];  // Initialize the stack with the root node

  while (stack.length !== 0) {
    const stackLength = stack.length;

    for (let index = 0; index < stackLength; index++) {
      node = stack.pop();  // Pop the current node
      nodeList.push(node.val);  // add its value to node list

      if (node.right) stack.push(node.right);  // Add right child to the stack if it exists
      if (node.left) stack.push(node.left);  // Add left child to the stack if it exists
    }
  }

  return nodeList
}


/**
 * O(n), O(n)
 * dfs, iteration, stack
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const nodeList = [];  // initialize the preorder traversal value list
  const stack = [];  // Initialize an empty stack
  let node = root;  // Start traversal from the root node

  while (stack.length !== 0 || node) {
    if (node) {
      nodeList.push(node.val);  // Add current node's value to the result
      stack.push(node.right);  // Add right child to the stack even if it's null
      node = node.left;  // traverse left the left child
    }
    else node = stack.pop();  // Backtrack to the last right child
  }

  return nodeList
}





// Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/description/
console.log(postorderTraversal(buildTreeFromList([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9], TreeNode)), [4, 6, 7, 5, 2, 9, 8, 3, 1])
console.log(postorderTraversal(buildTreeFromList([1, null, 2, 3], TreeNode)), [3, 2, 1])
console.log(postorderTraversal(buildTreeFromList([], TreeNode)), [])
console.log(postorderTraversal(buildTreeFromList([1], TreeNode)), [1])


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * O(n), O(n)
 * dfs, recursion
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const nodeList = [];  // initialize the preorder traversal value list

  function dfs(node) {
    if (node === null) return  // if node is None return

    dfs(node.left)  // traverse left
    dfs(node.right)  // traverse right
    nodeList.push(node.val);  // add its value to node list
  }

  dfs(root)

  return nodeList
}





// Word Pattern
// https://leetcode.com/problems/word-pattern/description/
console.log(wordPattern('abba', 'dog cat cat dog'), true)
console.log(wordPattern('abba', 'dog cat cat fish'), false)
console.log(wordPattern('aaaa', 'dog cat cat dog'), false)


/**
 * @param {string} pattern
 * @param {string} text
 * @return {boolean}
 */
var wordPattern = function (pattern, text) {
  const textList = text.split(' ');  // split text into words
  const letterToWord = new Map();  // letter to word map
  const wordToLetter = new Map();  // word to letter map

  if (pattern.length != textList.length) return false  // if text list length and pattern length are not the same

  for (let index = 0; index < pattern.length; index++) {
    const letter = pattern[index];  // current letter
    const word = textList[index];  // current word

    if (
      letterToWord.has(letter) &&  // if letter is already mapped to another word
      letterToWord.get(letter) != word
    )
      return false
    if (
      wordToLetter.has(word) &&  // if word is already mapped to another letter
      wordToLetter.get(word) != letter
    )
      return false

    letterToWord.set(letter, word);  // update map
    wordToLetter.set(word, letter);  // update map
  }

  return true
}





// Remove Duplicates from Sorted Array II
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]), 5)
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]), 7)


/**
 * O(n), O(1)
 * two pointers
 * @param {number[]} numbers
 * @return {number}
 */
var removeDuplicates = function (numbers) {
  let left = 0;

  for (let right = 0; right < numbers.length; right++) {
    if (right < 2 || numbers[right] > numbers[left - 2]) {
      numbers[left] = numbers[right]
      left++;
    }
  }

  return left
}





// Get Equal Substrings Within Budget
// https://leetcode.com/problems/get-equal-substrings-within-budget/description/
console.log(equalSubstring("abcd", "bcdf", 3), 3)
console.log(equalSubstring("abcd", "cdef", 3), 1)
console.log(equalSubstring("abcd", "acde", 0), 1)

/**
 * O(n), O(1)
 * sliding window
 * @param {string} text1
 * @param {string} text2
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (text1, text2, maxCost) {
  let left = 0;
  let windowLength = 0;

  for (let right = 0; right < text1.length; right++) {
    maxCost -= Math.abs(text1[right].charCodeAt(0) - text2[right].charCodeAt(0));

    while (maxCost < 0) {
      maxCost += Math.abs(text1[left].charCodeAt(0) - text2[left].charCodeAt(0));
      left++;
    }

    windowLength = Math.max(windowLength, right - left + 1);
  }

  return windowLength
}





// Decode String
// https://leetcode.com/problems/decode-string/description/
console.log(decodeString("3[a]2[bc]"), "aaabcbc")
console.log(decodeString("3[a2[c]]"), "accaccacc")
console.log(decodeString("2[abc]3[cd]ef"), "abcabccdcdcdef")


/**
 * O(n), O(n)
 * stack
 * @param {string} text
 * @return {string}
 */
var decodeString = function (text) {
  const stack = [];

  for (let index = 0; index < text.length; index++) {
    const char = text[index];

    if (char != ']') stack.push(char)
    else {
      let word = '';

      while (stack[stack.length - 1] != '[') {
        word = stack.pop() + word;
      }

      stack.pop();
      let number = '';

      while (
        stack[stack.length - 1] >= '0' &&
        stack[stack.length - 1] <= '9'
      ) {
        number = stack.pop() + number;
      }

      stack.push(word.repeat(number));
    }
  }

  return stack.join('')
}





// Single Element in a Sorted Array
// https://leetcode.com/problems/single-element-in-a-sorted-array/description/
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]), 2)
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]), 10)
console.log(singleNonDuplicate([1, 2, 2]), 1)
console.log(singleNonDuplicate([1]), 1)


/**
 * O(logn), O(1)
 * binary search
 * @param {number[]} numbers
 * @return {number}
 */
var singleNonDuplicate = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const middle = left + (right - left) / 2 | 0;
    const middleNumber = numbers[middle];

    if (middleNumber === numbers[middle - 1]) {  // middle number same as previous one
      if ((middle - 1) % 2) right = middle - 1  // if the previous index is odd  check the left part
      else left = middle + 1  // if even check the right part
    } else if (middleNumber === numbers[middle + 1]) {  // middle number same as next one
      if ((middle + 1) % 2) left = middle + 1  // if the next index is odd check the right part
      else right = middle - 1  // if even check the left part
    } else return middleNumber
  }
}





// Remove Nodes From Linked List
// https://leetcode.com/problems/remove-nodes-from-linked-list/description/


/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * O(n), O(1)
 * linked list
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  function reverseLinkedList(node) {
    let previous = null;

    while (node) {
      const nextNode = node.next;
      node.next = previous;
      previous = node;
      node = nextNode;
    }

    return previous
  }

  const reversedHead = reverseLinkedList(head);
  let node = reversedHead;
  let maxValue = node.val;

  while (node.next) {
    if (node.next.val < maxValue) {
      node.next = node.next.next;
    } else {
      maxValue = Math.max(maxValue, node.next.val);
      node = node.next;
    }
  }

  return reverseLinkedList(reversedHead)
}

const nodeList = [5, 2, 13, 3, 8]

function listToLinkedlist(nodeList) {
  const anchor = new ListNode()
  let node = anchor

  for (let static_node of nodeList) {
    node.next = new ListNode(static_node)
    node = node.next
  }

  node.next = null

  return anchor.next
}

const linkedlist_1 = listToLinkedlist(nodeList)
console.log(linkedlist_1.val)

function linkedlistToList(node) {
  const nodeList = []

  while (node) {
    nodeList.push(node.val)
    node = node.next
  }

  return nodeList
}

console.log(linkedlistToList(linkedlist_1))

console.log(linkedlistToList(removeNodes((listToLinkedlist([5, 2, 13, 3, 8])))), [13, 8])
console.log(linkedlistToList(removeNodes((listToLinkedlist([1, 1, 1, 1])))), [1,1,1,1])

console.log(
    linkedlistToList(
        removeNodes((
            listToLinkedlist([5, 2, 13, 3, 8])))), [13, 8])





// Convert Sorted Array to Binary Search Tree
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * O(n), O(1)
 * binary treee
 * @param {number[]} numbers
 * @return {TreeNode}
 */
var sortedArrayToBST = function (numbers) {
  if (numbers.length === 0) return null

  const left = 0;
  const right = numbers.length - 1;
  const middle = left + ((right - left) / 2) | 0;
  const middleNumber = numbers[middle];
  const node = new TreeNode(middleNumber);
  node.left = sortedArrayToBST(numbers.slice(0, middle));
  node.right = sortedArrayToBST(numbers.slice(middle + 1,))

  return node
}





// Merge Two Binary Trees
// https://leetcode.com/problems/merge-two-binary-trees/description/
print(levelOrderTraversal(Solution().mergeTrees(buildTreeFromList([1, 3, 2, 5]), buildTreeFromList([2, 1, 3, None, 4, None, 7]))))


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * # O(n), O(n)
 * # binary search
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null
  if (!root1) root1 = new TreeNode();
  if (!root2) root2 = new TreeNode();

  const root = new TreeNode(root1.val + root2.val);
  root.left = mergeTrees(root1.left, root2.left);
  root.right = mergeTrees(root1.right, root2.right);

  return root
}





// Design HashSet
// https://leetcode.com/problems/design-hashset/description/


class LinkNode {
  constructor(val = 0) {
    this.val = val;
    this.next = null;
  }
}

var MyHashSet = function () {
  this.set = Array.from({ length: 10 ** 4 }, () => new LinkNode())
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  let node = this.set[key % this.set.length];

  while (node.next) {
    if (node.next.val === key) return
    node = node.next;
  }
  node.next = new LinkNode(key);
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let node = this.set[key % this.set.length];

  while (node.next) {
    if (node.next.val === key) {
      node.next = node.next.next;
      return
    }
    node = node.next;
  }
}

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  let node = this.set[key % this.set.length];

  while (node.next) {
    if (node.next.val === key) return true
    node = node.next;
  }
  return false
}

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */





// 4Sum
// https://leetcode.com/problems/4sum/description/
console.log(fourSum([1, 0, -1, 0, -2, 2], 0), [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]])
console.log(fourSum([2, 2, 2, 2, 2], 8), [[2, 2, 2, 2]])
console.log(fourSum([0, 0, 0, 0], 0), [[0, 0, 0, 0]])


/**
 * O(n3), O(1)
 * two pointers
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (numbers, target) {
  numbers.sort((a, b) => a - b);
  const quarduplets = [];

  for (let index1 = 0; index1 < numbers.length - 3; index1++) {
    const number1 = numbers[index1];
    if (number1 === numbers[index1 - 1]) continue

    for (let index2 = index1 + 1; index2 < numbers.length - 2; index2++) {
      const number2 = numbers[index2];
      if (index2 > index1 + 1 && number2 === numbers[index2 - 1]) continue

      let left = index2 + 1;
      let right = numbers.length - 1;

      while (left < right) {
        const quarduplet = number1 + number2 + numbers[left] + numbers[right];

        if (quarduplet < target) left++;
        else if (quarduplet > target) right--;
        else {
          quarduplets.push([number1, number2, numbers[left], numbers[right]])
          left++;
          right--;
          while (numbers[left] === numbers[left - 1]) left++;
        }
      }
    }
  }
  return quarduplets
}





// Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/description/


class TrieNode {
  constructor() {
    this.children = new Map();
    this.lastWord = false;
  }
}

/**
 * O(n), O(n)
 * map
 */
var Trie = function () {
  this.root = new TrieNode();
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (const letter of word) {
    if (!node.children.has(letter)) node.children.set(letter, new TrieNode());
    node = node.children.get(letter);
  }
  node.lastWord = true;
}

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;

  for (const letter of word) {
    if (!node.children.has(letter)) return false
    node = node.children.get(letter);
  }
  return node.lastWord
}

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  for (const letter of prefix) {
    if (!node.children.has(letter)) return false
    node = node.children.get(letter);
  }
  return true
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True





// Design HashMap
// https://leetcode.com/problems/design-hashmap/description/


class ListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
  }
}

var MyHashMap = function () {
 this.hashMap = new Array(10**4);
};

/** 
 * O(1), O(n)
 * linked list
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, val) {
  const index = key % this.hashMap.length;
  if (!this.hashMap[index]) this.hashMap[index] = new ListNode();
  let node = this.hashMap[index];

  while (node.next) {
    if (node.next.key === key) {
      node.next.val = val;
      return
    }
    node = node.next;
  }
  node.next = new ListNode(key, val)
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const index = key % this.hashMap.length;
  if (!this.hashMap[index]) return -1
  let node = this.hashMap[index];

  while (node.next) {
    if (node.next.key === key) {
      return node.next.val
    }
    node = node.next;
  }
  return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = key % this.hashMap.length;
  if (!this.hashMap[index]) return
  let node = this.hashMap[index];

  while (node.next) {
    if (node.next.key === key) {
      node.next = node.next.next;
      return
    }
    node = node.next;
  }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */





// Rotate Array
// https://leetcode.com/problems/rotate-array/description/
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4])
console.log(rotate([-1, -100, 3, 99], 2), [3, 99, -1, -100])
console.log(rotate([-1], 2), [-1])
console.log(rotate([1, 2], 3), [2, 1])


/**
 * O(n), O(n)
 * reverse
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  function reverseString(nums, left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  k = k % nums.length;
  reverseString(nums, 0, nums.length - 1);
  reverseString(nums, 0, k - 1);
  reverseString(nums, k, nums.length - 1);

  return nums
}


/**
 * O(n), O(n)
 * slice
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const index = nums.length - k;

  return [...nums.slice(index,), ...nums.slice(0, index + 1)]
}


/**
 * O(n), O(n)
 * iteration
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const numsCopy = Array(nums.length);
  
  for (let index = 0; index < nums.length; index++) {
    numsCopy[(index + k) % nums.length] = nums[index]
  }
  nums = numsCopy;

  return nums
}





// Binary Subarrays With Sum
// https://leetcode.com/problems/binary-subarrays-with-sum/description/
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2), 4)
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0), 15)


/**
 * O(n3), O(n)
 * brute force
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const subarraySum = nums
        .slice(i, j + 1)
        .reduce((total, current) => total + current);

      if (subarraySum === goal) counter++;
      else if (subarraySum > goal) break
    }
  }
  return counter
}





// Remove K Digits
// https://leetcode.com/problems/remove-k-digits/description/
console.log(removeKdigits("1432219", 3), "1219")
console.log(removeKdigits("10200", 1), "200")
console.log(removeKdigits("10", 2), "0")
console.log(removeKdigits("9", 1), "0")
console.log(removeKdigits("112", 1), "11")
console.log(removeKdigits("1173", 2), "11")


/**
 * # O(n), O(n)
 * stack
 * @param {string} numbers
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (numbers, k) {
  if (numbers.length == k) return "0"

  let stack = [];

  for (const number of numbers.split('')) {
    while (k &&
      stack[stack.length - 1] > number
    ) {
      stack.pop();
      k--;
    }

    stack.push(number);
  }

  stack = stack.slice(0, stack.length - k)

  stack.reverse();
  while (stack.length > 1 &&
    stack[stack.length - 1] === "0"
  ) stack.pop()
  stack.reverse();

  return stack.join('')
}





// Find Peak Element
// https://leetcode.com/problems/find-peak-element/description/
console.log(findPeakElement([1, 2, 3, 1]), 2)
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]), 5)
console.log(findPeakElement([1]), 0)
console.log(findPeakElement([1, 2]), 1)


/**
 * O(logn), O(1)
 * binary search
 * @param {number[]} numbers
 * @return {number}
 */
var findPeakElement = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const middle = left + (right - left) / 2 | 0;
    const middleNumber = numbers[middle];
    const previous = middle === 0 ? middleNumber - 1 : numbers[middle - 1];
    const next = middle === numbers.length - 1 ? middleNumber - 1 : numbers[middle + 1];

    if (
      previous < middleNumber &&
      middleNumber > next
    ) return middle
    else if (next > previous) left = middle + 1;
    else right = middle - 1;
  }
}





// Maximum Twin Sum of a Linked List
// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * O(n), O(1)
 * linked list, three pass
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let twinSum = 0;
  let node = head;
  let index = 1;

  // find the length of the linked list
  while (node.next) {
    node = node.next;
    index++;
  }

  middle = index / 2;
  node = head;
  // fast forward to the right portion
  for (let index = 0; index < middle; index++) {
    node = node.next;
  }

  // reverse the right portion
  let previous = null;
  while (node) {
    const nextNode = node.next;
    node.next = previous;
    previous = node;
    node = nextNode;
  }

  // traverse through the list to find the twin sum
  while (previous) {
    twinSum = Math.max(twinSum, head.val + previous.val)
    head = head.next;
    previous = previous.next;
  }

  return twinSum
}





// Path Sum
// https://leetcode.com/problems/path-sum/description/
console.log(hasPathSum(buildTreeFromList([5, 4, 8, 11, None, 13, 4, 7, 2, None, None, None, 1]), 22), True)
console.log(hasPathSum(buildTreeFromList([1, 2, 3]), 5), False)
console.log(hasPathSum(buildTreeFromList([]), 0), False)


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  function dfs(node, targetSum) {
    if (!node) return false
    else if (
      !node.left &&
      !node.right &&
      targetSum - node.val === 0
    ) return true

    return (dfs(node.left, targetSum - node.val) ||
      dfs(node.right, targetSum - node.val))
  }

  return dfs(root, targetSum)
}





// Sum of All Subset XOR Totals
// https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/
console.log(subsetXORSum([1, 3]), 6)
console.log(subsetXORSum([5, 1, 6]), 28)
console.log(subsetXORSum([3, 4, 5, 6, 7, 8]), 480)


/**
 * O(n2^n), O(n)
 * backtracking
 * @param {number[]} numbers
 * @return {number}
 */
var subsetXORSum = function (numbers) {
  const subset = [];
  const subsetSum = [];

  function dfs(index) {
    if (index === numbers.length) {
      let current = 0;
      for (const digit of subset) current ^= digit;
      subsetSum.push(current);
      return
    }

    subset.push(numbers[index]);
    dfs(index + 1)
    subset.pop();
    dfs(index + 1)
  }

  dfs(0)
  return subsetSum.reduce((total, current) => total + current)
}





// Combinations
// https://leetcode.com/problems/combinations/description/
console.log(combine(4, 2), [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])
console.log(combine(1, 1), [[1]])


/**
 * O(n^k), O(n)
 * backtracking
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const combinatioin = [];
  const combinatioinList = [];

  function dfs(index) {
    if (index === n) {
      if (combinatioin.length === k) {
        combinatioinList.push(combinatioin.slice())
      }
      return
    }

    combinatioin.push(index + 1);
    dfs(index + 1)
    combinatioin.pop();
    dfs(index + 1)
  }

  dfs(0)
  return combinatioinList
}





// Monotonic Array
// https://leetcode.com/problems/monotonic-array/description/
console.log(isMonotonic(1, 2, 2, 3), true)
console.log(isMonotonic(6, 5, 4, 4), true)
console.log(isMonotonic(1, 3, 2), false)


/**
 * O(n), O(1)
 * @param {number[]} numbers
 * @return {boolean}
 */
var isMonotonic = function (numbers) {
  let increasing = true;
  let decreasing = true;

  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index - 1] < numbers[index]) increasing = false;
    else if (numbers[index - 1] > numbers[index]) decreasing = false;
    if (!increasing && !decreasing) return false
  }
  return (increasing || decreasing)
}





// Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/description/
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]), 4)
console.log(numIdenticalPairs([1, 1, 1, 1]), 6)
console.log(numIdenticalPairs([1, 2, 3]), 0)


/**
 * # O(n), O(n)
 * @param {number[]} numbers
 * @return {number}
 */
var numIdenticalPairs = function (numbers) {
  const counter = new Map();
  let pairCounter = 0;

  for (const number of numbers) {
    counter.set(number, (counter.get(number) ?? 0) + 1);
  }

  for (const frequency of counter.values()) {
    pairCounter += frequency * (frequency - 1) / 2
  }

  return pairCounter
}





// Number of Subsequences That Satisfy the Given Sum Condition
// https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/description/
console.log(numSubseq([3, 5, 6, 7], 9), 4)
console.log(numSubseq([3, 3, 6, 8], 10), 6)
console.log(numSubseq([2, 3, 3, 4, 6, 7], 12), 61)
console.log(numSubseq([7, 10, 7, 3, 7, 5, 4], 12), 56)
console.log(numSubseq([14, 4, 6, 6, 20, 8, 5, 6, 8, 12, 6, 10, 14, 9, 17, 16, 9, 7, 14, 11, 14, 15, 13, 11, 10, 18, 13, 17, 17, 14, 17, 7, 9, 5, 10, 13, 8, 5, 18, 20, 7, 5, 5, 15, 19, 14], 22), 272187084)
console.log(numSubseq([9,25,9,28,24,12,17,8,28,7,21,25,10,2,16,19,12,13,15,28,14,12,24,9,6,7,2,15,19,13,30,30,23,19,11,3,17,2,14,20,22,30,12,1,11,2,2,20,20,27,15,9,10,4,12,30,13,5,2,11,29,5,3,13,22,5,16,19,7,19,11,16,11,25,29,21,29,3,2,9,20,15,9], 32), 91931447)


/**
 * O(nlogn), O(n)
 * two pointers
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (numbers, target) {
  numbers.sort((a, b) => a - b);
  let counter = 0;
  let right = numbers.length - 1;
  const mod = 10 ** 9 + 7;
  const powerOfTwo = [1];
  
  for (let index = 1; index < numbers.length; index++) {
    powerOfTwo[index] = powerOfTwo[index - 1] * 2 % mod
  }

  for (let left = 0; left < numbers.length; left++) {
    while (
      left <= right &&
      numbers[left] + numbers[right] > target
    ) right--;

    if (left <= right) {
      counter += powerOfTwo[right - left];
      counter %= mod;
    }
  }

  return Number(counter)
}





// Subarray Product Less Than K
// https://leetcode.com/problems/subarray-product-less-than-k/description/
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100), 8)
console.log(numSubarrayProductLessThanK([1, 2, 3], 0), 0)


/**
 * O(n), O(1)
 * sliding window
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (numbers, k) {
  let left = 0;
  let window = 1;
  let counter = 0;

  for (let right = 0; right < numbers.length; right++) {
    window *= numbers[right];

    while (
      left <= right &&
      window >= k
    ) {
      window /= numbers[left];
      left++;
    }

    counter += right - left + 1;
  }

  return counter
}





// Remove All Adjacent Duplicates in String II
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/description/
console.log(removeDuplicates('abcd', 2), 'abcd')
console.log(removeDuplicates('deeedbbcccbdaa', 3), 'aa')
console.log(removeDuplicates('pbbcggttciiippooaais', 2), 'ps')


/**
 * O(n), O(n)
 * stack
 * @param {string} letters
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (letters, k) {
  const stack = [];  // [[letter, frequency]]

  for (const letter of letters) {
    if (
      stack.length > 0 &&
      stack[stack.length - 1][0] === letter
    ) {
      stack[stack.length - 1][1] += 1;

      if (stack[stack.length - 1][1] === k)
        stack.pop();
    }
    else { stack.push([letter, 1]); }

  }

  return (stack
    .map(([letter, frequency]) => letter.repeat(frequency))
    .join(''))
}





// Successful Pairs of Spells and Potions
// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/
console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7), [4, 0, 3])
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16), [2, 0, 2])
console.log(successfulPairs([39, 34, 6, 35, 18, 24, 40], [27, 37, 33, 34, 14, 7, 23, 12, 22, 37], 43), [10, 10, 9, 10, 10, 10, 10])


/**
 * O(nlogn), O(n)
 * binary search
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  const successList = Array(spells.length).fill(0);

  for (let index = 0; index < spells.length; index++) {
    const spell = spells[index];
    let left = 0;
    let right = potions.length - 1;

    while (left < right) {
      const middle = left + (right - left) / 2 | 0;

      if (potions[middle] * spell < success) 
        left = middle + 1;
      else
        right = middle;
    }

    if (potions[right] * spell >= success)
      successList[index] = potions.length - right;
  }
  
  return successList
}





// Swapping Nodes in a Linked List
// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * O(n), O(1)
 * linked list, one pass
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let node = head;
  let left = head;
  let right = head;

  for (let index = 0; index < k - 1; index++) {
    left = left.next;
    node = node.next;
  }

  while (node.next) {
    node = node.next;
    right = right.next;
  }

  [left.val, right.val] = [right.val, left.val];

  return head
}





// Range Sum of BST
// https://leetcode.com/problems/range-sum-of-bst/description/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * O(n), O(n)
 * binary tree
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let total = 0;

  function dfs(node) {
    if (!node) return

    total += (node.val >= low && node.val <= high) ? node.val : 0;

    if (node.val > low) dfs(node.left);
    if (node.val < high) dfs(node.right);
  }

  dfs(root)
  return total
}


/**
 * O(n), O(n)
 * binary tree
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  function dfs(node) {
    if (!node) return 0

    return (
        ((node.val >= low && node.val <= high) ? node.val : 0) +
        (node.val > low ? dfs(node.left) : 0) +
        (node.val < high ? dfs(node.right) : 0)
    )
  }

  return dfs(root)
}





// Permutations II
// https://leetcode.com/problems/permutations-ii/description/
console.log(permuteUnique([1, 1, 2]), [[1, 2, 1], [2, 1, 1], [1, 1, 2]])
console.log(permuteUnique([1, 2, 3]), [[1, 3, 2], [1, 2, 3], [2, 1, 3], [3, 2, 1], [3, 1, 2], [2, 3, 1]])
console.log(permuteUnique([1]), [[1]])


/**
 * O(n!), O(n!)
 * backtracking, hash set
 * @param {number[]} numbers
 * @return {number[][]}
 */
var permuteUnique = function (numbers) {
  const permutationSet = new Set();

  const dfs = (left) => {
    if (left === numbers.length) {
      permutationSet.add(JSON.stringify(numbers));
      return
    }

    for (let right = left; right < numbers.length; right++) {
      [numbers[left], numbers[right]] = [numbers[right], numbers[left]];
      dfs(left + 1);
      [numbers[left], numbers[right]] = [numbers[right], numbers[left]];
    }
  }

  dfs(0);
  return Array.from(permutationSet).map((permutation) => JSON.parse(permutation))
}





// Pascal's Triangle II
// https://leetcode.com/problems/pascals-triangle-ii/description/
console.log(getRow(3), [1, 3, 3, 1])
console.log(getRow(0), [1])
console.log(getRow(1), [1, 1])
console.log(getRow(2), [1, 2, 1])


/**
 * O(n2), O(n)
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let row = [1];

  for (let index1 = 0; index1 < rowIndex; index1++) {
    const newRow = Array(index1 + 2).fill(1);

    for (let index2 = 0; index2 < index1;index2++) {
      newRow[index2 + 1] = row[index2] + row[index2 + 1];
    }

    row = newRow;
  }

  return row
}





// N-th Tribonacci Number
// https://leetcode.com/problems/n-th-tribonacci-number/description/
console.log(tribonacci(4), 4)
console.log(tribonacci(25), 1389537)
console.log(tribonacci(0), 0)


/**
 * O(n), O(n)
 * dp, bottom-up
 * @param {number} number
 * @return {number}
 */
var tribonacci = function (number) {
  const dp = Array(number + 1).fill(1);
  dp[0] = 0;

  for (let index = 3; index < number + 1; index++) {
    dp[index] = (
      dp[index - 1] +
      dp[index - 2] +
      dp[index - 3]);
  }

  return dp[number]
}


/**
 * O(n), O(1)
 * dp, bottom-up
 * @param {number} number
 * @return {number}
 */
var tribonacci = function (number) {
  const triplet = [0, 1, 1];
  
  for (let index = 3; index < number + 1; index++) {
    triplet[index % 3] = triplet.reduce((total, current) => total + current);
  }

  return triplet[number % 3]
}


/**
 * O(n), O(n)
 * dp, top-down with memoization, with inner function
 * @param {number} number
 * @return {number}
 */
var tribonacci = function (number) {
  const memo = new Map();
  
  function trib(number) {

    if (number === 0) return 0
    else if (number === 1 || number === 2) return 1
    else if (!memo.has(number)) {
      const value = trib(number - 1) + trib(number - 2) + trib(number - 3);
      memo.set(number, value)
    }

    return memo.get(number)
  }

  return trib(number);
}





// Find Words That Can Be Formed by Characters
// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/
console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'), 6)
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'), 10)


/**
 * O(n2), O(1)
 * hash map
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  function isWordGood(word) {
    const counterCopy = new Map(counter);

    for (const letter of word) {
      if (!counterCopy.has(letter)) 
        return false
      else {
        if (counterCopy.get(letter) === 0) 
          return false
        counterCopy.set(letter, counterCopy.get(letter) - 1);
      }
    }
    return true
  }


  const counter = new Map();  // {letter: frequency}
  let sumOfLengths = 0;

 for (const char of chars) {
  counter.set(char, (counter.get(char) || 0) + 1);
 }

 for (const word of words) {
  if (isWordGood(word))
    sumOfLengths += word.length;
 }
 
 return sumOfLengths
}





// Largest 3-Same-Digit Number in String
// https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/
console.log(largestGoodInteger("6777133339"), "777")
console.log(largestGoodInteger("2300019"), "000")
console.log(largestGoodInteger("42352338"), "")
console.log(largestGoodInteger("7678222622241118390785777474281834906756431393782326744172075725179542796491876218340"), "777")


/**
 * O(n), O(1)
 * @param {string} number
 * @return {string}
 */
var largestGoodInteger = function (number) {
  let triplet = '';

  for (let index = 0; index < number.length - 2; index++) {
    if (
      number[index] === number[index + 1] && 
      number[index + 1] === number[index + 2]
    ) {
      triplet = Math.max(triplet, (number[index]).repeat(3));
    }
  }
  return triplet.toString() === '0' ? '000' : triplet.toString()
}





// Array With Elements Not Equal to Average of Neighbors
// https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/description/
console.log(rearrangeArray([1, 2, 3, 4, 5]), [1, 5, 2, 4, 3])
console.log(rearrangeArray([1, 2, 3, 4]), [1, 4, 2, 3])
console.log(rearrangeArray([6, 2, 0, 9, 7]), [0, 9, 2, 7, 6])
console.log(rearrangeArray([1, 3, 2]), [1, 3, 2])


/**
 * O(nlogn), O(n)
 * two pointers
 * @param {number[]} numbers
 * @return {number[]}
 */
var rearrangeArray = function (numbers) {
  numbers.sort();
  const newNumbers = [];
  let left = 0;
  let right = numbers.length - 1;
  let index = 0;

  while (left < right) {
    newNumbers[index] = numbers[left];
    index++;
    newNumbers[index] = numbers[right];
    index++;
    left++;
    right--;
  }

  if (numbers.length % 2) 
    newNumbers[index] = numbers[numbers.length / 2 | 0];

  return newNumbers
}





// Length of Longest Subarray With at Most K Frequency
// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/description/
console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2), 6)
console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1), 2)
console.log(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4), 4)
console.log(maxSubarrayLength([1, 1, 2], 2), 3)
console.log(maxSubarrayLength([1, 4, 4, 3], 1), 2)


/**
 * O(n), O(n)
 * sliding window
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (numbers, k) {
  const counter = new Map();  // {number: frequency}
  let left = 0;
  let subarrayLength = 0;

  for (let right = 0; right < numbers.length; right++) {
    const number = numbers[right];
    counter.set(number, (counter.get(number) ?? 0) + 1);

    while (counter.get(number) > k) {
      counter.set(numbers[left], (counter.get(numbers[left])) - 1);
      left++;
    }

    subarrayLength = Math.max(subarrayLength, right - left + 1);
  }

  return subarrayLength
}





// Capacity To Ship Packages Within D Days
// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/submissions/1505021062/
console.log(shipWithinDays([1, 2, 3, 1, 1], 4), 3)
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 15)
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3), 6)


/**
 * O(nlogn), O(1)
 * binary search
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  function daysToShip(capacity) {
    let days = 1;
    let currentCapacity = capacity;

    for (const weight of weights) {
      if (currentCapacity - weight < 0) {
        days++;
        currentCapacity = capacity;
      }
      currentCapacity -= weight;
    }
    return days;
  }

  let lowCap = Math.max(...weights);
  let highCap = weights.reduce((total, current) => total + current);

  while (lowCap < highCap) {
    const capacity = (lowCap + highCap) / 2 | 0

    if (daysToShip(capacity) > days) {
      lowCap = capacity + 1;
    } else {
      highCap = capacity;
    }
  }

  return highCap
}





// Design Linked List
// https://leetcode.com/problems/design-linked-list/description/


var ListNode = function (val = 0, next = null, prev = null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
};

var MyLinkedList = function () {
  this.left = new ListNode();
  this.right = new ListNode();
  this.left.next = this.right;
  this.right.prev = this.left;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let next = this.left.next;
  let prev = this.left
  let node = new ListNode(val, next, prev);
  next.prev = node;
  prev.next = node;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let next = this.right;
  let prev = this.right.prev;
  let node = new ListNode(val, next, prev);
  next.prev = node;
  prev.next = node;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let node = this.left.next;

  while (index && node != this.right) {
    node = node.next;
    index--;
  }

  if (index === 0 && node != this.right)
    return node.val
  else
    return -1
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let next = this.left.next;

  while (index && next != this.right) {
    next = next.next;
    index--;
  }

  if (index === 0 && next) {
    let prev = next.prev;
    let node = new ListNode(val, next, prev);
    prev.next = node;
    next.prev = node;
  }
};
/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let node = this.left.next;

  while (index && node.next != this.right) {
    node = node.next;
    index--;
  }

  if (index === 0 && node && node != this.right) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
};


// left <–> head <–> ... <–> node <–> ... <–> tail <–> right –> None
/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */





// Leaf-Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/description/
console.log(leafSimilar(buildTreeFromList([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]), buildTreeFromList([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8])), true)
console.log(leafSimilar(buildTreeFromList([1, 2, 3]), buildTreeFromList([1, 3, 2])), false)
console.log(leafSimilar(buildTreeFromList([1, 2]), buildTreeFromList([2, 2])), true)
console.log(leafSimilar(buildTreeFromList([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null,null, 9, 11, null, null, 8, 10]), buildTreeFromList([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4])), false)
console.log(leafSimilar(buildTreeFromList([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]), buildTreeFromList([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 11, null, null, 8, 10])), false)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leafList = [];

  function dfs(node) {
    if (!node) return
    else if (!node.left && !node.right) {
      leafList.push(node.val);
      return
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root1)
  leafList.reverse();

  function dfs2(node) {
    if (!node) return true
    else if (!node.left && !node.right) {
      if (
        leafList &&
        node.val === leafList[leafList.length - 1]
      ) {
        leafList.pop();
        return true
      } else return false
    }

    return (
      dfs2(node.left) &&
      dfs2(node.right))
  }

  return (
    dfs2(root2) &&
    !leafList.length)
}





// Restore IP Addresses
// https://leetcode.com/problems/restore-ip-addresses/description/
console.log(restoreIpAddresses("25525511135"), ["255.255.11.135", "255.255.111.35"])
console.log(restoreIpAddresses("0000"), ["0.0.0.0"])
console.log(restoreIpAddresses("101023"), ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"])
console.log(restoreIpAddresses("000256"), [])


/**
 * O(1), O(1)
 * backtarcking
 * the recursion tree is bounded by 3**4 and validation within each call is O(1)
 * @param {string} text
 * @return {string[]}
 */
var restoreIpAddresses = function (text) {
  if (
    text.length < 4 ||
    text.length > 12) return []

  const ip = [];
  const ipList = [];

  function dfs(index) {
    if (index === text.length) {
      if (ip.length === 4) {
        ipList.push(ip
          .map((x) => x[0])
          .join('.')
        );
      }
      return
    }

    // check for 0:9
    ip.push([text[index]]);
    dfs(index + 1);
    ip.pop();

    // check for 10:99
    if (
      index < text.length - 1 &&
      text[index] != '0'
    ) {
      ip.push([text.slice(index, index + 2)]);
      dfs(index + 2);
      ip.pop();
    }

    // check for 100:255
    if (
      index < text.length - 2 &&
      text[index] != '0' &&
      text.slice(index, index + 3) <= '255'
    ) {
      ip.push([text.slice(index, index + 3)]);
      dfs(index + 3);
      ip.pop();
    }
  }

  dfs(0);
  return ipList
}





//Design Add and Search Words Data Structure
//https://leetcode.com/problems/design-add-and-search-words-data-structure/description/
const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return false
console.log(wordDictionary.search("bad")); // return true
console.log(wordDictionary.search(".ad")); // return true
console.log(wordDictionary.search("b..")); // return true


class TrieNode {
  constructor() {
    this.letters = new Map();
    this.isWord = false;
  }
}

/**
 * @return {TrieNode}
 */
var WordDictionary = function () {
  this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;

  for (const letter of word) {
    if (!node.letters.has(letter))
      node.letters.set(letter, new TrieNode());

    node = node.letters.get(letter);
  }

  node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  /** 
   * @param {number} left
   * @param {TrieNode} node
   * @return {boolean}
   */
  function dfs(left, node) {
    for (let right = left; right < word.length; right++) {
      const letter = word[right];

      if (letter === '.') {
        for (const valueNode of node.letters.values()) {
          if (dfs(right + 1, valueNode)) return true
        }
        return false
      } else {
        if (!node.letters.has(letter)) return false
        else node = node.letters.get(letter);
      }
    }
    return node.isWord
  }

  return dfs(0, this.root)
};


/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */





// Triangle
// https://leetcode.com/problems/triangle/description/
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]), 11)
console.log(minimumTotal([[-10]]), -10)


/**
 * O(n2), O(1)
 * dp, in-place
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      triangle[row][col] += Math.min(triangle[row + 1][col], triangle[row + 1][col + 1])
    }
  }
  return triangle[0][0]
}





// Kth Largest Element in a Stream
// https://leetcode.com/problems/kth-largest-element-in-a-stream/description/
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)); // return 4
console.log(kthLargest.add(5)) //  return 5
console.log(kthLargest.add(10)) //  return 5
console.log(kthLargest.add(9)) //  return 8
console.log(kthLargest.add(4)) //  return 8


import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number} k
 * @param {number[]} numbers
 */
var KthLargest = function (k, numbers) {
  this.k = k;
  this.minHeap = new MinPriorityQueue();

  for (const number of numbers)
    this.minHeap.enqueue(number);

  while (this.minHeap.size() > k)
    this.minHeap.dequeue();
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.minHeap.enqueue(val);

  while (this.minHeap.size() > this.k)
    this.minHeap.dequeue();

  return typeof this.minHeap.front() === 'object'
    ? this.minHeap.front().element
    : this.minHeap.front()
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */





// Last Stone Weight
// https://leetcode.com/problems/last-stone-weight/description/
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]), 1)
console.log(lastStoneWeight([1]), 1)
console.log(lastStoneWeight([1, 1]), 0)


import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * O(nlogn), O(n)
 * priority queue
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxPriorityQueue();

  for (const stone of stones) {
    maxHeap.enqueue(stone);
  }

  while (maxHeap.size() > 1) {
    const stone = maxHeap.dequeue() - maxHeap.dequeue();
    // const stone = maxHeap.dequeue().element - maxHeap.dequeue().element;
    if (stone)
      maxHeap.enqueue(stone);
  }

  return maxHeap.size() === 0 ? 0 : maxHeap.dequeue().element;
}


/**
 * O(nlogn), O(n)
 * heap
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = Heap.heapify(stones, (a, b) => b - a);


  //for (const stone of stones) {
  //  maxHeap.enqueue(stone);
  //}

  while (maxHeap.size() > 1) {
    const stone = maxHeap.pop() - maxHeap.pop();
    // const stone = maxHeap.dequeue().element - maxHeap.dequeue().element;
    if (stone)
      maxHeap.push(stone);
  }

  //return maxHeap.dequeue()
  return maxHeap.size() === 0 ? 0 : maxHeap.pop();
}





// Sort an Array
// https://leetcode.com/problems/sort-an-array/description/
console.log(sortArray([5, 2, 3, 1]), [1, 2, 3, 5])
console.log(sortArray([5, 1, 1, 2, 0, 0]), [0, 0, 1, 1, 2, 5])


/**
 * O(nlogn), O(n)
 * megret sort
 * @param {number[]} numbers
 * @return {number[]}
 */
var sortArray = function (numbers) {
  mergeSort(numbers, 0, numbers.length - 1)
  return numbers
}

function merge(numbers, start, middle, end) {
  const left_chunk = numbers.slice(start, middle + 1);
  const right_chunk = numbers.slice(middle + 1, end + 1);
  let index = start;
  let left = 0;
  let right = 0;

  while (
    left < left_chunk.length &&
    right < right_chunk.length) {
    if (left_chunk[left] <= right_chunk[right]) {
      numbers[index] = left_chunk[left];
      left++;
    } else {
      numbers[index] = right_chunk[right];
      right++;
    }
    index++;
  }

  while (left < left_chunk.length) {
    numbers[index] = left_chunk[left];
    left++;
    index++;
  }

  while (right < right_chunk.length) {
    numbers[index] = right_chunk[right];
    right++;
    index++;
  }
}

function mergeSort(numbers, left, right) {
  if (left === right) return
  const middle = (left + right) / 2 | 0;
  mergeSort(numbers, left, middle);
  mergeSort(numbers, middle + 1, right);
  merge(numbers, left, middle, right);
}


/**
 * O(nlogn), O(n)
 * quick sort, tle
 * @param {number[]} numbers
 * @return {number[]}
 */
var sortArray = function (numbers) {
  quickSort(numbers, 0, numbers.length - 1)
  return numbers
}

function swap(numbers, left, right) {
  [numbers[left], numbers[right]] = [numbers[right], numbers[left]]
}

function partition(numbers, start, end) {
  const pivot = numbers[end];
  let left = start - 1;

  for (let right = start; right < end; right++) {
    if (numbers[right] < pivot) {
      left++;
      swap(numbers, left, right);
    }
  }
  swap(numbers, left + 1, end);
  return left + 1
}

function quickSort(numbers, left, right) {
  if (left >= right) return
  const pivot = partition(numbers, left, right)
  quickSort(numbers, left, pivot - 1);
  quickSort(numbers, pivot + 1, right);
}


/**
 * O(n2), O(1)
 * quick sort
 * @param {number[]} numbers
 * @return {number[]}
 */
var sortArray = function (numbers) {
  insertionSort(numbers);
  return numbers
}

function insertionSort(numbers) {
  for (let right = 1; right < numbers.length; right++) {
    const key = numbers[right];
    let left = right - 1;

    while (
      left >= 0 &&
      numbers[left] > key
    ) {
      numbers[left + 1] = numbers[left];
      left--;
    }

    numbers[left + 1] = key;
  }
}





// Sort Colors
// https://leetcode.com/problems/sort-colors/description/
console.log(sortColors([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2])
console.log(sortColors([2, 0, 1]), [0, 1, 2])


/**
 * O(n), O(1)
 * three pointers, one pass
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let index = 0;

  while (index <= right) {
    if (nums[index] === 0) {
      [nums[index], nums[left]] = [nums[left], nums[index]];
      left++;
    }
    else if (nums[index] === 2) {
      [nums[index], nums[right]] = [nums[right], nums[index]];
      right--;
      index--;
    }
    index++;
  }
  // return nums
}





// Boats to Save People
// https://leetcode.com/problems/boats-to-save-people/description/
console.log(numRescueBoats([1, 2], 3), 1)
console.log(numRescueBoats([3, 2, 2, 1], 3), 3)
console.log(numRescueBoats([3, 5, 3, 4], 5), 4)
console.log(numRescueBoats([3, 2, 3, 2, 2], 6), 3)


/**
 * O(nlogn), O(n)
 * two pointers
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  while (left <= right) {
    const delta = limit - people[right];
    boats++;
    right--;

    if (
      left <= right &&
      people[left] <= delta) {
      left++;
    }
  }
  return boats
}





// Count Subarrays Where Max Element Appears at Least K Times
// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/
console.log(countSubarrays([1, 3, 2, 3, 3], 2), 6)
console.log(countSubarrays([1, 3, 2, 3, 3, 1], 2), 10)
console.log(countSubarrays([1, 3, 2, 3, 1], 2), 4)
console.log(countSubarrays([1, 3, 2, 3, 1, 1], 2), 6)
console.log(countSubarrays([1, 3, 2, 3, 1, 1, 3], 2), 10)
console.log(countSubarrays([1, 4, 2, 1], 3), 0)
console.log(countSubarrays([37, 20, 38, 66, 34, 38, 9, 41, 1, 14, 25, 63, 8, 12, 66, 66, 60, 12, 35, 27, 16, 38, 12, 66, 38, 36, 59, 54, 66, 54, 66, 48, 59, 66, 34, 11, 50, 66, 42, 51, 53, 66, 31, 24, 66, 44, 66, 1, 66, 66, 29, 54], 5), 594)

/**
 * O(n), O(1)
 * sliding window
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (numbers, k) {
  let left = 0;
  let maxNumberCount = 0;
  const maxNumber = Math.max(...numbers);
  let counter = 0;

  for (const number of numbers) {
    if (number === maxNumber) {
      maxNumberCount++;
    }
    while (maxNumberCount > k) {
      if (numbers[left] === maxNumber) {
        maxNumberCount--;
        left++;
      }
    }
    while (numbers[left] != maxNumber) {
      left++;
    }

    if (maxNumberCount === k) {
      counter += left + 1;
    }
  }
  return counter
}





// 132 Pattern
// https://leetcode.com/problems/132-pattern/description/
console.log(find132pattern([3, 1, 4, 2]), true)
console.log(find132pattern([1, 2, 3, 4]), false)
console.log(find132pattern([-1, 3, 2, 0]), true)
console.log(find132pattern([3, 5, 0, 3, 4]), true)
console.log(find132pattern([1, 0, 1, -4, -3]), false)
console.log(find132pattern([-2, 1, 2, -2, 1, 2]), true)


/**
 * O(n), O(1)
 * sliding window
 * @param {number[]} numbers
 * @return {boolean}
 */
var find132pattern = function (numbers) {
  const stack = [];
  let minLeft = numbers[0];

  for (const number of numbers) {
    while (stack.length > 0 &&
      number >= stack[stack.length - 1][0]
    ) stack.pop()

    if (
      stack.length > 0 &&
      number < stack[stack.length - 1][0] &&
      number > stack[stack.length - 1][1]
    ) return true

    stack.push([number, minLeft]);
    minLeft = Math.min(minLeft, number);
  }
  return false
}





// Design Browser History
// https://leetcode.com/problems/design-browser-history/description/


class ListNode {
  constructor(val = '', next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.home = new ListNode(homepage);
  this.node = this.home;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.node.next = new ListNode(url, null, this.node);
  this.node = this.node.next;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (
    steps &&
    this.node.prev
  ) {
    this.node = this.node.prev;
    steps--;
  }
  return this.node.val
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (
    steps &&
    this.node.next
  ) {
    this.node = this.node.next;
    steps--;
  }
  return this.node.val
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */


const browserHistory = new BrowserHistory("leetcode.com")
browserHistory.visit("google.com")  // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com")  // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com")  // You are in "facebook.com". Visit "youtube.com"
console.log(browserHistory.back(1))  // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
console.log(browserHistory.back(1))  // You are in "facebook.com", move back to "google.com" return "google.com"
console.log(browserHistory.forward(1))  // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com")  // You are in "facebook.com". Visit "linkedin.com"
console.log(browserHistory.forward(2))  // You are in "linkedin.com", you cannot move forward any steps.
console.log(browserHistory.back(2))  // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
console.log(browserHistory.back(7))  // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"





// Evaluate Boolean Binary Tree
// https://leetcode.com/problems/evaluate-boolean-binary-tree/description/
console.log(evaluateTree(buildTreeFromList([2, 1, 3, null, null, 0, 1])), true)
console.log(evaluateTree(buildTreeFromList([0])), false)


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function (root) {
  if (
    !root ||
    !root.val)
    return false
  else if (root.val === 1)
    return true
  else if (root.val === 2)
    return (
      evaluateTree(root.left) ||
      evaluateTree(root.right))
  else
    return (
      evaluateTree(root.left) &&
      evaluateTree(root.right))
}





// K Closest Points to Origin
// https://leetcode.com/problems/k-closest-points-to-origin/description/
console.log(kClosest([[1, 3], [-2, 2]], 1), [[-2, 2]])
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2), [[3, 3], [-2, 4]])


import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * O(nlogn), O(n)
 * heap
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const minHeap = new MinPriorityQueue();  // (point, distance(as a priortiy))
  const kPoints = Array(k).fill(0);

  for (const point of points) {
    const distance = Math.sqrt(point[0]**2 + point[1]**2);
    minHeap.enqueue(point, distance)
  }

  for (let index = 0; index < k; index++) {
    kPoints[index] = minHeap.dequeue();
    // kPoints[index] = minHeap.dequeue().element;
  }
  
  return kPoints
}





// Matchsticks to Square
// https://leetcode.com/problems/matchsticks-to-square/description/
console.log(makesquare([1, 1, 2, 2, 2]), true)
console.log(makesquare([3, 3, 3, 3, 4]), false)
console.log(makesquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]), true)
console.log(makesquare([7215807, 6967211, 5551998, 6632092, 2802439, 821366, 2465584, 9415257, 8663937, 3976802, 2850841, 803069, 2294462, 8242205, 9922998]), false)


/**
 * O(4^n), O(n)
 * backtracking
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  if (matchsticks.reduce((total, current) => total + current) % 4)
    return false

  matchsticks.sort((a, b) => b - a);
  const sideLength = matchsticks.reduce((total, current) => total + current) / 4;
  const currentSideLength = new Array(4).fill(0);

  function dfs(index) {
    if (index === matchsticks.length) return true

    for (let side = 0; side < 4; side++) {
      if (currentSideLength[side] + matchsticks[index] <= sideLength) {
        currentSideLength[side] += matchsticks[index]
        if (dfs(index + 1)) return true
        currentSideLength[side] -= matchsticks[index]
      }
    }
    return false
  }

  return dfs(0)
}





// Extra Characters in a String
// https://leetcode.com/problems/extra-characters-in-a-string/description/
console.log(minExtraChar("leetcode", ["leet", "code", "leetcode"]), 0)
console.log(minExtraChar("leetscode", ["leet", "code", "leetcode"]), 1)
console.log(minExtraChar("sayhelloworld", ["hello", "world"]), 3)


/**
 * O(n3), O(n)
 * dp, bottom-up, optimal
 * @param {string} text
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (text, dictionary) {
  const cache = Array(text.length + 1).fill(0);
  const words = new Set(dictionary);
  const wordLengths = new Set(dictionary.map(word => word.length))

  for (let index = text.length - 1; index >= 0; index--) {
    cache[index] = cache[index + 1] + 1;

    for (const wordLength of wordLengths) {
      if (
        index + wordLength <= text.length &&
        words.has(text.slice(index, index + wordLength))
      ) {
        cache[index] = Math.min(cache[index], cache[index + wordLength]);
      }
    }
  }

  return cache[0]
}


class TrieNode {
  constructor() {
    this.letters = new Map();
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root;

    for (const letter of word) {
      if (!node.letters.has(letter))
        node.letters.set(letter, new TrieNode());

      node = node.letters.get(letter);
    }
    node.isWord = true;
  }

  search(word) {
    let node = this.root;

    for (const letter of word) {
      if (!node.letters.has(letter))
        return false

      node = node.letters.get(letter);
    }
    return node.isWord
  }
}

/**
 * O(n3), O(n2)
 * dp, bottom-up, trie
 * @param {string} text
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (text, dictionary) {
  const trie = new Trie();
  for (const word of dictionary) {
    trie.insert(word);
  }

  const cache = Array(text.length + 1).fill(0);
  const words = new Set(dictionary);
  const wordLengths = new Set(dictionary.map(word => word.length))

  for (let index = text.length - 1; index >= 0; index--) {
    cache[index] = cache[index + 1] + 1;

    for (const wordLength of wordLengths) {
      if (
        index + wordLength <= text.length &&
        trie.search(text.slice(index, index + wordLength))
      ) {
        cache[index] = Math.min(cache[index], cache[index + wordLength]);
      }
    }
  }

  return cache[0]
}





// Delete and Earn
// https://leetcode.com/problems/delete-and-earn/description/
console.log(deleteAndEarn([3, 4, 2]), 6)
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]), 9)
console.log(deleteAndEarn([8, 10, 4, 9, 1, 3, 5, 9, 4, 10]), 37)


/**
 * O(n), O(n)
 * dp, bottom-up
 * @param {number[]} numbers
 * @return {number}
 */
var deleteAndEarn = function (numbers) {
  numbers = numbers.sort((a, b) => a - b);
  const numberSet = new Set(numbers);
  const numbers2 = Array.from(numberSet)
  const cache = Array(numbers).fill(0);
  const counter = new Map();

  for (const number of numbers) {
    counter.set(number, (counter.get(number) || 0) + 1);
  }

  for (let index = 0; index < numbers2.length; index++) {
    const number = numbers2[index];
    const value = number * counter.get(number);

    if (index === 0) {
      cache[index] = value;
    }
    else if (index === 1) {
      if (number === numbers2[index - 1] + 1)
        cache[index] = Math.max(value, cache[index - 1]);
      else
        cache[index] = value + cache[index - 1]
    }
    else {
      if (number === numbers2[index - 1] + 1)
        cache[index] = Math.max(value + cache[index - 2], cache[index - 1]);
      else
        cache[index] = value + cache[index - 1]
    }
  }

  return cache[numberSet.size - 1]
}





//Paint House
//https://leetcode.com/problems/paint-house/
//https://leetcode.ca/all/256.html
console.log(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]), 10)
console.log(minCost([[1, 2, 3], [1, 4, 6]]), 3)


/**
 * O(n), O(1)
 * dp, bottom-up
 * @param {number[][]} houses
 * @return {number}
 */
var minCost = (houses) => {
  let cache = houses[0];

  for (let index = 1; index < houses.length; index ++) {
    cache = [
      houses[index][0] + Math.min(cache[1], cache[2]),
      houses[index][1] + Math.min(cache[2], cache[0]),
      houses[index][2] + Math.min(cache[0], cache[1])
    ]
  }

  return Math.min(...cache)
}





// Destination City
// https://leetcode.com/problems/destination-city/description/
console.log(destCity([['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']]), 'Sao Paulo')
console.log(destCity([['B', 'C'], ['D', 'B'], ['C', 'A']]), 'A')
console.log(destCity([['A', 'Z']]), 'Z')


/**
 * O(n), O(n)
 * hash set
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const citiesA = new Set(paths.map(([a, _]) => a));
  const citiesB = new Set(paths.map(([_, b]) => b));

  for (const city of citiesB)
    if (!citiesA.has(city))
      return city
}





// Maximum Product Difference Between Two Pairs
// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/
console.log(maxProductDifference([5, 6, 2, 7, 4]), 34)
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]), 64)


/**
 * O(n), O(1)
 * @param {number[]} numbers
 * @return {number}
 */
var maxProductDifference = function (numbers) {
  let min1 = Math.max(...numbers);
  let min2 = Math.max(...numbers);
  let max1 = 0;
  let max2 = 0;

  for (const number of numbers) {
    if (number < min1)
      [min1, min2] = [number, min1];
    else if (number < min2)
      min2 = number;

    if (number > max1)
      [max1, max2] = [number, max1];
    else if (number > max2)
      max2 = number;
  }

  return max1 * max2 - min1 * min2
}





// K-th Symbol in Grammar
// https://leetcode.com/problems/k-th-symbol-in-grammar/description/
console.log(kthGrammar(1, 1), 0)
console.log(kthGrammar(2, 1), 0)
console.log(kthGrammar(2, 2), 1)
console.log(kthGrammar(30, 434991989), 0)


/**
 * O(n), O(1)
 * two pointers, binary search
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  let left = 1;
  let right = 2 ** (n - 1);
  let value = 0;

  while (left < right) {
    const middle = (left + right) / 2 | 0;

    if (k <= middle)
      right = middle;
    else {
      left = middle + 1;
      value = value === 0 ? 1 : 0;
    }
  }

  return value
}





// Subarrays with K Different Integers
// https://leetcode.com/problems/subarrays-with-k-different-integers/description/
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2), 7)
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3), 3)


/**
 * O(n), O(n)
 * sliding window
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (numbers, k) {
  const counter = new Map();
  let left = 0;
  let middle = 0;
  let subarrayCount = 0;

  for (const number of numbers) {
    counter.set(number, (counter.get(number) || 0) + 1);

    while (counter.size > k) {
      counter.set(numbers[middle], counter.get(numbers[middle]) - 1);

      if (counter.get(numbers[middle]) === 0)
        counter.delete(numbers[middle]);

      middle++;
      left = middle;
    }

    while (counter.get(numbers[middle]) > 1) {
      counter.set(numbers[middle], counter.get(numbers[middle]) - 1);
      middle++;
    }

    if (counter.size === k) {
      subarrayCount += (middle - left + 1);
    }
  }

  return subarrayCount
}





// Search in Rotated Sorted Array II
// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
console.log(search([2, 5, 6, 0, 0, 1, 2], 0), true)
console.log(search([2, 5, 6, 0, 0, 1, 2], 3), false)
console.log(search([1], 0), false)
console.log(search([0, 1], 0), true)
console.log(search([1, 0], 0), true)
console.log(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2), true)
console.log(search([1, 0, 1, 1, 1], 0), true)


/**
 * O(n), O(1)
 * binary search
 * @param {number[]} numbers
 * @param {number} target
 * @return {boolean}
 */
var search = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const middle = (left + right) / 2 | 0;

    if (numbers[middle] === target)
      return true
    else if (numbers[middle] < numbers[right]) {
      if (
        numbers[middle] < target &&
        target <= numbers[right]
      ) left = middle + 1;
      else
        right = middle - 1;
    }
    else if (numbers[middle] > numbers[right]) {
      if (
        numbers[left] <= target &&
        target < numbers[middle]
      ) right = middle - 1;
      else
        left = middle + 1;
    }
    else
      right--
  }

  return false
}





// Construct String from Binary Tree
// https://leetcode.com/problems/construct-string-from-binary-tree/description/
console.log(tree2str(buildTreeFromList([1, 2, 3, 4])), '1(2(4))(3)')
console.log(tree2str(buildTreeFromList([1, 2, 3, null, 4])), '1(2()(4))(3)')


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
  const text = [];

  var dfs = function (node) {
    if (!node) return

    text.push(node.val);

    if (node.left || node.right)
      text.push('(');
    dfs(node.left);
    if (node.left || node.right)
      text.push(')');

    if (node.right)
      text.push('(');
    dfs(node.right);
    if (node.right)
      text.push(')');
  }

  dfs(root);
  return text.join('')
}





// Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/description/
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5)
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4)


import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * O(nlogk), O(k)
 * heap
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (numbers, k) {
  const minHeap = new MinPriorityQueue();

  for (const number of numbers) {
    minHeap.enqueue(number)
    
    if (minHeap.size() > k)
      minHeap.dequeue()
      // minHeap.dequeue().element

  }
  return minHeap.dequeue()
  // return minHeap.dequeue().element
}





// Splitting a String Into Descending Consecutive Values
// https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/description/
console.log(splitString('1'), false)
console.log(splitString('21'), true)
console.log(splitString('1234'), false)
console.log(splitString('050043'), true)
console.log(splitString('9080701'), false)
console.log(splitString('0090089'), true)
console.log(splitString('001'), false)


/**
 * O(n^2*2^n), O(n)
 * backtracking
 * @param {string} text
 * @return {boolean}
 */
var splitString = function (text) {
  var dfs = function (index, prev, parts) {
    if (index === text.length)
      return parts > 1

    for (let right = index; right < text.length; right++) {
      const value = Number(text.slice(index, right + 1));
      
      if (
        prev === Infinity ||
        value === prev - 1
      ) {
        if (dfs(right + 1, value, parts + 1))
          return true
      }
    }

    return false
  }

  return dfs(0, Infinity, 0)
}





// Island Perimeter
// https://leetcode.com/problems/island-perimeter/description/
console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]), 16)
console.log(islandPerimeter([[1]]), 4)
console.log(islandPerimeter([[1, 0]]), 4)


/**
 * O(n2), O(n2)
 * matrix, dfs
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const tabu = new Set();

  var dfs = function (row, col) {
    if (tabu.has(`${row},${col}`))
      return 0
    else if (
      row < 0 ||
      row === rows ||
      col < 0 ||
      col === cols ||
      grid[row][col] === 0
    ) return 1
  
    tabu.add(`${row},${col}`);

    return (
      dfs(row - 1, col) +
      dfs(row + 1, col) +
      dfs(row, col - 1) +
      dfs(row, col + 1)
    )
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1)
        return dfs(row, col)
    }
  }
}





// Verifying an Alien Dictionary
// https://leetcode.com/problems/verifying-an-alien-dictionary/description/
console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'), true)
console.log(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz'), false)
console.log(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'), false)
console.log(isAlienSorted(["ubg", "kwh"], "qcipyamwvdjtesbghlorufnkzx"), true)


/**
 * O(n2), O(1)
 * hash map
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderOfLetters = new Map(order.split('').map((letter, index) => [letter, index]));

  for (let wordIndex = 0; wordIndex < words.length - 1; wordIndex++) {
    for (let letterIndex = 0; letterIndex < words[wordIndex].length; letterIndex++) {
      if (letterIndex === words[wordIndex + 1].length)
        return false

      const leftLetter = words[wordIndex][letterIndex];
      const rightLetter = words[wordIndex + 1][letterIndex];

      if (orderOfLetters.get(leftLetter) < orderOfLetters.get(rightLetter))
        break
      else if (orderOfLetters.get(leftLetter) > orderOfLetters.get(rightLetter))
        return false
    }
  }
  return true
}





// Find the Town Judge
// https://leetcode.com/problems/find-the-town-judge/description/
console.log(findJudge(2, [[1, 2]]), 2)
console.log(findJudge(3, [[1, 3], [2, 3]]), 3)
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]]), -1)
console.log(findJudge(3, [[1, 2], [2, 3]]), -1)
console.log(findJudge(1, []), 1)


/**
 * O(n), O(n)
 * hash map
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trustList) {
  if (trustList.length === 0 &&
    n === 1)
    return 1

  const aToB = new Map();
  const bToA = new Map();

  for (const [a, b] of trustList) {
    if (!aToB.has(a))
      aToB.set(a, []);
    if (!bToA.has(b))
      bToA.set(b, []);

    aToB.get(a, []).push(b);
    bToA.get(b, []).push(a);
  }

  for (const [key, val] of bToA.entries()) {
    if (
      val.length === n - 1 &&
      !aToB.has(key))
      return key
  }

  return -1
}





// Perfect Squares
// https://leetcode.com/problems/perfect-squares/description/
console.log(numSquares(13), 2)
console.log(numSquares(12), 3)
console.log(numSquares(9), 1)
console.log(numSquares(1), 1)


/**
 * O(nsqrtn), O(n)
 * dp, botom-up, tabulation with list
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const cache = Array(n + 1).fill(n + 1);
  const primarySquared = Array.from({length: Number(n ** 0.5) + 1}, (_, index) => index ** 2);

  for (let index = 1; index <= n; index++) {
    if (primarySquared.includes(index)) {
      cache[index] = 1;
    }
    else {
      for (const number of primarySquared) {
        if (index - number > 0) {
          cache[index] = Math.min(cache[index], cache[index - number] + 1)
        }
      }
    }
  }

  return cache[cache.length - 1]
};





// Buy Two Chocolates
// https://leetcode.com/problems/buy-two-chocolates/description/
console.log(buyChoco([1, 2, 2], 3), 0)
console.log(buyChoco([3, 2, 3], 3), 3)


/**
 * O(n), O(1)
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  let min1 = Infinity;
  let min2 = Infinity;

  for (const price of prices) {
    if (price < min1)
      [min1, min2] = [price, min1];
    else if (price < min2)
      min2 = price;
  }

  if (min1 + min2 <= money)
    return money - (min1 + min2)
  else
    return money
};





// Lemonade Change
// https://leetcode.com/problems/lemonade-change/description/
console.log(lemonadeChange([5, 5, 5, 10, 20]), true)
console.log(lemonadeChange([5, 5, 10, 10, 20]), false)
console.log(lemonadeChange([5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5]), true)
console.log(lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20]), false)


/**
 * O(n), O(1)
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fives = 0;
  let tens = 0;

  for (const bill of bills) {
    if (bill === 5)
      fives += 1;
    else if (bill === 10) {
      fives -= 1;
      tens += 1;
    }
    else if (tens > 0) {
      tens -= 1;
      fives -= 1;
    }
    else
      fives -= 3;

    if (
      fives < 0 ||
      tens < 0
    ) return false
  }

  return true
};





// Maximum Odd Binary Number
// https://leetcode.com/problems/maximum-odd-binary-number/description/
console.log(maximumOddBinaryNumber("010"), "001")
console.log(maximumOddBinaryNumber("0101"), "1001")
console.log(maximumOddBinaryNumber("1"), "1")


/**
 * O(n), O(n)
 * @param {string} text
 * @return {string}
 */
var maximumOddBinaryNumber = function (text) {
  let ones = 0;
  let zeros = 0;

  for (const digit of text) {
    if (digit === '1')
      ones++;
    else
      zeros++;
  }

  return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1'
};





// Maximum Nesting Depth of the Parentheses
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
console.log(maxDepth('(1+(2*3)+((8)/4))+1'), 3)
console.log(maxDepth('(1)+((2))+(((3)))'), 3)
console.log(maxDepth('()(())((()()))'), 3)


/**
 * O(n), O(1)
 * @param {string} text
 * @return {number}
 */
var maxDepth = function (text) {
  let detph = 0;
  let opening = 0;

  for (const char of text) {
    if (char === '(')
      opening += 1;
    else if (char === ')')
      opening -= 1;

    detph = Math.max(detph, opening)
  }
  return detph
};





// Maximum Score After Splitting a String
// https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/
console.log(maxScore("011101"), 5)
console.log(maxScore("00111"), 5)
console.log(maxScore("1111"), 3)
console.log(maxScore("00"), 1)


/**
 * O(n), O(n)
 * @param {string} s
 * @return {number}
 */
var maxScore = function (text) {
  let rightScore = text.split('').filter((digit) => digit === '1').length;
  let leftScore = 0;
  let maxScore = 0;

  for (let index = 0; index < text.length - 1; index++) {
    const digit = text[index];

    if (digit === '0')
      leftScore++;
    else if (digit === '1')
      rightScore--;

    maxScore = Math.max(maxScore, leftScore + rightScore);
  }

  return maxScore
}





// Path Crossing
// https://leetcode.com/problems/path-crossing/description/
console.log(isPathCrossing('NES'), false)
console.log(isPathCrossing('NESWW'), true)
console.log(isPathCrossing('WNSN'), true)


/**
 * O(n), O(n)
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const stops = new Set([`0,0`]);
  let prev = [0, 0];

  const directions = new Map([
    ['E', [1, 0]],
    ['W', [-1, 0]],
    ['N', [0, 1]],
    ['S', [0, -1]]
  ])

  for (const direction of path) {
    const next_x = prev[0] + directions.get(direction)[0];
    const next_y = prev[1] + directions.get(direction)[1];

    if (stops.has(`${next_x},${next_y}`))
      return true
    else {
      stops.add(`${next_x},${next_y}`)
      prev = [next_x, next_y]
    }
  }

  return false
};





// Minimum Time to Make Rope Colorful
// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/description/
console.log(minCost("abaac", [1, 2, 3, 4, 5]), 3)
console.log(minCost("abc", [1, 2, 3]), 0)
console.log(minCost("aabaa", [1, 2, 3, 4, 1]), 2)


/**
 * O(n), O(1)
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let left = 0;
  let minTime = 0;

  for (let right = 1; right < colors.length; right++) {
    if (colors[left] === colors[right]) {
      if (neededTime[left] < neededTime[right]) {
        minTime += neededTime[left];
        left = right;
      } else {
        minTime += neededTime[right];
      }
    } else {
      left = right;
    }
  }
  return minTime
};





// Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
console.log(searchRange([5, 7, 7, 8, 8, 10], 8), [3, 4])
console.log(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1])
console.log(searchRange([], 0), [-1, -1])
console.log(searchRange([1], 1), [0, 0])


/**
 * O(logn), O(1)
 * binary search
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  let hasTarget = false;
  let first_position = -1;
  let last_position = -1;

  while (left <= right) {
    const middle = (left + right) / 2 | 0;
    const middle_number = numbers[middle];

    if (target > middle_number) {
      left = middle + 1;
    }
    else {
      if (target === middle_number) {
        hasTarget = true;
      }
      first_position = middle;
      right = middle - 1;
    }
  }

  if (!hasTarget)
    return [-1, -1]

  left = 0;
  right = numbers.length - 1;

  while (left <= right) {
    const middle = (left + right) / 2 | 0;
    const middle_number = numbers[middle];

    if (target < middle_number) {
      right = middle - 1;
    }
    else {
      last_position = middle;
      left = middle + 1;
    }
  }

  return [first_position, last_position]
};





// Find the Duplicate Number
// https://leetcode.com/problems/find-the-duplicate-number/description/
console.log(findDuplicate([1, 3, 4, 2, 2]), 2)
console.log(findDuplicate([3, 1, 3, 4, 2]), 3)
console.log(findDuplicate([3, 3, 3, 3, 3]), 3)
console.log(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1]), 9)


/**
 * O(n), O(1)
 * linked list
 * @param {number[]} numbers
 * @return {number}
 */
var findDuplicate = function (numbers) {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = numbers[slow];
    fast = numbers[numbers[fast]];
    if (slow === fast) break
  }

  let slow2 = 0;
  while (true) {
    slow = numbers[slow];
    slow2 = numbers[slow2];
    if (slow === slow2)
      return slow
  }
};





// Insert into a Binary Search Tree
// https://leetcode.com/problems/insert-into-a-binary-search-tree/description/
console.log(levelOrderTraversal(insertIntoBST(buildTreeFromList([4, 2, 7, 1, 3]), 5)), [4, 2, 7, 1, 3, 5])
console.log(levelOrderTraversal(insertIntoBST(buildTreeFromList([40, 20, 60, 10, 30, 50, 70]), 25)), [40, 20, 60, 10, 30, 50, 70, null, null, 25])
console.log(levelOrderTraversal(insertIntoBST(buildTreeFromList([4, 2, 7, 1, 3, null, null, null, null, null, null]), 5)), [4, 2, 7, 1, 3, 5])


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * O(n), O(n)
 * binary tree, recursion
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root)
    return new TreeNode(val)
  if (val < root.val)
    root.left = insertIntoBST(root.left, val)
  else
    root.right = insertIntoBST(root.right, val)
  
  return root
};





// Task Scheduler
// https://leetcode.com/problems/task-scheduler/description/
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2), 8)  // A -> B -> idle -> A -> B -> idle -> A -> B
console.log(leastInterval(['A', 'C', 'A', 'B', 'D', 'B'], 1), 6)  // A -> B -> C -> D -> A -> B
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3), 10)  // A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B


import { MaxPriorityQueue } from '@datastructures-js/priority-queue';
import { Queue } from '@datastructures-js/queue';

/**
 * O(n), O(n)
 * heap, deque
 * O(nlogn) -> log26 => const ->  O(n)
 * @param {character[]} tasks
 * @param {number} idle
 * @return {number}
 */
var leastInterval = function (tasks, idle) {
  const counter = new Map();

  for (const task of tasks) {
    counter.set(task, (counter.get(task) || 0) + 1)
  }

  consttaskList = MaxPriorityQueue.fromArray(Array.from(counter.values()));

  // const taskList = new MaxPriorityQueue();
  // for (const value of counter.values()) {
  //   taskList.enqueue(value)
  // }

  let time = 0;
  const queue = new Queue();

  while (taskList.size() > 0 || queue.size() > 0) {
    time++;

    if (taskList.size() > 0) {
      const task = taskList.dequeue() - 1;
      // const task = taskList.dequeue().element - 1;
      if (task)
        queue.push([time + idle, task]);
    }

    if (queue.size() > 0 && queue.front()[0] === time) {
      const [_, task] = queue.pop();
      taskList.push(task);
      // taskList.enqueue(task);
    }

  }
  return time
};





// Design Twitter
// https://leetcode.com/problems/design-twitter/description/



// Find Unique Binary String
// https://leetcode.com/problems/find-unique-binary-string/description/
console.log(findDifferentBinaryString(['0']), '1')
console.log(findDifferentBinaryString(['01', '10']), '11')
console.log(findDifferentBinaryString(['00', '01']), '11')
console.log(findDifferentBinaryString(['111', '011', '001']), '101')


/**
 * O(2^n), O(n)
 * backtracking
 * @param {string[]} numbers
 * @return {string}
 */
var findDifferentBinaryString = function (numbers) {
  const permutation = [];
  const numberSet = new Set(numbers);

  var dfs = (index) => {
    if (index == numbers.length) {
      if (numberSet.has(permutation.join('')))
        return
      else
        return permutation.join('')
    }

    for (const digit of ['0', '1']) {
      permutation.push(digit);
      let unique = dfs(index + 1);
      if (unique)
        return unique
      permutation.pop();
    }
  }

  return dfs(0)
};





// Check if There is a Valid Partition For The Array
// https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/description/
console.log(validPartition([4, 4, 4, 5, 6]), true)
console.log(validPartition([1, 1, 1, 2]), false)
console.log(validPartition([993335, 993336, 993337, 993338, 993339, 993340, 993341]), false)


/**
 * O(n), O(1)
 * dp, bottom-up, iteration
 * @param {number[]} numbers
 * @return {boolean}
 */
var validPartition = function (numbers) {
  const cache = [false, true, true];
  
  for (let index = numbers.length - 2; index >= 0; index--) {
    let c0 = false;
    
    if (numbers[index] === numbers[index + 1]
    ) {
      c0 = cache[1];
    }
    if (
      (numbers[index] === numbers[index + 1] &&
        numbers[index + 1] === numbers[index + 2]) ||
      (numbers[index] === numbers[index + 1] - 1 &&
        numbers[index + 1] === numbers[index + 2] - 1)
    ) {
      c0 = c0 || cache[2];
    }
    cache[2] = cache[1];
    cache[1] = cache[0];
    cache[0] = c0;
  }

  return cache[0]
};


/**
 * O(n), O(n)
 * dp, bottom-up, iteration
 * @param {number[]} numbers
 * @return {boolean}
 */
var validPartition = function (numbers) {
  const cache = Array(numbers.length + 1).fill(false);
  cache[numbers.length] = true;

  for (let index = numbers.length - 2; index >= 0; index--) {
    if (numbers[index] === numbers[index + 1]
    ) {
      cache[index] = cache[index + 2];
    }
    if (
      (numbers[index] === numbers[index + 1] &&
        numbers[index + 1] === numbers[index + 2]) ||
      (numbers[index] === numbers[index + 1] - 1 &&
        numbers[index + 1] === numbers[index + 2] - 1)
    ) {
      cache[index] = cache[index] || cache[index + 3];
    }
  }

  return cache[0]
};


/**
 * O(n), O(n)
 * dp, top-down with memoization
 * @param {number[]} numbers
 * @return {boolean}
 */
var validPartition = function (numbers) {
  const memo = new Map();

  var dfs = (index) => {
    if (index === numbers.length)
      return true
    else if (memo.has(index))
      return memo.get(index)

    let isPartitioned = false
    if (
      index < numbers.length - 1 &&
      numbers[index] === numbers[index + 1]
    ) {
      isPartitioned = dfs(index + 2)
    }

    if (index < numbers.length - 2)
      if (
        (numbers[index] === numbers[index + 1] &&
          numbers[index + 1] === numbers[index + 2]) ||
        ((numbers[index] + 1 === numbers[index + 1] && 
          numbers[index + 1] + 1 === numbers[index + 2]))
      ) {
        isPartitioned = isPartitioned || dfs(index + 3)
      }
      
    memo.set(index, isPartitioned)
    return isPartitioned
  }

  return dfs(0)
};


/**
 * O(2^n), O(n)
 * brute force, recursion, tle
 * @param {number[]} numbers
 * @return {boolean}
 */
var validPartition = function (numbers) {
  var dfs = (index) => {
    if (index === numbers.length)
      return true

    if (
      index < numbers.length - 1 &&
      numbers[index] === numbers[index + 1]
    ) {
      if (dfs(index + 2))
        return true
    }

    if (index < numbers.length - 2)
      if (
        (numbers[index] === numbers[index + 1] &&
          numbers[index + 1] === numbers[index + 2]) ||
        (numbers[index] === numbers[index + 1] - 1 &&
          numbers[index + 1] === numbers[index + 2] - 1)
      ) {
        if (dfs(index + 3))
          return true
      }
    
    return false
  }

  return dfs(0)
};




// Maximum Subarray Min-Product
// https://leetcode.com/problems/maximum-subarray-min-product/description/


// Integer Break
// https://leetcode.com/problems/integer-break/description/
console.log(integerBreak(2), 1)  // Explanation: 2 = 1 + 1, 1 × 1 = 1.
console.log(integerBreak(3), 2)  // Explanation: 3 = 1 + 2, 1 × 2 = 2.
console.log(integerBreak(4), 4)  // Explanation: 4 = 2 + 2, 2 × 2 = 4.
console.log(integerBreak(5), 6)  // Explanation: 5 = 2 + 3, 2 × 3 = 6.
console.log(integerBreak(6), 9)  // Explanation: 6 = 3 + 3, 3 × 3 = 9.
console.log(integerBreak(7), 12)  // Explanation: 7 = 3 + 4, 3 × 4 = 12; 2 = 2 + 2 + 3, 2 x 2 x 3 = 12.
console.log(integerBreak(10), 36)  // Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
console.log(integerBreak(24), 6561)  // tle testcase


/**
 * O(n2), O(n)
 * dp, top-down with memoization as hash map
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const memo = new Map([[0, 1]]);  // {number: product}  maximum product for current number

  var dfs = (index, isFirst) => {
    if (memo.has(index)) {
      return memo.get(index)
    }

    let maxNumber = 0;

    for (let number = 1; number < index + Boolean(!isFirst); number++) {
      maxNumber = Math.max(maxNumber, (number * dfs(index - number, false)))
    }

    memo.set(index, maxNumber);
    return memo.get(index)
  
  }
  return dfs(n, true)
};






// Minimum Number of Operations to Make Array Continuous
// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/description/
console.log(minOperations([4, 2, 5, 3]), 0)
console.log(minOperations([1, 2, 3, 5, 6]), 1)
console.log(minOperations([1, 10, 100, 1000]), 3)


/**
 * O(n2), O(n)
 * tle
 * @param {number[]} numbers
 * @return {number}
 */
var minOperations = function(numbers) {
  const numberSet = new Set(numbers);
  let difference;
  minDifference = numbers.length;

  for (const number of numberSet) {
    difference = 0;

    for (let index = 1; index < numbers.length; index++)
    {
      difference += !numberSet.has(number + index);
    }

    minDifference = Math.min(minDifference, difference);
  }

  return minDifference
}





// Maximum Frequency Stack
// https://leetcode.com/problems/maximum-frequency-stack/description/
/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */


/** 
 * O(n), O(n)
 * 2 hash maps
 */
var FreqStack = function () {
  this.counter = new Map();
  this.bucket = new Map();
  this.maxFrequency = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  this.counter.set(val, (this.counter.get(val) || 0) + 1);
  this.maxFrequency = Math.max(this.maxFrequency, this.counter.get(val));
  
  if (!this.bucket.has(this.counter.get(val))) {
    this.bucket.set(this.counter.get(val), []);
  }
  this.bucket.get(this.counter.get(val)).push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const val = this.bucket.get(this.maxFrequency).pop();
  this.counter.set(val, this.counter.get(val) - 1);
  
  if (this.bucket.get(this.maxFrequency).length === 0)
    this.maxFrequency--;
  
  return val
};


// const freqStack = new FreqStack()
// console.log(freqStack.push(5))  // The stack is [5]
// console.log(freqStack.push(7))  // The stack is [5,7]
// console.log(freqStack.push(5))  // The stack is [5,7,5]
// console.log(freqStack.push(7))  // The stack is [5,7,5,7]
// console.log(freqStack.push(4))  // The stack is [5,7,5,7,4]
// console.log(freqStack.push(5))  // The stack is [5,7,5,7,4,5]
// console.log(freqStack.pop())  // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
// console.log(freqStack.pop())  // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
// console.log(freqStack.pop())  // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
// console.log(freqStack.pop())  // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].


/** 
 * @param {string[]} operations
 * @param {number[][]} args
 * @return {number[][]}
 */
var test_input = function (operations, args) {
  const result = []
  const freqStack = new FreqStack();

  for (let index = 0; index < operations.length; index++) {
    const operation = operations[index];
    const argument = args[index];

    if (operation === 'FreqStack') {
      result.push(null);
    } else if (operation === 'push') {
      freqStack.push(...argument);
      result.push(null);
    } else if (operation === 'pop') {
      result.push(freqStack.pop());
    } 
  }

  return result
}

// Example Input
const operations = ['FreqStack', 'push', 'push', 'push', 'push', 'push', 'push', 'pop', 'pop', 'pop', 'pop']
const args = [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
const expected_output = [null, null, null, null, null, null, null, 5, 7, 5, 4]

// const operations = ['FreqStack','push','push','push','push','pop', 'pop', 'push', 'push', 'push', 'pop', 'pop', 'pop']
// const args = [[],[1], [1], [1], [2], [], [], [2], [2], [1], [], [], []]
// const expected_output = [null, null, null, null, null, 1, 1, null, null, null, 2, 1, 2]

// Run tests
const test_output = test_input(operations, args)
console.log(JSON.stringify(test_output) === JSON.stringify(expected_output))
console.log(test_output)





// Minimum Cost For Tickets
// https://leetcode.com/problems/minimum-cost-for-tickets/description/
console.log(mincostTickets([5], [2, 7, 15]), 2)
console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]), 11)
console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]), 17)
console.log(mincostTickets([1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,24,25,27,28,29,30,31,34,37,38,39,41,43,44,45,47,48,49,54,57,60,62,63,66,69,70,72,74,76,78,80,81,82,83,84,85,88,89,91,93,94,97,99], [9,38,134]), 423)


/**
 * O(n), O(n)
 * dp, top-down with memoization as hash map
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const memo = new Map();
  const validities = [1, 7, 30];

  var dfs = (dayIndex) => {
    if (dayIndex >= days.length) {
      return 0
    } else if (memo.has(dayIndex)) {
      return memo.get(dayIndex)
    }

    let minCost = Infinity;

    for (let option = 0; option < costs.length; option++) {
      const cost = costs[option];
      const validity = validities[option];
      let ticketIndex = 0;

      while (
        dayIndex + ticketIndex < days.length &&
        days[dayIndex + ticketIndex] < days[dayIndex] + validity
      ) {
        ticketIndex++;
      }

      minCost = Math.min(minCost, cost + dfs(dayIndex + ticketIndex));
    }

    memo.set(dayIndex, minCost);
    return minCost
  }

  return dfs(0)
};





// Number of Longest Increasing Subsequence
// https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/
console.log(findNumberOfLIS([1, 3, 5, 4]), 2)  // [1, 3, 4] and [1, 3, 5]
console.log(findNumberOfLIS([1, 3, 5, 4, 7]), 2)  // [1, 3, 4, 7] and [1, 3, 5, 7]
console.log(findNumberOfLIS([2, 2, 2, 2, 2]), 5)  // [2] * 5
console.log(findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2]), 3)  // [1, 2, 3, 4, 7], [1, 2, 3, 5, 7], [1, 2, 4, 5, 7]
console.log(findNumberOfLIS([1, 1, 1, 2, 2, 2, 3, 3, 3]), 27)


/**
 * O(n2), O(n)
 * dp, bottom-up
 * @param {number[]} numbers
 * @return {number}
 */
var findNumberOfLIS = function (numbers) {
  const cache = Array.from({ length: numbers.length }, () => [1, 1]);

  for (let right = 0; right < numbers.length; right++) {
    for (let left = 0; left < right; left++) {
      if (numbers[left] < numbers[right]) {
        if (cache[left][0] + 1 > cache[right][0]) {
          cache[right] = [cache[left][0] + 1, cache[left][1]]
        } else if (cache[left][0] + 1 == cache[right][0]) {
          cache[right] = [cache[right][0], cache[right][1] + cache[left][1]];
        }
      }
    }
  }

  let maxLISLength = 0;
  let maxFrequency = 0;
  for (let [lis_length, frequency] of cache) {
    if (lis_length > maxLISLength) {
      maxLISLength = lis_length;
      maxFrequency = frequency;
    }
    else if (lis_length == maxLISLength) {
      maxFrequency += frequency;
    }
  }
  return maxFrequency
};





// Uncrossed Lines
// https://leetcode.com/problems/uncrossed-lines/description/
console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]), 2)
console.log(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]), 3)
console.log(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]), 2)
console.log(maxUncrossedLines([4, 1, 2, 5, 1, 5, 3, 4, 1, 5], [3, 1, 1, 3, 2, 5, 2, 4, 1, 3, 2, 2, 5, 5, 3, 5, 5, 1, 2, 1]), 7)
console.log(maxUncrossedLines([5, 1, 2, 5, 1, 2, 2, 3, 1, 1, 1, 1, 1, 3, 1], [2, 5, 1, 3, 4, 5, 5, 2, 2, 4, 5, 2, 2, 3, 1, 4, 5, 3, 2, 4, 5, 2, 4, 4, 2, 2, 2, 1, 3, 1]), 11)


/**
 * O(n2), O(n2)
 * dp, bottom-up
 * reversed iteration
 * @param {number[]} numbers_1
 * @param {number[]} numbers_2
 * @return {number}
 */
var maxUncrossedLines = function (numbers_1, numbers_2) {
  const cache = Array.from({ length: numbers_1.length + 1 }, () => Array(numbers_2.length + 1).fill(0));

  for (let index_1 = numbers_1.length - 1; index_1 >= 0; index_1--) {
    for (let index_2 = numbers_2.length - 1; index_2 >= 0; index_2--) {
      if (numbers_1[index_1] === numbers_2[index_2]) {
        cache[index_1][index_2] = cache[index_1 + 1][index_2 + 1] + 1;
      } else {
        cache[index_1][index_2] =
          Math.max(
            cache[index_1 + 1][index_2],
            cache[index_1][index_2 + 1]);
      }
    }
  }

  return cache[0][0]
};


/**
 * O(n2), O(n2)
 * dp, top-down with memoization as list
 * @param {number[]} numbers_1
 * @param {number[]} numbers_2
 * @return {number}
 */
var maxUncrossedLines = function (numbers_1, numbers_2) {
  const memo = Array.from({ length: numbers_1.length + 1 }, () => Array(numbers_2.length + 1).fill(-1));

  var dfs = (index_1, index_2) => {
    if (
      index_1 === numbers_1.length ||
      index_2 === numbers_2.length
    ) {
      return 0
    } else if (memo[index_1][index_2] != -1) {
      return memo[index_1][index_2]
    }

    if (numbers_1[index_1] == numbers_2[index_2]) {
      memo[index_1][index_2] = 1 + dfs(index_1 + 1, index_2 + 1);
    } else {
      memo[index_1][index_2] = 
      Math.max(
        dfs(index_1 + 1, index_2),
        dfs(index_1, index_2 + 1));
    }

    return memo[index_1][index_2]
  }
  return dfs(0, 0)
};


/**
 * O(n2), O(n2)
 * dp, top-down with memoization as hash map
 * @param {number[]} numbers_1
 * @param {number[]} numbers_2
 * @return {number}
 */
var maxUncrossedLines = function (numbers_1, numbers_2) {
  const memo = new Map();

  var dfs = (index_1, index_2) => {
    if (
      index_1 === numbers_1.length ||
      index_2 === numbers_2.length
    ) {
      return 0
    } else if (memo.has(`${index_1},${index_2}`)) {
      return memo.get(`${index_1},${index_2}`)
    }

    if (numbers_1[index_1] == numbers_2[index_2]) {
      memo.set(`${index_1},${index_2}`, 1 + dfs(index_1 + 1, index_2 + 1));
    } else {
      memo.set(
        `${index_1},${index_2}`,
        Math.max(
          dfs(index_1 + 1, index_2),
          dfs(index_1, index_2 + 1)
        )
      );
    }

    return memo.get(`${index_1},${index_2}`)
  }
  return dfs(0, 0)
};





// Solving Questions With Brainpower
// https://leetcode.com/problems/solving-questions-with-brainpower/description/
console.log(mostPoints([[3, 2], [4, 3], [4, 4], [2, 5]]), 5)
console.log(mostPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]), 7)
console.log(mostPoints([[72, 5], [36, 5], [95, 5], [50, 1], [62, 1], [14, 3], [72, 5], [86, 2], [43, 3], [51, 3], [14, 1], [91, 5], [47, 4], [72, 4], [63, 5], [40, 3], [68, 1], [8, 3], [84, 5], [7, 5], [40, 1], [35, 3], [66, 2], [39, 5], [40, 1], [92, 3], [67, 5], [34, 3], [84, 4], [75, 5], [6, 1], [71, 3], [77, 3], [25, 3], [53, 3], [32, 3], [88, 5], [18, 2], [21, 3], [78, 2], [69, 5], [45, 4], [94, 2], [70, 1], [85, 2], [7, 2], [68, 4], [71, 4], [57, 2], [12, 5], [53, 5], [51, 3], [46, 1], [28, 3]]), 845)


/**
 * O(n), O(n)
 * dp, bottom-up with tabulation as hash map
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  const cache = new Map();

  for (let index = questions.length - 1; index > -1; index--) {
    cache.set(index,
      Math.max(
        questions[index][0] + (cache.get(index + 1 + questions[index][1]) ?? 0),
        cache.get(index + 1) ?? 0
      ));
  }

  return cache.get(0)
};





// Count Ways To Build Good Strings
// https://leetcode.com/problems/count-ways-to-build-good-strings/description/



// Count Ways To Build Good Strings
// https://leetcode.com/problems/count-ways-to-build-good-strings/description/
console.log(countGoodStrings(1, 1, 1, 1), 2)
console.log(countGoodStrings(1, 2, 1, 1), 6)
console.log(countGoodStrings(2, 2, 1, 1), 4)
console.log(countGoodStrings(1, 3, 1, 1), 14)
console.log(countGoodStrings(3, 3, 1, 1), 8)
console.log(countGoodStrings(2, 3, 1, 2), 5)
console.log(countGoodStrings(200, 200, 10, 1), 764262396)  // tle


/**
 * O(n), O(n)
 * dp, bottom-up
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const mod = 10 ** 9 + 7;
  const cache = new Map([[0, 1]]);

  for (let index = 1; index <= high; index++) {
    const value = (
      (cache.get(index - zero) ?? 0) + 
      (cache.get(index - one) ?? 0)) % mod;
    cache.set(index, value);
  }

  let counter = 0;
  for (let index = low; index <= high; index++) {
    counter += cache.get(index);
  }

  return counter % mod
};





// New 21 Game
// https://leetcode.com/problems/new-21-game/description/



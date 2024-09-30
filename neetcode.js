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
console.log(containsDuplicate([1, 2, 3, 1]), true)
console.log(containsDuplicate([1, 2, 3]), false)
console.log(containsDuplicate([1, 2, 3, 4]), false)
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)


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
console.log(isAnagram("anagram", "nagaram"), true)
console.log(isAnagram("rat", "car"), false)
console.log(isAnagram("a", "ab"), false)


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
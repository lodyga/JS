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
console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5)
console.log(maxProfit([7, 6, 4, 3, 1]), 0)
console.log(maxProfit([2, 4, 1]), 2)
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]), 2)
console.log(maxProfit([1, 2]), 1)


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
      window[word[left]] -=1;
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
u}
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

    subset.push(nums[level]);
    dfs(level + 1);  // (left) decision to append current num
    subset.pop();
    dfs(level + 1);  // (right) decision to not append current num
  }

  dfs(0);  // start dfs with level = 0

  return subsetList
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
  const subset_list = [];  // solution

  function dfs(index) {
    if (index == nums.length) {  // target level reached
      subset_list.push(subset.slice());  // push subset to subset_list
      return
    }

    subset.push(nums[index]);
    dfs(index + 1);  // (left) decision to append current num
    subset.pop();

    // If num at the current index (that was poped previously) is the same as
    // the num at next index skip it.
    while (index + 1 < nums.length &&
      nums[index + 1] == nums[index]) {
      index++;
    }

    dfs(index + 1);  // (right) decision to not append current num
  }

  dfs(0);  // start dfs with level = 0

  return subset_list
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
    } else if (index == candidates.length || value > target) {
      return
    }

    combination.push(candidates[index]);
    dfs(index + 1, value + candidates[index]);
    combination.pop();

    while (index + 1 < candidates.length && candidates[index + 1] == candidates[index])
      index++

    dfs(index + 1, value);
  }

  dfs(0, 0);

  return combinationList
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8), [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]])
console.log(combinationSum2([2, 5, 2, 1, 2], 5), [[1, 2, 2], [5]])





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
  const perList = [];

  function dfs(prefix, postfix) {
    if (prefix.length == nums.length) {
      perList.push([...prefix]); // Copy prefix to perList
      return
    }

    for (let index = 0; index < postfix.length; index++) {
      dfs([...prefix, postfix[index]],
        [...postfix.slice(0, index), ...postfix.slice(index + 1)]);
    }
  }

  dfs([], nums)
  return perList
}
console.log(permute([1, 2, 3]), [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])
console.log(permute([0, 1]), [[0, 1], [1, 0]])
console.log(permute([1]), [[1]])
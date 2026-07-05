export { TreeNode, buildTree, getTreeValues, isSameTree }


// import { Queue } from '@datastructures-js/queue';

/**
 * Vanilla JS queue data structure.
 */
class Queue {
   constructor(items) {
      this.items = items || [];
   }
   enqueue(item) {
      this.items.push(item);
   }
   push(item) {
      this.enqueue(item);
   }
   dequeue() {
      return this.items.shift()
   }
   pop(item) {
      return this.dequeue(item)
   }
   isEmpty() {
      return this.items.length === 0
   }
   size() {
      return this.items.length
   }
}


class TreeNode {
   constructor(val = null, left = null, right = null) {
      this.val = val
      this.left = left
      this.right = right
   };
}


/**
 * Build binary tree from level order traversal list.
 * @param {*} nodeList 
 * @returns 
 */
const buildTree = (nodeList, { withLookup = false } = {}) => {
   while (
      nodeList.length &&
      nodeList[nodeList.length - 1] === null
   ) {
      nodeList.pop();
   }

   if (!nodeList.length) {
      return null
   }

   const root = new TreeNode(nodeList[0]);
   const queue = new Queue([root]);
   let index = 1;
   const lookup = new Map([[root.val, root]]);

   while (index < nodeList.length) {
      let node = queue.pop();

      // Assign the left child if available
      if (
         index < nodeList.length &&
         nodeList[index] != null
      ) {
         node.left = new TreeNode(nodeList[index]);
         queue.push(node.left)
         if (withLookup) { lookup.set(node.left.val, node.left); }
      }
      index++;

      // Assign the right child if available
      if (
         index < nodeList.length &&
         nodeList[index] != null
      ) {
         node.right = new TreeNode(nodeList[index]);
         queue.push(node.right)
         if (withLookup) { lookup.set(node.right.val, node.right); }
      }
      index++;
   }
   return withLookup ? [root, lookup] : root
};

// const binaryTree = buildTree([4, 2, 7, 1, 3, 6, 9])
// const binaryTree = buildTree([7, 3, 15, null, null, 9, 20])
// const binaryTree = buildTree([3, 4, 5, 1, 2, null, null, null, null, 0])
// console.log(binaryTree)


/**
 * Return tree node values in level order traversal format.
 * @param {*} root 
 * @returns 
 */
const getTreeValues = (root) => {
   if (root === null) {
      return []
   }

   const values = [];
   const queue = [root];

   while (queue.length) {
      const node = queue.shift();
      if (node) {
         values.push(node.val);
         queue.push(node.left);
         queue.push(node.right);
      } else {
         values.push(null)
      }
   }

   while (values[values.length - 1] === null) {
      values.pop();
   }
   return values
};

// const treeValues = getTreeValues(binaryTree);
// console.log(treeValues);


/**
 * Time complexity: O(n)
 * Auxiliary space complexity: O(n)
 * Tags: binary tree, dfs, recursion
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const isSameTree = (root1, root2) => {
   const dfs = (node1, node2) => {
      if (!node1 && !node2) {
         return true
      } else if (!node1 || !node2)
         return false

      if (node1.val !== node2.val)
         return false

      const left = dfs(node1.left, node2.left);
      const right = dfs(node1.right, node2.right);
      return left && right
   }
   return dfs(root1, root2)
};







/**
 * Time complexity: O(n)
 * Auxiliary space complexity: O(n)
 * Tags: binary tree, dfs, recursion, pre-order traversal
 */
class Codec {
   /**
    * @param {TreeNode} root
    * @returns {string}
    */
   serialize(root) {
      const values = [];

      const dfs = (node) => {
         if (!node) {
            values.push('null')
            return
         }
         values.push((node.val).toString());
         dfs(node.left);
         dfs(node.right);
      };
      dfs(root);
      return values.join(',')
   };

   /**
    * @param {string} data
    * @returns {TreeNode}
    */
   deserialize(data) {
      let values = data.split(',');
      let index = 0;

      const dfs = () => {
         if (values[index] === 'null') {
            index++;
            return null
         }

         const node = new TreeNode(parseInt(values[index]));
         index++;
         node.left = dfs();
         node.right = dfs();
         return node
      }
      return dfs()
   };
}
const serialize = new Codec().serialize;
const deserialize = new Codec().deserialize;

//console.log(new Codec().serialize(buildTree([1, 2, 3, null, null, 4, 5])))
//console.log(new Codec().deserialize(new Codec().serialize(buildTree([1, 2, 3, null, null, 4, 5]))))
// console.log(getTreeValues(new Codec().deserialize(new Codec().serialize(buildTree([1, 2, 3, null, null, 4, 5])))), [1, 2, 3, null, null, 4, 5])
// console.log(getTreeValues(new Codec().deserialize(new Codec().serialize(buildTree([])))), [])

// Bind the method to the instance
// const solution = new Solution();
// const deleteNode = solution.deleteNode.bind(solution); // Bind the context

// static method
// const deleteNode = Solution.deleteNode;


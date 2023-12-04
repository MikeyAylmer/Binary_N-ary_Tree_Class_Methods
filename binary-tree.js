/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) {
      return 0; // Return 0 for an empty tree
    }

    // Helper function to recursively calculate the minimum depth
    const calculateMinDepth = (node) => {
      if (!node) {
        return 0;
      }

      if (!node.left && !node.right) {
        return 1; // Leaf node
      }

      const leftDepth = calculateMinDepth(node.left);
      const rightDepth = calculateMinDepth(node.right);

      return 1 + Math.min(leftDepth, rightDepth);
    };

    return calculateMinDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree. */

  maxDepth() {
    if (!this.root) {
      return 0; // Return 0 for an empty tree
    }

    // Helper function to recursively calculate the maximum depth
    const calculateMaxDepth = (node) => {
      if (!node) {
        return 0;
      }

      const leftDepth = calculateMaxDepth(node.left);
      const rightDepth = calculateMaxDepth(node.right);

      return 1 + Math.max(leftDepth, rightDepth);
    };

    return calculateMaxDepth(this.root);
  }

  /** maxSum(): return the maximum sum along a path in the tree. */

  maxSum() {
    if (!this.root) {
      return 0; // Return 0 for an empty tree
    }

    // Helper function to recursively calculate the maximum sum
    const calculateMaxSum = (node) => {
      if (!node) {
        return 0;
      }

      const leftSum = calculateMaxSum(node.left);
      const rightSum = calculateMaxSum(node.right);

      // Calculate the maximum sum including the current node
      return Math.max(0, leftSum, rightSum) + node.val;
    };

    return calculateMaxSum(this.root);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) {
      return null; // Return null for an empty tree
    }

    // Helper function to recursively find the next larger value
    const findNextLarger = (node, currentNextLarger) => {
      if (!node) {
        return currentNextLarger;
      }

      if (node.val > lowerBound && (currentNextLarger === null || node.val < currentNextLarger)) {
        currentNextLarger = node.val;
      }

      const leftResult = findNextLarger(node.left, currentNextLarger);
      const rightResult = findNextLarger(node.right, leftResult);

      return rightResult;
    };

    return findNextLarger(this.root, null);
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0; // Return 0 for an empty tree
    }

    // Helper function to recursively traverse the tree and accumulate values
    const traverse = (node) => {
      return node.val + node.children.reduce((acc, child) => acc + traverse(child), 0);
    };

    return traverse(this.root);

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) {
      return 0; // Return 0 for an empty tree
    }

    // Helper function to recursively count nodes with even values
    const countEvenNodes = (node) => {
      let count = node.val % 2 === 0 ? 1 : 0;
      for (const child of node.children) {
        count += countEvenNodes(child);
      }
      return count;
    };

    return countEvenNodes(this.root);

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0; // Return 0 for an empty tree
    }

    // Helper function to recursively count nodes with values greater than lowerBound
    const countNodesGreaterThan = (node) => {
      let count = node.val > lowerBound ? 1 : 0;
      for (const child of node.children) {
        count += countNodesGreaterThan(child);
      }
      return count;
    };

    return countNodesGreaterThan(this.root);

  }
}

module.exports = { Tree, TreeNode };

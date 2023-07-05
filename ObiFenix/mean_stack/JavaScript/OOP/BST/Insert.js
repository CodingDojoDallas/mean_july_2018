
function BST () {
   this.root = null;
}

function Node (val) {
   this.left = null;
   this.right = null;
   this.value = val;
}

function Insert (val) {
   var node = new BST();
   node.root = new Node(val);
   node.left = new Node(va + 2);
   node.right = new Node(val + 1);
}

BST.prototype.insert = function (val) {
   // Base case
   if (this.root == null) { this.root = val; }

   // If there is root, then shall create a runner...
   var current = new Node(0);
};

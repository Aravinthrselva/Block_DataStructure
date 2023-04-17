
 A file system can be a tree with an arbitrary amount of children in each directory


key: actual data held inside node
root: the parentest node in a tree
siblings: nodes under the same parent and on the same level
subtree: once you isolate a part of a broader tree, you can form a brand new tree with new relationships

Trees can be very efficient data structures for searching/sorting data precisely because of the rules it sets, 
like being a binary tree or an even stricter rule set, a binary search tree.


Binary Search Tree

has the following properties:


1. it is a binary tree
2. the left subtree of a node contains only nodes with keys lesser than the node's key
3. the right subtree of a node contains only nodes with keys greater than the node's key
4. each node’s left and right subtrees must also be a binary search tree


Knowing that each left child is less than the parent and each right child is greater than the parent, 
how many attempts does it take you to find a number (key) at most?


Since blockchains are basically databases, 

Big O analysis is very important to help choose the most efficient data structure (low storage costs, easy search and retrieval). 

When designing a system with data needs, you want your data structure to be as close to Constant Time as possible
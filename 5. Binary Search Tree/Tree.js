class Tree {
    constructor() {
        this.root = null;
    }
    addNode(node) {
        if(!this.root) {
        this.root = node;
        return;
        }
        let ptr = this.root;
        while(true) {
        if(node.data < ptr.data) {
            if(!ptr.left) {
            ptr.left = node;
            break;
            } else {
            ptr = ptr.left;
        } 
        }
        if(node.data > ptr.data) {
            if(!ptr.right) {
            ptr.right = node;
            break;
        } else {
            ptr = ptr.right;
        }
        }
     }
  }

  hasNode(number) {


      let ptr = this.root;
      
      while(true) {
      if(!ptr) {
          return false;
      }    
      if(ptr.data === number) {
          return true;
      } 
      if (number < ptr.data) {
         ptr = ptr.left;
        } else 
      
      if (number > ptr.data) {
         ptr = ptr.right;    
      }
      
      }
      
}
}

module.exports = Tree;
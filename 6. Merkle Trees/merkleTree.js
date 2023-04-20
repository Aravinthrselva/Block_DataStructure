class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
        
    }
    getRoot(leaves = this.leaves) {
        
        
        if(leaves.length === 1) {
            return leaves[0]
        }
        let layer = [];
        for(let i=0; i< leaves.length; i+=2) {
            const left = leaves[i];
            if(leaves[i+1]) {
            const right = leaves[i+1];
            layer.push(this.concat(left, right));
            } else {
                layer.push(left)
            }
            
        }
        return this.getRoot(layer)
        
    }

    getProof(index, leaves = this.leaves, proof = []) {
        
        if(leaves.length === 1 ) {
            return proof;
        }
        
        let newLayer = [];
        for(let i=0; i < leaves.length; i+=2) {
            let left = leaves[i];
            if(!leaves[i+1]) {               
               newLayer.push(left); 
            } else {
               let right = leaves[i+1]
               newLayer.push(this.concat(left, right));

               if(i === index || i === index-1) {
                   let isLeft = !(index % 2);
                   proof.push({ 
                                data : isLeft? right : left,
                                left : !isLeft
                              })
               }
            }
        }

        return this.getProof(Math.floor(index/2), newLayer, proof);    
        
        
 
    }
}

module.exports = MerkleTree;
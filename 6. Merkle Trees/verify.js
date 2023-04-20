function verifyProof(proof, node, root, concat) {
    let combinedHash = node;
  for (let i=0; i< proof.length; i++) {
    if(proof[i].left) {
      combinedHash = concat( proof[i].data, combinedHash);
    } else {
      combinedHash = concat(combinedHash, proof[i].data);
  }  
  }
  return root === combinedHash;
}
module.exports = verifyProof;

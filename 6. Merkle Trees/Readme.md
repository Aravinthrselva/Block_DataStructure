
Merkle Trees

Merkle trees are a very popular data structure in blockchains. 
Keeping data storage lean and efficient is the reason behind using structures like Merkle trees - 
this understanding is essential as you start building out dApps, you always want to be lean and efficient with your data storage.

on Ethereum, the less efficient your use of data storage, the more expensive your program will be for you and your users.


Merkle Tree is a data structure commonly used in Peer to Peer networks where efficient proofs of this nature will help increase the scalability of the network.

A Merkle Tree is a collection of hashes reduced to a single hash:

    ABCDEFGH <-- Merkle Root
       /    \
    ABCD     EFGH
    / \      / \
   AB  CD   EF  GH
  / \  / \  / \ / \
  A B  C D  E F G H

Merkle Trees are awesome! 
They allow us to verify if a piece of data is part of a larger data structure, 
without having all of the data within that structure. 
This means they can be used to check for inconsistencies in all kinds of distributed systems!


Remember that the data within a blockchain block is just a set of transactions.


For Blockchain, storing transactions as Merkle Trees allows us to look at a block and verify that a transaction was part of it by only having part of the data set!



A Merkle proof confirms specific transactions represented by a leaf or branch hash within a Merkle hash root.
So if anyone ever needs to prove that a transaction existed at one point in time in the blockchain, they just need to provide a Merkle proof.


Merkle Trees Use Cases


1. space and computationally efficient
2. good for scalability and decentralization
3. no need to pack a block full of transactions… just commit a Merkle root hash to it and keep transactions in other places that can handle them


In deeper terms, they:


1. They significantly reduce the memory needed to verify that data has maintained its integrity and hasn’t been altered.
2. They require less data to be broadcast across the blockchain network to verify data and transactions. This improves the efficiency of a blockchain.
3. They allow for Simple Payment Verification (SPV), which helps you to verify a transaction without downloading an entire block or blockchain. 
This allows you to send and receive transactions using a light-client node — more commonly known as a crypto wallet.



When verifying data using a Merkle tree, 
there is a Prover and a Verifier:

1. A Prover: Does all the calculation to create the merkle root (just a hash!)
2. A Verifier: Does not need to know all the values to know for certain one value is in the tree

Merkle trees are a huge benefit to the Verifier. You either produce a proof successfully, meaning data verification passes, or you don't, meaning your piece of data was not present when the Merkle root hash was calculated (or you performed the calculation wrong!).



Logarithmic Scaling


The amount of proof pieces that you need scales logarithmically to the size of the array of data you need to feed into the Merkle tree hash algorithm.


Merkle Tree Vocabulary Summary

Final terminology for Merkle trees:

Merkle tree: a structure used in computer science to validate data

Merkle root: the hash contained in the block header, which is derived from the hashes of all other transactions in the block

Merkle path: represents the information which the user needs to calculate the expected value for the Merkle root for a block, from their own transaction hash contained in that block. 
The Merkle path is used as part of of the Merkle proof

Merkle proof: proves the existence of a specific transaction in a specific block (without the user needing to examine all the transactions in the block). 
It includes the Merkle root and the Merkle path
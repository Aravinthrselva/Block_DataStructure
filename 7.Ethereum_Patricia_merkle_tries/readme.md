Merkle Trees in Ethereum

Here is a technical overview of merkling in Ethereum by Vitalik Buterin.

https://blog.ethereum.org/2015/11/15/merkling-in-ethereum

Vitalik highlights several reasons for using Patricia Merkle Tries in Ethereum:

~ Efficient data verification (from its merkle properties)
~ More complex light-client queries
~ Can quickly change values and only recompute a portion of the tree (prevents some DDOS attack vectors)
~ There is a limit to the depth of the tree, which prevents other DDOS attack vectors
~ The order of the updates do not matter for the root hash

A trie is pronounced like "try". It comes from the word "retrieval".

This particular data structure works well with storing strings, especially ones with a many common prefixes.

Ethereum nodes maintain four tries:

1. A state trie which contains information about Ethereum accounts
2. A storage trie which is where we can write persistent data from smart contracts
3. A transactions trie which contains the transactions stored in a block
4. A receipts trie which contains log/event information from contracts

Why Does Ethereum Use a Merkle Patricia Trie?


There are typically two different types of data:

Permanent

Once a transaction occurs, that record is sealed forever
This means that once you locate a transaction in a block’s transaction trie, you can return to the same path over and over to retrieve the same result


Ephemeral

In the case of Ethereum, account states change all the time! (ie. A user receives some ether, interacts with a contract, etc)
nonce, balance, storageRoot, codeHash


It makes sense that permanent data, like mined transactions, and ephemeral data, like Ethereum accounts (balance, nonce, etc), should be stored separately. 

Merkle trees, again, are perfect for permanent data. 

PMTs are perfect for ephemeral data, which Ethereum is in plenty supply of.

Unlike transaction history, Ethereum account state needs to be frequently updated. 


The balance and nonce of accounts is often changed, and what’s more, new accounts are frequently inserted, and keys in storage are frequently inserted and deleted.
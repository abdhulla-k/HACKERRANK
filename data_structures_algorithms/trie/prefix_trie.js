// A trie, also known as a prefix tree, is a tree-like data structure used for efficient retrieval of a collection of strings.
// It is often used to implement dictionary or autocomplete functionality in text-based applications.

// implement a trie
class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    // this is the function to inseart a word to trie
    insert(word) {
        // set root as current node to start inserting
        let node = this.root;

        // loop through the word and insert one by one
        for (let i = 0; i < word.length; i++) {
            let ch = word[i];
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch];
        }
        // set isEndOfWord variable as true in last node
        node.isEndOfWord = true;
    }

    // function to search a word from trie
    search(word) {
        // set root as current node
        let node = this.root;
        // travers through the word and check is it exist in trie
        for (let i = 0; i < word.length; i++) {
            let ch = word[i];
            if (!node.children[ch]) {
                return false;
            }
            node = node.children[ch];
        }
        return node.isEndOfWord;
    }
}

// node
class TrieNode {
    constructor() {
        // set children as an empty object
        this.children = {};
        // et a varible false to set it ture if a word ending in that node
        this.isEndOfWord = false;
    }
}

const trie = new Trie();
trie.insert('abdhulla');
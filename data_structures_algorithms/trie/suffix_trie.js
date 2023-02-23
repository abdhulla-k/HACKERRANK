class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string);
    }

    // O(n^2) time | O(n^2) space
    populateSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertSubStringStartingAt(i, string)
        }
    }

    insertSubStringStartingAt(i, string) {
        let node = this.root
        for (let j = i; j < string.length; j++) {
            const letter = string[j]
            if (!node.hasOwnProperty(letter)) {
                node[letter] = {}
            }
            node = node[letter]
        }
        node[this.endSymbol] = true
    }

    // O(m) time | O(1) space
    contains(string) {
        let node = this.root
        for(let i = 0; i < string.length;i++){
            if(!node.hasOwnProperty(string[i])) return false
            node = node[string[i]]
        }
        if(node.hasOwnProperty(this.endSymbol) && node[this.endSymbol]){
            return true
        }else{
            return false
        }
    }

    delete(string){
        let node = this.root
        let i
        for( i = 0; i < string.length;i++){
            if(!node.hasOwnProperty(string[i])) return console.log("There is no word")
            node=node[string[i]]
        }
        if(!node.hasOwnProperty(this.endSymbol) || node[this.endSymbol]!=true) return console.log("There is no word")
        node[this.endSymbol]=false
    }
}
const suffixTrie = new SuffixTrie("banana")
// console.log(suffixTrie.contains('a')) 
// suffixTrie.delete("a")
console.log(suffixTrie.contains("banana"))
suffixTrie.delete("banana")
console.log(suffixTrie.contains("banana"))

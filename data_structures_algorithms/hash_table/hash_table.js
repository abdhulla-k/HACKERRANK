// hash table is a data structure that might be linear or non-linear

// how to implement or create an hash table?
// Create a HashTable class with table and size initial properties
// Add a hash() function to transform keys into indices
// Add the set() and get() methods for adding and retrieving key/value pairs from the table.


// create hash table
class HashTable {
    constructor() {
        this.table = new Array(200);
        this.size = 0;
    }

    // function to convert key to index
    _hash(key) {
        let hash = 0;
        // loop through the key
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(key[i])
        }

        // return the hash value
        return hash % this.table.length;
    }

    // function to insert or set a value to table
    set(key, value) {
        // convert key into index
        const index = this._hash(key);
        // insert or set the value
        this.table[index] = [key, value];
        this.size++;
    }

    // function to get or retrive data from table
    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }

    // remove from table
    remove(key) {
        const index = this._hash(key);
        // check is there a value
        if(this.table[index] && this.table[index].length) {
            this.index = undefined;
            this.size--;
            return true;
        } else {
            return false;
        }
    }
}


const table = new HashTable();
table.set('a', 'value')
table.set('b', 'something')
console.log(table);
// How to Handle Index Collision

// the code in the file hash_table.js is an example of hash table with collision.
// Sometimes, the hash function in a Hash Table may return the same index number. 
// The same hash value will cause the index to collide, overwriting the previous entry with the new one.

// create a hashtable class
class HashTable {
    constructor() {
        this.table = new Array(200);
        this.size = 0;
    }

    // function to find the hash value of key
    _hash(key = 'test') {
        let hash = 0;
        // loop through the key and find the hash value of key
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(key[i]);
        }
        // return index
        return hash % this.table.length;
    }

    // function to set a value to the hash table
    set(key, value) {
        // find the index or hash value of the key
        const index = this._hash(key);

        if (this.table[index]) {
            // ther is existing value in this index.
            // that means collision happened
            // so check is the key exist or not to under stand the indention of user. is it trying to update or add new value
            for (let i = 0; i < this.table[index].length; i++) {

                // check is the key exist or not
                if (this.table[index][i][0] === key) {

                    // key exists
                    // update the value and stop process
                    this.table[index][i][1] = value;
                    return
                }
            }
            // ther is no element with the key.
            // so push new value to the array
            this.table[index].push([key, value]);
        } else {
            // there is no existing values
            // set a new empty array
            this.table[index] = [];

            // and push the new key and value to that
            this.table[index].push([key, value]);
        }

        // incriment the size of table
        this.size++;
    }

    // function to get the value of a key from our table
    get(key) {
        // find the index or hash value
        const index = this._hash(key);

        // chec is there any value in this hash value
        if (this.table[index]) {
            // there is value in this index. so
            // loop through the nested array and serch for the key user entered
            for (let i = 0; i < this.table.length; i++) {
                // chck for the matching key
                if (this.table[index][i][0] === key) {
                    // key matched. so
                    // return the value
                    return this.table[index][i][1];
                }
            }
        }
        // return undefined if there is not value
        return undefined;
    }


    // function to delete a key and vlaue from the table
    remove(key) {
        // find the index or hash value of the key
        const index = this._hash(key);

        // check is there any value
        if (this.table[index] && this.table[index].length) {
            // the value is exist. so 
            // loop through the nested array and check for the key
            for (let i = 0; i < this.table[index].length; i++) {
                // check for the exact key
                if (this.table[index][i][0] === key) {
                    // find the key. so delete the value
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    // function to display the hash table
    display() {
        // go through the table
        this.table.forEach((values, index) => {
            // go through the nested arrays
            const chainedValues = values.map(
                // return each values and create an array with the help of map function
                ([key, value]) => `[ ${key}: ${value} ]`
            );

            // print the array returned by the map function
            console.log(`${index}: ${chainedValues}`);
        });
    }
}

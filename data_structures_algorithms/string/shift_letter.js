let a = 'abcdefgh';

a = a.split('');
let counter = a.length - 1;
let letter = a[counter];
while(counter > 0) {
    counter--;
    a[counter+1] = a[counter];
}
a[0] = letter;
console.log(a);
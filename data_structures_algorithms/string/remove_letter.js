function removeLetter(letter = 'd', word = 'abcdefgh') {
    let array = word.split('');
    let position = 0;
    let minusCount = 0;
    let length = word.length;
    for (let i = 0; i < length; i++) {
        array[position] = array[i];
        if (array[i] != letter) {
            position++;
        } else {
            minusCount++;
        }
    }

    for (let i = 0; i < minusCount; i++) {
        array.pop();
    }

    console.log(array.join(""));
}

removeLetter();
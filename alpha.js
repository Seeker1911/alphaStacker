// Create a stackLetters function that should console.log rows of letters. It should take an array containing 
// the letters of the alphabet and output them like this: a ab abc on new lines.
// Then add logic to stackLetters that places a space after every fifth letter

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
var letters = "";
function stackLetters() {
    for (var i = 0; i < alphabet.length; i++) {
    	if (i%5 === 4) {
    		letters += alphabet[i] + " ";
    	} else {
    		alphabet[i];
        letters += alphabet[i];
        }
        console.log("rows:", letters);

    }
}
stackLetters();


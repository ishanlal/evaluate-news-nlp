function checkForURL(inputText) {
    console.log("::: Running checkForURL :::", inputText);
    const validUrl = require('valid-url');

    if (validUrl.isWebUri(inputText)){
        console.log('Valid URL');
    } else {
        console.log('Invalid URL!');
    }
}

export { checkForURL }



/*
let names = [
    "Picard",
    "Janeway",
    "Kirk",
    "Archer",
    "Georgiou"
]

if(names.includes(inputText)) {
    alert("Welcome, Captain!")
}
*/

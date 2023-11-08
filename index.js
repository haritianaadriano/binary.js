const yargs = require('yargs');

const options = yargs
    .usage('Usage: node index.js --input [input] --binary')
    .option('input', {
    alias: 'i',
    describe: 'Specify the input number (binary or decimal)',
    demandOption: true,
    type: 'string'
    })
    .option('binary', {
    alias: 'b',
    describe: 'Specify if the input is in binary',
    type: 'boolean'
    })
    .help().argv;

const input = options.input;
const isBinary = options.binary || false;

function binaryToDecimal(binaryString) {
    // Parse the binary string to an integer with base 2
    const decimalNumber = parseInt(binaryString, 2);
    return decimalNumber;
}

function decimalToBinary(number) {
    if (number > 0) {
        return decimalToBinary(parseInt(number / 2)) + (number % 2).toString();
      };
      return '';
}

function redirect() {
    if(isBinary) {
        return "decimal: " + binaryToDecimal(input);
    }
    else {
        return "binary: " + decimalToBinary(input);
    }
}

console.log("##########################################################################################################");
console.log("####################################Thank you using binary.js by adr######################################");
console.log("input to convert: " + input);
console.log(redirect());
console.log("##########################################################################################################");
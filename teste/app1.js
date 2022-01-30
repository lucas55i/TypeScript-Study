"use strict";
const pangram = (frase) => new Set(frase.toLowerCase().match(/[a-z]/g)).size == 26;
console.log(pangram('qmExzBIJmdELxyOFWv LOCmefk '));

//number
let num1 = 23.0;
let num2 = 0x78cf;
let num3 = 0o557;
let num4 = 0b110001;
console.log("Number - ponto flutuante", num1);
console.log("Number - hexadecimal", num2);
console.log("Number - Octal", num3);
console.log("Number - Binário", num4);

//bigint
let big1: bigint = 90001121312312312n;
let big2: bigint =
  0b100000000000000000000000000000000000000000000000000000000000000000000000n;
let big3: bigint = 0x200000000000000000003n;
let big4: bigint = 0o4000000000000000000003n;
console.log("Bigint ...: ", big1);
console.log("Bigint - Binário...: ", big2);
console.log("Bigint Hexadecimal: ", big3);
console.log("Bigint Octal: ", big4);

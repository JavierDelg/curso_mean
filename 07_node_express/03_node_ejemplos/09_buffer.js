"use strict";
/*
const b1 = Buffer.from("Hola mundo", "utf-8");
b1[3] = 65;
const cadena = b1.toString();
const b2 = Buffer.alloc(20);
b2[2] = b1[0];
b2[4] = b1[1];
b2[6] = b1[2];
b2[8] = b1[3];

console.log("Valor del buffer: ");
console.log(b1);
console.log("Valor de la cadena: ");
console.log(cadena);
console.log("Valor de la buffer2: ");
console.log(b2);
*/
const b3 = Buffer.alloc(30);

const word1 = Buffer.from("hello", "utf8");
const word2 = Buffer.from("world", "utf8");

word1.copy(b3, 0);
word2.copy(b3, 7);

b3.writeUInt32BE(123456789, 13);
b3.writeUInt32LE(123546798, 17);

console.log(b3.toString("utf8"));
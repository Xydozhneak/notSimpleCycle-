
//task 1
counter = 19.5;
while (counter < 30){
  counter += 0.5;
  document.write(`${counter} `);
} 

//task 2
dollar = 27; 
count = 10;
document.write("<pre>Converter<\/pre>");
while (count <= 100){
  uah = dollar*count;
  document.write(`${count} dollard is ${uah} grn <br>`);
  count += 10;
}

//task 3 -5
n = +prompt("Enter some number for task 3 - 5");
squareCounter = 1;
while (squareCounter*squareCounter <= n && squareCounter <= 13) {
  document.write(`<br>Square of ${squareCounter} < ${n} <br> `);
  squareCounter++;
}

primeNumber = true; 
primeCounter = 2; 
while (primeCounter < n){
if (n % primeCounter === 0 ){
    primeNumber = false;
  }
  primeCounter++;
}
if (primeNumber && n > 1) {
    document.write(`${n} - is a prime Number <br>`);
} else {
    document.write(`${n} - is not a prime Number <br>`);
}

resultOfExp = 1;
while (resultOfExp < n) {
  resultOfExp *= 3;
}
if (resultOfExp === n) {
    document.write(`${n} - we can get it by exponentiation on 3`);
} else {
    document.write(`${n} - we can NOT get it by exponentiation on 3`);
}






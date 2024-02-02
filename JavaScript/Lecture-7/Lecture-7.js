/* toString() */
let Number1=150
let Number2 = Number1.toString();
console.log(Number2);             //150
console.log(typeof(Number2));     //string

let Number3 = (89+20).toString();
console.log(Number3);             //109

let Number4 = (150).toString();
console.log(Number4);             //150


/*  toExponential() */

let a=2500000

let b=a.toExponential()
console.log(b)                    //2.5e+6
let c=a.toExponential(10)
console.log(c)                    //2.5000000000e+6

/*  toFixed() */

let fix1 = 5.4545
let fix2 = fix1.toFixed()
console.log(fix2);               //5
let fix3  = fix1.toFixed(10)
console.log(fix3);               //5.4545000000

/* toPrecision()pre */

{
  let pre1 = 5
  let pre2 = pre1.toPrecision(1);
  let pre3 = pre1.toPrecision(2);
  let pre4 = pre1.toPrecision(3);
  let pre5 = pre1.toPrecision(4);
  let pre6 = pre1.toPrecision(5);
  let pre7 = pre1.toPrecision(6);

  console.log(pre1); //5
  console.log(pre2); //5
  console.log(pre3); //5.0
  console.log(pre4); //5.00
  console.log(pre5); //5.000
  console.log(pre6); //5.0000
  console.log(pre7); //5.00000
}


/* ValueOf()  */

{
  const numbers = 150;
  let Number1  = numbers.valueOf();
  let Number2  = (15-26).valueOf();
  let Number3  = (255).valueOf();
  console.log(Number1);  //150
  console.log(Number2);  //-11
  console.log(Number3);  //255
  console.log(typeof(Number3)); //number
}
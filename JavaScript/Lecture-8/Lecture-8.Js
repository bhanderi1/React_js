/*---------------------- Javascript string method ----------------------------*/

/* primitive string */

// 3 type string            ""  ''  ``
// let string1 ="Hello world"
// let string2 ='hello world'
// let string3 =`helow world`
// console.log(string1);
// console.log(string2);
// console.log(string3);

// /* string as object */               new string creating
// let string4 = new String("Hello World")
// console.log(string4);                                  


// array type    
// let string5 = string1.split("");
// console.log(string5);


/******  javascript string method ******/

// String length
// String charAt()
// String slice()
// String substring()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charCodeAt()
// String split()
// String includes()


/* Follow String :- WHAT ARE MOST SIMPLE FOO. */
/***********************************************/

/******  String length. ******/

let string6 = "This is javascript"
console.log(string6.length)                    //18

/******  String charAt() ******/

let string7  = "This is javascript"
let string8 = string7.charAt(10)
console.log(string8);                          //v

/****** String slice() return New String ******/
// slice(indexStart)
// slice(indexStart, indexEnd)
let string9  = "This is javascript"
let string10 = string9.slice(4)              //_is _javascript
let string11 = string10.slice(-6)            //script
let string12 = string9.slice(-6  , -12)      //No answer
let string13 = string9.slice(6 , 6)          //No answer
let string14 = string9.slice(-6 , 6)         //No answer
let string15 = string9.slice(6 , -6)         //s_java
console.log(string15);                      





/******  String substring() return New String ******/
// substring(indexStart)
// substring(indexStart, indexEnd)
let string16  = "This is javascript"
let string17 = string16.substring(10)          //vascript
let string18 = string9.slice(10)               //vascript
let string19 = string16.substring(-10)         //This is javascript
let string20 = string9.slice(-10)              //javascript
let string21 = string16.substring(10, 20)      //vascript
let string22 = string16.substring(10 ,-20)     //this is ja
let string23 = string16.substring(-10 ,7)      //this is

console.log(string23); 
console.log(string22); 


/****** String replace() ******/
let String24 = "WHAT ARE MOST SIMPLE FOO."
let String25 = String24.replace("MOST" , "index")
console.log(String25);
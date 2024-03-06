
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

// let string6 = "This is javascript";
// console.log(string6.length); //18

/******  String charAt() ******/

// let string7 = "This is javascript";
// let string8 = string7.charAt(12);
// console.log(string8); //v

/****** String slice() return New String ******/
// slice(indexStart)
// slice(indexStart, indexEnd)
let string9 = "This is javascript";
// let string10 = string9.slice(4); //_is _javascript
// let string11 = string9.slice(-6); //script
// let string12 = string9.slice(-6, -12); //No answer
// let string13 = string9.slice(6, 6); //No answer
// let string14 = string9.slice(-6, 6); //No answer
// let string15 = string9.slice(6, -6); //s_java
// console.log(string15);

/******  String substring() return New String ******/
// substring(indexStart)
// substring(indexStart, indexEnd)
let string16 = "This is javascript";
// let string17 = string16.substring(10); //vascript
// let string18 = string9.slice(10); //vascript
// let string19 = string16.substring(-10); //This is javascript
// let string20 = string9.slice(-10); //javascript
// let string21 = string16.substring(10, 20); //vascript
// let string22 = string16.substring(10, -20); //this is ja
// let string23 = string16.substring(-10, 7); //this is

// console.log(string21);
// console.log(string22);

/****** String replace() ******/
// let String24 = "WHAT ARE MOST SIMPLE FOO.";
// let String25 = String24.replace("Most", "index");
// let String26 = String24.replace("MOST", "index");
// console.log(String25);

/****** String replaceAll() ******/

// let string27 = "WHAT ARE MOST HARD MOST FOO.";
// let string28 = string27.replaceAll(/MOST/g, "Hello");
// // let string29 = string28.replaceAll(/MOST/i , "Hello")  //error
// console.log(string28);

/****** String toUpperCase() ******/
// let string30 = "this is most common language";
// let string31 = string30.toLocaleUpperCase();
// console.log(string31);

/******  String toLowerCase() ******/
// let string32 = "HELLO";
// let string33 = string32.toLowerCase();
// console.log(string33);

/******  String concat() ******/
// let string34 = "Hello";
// let string35 = "world";
// let string36 = "How are you!";
// let string37 = string34.concat(" " + string36 + " " + string35);
// console.log(string37);

/******  String trim() ******/

// let string38 = "     this is most common lecture    ";
// console.log(string38);
// console.log(string38.length);    //34
// let string39 = string38.trim();
// console.log(string39);
// console.log(string39.length);    //27

/******  String trimStart() ******/

// let string40 = "  This is most common lecture!   ";
// console.log(string40);
// console.log(string40.length); //33
// let string41 = string38.trimStart();
// console.log(string41);
// console.log(string41.length);//31

/******  String trimEnd() ******/
// let string42 = "  this is most coomon lecture!  ";
// console.log(string42);
// console.log(string42.length);//33
// let string43 = string42.trimEnd();
// console.log(string43);
// console.log(string43.length);//31

/******  String padStart() ******/
let string44 = " this is most coomon lecture!  ";
console.log(string44);
console.log(string44.length); //31
let string45 = string44.padStart(35, "1");
console.log(string45); //1111 this is most coomon lecture!
let number1 = "500";
let number2 = number1.padStart(5, 0);
console.log(number2);  //00500

/******  String padEnd() ******/

// let number3 = "500";
// let number4 = number3.padEnd(4, 0);
// console.log(number2); //00500
// console.log(typeof number2); //string
// let number5 = parseFloat(number2);
// console.log(number5); //500
// console.log(typeof number5); //number

/******  String charCodeAt() ******/
// let string46 = "this is most commom!";
// let string47 = string46.charCodeAt(15);
// console.log(string47); //109  = s value  

/****** String split() ******/
// let string48 = "wow! what a place";
// console.log(string48);
// let string49 = string48.split("");
// console.log(string49); //convert to the array

/******  String includes() , true and false ******/
// let string50 = "wow!whataplace";
// console.log(string50);
// let string51 = string50.includes("!");
// console.log(string51); //true


/* JAVASCRIPT STRING METHOD */       //this is searching methode

// String indexOf()
// String lastIndexOf()
// String search()
// String includes()
// String startsWith()
// String endsWith()
// String match()
// String matchAll()

/******   String indexOf() ******/
let string52 ="wow! what a place"
console.log(string52)
let string53 = string52.indexOf("a" ,8) 
console.log(string53)                            //10

/******   String lastIndexOf() ******/
                          //8


/******  String search() ******/
// let string56 = "this is javascript"
// console.log(string56)
// let string57 = string56.search("i")
// console.log(string57)                             //2

/******  String startsWith() ******/
// always capitals words start word =true

    let string58 = "This Is Javascript"
    console.log(string58)
    let string59 = string58.startsWith("I")
    console.log(string59)                         

/******  String endWith() ******/

let string60 = "javascript "
console.log(string60)
let string61 = string60.endsWith(" ")  
console.log(string61)                      //ture
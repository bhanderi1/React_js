// Variable useing var() in javscript
{
var box ="LiveScript"
console.log(box)

var Names="foo";
var names='Javacript';
console.log(Names);

var number1=15;
var number2 =2;
console.log(number1 **number2);

var box1="toys";
var box1='cloths';
var box1=45;

console.log(box1);
}

box ="apple"
box1="45"
console.log(box1);

/*******New Html Element Add In Though Javascript *********/
{
var newlement = document.createElement("h1");
newlement.textContent="hello world";
document.body.appendChild(newlement);

var newlement = document.createElement("marquee", "option");
newlement.textContent="hello";
document.body.appendChild(newlement);

var newlement = document.createElement("pre");
newlement.textContent="How are you!";
document.body.appendChild(newlement);
}

document.write('hello javascript!');


// js comments

// single-line comments

/* multi-line 
 comments*/


//  Template literals
{
var _nameone ="5";
var name20 ='5';

console.log(name20);
console.log(typeof(_nameone));
}

{
    alert("_nameone + ${name20}")
    alert(`${_nameone}+${name20}`);

}

// rules for Naming in javascript variables

{
    // valid
    let a= "hello";
    let _a= "hello";
    let $a= "hello";

}
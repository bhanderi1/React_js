/* Javascript Array */

// let newarry = [1 , false ,"string"]
// console.log(newarry)
// console.log(newarry.length)         //3

// let newarry2 = ["apple" , "banana" , "watermelon" , , "lichi"]
// console.log(newarry2)
// console.log(newarry2[4])            //lichi
// console.log(Object.keys(newarry2))  //[0,1,2,4]
// console.log(newarry2.length)        //5

// newarry2.length = 10
// console.log(newarry2)
// console.log(Object.keys(newarry2))  //[0,1,2,4]

// newarry2[0] = "Graps"
// console.log(newarry2)

// let newstring = newarry2.toString()
// console.log(newstring)
// console.log(typeof(newstring))

// Array length properties
// Accessing the First Array Element
// Accessing the Last Array Element
// Adding Array Elements
// Converting Arrays to Strings

/*
Array indexes start with 0:

[0] is the first array element
[1] is the second 
[2] is the third ...
*/

/* Array length properties */

// let arry = [
//   "option-1",
//   "option-2",
//   "option-3",
//   "option-4",
//   "option-5",
//   "option-6",
//   "option-7",
// ];

// console.log(arry);
// console.log(arry[0]);
// console.log(arry[5]);
// arry.push("javascript");
// console.log(arry);
// arry.pop();
// arry.pop();
// arry.pop();
// console.log(arry);

// arry[0] = "1";
// console.log(arry);




/* join() */

{
  // let array = ["1", "2", "3", "4", "5"];
  // let array2 = array.join("+");
  // console.log(array2); //1+2+3+4+5
  // console.log(typeof array2); //srting
}





/* popping  ->delete in last          */

// {
//   const dish = ["panipuri", "aloopuri", "dosa", "machuriyan"];
//   document.getElementById("demo").innerHTML = dish;
//   document.getElementById("demo-1").innerHTML = dish.pop();
//   document.getElementById("demo-2").innerHTML = dish.pop();
//   console.log(dish);
//   console.log(dish.length);
// }

// pop() 
// ->using id
{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
    // document.getElementById("demo-1").innerHTML = fruits.pop();
    // document.getElementById("demo-2").innerHTML = fruits.pop();
    // document.getElementById("demo-3").innerHTML = fruits.pop();

    // console.log(fruits);
}






// pushing array   ->add in last
{
    // const dish =["panipuri", "aloopuri", "dosa", "machuriyan"];

    // document.getElementById("demo").innerHTML = dish;
    // dish.push("pizza");
    // document.getElementById("demo-1").innerHTML = dish;
    // console.log(dish);
}
// using by id  --> pushing
{
  // const dish =["panipuri", "aloopuri", "dosa", "machuriyan"];
  // document.getElementById("demo").innerHTML = dish.push("icecrem")
  // document.getElementById("demo-1").innerHTML = dish.length 
}





/* Shifting Elements */

{
  let arry = ["S", "R" ,"U" ,"S","H", "T" ,"I"]
  let arry2 =arry.shift()
  let arry3 =arry.shift()
  console.log(arry2)
  console.log(arry3)
  console.log(arry)
}
// shift out
{
  const name = ["S", "R" ,"U" ,"S","H", "T" ,"I"]
  console.log(name)
  document.getElementById("demo").innerHTML = dish.shift()
  document.getElementById("demo-1")
}
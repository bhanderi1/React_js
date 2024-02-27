/* javascript object */

const dataobject = {}
console.log(dataobject)

const dataobject1 = {
  key1: "javascript",
  key2: "reactjs"
}

console.log(dataobject1)

console.log(dataobject1.key1)
console.log(dataobject1.key2)


console.log(dataobject1["key1"])
console.log(dataobject1["key2"])


const dataobject3 = {
  name: "ram",
  gender: "male",
  address: "ayodhya",
  marks: {
    maths: 99,
    english: 90
  }
}
console.log(dataobject3.marks.maths)
console.log(dataobject3["marks"])
console.log(dataobject3["marks"]["maths"])

const dataobject4 = {
  array: [1, 2, 3, 5, 6, [12, 13]],
  array2: [11, 12, 13, 14, 15, 16]
}
// console.log(dataobject4.array)
// console.log(dataobject4.array[5][0])


const Array1 = [
  {
    id: 1,
    item: "apple",
    catagories: "fruits"
  },
  {
    id: 2,
    item: "banana",
    catagories: "fruits"
  },
  {
    id: 3,
    item: "graps",
    catagories: "fruits"
  },
  {
    id: 4,
    item: "mango",
    catagories: "fruits"
  },
  {
    id: 5,
    item: "watermelon",
    catagories: "fruits"
  }

]


// console.log(Array1[0].id);




//-----------------------------------------------------------------------------------------------

let array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80]
let array2 = array.filter((word) => word <= 35)
console.log(array2)
let array3 = array.filter((word) => word >= 35)
console.log(array3)
let array4 = array.filter((word) => word >= 50)
console.log(array4)



const task = [
  {
    fruits:
    {
      fruit1:
      {
        fruit1: "apple",
      },
      fruit2:
      {
        fruit2: "graps",
      },
      fruit3:
      {
        fruit3: "watermalen",
      },
      fruit4:
      {
        fruit4: "banana",
      },
      fruit5:
      {
        fruit5: "mango",
      }
    },
    fastfood:
    {
      dish1:
      {
        dish1: "panipuri",
      },
      dish2:
      {
        dish2: "manchuriyan",
      },
      dish3:
      {
        dish3: "dosa",
      },
      dish4:
      {
        dish4: "sandwich",
      },
      dish5:
      {
        dish5: "chocolate",
      }
    },
    color:
    {
      color1:
      {
        color1: "red",
      },
      color2:
      {
        color2: "yellow",
      },
      color3:
      {
        color3: "green",
      },
      color4:
      {
        color4: "pink",
      },
      color5:
      {
        color5: "blue",
      }
    },
    language:
    {
      language1:
      {
        language1: "java"
      },
      language2:
      {
        language2: "javascript"
      },
      language3:
      {
        language3: "c++"
      },
      language4:
      {
        language4: "bootstrap"
      },
      language5:
      {
        language5: "c language"
      }
    },
    channel:
    {
      channel1:
      {
        channel1: "starplus",
      },
      channel2:
      {
        channel2: "starGold",
      },
      channel3:
      {
        channel3: "colors",
      },
      channel4:
      {
        channel4: "sonypal",
      },
      channel5:
      {
        channel5: "sonysab",
      },
    }
  }
]

// const user_input = prompt("enter fruits,fastfood,color,language and channel list :-")

// if (user_input == "fruits") {
//   console.log("fruits",task[0]["fruits"])
// }
// else if (user_input == "fastfood") {
//   console.log("fastfood",task[0]["fastfood"])
// }
// else if (user_input == "color") {
//   console.log("color",task[0]["color"])
// }
// else if (user_input == "language") {
//   console.log("language",task[0]["language"])
// }
// else if (user_input == "channel") {
//   console.log("channel",task[0]["channel"])
// }
// else {
//   console.log("please,page referse and enter right value")
// }



//----------------------------------------------------------------------------------------------------------------

// let list = [
//   { name1: "student1", catagories: "90%" },
//   { name2: "student2", catagories: "95%" },
//   { name3: "student3", catagories: "80%" },
//   { name4: "student4", catagories: "75%" },
//   { name5: "student5", catagories: "94%" },

//   { name1: "student1", catagories: "90%" },
//   { name2: "student2", catagories: "95%" },
//   { name3: "student3", catagories: "80%" },
//   { name4: "student4", catagories: "75%" },
//   { name5: "student5", catagories: "94%" }
// ];

// let output = prompt("enter student and marks list :-");
// let output1= list.filter(list1 => list1.catagories == output);
// console.log(output1);

// -------------------------------------------------------------------------------------------------

// document.getElementById("button").addEventListener("Click",function(e){
//   console.log("1");
//   console.log("target = " + e.target.dataset.name);
//   console.log('currentTarget = ' + e.currentTarget.dataset.name);
// },false)

const input =document.querySelector('input')
const value =document.getElementById('input_values')
input.addEventListener('input',displayValue)

function displayValue(e)
{
  input_value.innerHTML = e.target.value
}
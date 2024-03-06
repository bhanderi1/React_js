/*
1.alert
2.prompt
3.confirm
*/

/* 1.alert */
{
  //   alert("hellow user")
  //   window.alert("this is javascript")
}
{
  //   let a
  //   a=true
  //   alert(a ? "Nagative User" : "Positive User")
}
/* 2.Prompt */
{
  //   const Message =prompt()
  //   document.write(Message)
}
/*3.confrm */
{
  //   let message=confirm("this is javascript")
  //   document.write(message)
}

/************************* javascript map methods  ********************************/

//methods
{
  // 1.entries
  const Data = new Map([
    ["option-1", 20],
    ["option-2", 30],
    ["option-3", 40],
    ["option-4", 50],
  ]);
  console.log(Data);
  console.log(Data.size);
}

{
  // 2.set
  const newmap = new Map();
  newmap.set("item-1", "car");
  newmap.set("item-2", "bus");
  newmap.set("item-3", "truck");
  newmap.set("item-1", 50); //set

  console.log(newmap);
}

{
  // 3.get
  const newmap = new Map([
    ["item-1", "car"],
    ["item-2", "bus"],
    ["item-3", "truck"],
  ]);

  newmap.set("item-1 ", "truck"); //set
  console.log(newmap);

  console.log(newmap.get("item-1")); //get  - output only one variable value->car
}

{
  // size
  const Data = new Map([
    ["option-1", 20],
    ["option-2", 40],
    ["option-3", 60],
    ["option-4", 80],
    ["option-5", 90],
  ]);
  const sizes = Data.size;
  console.log(sizes);
}
// delete()
{
  const newmap = new Map([
    ["item-1", "car"],
    ["item-2", "bus"],
    ["item-3", "truck"],
    ["item-4", "auto"],
  ]);

  console.log(newmap);
  console.log(newmap.delete("item-2")); //item-2 is delete
  console.log(newmap);
}

// has()
{
  const Data = new Map([
    ["option-1", 20],
    ["option-2", 40],
    ["option-3", 60],
    ["option-4", 80],
  ]);

  console.log(Data.has("option-4")); //true
  //    ans is boolian -> true ,false
}

{
  const Data = new Map([
    ["option-1", 20],
    ["option-2", 40],
    ["option-3", 60],
    ["option-4", 80],
  ]);

  Data.delete("option-5");

  const hasss = Data.has("option-4");

  console.log(hasss); //true
  console.log(Data.size); //4
}

// ******************************** set method ****************************************

{
  const x = new Set([10, 20, 30]);
  console.log(x);
  console.log(x.size);
  //3
}

// new set
{
  const x = new Set();

  x.add("a");
  x.add("b");
  x.add("c");
  x.add("d");

  console.log(x);
  console.log(x.size);
}

{
  const newset = new Set();

  const a = "a";
  const b = "b";
  const c = "c";

  newset.add(a);
  newset.add(b);
  newset.add(c);

  console.log(newset);
  console.log(newset.size);
}
//   delete
{
  const x = new Set(["a", "b", "c"]);

  x.delete("a");

  console.log(x);
  console.log(x.size);
}
//has
{
  const x = new Set(["a", "b", "c"]);

  let y = x.has("a");

  console.log(y);
}


{
    const x = new Set(["a" , "b" , "c"]);
    
    let y = x.values();
  
    console.log(y);
  }
  
  {
    const x = new Set(["a" , "b" , "c"]);
    
    let y = x.delete("a");
  
    console.log(y);
    console.log(x);
  }

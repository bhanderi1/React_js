
//1
function palidrome(str){
     const arraysplit = str.split('')
     const reverse  =arraysplit.reverse()
     const join = reverse.join('')

     if(str == join)
     {
        console.log('It is a palondrome');
     }
     else
        {
        console.log('It is not a palondrome');
       }  
    }
palidrome("eyes")

{
    //2
    function maximum(){
        let array = [50, 60 ,14,100]
        let maxnum =Math.max(...array)
        console.log("maximum number is: "+maxnum);
    }
    maximum()//100
}

{
    //10
    var a ="hello"
    var sum =0;
    for(var i=0; i< a.length; i++)
    {
        sum+= (a.charCodeAt(i) - 'a'.charCodeAt(0))
    }
    console.log(sum);//47    //7+4+11+11+14
}

//11
{
    const obj1 ={Name :"Hello" ,Age: 16};
    const obj2 ={Name :"Hello" ,Age: 16};
    console.log(obj1 === obj2)    //false
}

//12
{
    function show(...args)
    {
        let sum=0;
        for (let i in args)
            sum +=args[i]
            console.log("total is:",sum);
    }
    show(40,11,5)
}
//total is: 56

{
    //13.
    let a=[11,22,33,44]
    let b=[...a]
    b.push(66)
    console.log(a.length === b.length); //false
    console.log(a);//[11, 22, 33, 44]
    console.log(b);//[11, 22, 33, 44, 66]
}

{
    //14.
    var fruits = ["apple","mango","watermelon","orange"]
    var fruits_len = fruits.map((ele => ele.length))
    console.log(fruits_len);//[5, 5, 10, 6]
}
{
    //15.
    let chars = ['A','B','A','C','B']
    let uniqueChars = [...new Set(chars)]
    console.log(uniqueChars);//['A', 'B', 'C']
}
{
    //3
    function longest_word(str){
        str =str.match(/[a-zA-Z0-9]/g)
        let largest ="" 

        for(let i=0; i<str.length; i++)
        {
         if(str[i].length > largest.length){
            largest =str[i]
         }
        }
        return largest
    }
    console.log(longest_word("hello   +  how are you!"))

}
//1.countdown using a while loop program
// while
// let count=10;

// while(count >=0)
// {
//   document.write(count +"<br>")
//   count--;
// }

// do while
// let count1=10;
// do{
//     document.write(count1 +"<br>")
//     count1--;
// }
// while(count1 >= 0)

//for
// let count2=10
// for(count2; count2>=0; count2--)
// {
//   document.write(count2 + "<br>")
// }




// 2.sum of numbers form 1 to 10 using a while loop
// 1.while
//  let a=1
//  let sum=0
//  while(a<=10)
//  {
//       sum+=a
//       a+=1
// }
//  document.write(sum +"<br>")

// 2.do while
// let b,sum1=0
// b=1
// do{
//      sum1=sum1+b;
//      b++;
// }while(b<=10)
// document.write(sum1)

// for
// let c
// var sum2=0
// c=1
// for(c; c<=10; c++)
// {
//      sum2=sum2+c
// }
// document.write(sum2+"<br>")




// 3. multiplication table for a given number using a while loop
// 1.while
// let n1=6
// let i1=1
// while(i1<=10)
// {
//      document.write(n1 + "*" + i1 + "=" +n1*i1 +"<br>")
//      i1++
// }

// 2.do while
// let n2=7
// let i2=1
// do
// {
//      document.write(n2 + "*" + i2 + "=" +n2*i2 +"<br>")
//      i2++
// }
// while(i2<=10)

// 3.for
// let n=5
// for(let i=1; i<=10; i++)
// {
//      document.write(n + "*" + i + "=" +n*i +"<br>")
// }

// 4.Guess the number game using a while loop





// 5.Generate the fibonacci sequence using a while loop
// 1.while
// let n1=0, n2=1 ,next_num, i=1
// let num =10
// document.write("fibonacci series:")
// while(i<=num)
// {
//      document.write("<br>"+n1)
//      next_num=n1+n2
//      n1=n2
//      n2=next_num
//      i++
// }

// 2.do while
// let n1=0, n2=1 ,next_num, i=1
// let num =10
// document.write("fibonacci series:")
// do
// {
//      document.write("<br>"+n1)
//      next_num=n1+n2
//      n1=n2
//      n2=next_num
//      i++
// }
// while(i<=num)

// 3.for loop
// let n1=0, n2=1 ,next_num, i
// let num = 10;
// document.write("fibonacci series:")
// for(i=1; i<=num; i++)
// {
//      document.write("<br>"+n1)
//      next_num=n1+n2
//      n1=n2
//      n2=next_num
// }




// 6.calculate factorial of a number using a while loop
// 1.while
// let n=7, i=1
// while(n>=1)
// {
//      i*=n
//      n--
// }
// document.write(i)

// 2.do while
// let n=7, i=1
// do{
//      i*=n
//      n--
// }
// while(n>=1)
// document.write(i)

// 3.for loop
// let n=5, i=1
// for(n; n>=1; n--)
// {
//      i*=n
// }
// document.write(i) 




// 7.Cheack if a word is a palindrome using a while loop
// 1.while












// 8.calculate the power of a number using a while loop
// 1.while
// const a=1
// const power=10
// let num=2, i=0
// while(i<power)
// {
//      document.write(num + "<br>")
//      num*=a
//      i++
// }

// 2.do while
// const a=2
// const power=10
// let num=2, i=0
// do{
//      document.write(num + "<br>")
//      num*=a
//      i++
// }
// while(i<power)

// 3.for
// const a=2
// const power=10
// let num=2
// for(let i=0; i<power; i++)
// {
//      document.write(num + "<br>")
//      num*=a
// }




// 9.print  a pattern using a while loop


let n=5 ,j
let i=1
while(i<=n)
{
     j=1
     while(j<=i)
     {
          document.write("* ")
          j+=1
     }
     document.write()
     i+=1
}
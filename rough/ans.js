// Answer 1:
// You are provided with a year. Your task is to evalute whether that year is Leap year or not and print accordingly.


// var year = parseInt(prompt("Enter Year:"))
// if((year % 4 === 0))
// {
//     if((year % 100 === 0))
//     {
//         if((year % 400 === 0))
//         {
//             console.log("Leap Year")
//         }
//         else
//         {
//             console.log("Not Leap Year")
//         }
//     }
//     else
//     {
//         console.log("Leap Year")
//     }
// }
// else
// {
//     console.log("Not Leap Year")
// }


// Answer 2:
// You are provided with a array and you have to print the sum of all even and odd numbers present in the array. At last print both sum of even elements and odd elements.


// var num = [1,2,3,4,5,6];
// var even = 0,odd= 0;
// for(var i =0; i < num.length; i++)
// {
//     if(num[i] % 2 === 0)
//     {
//         even += num[i]
//     }
//     else
//     {
//         odd +=num[i]
//     }
// }
// console.log(`Even Sum : ${even} \nOdd Sum : ${odd}`);


// // Answer 3:
// // you are provided with a string and you have to replace the word "student" with "prepbytes student". Print Yes if "student" exists in string and print the string with replaced character, else print No


var str = "Hi i am Student";
console.log(str);
var str1 = str.replace("Student", "prepbytes student");
if(str.includes("Student")){
    console.log("yes");
    console.log(str1);

}
else{
console.log("No");

}


// // Answer 4:
// // You are provided with a number and you have to reverse the number and then you have to print the number.


// var num = parseInt(prompt("Enter number:"))
// console.log(num);
// var rem =0,rev;
// while(num > 0)
// {
//     rev = parseInt(num % 10);
//     rem = rem * 10 + rev;
//     num = parseInt(num / 10);
// }
// console.log(rem);
// var mon=2;
// switch (key) {
//     case 1:
//         console.log("jan")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//             console.log("mar")
//             break;
    
//     default:
//         console.log("july")
//         break;
// }

        /*User will give number and you have to print that number*/
// var number = prompt("Enter Number:");
// console.log(number);

// var num1 = prompt("A:");
// var num2 = prompt("B:");

        /* Add 2 num n multiply*/
// var A = parseInt(prompt("A:"));
// var B = parseInt(prompt("B:"));
// var C = A + B
// var D = A * B
// console.log(C);
// console.log(D);

        /*equal and greater and smaller */
// var A = prompt("A:");
// var B = prompt("B:");
// var C = (A == B) ? "Both Are Equal" : (A > B) ? "A is Greater" : "A is Smaller";
// console.log(C)

            /*3 digits and print last number */
// var A = prompt("A:");
// console.log(A % 10);

            /*compare 2 strings */
// var Name = prompt("name:")
// var myName = "Reshma"
// console.log(Name.toLocaleLowerCase === myName.toLocaleLowerCase);
// OR console.log(Name == myName)? "true" : "false";

            /*AGE */
// var age = prompt("DOB:");
// console.log(2021-age);


            /*Switch */
// var A = prompt("A:");
// switch (A) {
//     case "prepbytes":
//         console.log("yes")
//         break;
//     case "bites":
//         console.log("false")
//         break;
//     case "code":
//         console.log("yes1")
//         break;
    
//     default:
//         console.log("nope")
//         break;
// }

        /*Palindrome */
// var rev=0,rem=0;
// var num = prompt("number:")
// temp = num;
// if( num > 0){
//     rem = num %10;
//     rev= rev *10+rem;
//     num = num/10;

//     console.log("palindrome");
// }
// else{
//     console.log("Not Palindrome")
// }

            /*Increment */
// var num = prompt("number:");
// num = ++num;
// console.log(num);

            /*Even or Odd */
// var num = prompt("number:");
// var n = (num%2 == 0) ? "Even" : "odd";
// console.log(n);

            /*RANGE */
// var x = parseInt(prompt("num:"));
// if((x >= 1)&&(x <= 10)){
//     console.log("A")
// }
// else if((x >= 11)&&(x <= 20))
// {
//     console.log("B")
// }
// else if((x >= 21)&&(x <= 30))
// {
//     console.log("C")
// }
// else((x >= 41)&&(x <= 100))
// {
//     console.log("D")
// }

            /*RANGE*/
// var x = parseInt(prompt("num:"));
// switch (true) {
//     case x>=1 && x<=10:
//         console.log("A");
//         break;
//     case ((x>=11)&&(x<=20)):
//         console.log("B");
//         break;
//     case ((x>=21)&&(x<=30)):
//         console.log("C");
//         break;
//     case ((x>=31)&&(x<=100)):
//         console.log("D");
//         break;
                        
//     default:
//         console.log("None")
//         break;
// }


            /*First Digit */
// var a = prompt("number:");
// a/=10;
// console.log(Math.floor(a));
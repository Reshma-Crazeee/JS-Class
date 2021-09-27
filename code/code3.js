                /*Number of digits */
// var num = parseInt(prompt("Enter number:"));
// var count =0;
// while(num > 0){
//     num = parseInt(num / 10);
//     count++;

// }
// console.log(count)

                /*print first digit */
// var num = parseInt(prompt("Enter number:"));
// while(num >= 10){
//     num = parseInt(num / 10);
// }
// console.log(num)

                /*print the pattern 
                        #
                        ##
                        ###
                        ####
                        #####       */ 
// var n = parseInt(prompt("Enter Number:"));
// for (var x = 0; x <= n; x++ ){
//     for (var y = 0; y < x; y++ ){
//         console.log("#")
//     }
//     console.log("")
// }

                /*print prime or not */
// var n = parseInt(prompt("Enter Number:"));
// if(n == 1){
//     console.log("not prime")
// }
// else if(n % 2 == 0){
//     console.log("Not prime")
// }
// else{
//     console.log("prime")
// }

                /*print sum of all digits */
// var n = parseInt(prompt("Enter Number:"));
// var sum = 0;
// while(n > 0){
//     sum += parseInt(n%10);
//     n = parseInt(n/10);
// }
// console.log(sum)

                /*print leap year or not */

// var n = parseInt(prompt("Enter Number:"));
// if((n % 4 == 0)&&(n % 100 != 0)){
//     console.log("leap")
// }
// else if(n % 400 == 0){
//     console.log("leap")
// }
// else{
//     console.log("Not leap")
// }

                /*print count the  duplicate number  */
// var n = parseInt(prompt("Enter Number:"));
// var count=0;
// while(n>0){
//     var rem=parseInt(n%10);
//     if(rem==5)
//     {
//         count++;
//     }
//     n=parseInt(n/10);
// }
// console.log(count);

                /*print reverse number  */
// var n = parseInt(prompt("Enter Number:"));
// var rem =0;
// while(n>0){
//     rev = parseInt(n % 10)
//     rem = rem * 10 + rev;
//     n = parseInt(n / 10)
// }
// console.log(rem)


                /*print Armstrong number  */
// var n = parseInt(prompt("Enter Number:"));
// var sum = 0,temp=n;
// while(temp > 0){
//     var rem = (temp % 10);
//     sum = sum + (rem**3);
//     temp = parseInt(temp / 10);
// }
// if(n == sum){
//     console.log("Armstrong")
// }
// else{
//     console.log(" Not Armstrong")

// }


                /*year of birth of ppl.find eligible for vote or not   */
// var n = parseInt(prompt("Enter Number:"));
// if(2021-n >= 18){
//     console.log("Eligible")
// }
// else{
//     console.log("Not Eligible")
// }


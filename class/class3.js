              /*LENGTH */

// var str ="prep bytes"
// console.log(str.length)  //10

            /*charAt(positon) */

// var str ="prep bytes"
// console.log(str.charAt(2)); //(OR)
// console.log(str[2])

            /*indexOf */

// var str = "mississippi";
// console.log(str.indexOf("s"));    //2
// console.log(str.indexOf("a"));    //-1 

            /*lastIndexOf */

// var str = "mississippi";
// console.log(str.lastIndexOf("s"));    //2

            /*Example indexOf */

// var a ="anaconda";
// var b = "c";
// var pos = str.indexOf(b);
// if(pos !== -1){
//     console.log("Found",pos);

// }else{
//     console.log("not found")
// }

            /*CONCATENATE */

// var str ="prep bytes";
// // var a = str.concat(",is teaching me js")
// // var a = "im learning js from "+str;
// var a =`i'm learning js frm ${str} and got it`;
// console.log(a);

            /*SLICE */

// var str = "anaconda or python";
// // var a = str.slice(0,7);
// var a = str.slice(12);
// // var a = str.slice(12,17);

// console.log(a);

            /*SUBSTRING */

// var str = "anaconda or python";
// // var a = str.substring(0,8);
// // var a = str.substring(8,0); //wrong

// // var a = str.slice(8,0); //it won't work
// // var a = str.slice(-5,-3(exclude)); //YT
// // console.log(str.slice(-5)) //ython
// // console.log(a);

            /*Example Slice */

// var str ="anaconda or python";
// var a = str.slice(-6);
// var b= str.slice(0,8);
// console.log(`${a} ${b}`);


// var str ="visual Studio code";
// // var a = str.slice(-4);
// // var b= str.slice(0,6);
// // console.log(`${a} ${b}`);
// var a = str.slice(0,13);
// console.log(a);

            /*REPLACE and REPLACEALL*/

// var str ="anaconda or python";
// console.log(str.replace("a","B"));
// console.log(str.replaceAll("a","B"));

            /*TRIM */

// var str ="  some space in the sir and end   ";
// console.log(str);
// console.log(str.trim());

            /*SPLIT */
// var str ="anaconda or python";
// var str ="anaconda  or python";
// var newArray = str.split(" ")
// console.log(str)
// console.log(newArray);

// var str ="anaconda";
// var newArray = str.split("n")
// console.log(str)
// console.log(newArray);

// var str = "Mississippi, Malayalam, Bookkeeper";
// var newArray =str.split(",")
// console.log(newArray[1]);

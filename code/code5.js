            /*push array */

// var arr = [12, 10, 5, 9];
// arr.push(15);
// console.log(arr);

            /*pop num and replace another num */

// var arr = [12, 10, 5, 9, 15];
// console.log(arr);
// arr.pop();
// arr.push(2);
// console.log(arr);

            /*Sum of array */

// var arr = [1,2,3,4];
// var a =0,b=1;
// for(var i=0;i<arr.length;i++){
//     a +=arr[i];
//     b = b*arr[i];
// }
// console.log(a);
// console.log(b)

            /*reverse array */

// var arr = [1,2,3,4,5];
// console.log(arr.reverse());

            /*reverse of array */

// var arr = [1,2,3,4,5];
// for(var i=arr.length-1;i>=0;i--){
//      console.log(arr[i]);
// }


var arr =[1,2,3,4,5];
var a=6;
var b=0;
for(i=arr.length;i>=0;i--){
    if(arr[i] === a){
        console.log("found");
        break;
    }
}
if(b==0){
    console.log("not found");

}

// while(arr >0){
//     if(arr === 5){
//     console.log("found");

// }
// }
// console.log(" not found");

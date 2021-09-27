// var arr =[1,2,3,4,5];
// if(arr.length % 2 === 0){
//     arr.shift()
// }
// else{
//     // arr.push(8)
//     arr.push(Math.floor(Math.random()*10))
// }
// console.log(arr)




// var arr =[1,2,3,4,5,6];
// for(var i=0;i<arr.length;i++){
//     if(i %2 === 0){
//         arr[i]=0;
//     }
//     // console.log(arr)
// }
// console.log(arr)


// var arr =[1,2,3,4,5,6,8];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(arr[i] %2 === 0){
//         arr[i]=0;
//     }
// }
// console.log(arr)

// var arr = [[11,22,33,44,55],1,2,3,4,5,[1,2],{1:"33"}];
// for(var i=0;i<arr.length;i++)
// {
//     if(Array.isArray(arr[i]))
//     {
//         console.log(" yes it array "+i);
//     }
// }

var arr=[1,2,55,44,60,101];
// var num=[];
// arr.forEach(function(value){
//     if(value <100){
//         console.log(value);
//     }
// });
var num =arr.filter(function(value,index){
    return value < 100;
});
console.log(num);
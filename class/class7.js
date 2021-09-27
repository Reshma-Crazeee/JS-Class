// // (function me(arg1){
// //     console.log();
// //     var a =10;
// //     console.log('hello',arg1);

// // })(",ram");

// // var b =10;
// // function sum(){
// //     console.log(b);
// // }
// // sum();


// (function(){
//     var fName ="chinni";
//     console.log(fName);
// })();
// var score =0;
// function inc(){

// }
// // var b = 10;
// // function sum(n1,n2){
// //     var tot =n1+n2;
// //     console.log(tot);
// // }
// // sum(1,b);
// // b=20;
// // sum(1,b);
// // var a=0;
// // console.log(a,b)






// function x(arg){
//     console.log("hello,not hi");
//     if(arg%2===0){
//         console.log("even");

//     }else{
//         console.log("odd")
//     }
// }
// x(5);
// x(4)

// function x(){
//     console.log("hello be");
//     function y(){
//         console.log("nope be");
//     }
//     y();
// }
// x();
// function sum(n1,n2){
//     // var t =n1+n2;
//     // return t;
//     return n1+n2;
// }
// var res =sum(5,10);
// console.log(res)


// function x(){
//     console.log("hello be");
//     function y(){
//         console.log("nope be");
//     }
//     return y;
// }
// x()();

// var fn =x();
// // console.log(fn);
// fn();



// function x(){
//     console.log("hello be");
//     return function y(){
//         console.log("nope be");
//     };
// }
// x()();


function x(){
    var a =10;
    function y(){
        var b =30;
        console.log(a,b)
    }
    a=50;
    return y;
}
var fn =x();
console.log(fn);
fn();
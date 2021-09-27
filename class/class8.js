// // var b =a+1;
// // var a =10;
// // console.log(a)


// // console.log(a);   //reference error ...(u can't access dis b4 initialization
// // temporal dead zone (vn u delcare let or const....)access variable b4 declare throws error incase of let and const
// // let a =10;
// // console.log(a);  


// //const-->declare n initialize var together. re-initialization  ll throw error
// // const a =10;//valid
// // const b=20;
// // b=5;//error
// // const c;//error

// // console.log(a);//reference error
// // const a =10;

// /////////////////////////////////////////////////////////////////////////////////////////////////////////


// //1hr 
// // setTimeout(function(){
// //     console.log("hello")
// // },2000);

// // console.log("start")
//         //event loop
// // setTimeout(function(){
// //     console.log("hello")
// // },5000);
// // console.log("bye");


// // for(var i=0;i<3;i++){
// //     setTimeout(function(){
// //         console.log("hello")
// //     },2000);
// // }
// // console.log("value i",i)

// /////////////////////////////////////////

// // for(let i=0;i<3;i++){
// // }
// // console.log("value i",i)//throw erroe

// // for(let i=0;i<3;i++){
// //     setTimeout(function(){
// //         console.log(i)
// //     },2000);
// // }

// // for(let i=0;i<3;i++){
// //     setTimeout(function(){
// //         console.log(i)
// //     },2000);
// //     console.log("val:",i)
// // } 

// for(let i=1;i<=3;i++){
//     setTimeout(function(){
//         console.log(i)
//     },5000*i);
//     console.log("val:",i)
// }


// // for(let i=0;i<3;i++){
// //     setTimeout(function(){
// //         console.log(i)
// //     },2000);
// //     console.log("val:",i)
// // }
// // console.log("hello")

// // let j=2;
// // for(let i=0;i<3;i++){
// //     setTimeout(function(){
// //         console.log(i)
// //     },2000);
// //     console.log("val:",i,j)
// // }
// // console.log("hello")


////////////////////////////////////////////////////////////////////


// const fn = function (){
//     console.log("fun")
// }
// fn();

// const fn =  () => {
//     console.log("arrow func")
// }
// fn();

// const t=(n,n1) => n+n1;
// console.log(t(5,2))

// const t=(n,n1) => n+n1;
// let s =(n,n1) =>{
//     return n+n1;
// };
// console.log(t(5,2));
// console.log(s(5,5));

// const obj ={
//     name : "no",
//     age:"yes",
//     fn:function(){
//         console.log(this);
//     },
//     fn1:()=> {
//         //doesn't change value of this
//         console.log(this);
//     },
// };
// obj.fn();
// obj.fn1();

const obj = {
    fullName: "Shashank Shetty",
    username: "_shashankshetty",
    fn: function () {
      console.log(this);
      const obj1 = {
        sm: () => console.log(this),
        smFn: function () {
          console.log(this);
        },
      };
      return obj1;
    },
    arrow: () => {
      // Doesn't change value of this
      console.log(this);
      const obj1 = {
        sm: () => console.log(this),
        smFn: function () {
          console.log(this);
        },
      };
      return obj1;
    },
  };
  const ref =obj.arrow();
  const ref =obj.fn();
ref.sm();
ref.smFn();
obj1.ref();

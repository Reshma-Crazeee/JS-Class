// var str = "prepbytes students";
// if(str.includes("students")){
//     console.log("yes")

// }
// else{
//     console.log("No")
// }

// console.log("javascript");

// var str = "javascript";
// console.log("hello " + str)

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------//
            ///// MAP /////
// var use = new Map();

// use.set("1","num1");
// use.set(1,"num2");
// use.set(true,"num3");

// //         /* OR */
// // use.set("1","num1")
// //    .set(1,"num2")
// //    .set(true,"num3");

// console.log(use.get(1));

// console.log(use.size);

// console.log(use.delete(true));
// console.log(use.get(true));

// console.log(use.has("say"));

// use.set("say", "num4");
// console.log(use.has("say"));

// console.log(use.clear())
// console.log(use.has(true));

// --------------------------------------------------------------------------------------------------------------------------------------------------//

// var obj = {name: "sreeja"};

// var count = new Map();

// count.set(obj,32);
// console.log(count.get(obj))
// --------------------------------------------------------------------------------------------------------------------------------------------------//

/////// raj overrides ram///////

// var raj = {place: "sikkim"};
// var ram = {place: "assam"};

// var tour = {};
// tour[ram] = "Goa";
// tour[raj] = 'china';

// console.log(tour["[object Object]"])

// --------------------------------------------------------------------------------------------------------------------------------------------------//

        ////// ITERATION OVER LOOP //////
// var food = new Map([
//     ['carrot', 350],
//     ['sugar',400],
//     ['cardamom', 25]
// ]);

// // console.log(food.keys());
// // console.log(food.values());
// // console.log(food.entries());

// for(var item of food.keys()){console.log(item)}
// for(var item1 of food.values()){console.log(item1)}
// for(var item2 of food.entries()){console.log(item2)}

// --------------------------------------------------------------------------------------------------------------------------------------------------//
        //////FOR EACH //////
// var arr = ["anything",32,{1:"nothing",2:"everything",3:"something"}]

// arr.forEach(function(name,index){
//     console.log(name)
// })

// --------------------------------------------------------------------------------------------------------------------------------------------------//
            /////FOR EACH USING OBJECTS /////
// var food = new Map([
//     ['carrot', 350],
//     ['sugar',400],
//     ['cardamom', 25]
// ]);

// food.forEach(function(value,key){
//     console.log(`${key}: ${value}`)
// })

// --------------------------------------------------------------------------------------------------------------------------------------------------//
            ///// MAP FROM OBJECT using ARRAY /////  /*Object.entries*/
// var map = new Map([
//     ['noramlly', 350],
//     ['basically',400],
//     [25,'actually']

// ]);

// console.log(map.get(25))

// --------------------------------------------------------------------------------------------------------------------------------------------------//
            ///// MAP FROM OBJECT 2 /////
// var obj = {
//     name : "timmon",
//     age : 124,
//     "best friend" : "pumba"
// };

// var map = new Map(Object.entries(obj));
// console.log(map.get("name"));

//-------------------------------------------------------------------------------------------------------------------------------------------------//
            ///// OBJECT FROM MAP /////  /*Object.fromEntries*/

// var travel = Object.fromEntries([
//     ["train", "track"],
//     ["ship", "water"],
//     ["flight", "air"]
// ]);

// console.log(travel.flight);

//-------------------------------------------------------------------------------------------------------------------------------------------------//
            ///// OBJECT FROM MAP /////  /*Object.fromEntries*/

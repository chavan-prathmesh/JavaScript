let str1 = "Prathmesh";
// console.log(str1.charAt(3));   // charAt(index) - it will return the character from the given index;

//Undeclared : This are those variable which are not defined means using let or var or const
//Undefined : this means the varibale is declared but value to that variable is not assigned 

// a = 100; 
let a = 100; // defined and declared 

// Object : object is nothing but a collection of key:value pair 
// in that the key must be unique and values may be not unique
// there are main 4 to 5 ways to declare the objects :
// 1] by using literals
// 2] by using functions
// 3] by using cunstroctors 
// 4] by using new Object()

// let obj = {
//     name : "Prathmesh",
//     age : 22,
//     education : "BTech" 
// };
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.education);

// Deep Copy :
// It will copy the entire object in given identifier
// The changes made in original object can't affect the copied object
// It will also refernce to the object 
// Shallow Copy :
//  It will share the memory location with assigned identifier
// The changes made in original also affect the copied object to
// It will dosen't store the object itself


// console.log(100 + "8" + 20); //100820 beacuase of the dtype of 8 
// console.log("100" - "8" - 20); //72

// Looping structure in JS
// 1] For loop
// 2]While loop
// 3]do-while loop
// 4]for-fo loop
// 5]for-in loop

// let abc=100
// if(function xyz(){}){    //the function always takes truthy values
//     // abc=abc-typeof(xyz); //typeof(xyz) is the undefiend bacause it is in the if block only so 100-undefined is NaN
//     console.log(abc+typeof(xyz)); //100Undefined
// }
// console.log(abc);



// function abc(){

// }
// console.log(typeof(abc)); // function

// slice - is used to take the particular elemnts from array
// splice - is used to delete particular number of elemnts from particular postion and also add elements

let arr = [1,2,3,4,5];
// console.log(arr.slice(2,6));
// console.log(arr.splice(2,2,2,3,4));
// console.log(arr);


// obj = {
//     xyz : "Prathmesh",
//     pqr : function(){
//         console.log(this.xyz)
//     }
// }

// const c = obj.pqr;
// obj.pqr(); //Prathmesh
// c(); //Undefined

// console.log(arr.findIndex(num=>num==3)); // findIndex() takes function as argument to find the index of enterd element

// console.log(arr.includes(2));// includes() it checks whether the entered elemnts is present in array or not return a boolean value

let ans = arr.includes(4,-8);
// console.log(ans); // true

let s = ['abc','pqr','xyz','qwe','tyu'];
console.log(s.includes('abc')); //true
console.log(s.includes('abc',0)); // true
console.log(s.includes('ABC'));//false case sensitive

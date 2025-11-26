// Template literals = is nothing but the way to combine output message and the variable value into msg itself using backtick and doller sign and curly braces

// let a=10,b=30;
// console.log(`The addition of a+b is ${a+b}`);

// what are pure and immpure function in js
// pure function is function that does not change the outside scope values and return the same data type value as the data type of input 
// impure function are those functions that uses the "date" module and changes the outside varibles. they interact with otside values 

// // pure function
// function pure(a,b){
//     return a+b;
// }
// console.log(pure(10,20));

// let x = 20;
// console.log(x);
// function impure(x){
//     x = x+1; //changes outside variable
// }
// console.log(x);

// let charArr = ['A','B','C','D','A','A'];
// // indexOf(val) this function return the index first occurence of provided argument from array if present otherwise return -1;
// console.log(charArr.indexOf("A")); // 0
// console.log(charArr.indexOf('A',1)); //4 // it start to search from entered  positon 
// console.log(charArr.indexOf('A',-1)); // -1 starts from last element
// console.log(charArr[-1]); // 'undefined'

// let arr = ['A','C','Q','F','E']; // sort by using ASCII values 
// arr.sort((a,b)=>(a-b));//changes are made permanent
// console.log(arr);

// let arr = [[1,2],[3,4],[5,6],[7,8],[9,10]];//lenght = 5
// console.log(arr.length); // 5
// let arr1 = [,,,]; //3
// console.log(arr1) //3 empty items
// console.log(arr1.length);

const arr = [
    {'name':'Prathmesh','roll_no':21},
    {'name':"Adity",'roll_no':22},
    {'name':"Karan",'roll_no':23}
];
// console.log(arr[2].roll_no); //23 // position + key
// console.log(arr.filter((stud)=> stud.roll_no==23));
// console.log(arr);

// for(let stud of arr){
//     console.log(stud);
// }
// arr.forEach((num) => {
//     console.log(num * 2);  // prints 2, 4, 6
// });

// difference between forEach and Map
// forEach = does not return a new array
// used to only iterate through
// impure
// map = return a new array
// used to iterate and perfrom operation and return a new array
// pure

// console.log([]===[]); // false
// console.log([]==[]); // false

// console.log(typeof(arr)); // object

// ways to handle asynchronus operation promise,async await function and also can callbacks;
// which is better promise or async await

// BOM = Browser Object Model 
// it is content presnt in <head> tag of any page 
// contents of BOM = 1.document 2.window 3.location 4.history 5.navigator 6.screen
// 1.alert 2.confirm 3.prompt are comes in BOM

let a = 2;
let b = !++a;  //false => 1.++a = 3 2.!3 = any value not equal to 0 is true so !true = false
let c = !--a; //false=> 1.--a = 2 2.!2 = any value not equal to 0 is true so !true = false
// console.log(b,c); //false , false

function sum(){
    console.log("abc");
    return 2+2;
}
function sqaure(){
    console.log('abc');
    return 4*4;
}
let result = (sum(),sqaure());
console.log(result);
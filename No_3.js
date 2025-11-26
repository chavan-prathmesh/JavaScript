// what is callback functions?  == callback function is function which we pass to another function as argument
// this function is called internally by the hof after it is ready

// function hof(para1,callback){   //this is hof
//     console.log("Higher order function !!");
//     callback(para1);
// }

// function lof(para1){
//     console.log("Hello "+para1);
// }

// hof("Prathmesh",lof); // lof is callback function

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 5];
let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   let cnt = 1; // reset count for each element

//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       cnt++;
//     }
//   }

//   if (!obj[arr[i]]) {
//     obj[arr[i]] = cnt;
//   }
// }
// for (let [key, value] of Object.entries(obj)) {
//   if (value > 1) {
//     console.log(key, value);
//   }
// }

// for(let num of arr){
//     obj[num] = (obj[num] || 0)+1;
// }
// for (let [key, value] of Object.entries(obj)) {
//     if (value > 1) {
//         console.log(key, value);
//     }
// }


let str = "My name is Prathmesh sh";
str = str.split(" ");
let cnt=0;
for(word of str){
    if(String(word).includes("sh")){
        cnt+=1;
    }
}
// console.log("sh appeares "+cnt +" times");

// console.log(str.includes("sh")); // includes works on string as well array; it will return the boolean value
// console.log(str.lastIndexOf("sh")); // works on both array and string ; return position if element is present otherwise returns a -1

const str1 = "sk";
const str2 = "Prathmesh";
const str3 = str1 && str2;

console.log(str3); // Prathmesh

// let [a] = [100,200,300,400,500]; // array destructuring means assign array elemt to a
// console.log(a);  // 100
// let [c,b] = [1,20,3,4];
// console.log(c,b);

let a = 100;
let b = ++a + a++ ;  //(++a = 101) + (a++ = 101)
// console.log(b); //202
b = a++ + ++a; //102 + 104
// console.log(b); //206



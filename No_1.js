// function mergeTwoStrings(str1,str2){
//     let str3 = '';
//     let smallStr = str1.length>str2.length?str2:str1;
//     let small = str1.length>str2.length?str2.length:str1.length;
//     let bigStr = str1.length<str2.length?str2:str1;
//     let big = str1.length<str2.length?str2.length:str1.length;
//     for(let i=0;i<small;i++){
//         str3 += bigStr[i] + smallStr[i];
//     }
//     for(let i=small;i<big;i++){
//         str3 += bigStr[i];
//     }
//     return str3;
// }

// console.log(mergeTwoStrings("Prathmesh ","Chavan"));

// function longestWord(sen){
//     let arr = sen.split(' ');
//     // let lenArr = arr.map(item=>item.length);
//     // let max = 0;
//     // for(let i=0;i<lenArr.length-1;i++){
//     //     max = Math.max(lenArr[i],lenArr[i+1]);
//     // }
//     // let idx = lenArr.indexOf(max);
//     // console.log(arr[idx]);

//     return arr.reduce((e1,e2)=>(e1.lenght>e2.lenght?e1:e2));
// }

// let res = longestWord("My name is Prathmesh");
// console.log(res)

// console.log(2-"2"); //0
// console.log(2+'2'); //22 concate

// function flatten() {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       arr1.push(arr[i][j]);
//     }
//   }
//   console.log(arr1);
// }
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
// ];
// flatten();

// difference between setTimeOut() and setInterval()

// let dupArr = [1, 2, 3, 4, 5, 1, 2, 2, 4];
// function findDuplicates() {
//   dupArr = dupArr.sort((a, b) => a - b);
//   console.log(dupArr);
//   let newArr = [];
//   // for(let i=0;i<dupArr.length;i++){
//   //     if(dupArr[i]!=dupArr[i+1]){
//   //         newArr.push(dupArr[i]);
//   //     }
//   // }
//   for (let i = 0; i < dupArr.length; i++) {
//     if (dupArr[i] == dupArr[i + 1]) {
//       newArr.push(dupArr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(findDuplicates(dupArr));

// what is difference between client side js and server side js
// client side js uses javascript. it mainly used to handle the user inteface related activities like events,inputs,form validates
// server side js uses node.js to interacte with server related work. by using this we can accsess db and perform operations

// object destructuring

let obj = {'a':1,'b':2,'c':3};
let {a,b,c} = obj;
console.log(a);
console.log(b);

// js is dynamically typed or Statically typed language

// pop up boxes in js = alert(),prompt(),confirm()

// differnce between session stroagr and local storage

// diff between push(),pop(),shift(),unshift()

// diff between slice() and splice()

// purpose of timers in js

// types of errors in js
// runtime error
// syntax error
// logical error

// how do you turn object to array


// js frameworks = react js library ,angular js framework,node js framework

// diff between synchronus and asynchrouns

// promise and asyc await

// Events in js

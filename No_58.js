// differnce between find() and findIndex()
// find() - it is used to find the element present in the array
// it takes the function as argument
// return the element if present otherwise return undefined

// findIndex() - it is used to find the index of entered element from an array
// it takes take function as argument
// return the index position of element otherwise return -1

// let arr = [1,2,3,4,5];
// let res = arr.find((n)=>n==6);
// console.log(res);

// res = arr.findIndex(n=>n==8);
// console.log(res)

// diferent ways to handle asynchronus

// if("0"){  // "0" it's a truthy value in string. if int(0) then else block execute
//     console.log("I'm Prathmesh"); // I'm Prathmesh
// }
// else{
//     console.log("I'm Chavan");
// }

// difference between null and undefiend
// null - it's a value which is provided by intenstinally or explicitlly to become a null
// undefiend - it's avlue which is declared but not assigned

// console.log(null===undefined); //false strictly check dtype
// console.log(null==undefined); //true only check the values values are same null and undefiend

// let arr1 = ["Prathmesh", "Prathmesh"];

// function checkChars(arr1) {
//   if (arr1[0].length !== arr1[1].length) {
//     return "Not equal";
//   }

//   for (let i = 0; i < arr1[0].length; i++) {
//     if (arr1[0][i] !== arr1[1][i]) {
//       return false;
//     }
//   }

//   return true;
// }
// console.log(checkChars(arr1));

// let arr = [1,10,100,2,20,200]
// let oned = arr.filter((num)=> num<10);
// let twod = arr.filter((num)=> num>=10 && num<=99);
// let threed = arr.filter((num)=> num>=100 && num<1000);
// console.log(oned);
// console.log(twod);
// console.log(threed);


// let a = 10;
// let b = 20;
// // console.log(`A : ${a}\nB : ${b}`);
// // a = a+b;
// // b = Math.abs(a-b);
// // a = Math.abs(a-b);
// // console.log(`A : ${a}\nB : ${b}`);
// [a,b] = [b,a]
// // console.log(`A : ${a}\nB : ${b}`);

// let arr = [1,'a',2,'b',3,'c',4,'d'];
// let nums = arr.filter((ele)=>typeof(ele)=='number');
// let chars = arr.filter((ele)=>typeof(ele)=='string');
// console.log(nums);
// console.log(chars);

// let arr = [
//     {id:1,name:"prathmesh"},
//     {id:2,name:"vivek"},
//     {id :3,name:'vishal'}
// ]

// console.log(arr.filter((obj)=>obj.id>=3));

// charAt[] is used to accsess the element at particular index position

// error - syntax error,logical error,compilation error,refernce error 

// console.log(a);

// what is promise.all() ?
// let ,const, var

// what is event delgation ?

// what is event bubbling and event capturing ?

// what is use of json.parse() ?

// function expression - when we assign a function to a varibale then it is called function expresssion 
// function declaration - we dcleare the function with function keyword

// console.log(typeof(NaN)); ///number
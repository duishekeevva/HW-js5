//1
// function handleSum(arr) {
//     for (let i=0; i<arr.length; i++) {
//         arr[i]=arr[i]*arr[i]
//     }
//     return arr
// }
// console.log(handleSum([1, 2, 3, 0, 4, 5, 6]));

//2
// let num =[1, 2, 3, 0, 4, 5, 6]
// function handleSum() {
//     let res=0
//     for(let i=0;i<num.length;i++){
//         if(num[i]>0){
//             return true
//         }
//     }
//     return false
// }
// console.log(handleSum());

// 3
// let num =[1, 2, 3, 0, 4, 5, 6]
// function handleSum() {
//     let res=0
//     for(let i=0;i<num.length;i++){
//         if(num[i]<0){
//             return true
//         }
//     }
//     return false
// }
// console.log(handleSum());

// 4
// function handleSum( arr) {
// let res=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<0){
//             res.push(arr[i])
//         }
//     }return res
// }
// console.log(handleSum([1, 2, -3, 0, 4, 5, -6]));

// 5
// function handleSum( arr) {
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             res.push(arr[i])
//         }
//     }return res
// }
// console.log(handleSum([1, 2, -3, 0, 4, 5, -6]));

// 6
// function handleSum( arr) {
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length>5){
//             res.push(arr[i])
//         }
//     }return res
// }
// console.log(handleSum(['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']))

// 7
// function handleSum( arr) {
//     let res=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<0){
//            res++
//         }
//     }
//     return res
// }
// console.log(handleSum([1, 2, -3, 0, -4, 5, -6]));

// 8
// function handleSum(arr, arrStr) {
//     return arr.concat(arrStr)
// }
// console.log(handleSum([1,2,3,4], ['a','b','c','d']));

// 9
// function handleSum(arr, str) {
//     return arr.concat(str)
// }
// console.log(handleSum([1,2,3,4], 'hello world'));

// 10
// function handleSum(arr, str) {
//     return  arr.concat(str.split('').join().split(','))
// }
// console.log(handleSum([1,2,3,4], 'hello world'));


// 11
// function handleSum(arr, str) {
//     return  arr.concat(str.split('').join().split(',')).concat(arr)
// }
// console.log(handleSum([1,2,3,4], 'hello world'));

// 12
// function handleSum( arr) {
//     let res= []
//     for(let i=1;i<100;i++){
//         if(i%3===0 && i%5===0){
//             res.push('FizzBizz')
//         }
//         else if(i%3===0){
//             res.push('Fizz')
//         }
//         else if (i%5===0) {
//             res.push('Bizz')
//         }
//         else {
//             res.push(i)
//         }
//     }
//     return res
// }
// console.log(handleSum(100));


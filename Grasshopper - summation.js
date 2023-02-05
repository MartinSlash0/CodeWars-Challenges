/*
Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

Fundamentals
Mathematics
*/

let summation = function (num) {
  let arr = [];
  for(let i = 1; i <= num; i++){
    arr.push(i)
  }
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum
}

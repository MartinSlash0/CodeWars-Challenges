/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity

*/

function capitalize(s){
  let sArr = s.split('')
  let arrEven = []
  let arrOdd = []
  sArr.forEach((element, elementIndex) => {
    if(elementIndex%2 == 0){
      arrEven.push(element.toUpperCase())
      arrOdd.push(element)
    }else{
      arrEven.push(element)
      arrOdd.push(element.toUpperCase())
    }
  })
  let sEven = arrEven.join('')
  let sOdd = arrOdd.join('')
  return [sEven, sOdd]
};

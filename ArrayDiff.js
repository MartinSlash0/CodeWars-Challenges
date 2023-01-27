/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

function arrayDiff(a, b) {
  if(a.length == 0 || b.length == 0){
    return a;
  }
  let aNew = a
  a.forEach(element1 => {
    let aCopy = aNew
    if(b.includes(element1)){
      aNew = aCopy.filter(element2 => element1 !== element2)
    }
  })
  return aNew
}

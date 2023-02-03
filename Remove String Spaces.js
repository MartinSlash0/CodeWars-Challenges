/*
Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x){
  let xSplit = x.split(' ');
  let xJoin = xSplit.join('');
  return xJoin;
}

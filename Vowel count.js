/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let counter = 0
  let splitStr = str.split('');
  for(let i = 0; i < splitStr.length; i++){
    switch(splitStr[i]) {
        case 'a':
        counter++;
        break;
        case 'e':
        counter++;
        break;
        case 'i':
        counter++;
        break;
        case 'o':
        counter++;
        break;
        case 'u':
        counter++;
        break;
      }
  }
  return counter;
}

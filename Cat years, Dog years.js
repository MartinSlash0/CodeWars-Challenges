/*
Task

I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:
    humanYears >= 1
    humanYears are whole numbers only
Cat Years
    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that
Dog Years
    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
*/

var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0
  let dogYears = 0
  if(humanYears == 1){
    dogYears += 15;
    catYears += 15;
    return [humanYears,catYears,dogYears];
  }
  if(humanYears == 2){
    dogYears += 24;
    catYears += 24;
    return [humanYears,catYears,dogYears];
  }
  if(humanYears > 2){
    dogYears += 24
    catYears += 24
    for(let i=1; i<=humanYears - 2; i++){
      dogYears += 5
    }
    for(let i=1; i<=humanYears - 2; i++){
      catYears += 4
    }
    return [humanYears,catYears,dogYears];
  }
}

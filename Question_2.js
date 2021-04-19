/*2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######*/

let a = '#';
for(let i=1;i<=7;i++) {
    console.log('#'.repeat(i));

};

/* 2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique

sevenRandomNumbers()
[1,4,5,7,9,8,0] */

let arr = [];
for(let i =1; i <= 7; i++){
    var num = Math.floor(Math.random() * 9) + 1;
    if(arr.indexOf(num) === -1) {
        arr.push(num);
    };
};
console.log(arr);

/*2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. 
For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and 
produces a new array that has the same elements in the inverse order. Without reverse method.

console.log(reverseArray(["A", "B", "C"]));
["C", "B", "A"] */

function reverseArray(arr){
    let rev = new Array;
    for(let i= arr.length-1; i>=0; i--){
        rev.push(arr[i]);
    }
    return rev;
 }
 console.log(reverseArray(["A", "B", "C","D"]));


/*2.d. Write a function which check if items of an array are unique?

const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));
false
const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));
true */

  
const arrOne = [1, 4, 6, 2, 3];
function checkUniqueness(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] !== arr[j]) {
                return true;
            }else {
                return false;
            };

        };
        
        
    };
};
console.log(checkUniqueness(arrOne));
const array1: string[] = ["apple", "banana", "cherry"];
const array2: string[] = ["x", "y", "z"];

const swappedArray1: string[] = array1.map((value, index) => array2[index])
const swappedArray2: string[] = array2.map((value, index) => array1[index])

console.log(swappedArray1);
console.log(swappedArray2);



// const callback = (n) => {
//   return n ** 2
// }

// function cube(callback, n) {
//   return callback(n) * n
// }
// console.log(cube(callback, 3))



// Higher order function returning an other function

// const higherOrder = n => {
//   const doSomething = m => {
//     const doWhatEver = t => {
//       return 2 * n + 3 * m + t
//     }
//     return doWhatEver
//   }
//   return doSomething
// }
// console.log(higherOrder(2)(3)(10))



// const numbers = [1, 2, 3, 4, 5]
// function sumArray(arr){
//   let sum=0;
//   arr.forEach((element)=>{
//     sum+=element
//   })
//   return sum
// }
// console.log(sumArray(numbers))

// function sayHello() {
//   console.log('Hello World')
  
// }
// setInterval(sayHello, 1000) 


// function sayHello() {
//   console.log('Hello')
// }
// setTimeout(sayHello, 2000) 


// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => sum+=num)
// console.log(sum)

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

// countries.forEach((num)=>console.log(num.toLocaleUpperCase()))


// const numbers = [1, 2, 3, 4, 5]
// let newArr=numbers.map((e)=>e*e)
// console.log(newArr)


//Filter countries containing land

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]
// const countriesContainingLand = countries.filter((country) =>
//   country.includes('land')
// )
// console.log(countriesContainingLand)



// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]

// const countriesHaveFiveLetters = countries.filter(
//   (country) => country.length === 5
// )
// console.log(countriesHaveFiveLetters)

// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((acc, cur) => acc + cur, 0)

// console.log(sum)

//  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const areAllStr = names.every((name) => typeof name === 'string') 

// console.log(areAllStr)

// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
// console.log(products.sort()) ;

// let arr =[1,11,5,6,7,33,9,10,4,3,99,23,57,90,35];

// let newArr=arr.sort((a,b)=> a-b);

// console.log(newArr)



// forEach is a method available on arrays that allows you to iterate over each element of the array and perform a callback function for each element. It doesn't return a new array. It is primarily used for performing an action or side effect on each element of the array. The original array remains unchanged.


// map is a method available on arrays that allows you to iterate over each element of the array and apply a transformation or computation on each element. It returns a new array with the same length as the original array, containing the transformed elements.

// filter is a method available on arrays that allows you to iterate over each element of the array and apply a condition. It returns a new array containing only the elements that satisfy the condition.
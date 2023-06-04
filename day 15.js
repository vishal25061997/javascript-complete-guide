// CLASSES,INHERITENCE,OVERLOADING

// class Person {
//   constructor(firstName, lastName) {
//     console.log(this) 
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// }

// const person = new Person()

// console.log(person)



// class Person {
//   constructor(n1,n2){
//     this.n1=n1
//     this.n2=n2
//   }
//   }
//   const person = new Person('saket','thakur')
//   console.log(person)



// class Person {
//   constructor(
//     firstName = 'Asabeneh',
//     lastName = 'Yetayeh',
//     age = 250,
//     country = 'Finland',
//     city = 'Helsinki'
//   ) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.country = country
//     this.city = city
//   }
// }

// const person1 = new Person() 
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

// console.log(person1)
// console.log(person2)




// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.country = country
//     this.city = city
//     this.score = 0
//     this.skills = []
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName
//     return fullName
//   }
// }

// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

// console.log(person1.score)
// console.log(person2.score)

// console.log(person1.skills)
// console.log(person2.skills)




// class Animal{
//   constructor( name, age, color, legs ){
//     this.name=name;
//     this.age=age;
//     this.color=color;
//     this.legs=legs;
//   }
//   getName(){
//     return this.name
//   }
//   getAge(){
//   return this.age
//   }
//   getColor(){
//     return this.age
//   }
//   getColor(){
//     return this.color
//   }
//   getLegs(){
//     return this.legs
//   }
// }

// const animal= new Animal('Dog',10,'black',4)
// console.log(animal.getName())
// console.log(animal.getAge())
// console.log(animal.getColor())
// console.log(animal.getLegs())



// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.country = country
//     this.city = city
//   }
  
// }
// class Student extends Person {
//   constructor(firstName, lastName, age, country, city, gender) {
//     super(firstName, lastName, age, country, city)
//     this.gender = gender
//   }

//   saySomething() {
//     console.log('I am a child of the person class')
//   }
 
// }
// const s1 = new Student(
//   'Asabeneh',
//   'Yetayeh',
//   250,
//   'Finland',
//   'Helsinki',
//   'Male'
// )
// const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
// s1.setScore = 1
// s1.setSkill = 'HTML'
// s1.setSkill = 'CSS'
// s1.setSkill = 'JavaScript'

// s2.setScore = 1
// s2.setSkill = 'Planning'
// s2.setSkill = 'Managing'
// s2.setSkill = 'Organizing'

// console.log(s1)

// console.log(s1.saySomething())
// console.log(s1.getFullName())

// console.log(s2.saySomething())
// console.log(s2.getFullName())

  
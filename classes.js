// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.



// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Extend Person class and create one class for each member of your family.

class Person{
    constructor(attributes){
        this.name=attributes.name;
        this.age =attributes.age;
        this.hobby=attributes.hobby;
    }
    speak(){
        return `hello my name is ${this.name} and i'm ${this.age} years old . i love ${hobby}`;
    
    }
    
}
const mom=new Person({
    name:"farhia",
    age:40,
    hobby:"studying on deen"
})
console.log(mom.speak());

class Child1 extends Person{
           constructor(ChildAttributes){
            super(ChildAttributes)
    
    }
    
    }
    const sis=new Child1({
    name:"iqra",
    age:20,
    hobby:"coding"
    })
    console.log(sis.speak());


    class Child2 extends Person{
        constructor(ChildAttributes){
         super(ChildAttributes)
 
 }
 
 }
 const pro=new Child2({
 name:"saciid",
 age:15,
 hobby:"playing vedio game"
 })
 console.log(pro.speak());

 
class Child3 extends Person{
    constructor(ChildAttributes){
     super(ChildAttributes)

}

}
const anothersis=new Child3({
name:"iqlaas",
age:12,
hobby:"watching cartoons"
})
console.log(anothersis.speak());

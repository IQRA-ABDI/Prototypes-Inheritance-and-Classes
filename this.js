/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
 var myname="iqra";
 console.log(myname);

// Principle 2

// code example for Implicit Binding
const student ={
      myName:"iqra",
      city: "muqdisho",
      sayHi : function(){
          console.log(`hi , my name is ${this.myName} and i live in  ${this.city}`)
      }
  }  
  student.sayHi();

// Principle 3

// code example for New Binding

function Student(Name,Location){
    this.Name=Name;
    this.Location=Location;
}
const StudentOne=new Student("ifraax","egybt")
console.log(StudentOne.Name);
console.log(StudentOne.Location);

// Principle 4

// code example for Explicit Binding
//call example
function  student(){
console.log(this.myname)
console.log(this.location)
}
const studentOne ={
    myname:"iqra",
    location:"somalia"
}
student.call(studentOne);

//bind example
function  student(){
console.log(this.myname)
console.log(this.location)
}
const studenttwo ={
    myname:"zaki",
    location:"masar"
}
const secondStudent=student.bind(studenttwo);
secondStudent();

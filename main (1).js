// function hello(){
// console.log("Piyush")
// }
// hello()


// function of parameter

// function piyush(name){
//   console.log(name)
// }
// piyush("kumar")
// piyush("singh")


// function hello(name){
//   console.log("Hello "+ name)
// }
// hello("Piyush")
// hello("Aryan ")


// function add(a,b){
//   return a+b
// }
// let result =  add(10,5)
// console.log("sum is : "+ result)


// function mul(a,b){
//   return a*b
// }
// let result = mul(10,20)
// console.log("mul : "+ result)


class Person {
    constructor(name) {
        this.name = name;
    }

sayHello() {
        console.log("Hello, my name is " + this.name);
    }
}

let p1 = new Person("Piyush");
p1.sayHello();  



<html>
  <head>
    <title> Form Validation</title>
  </head>
  <body>
    <form>
      UserId: <input type= "text">
      Contact: <input type = "text">
      Password: <input type = "password">
      Confirm Password: <input type = "Confirm">
      <input type = "submit">
    </form>
  </body>
</html>


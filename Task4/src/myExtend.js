function extend(firstClass , secondClass)
{  
   Object.setPrototypeOf(firstClass,secondClass);
}

function Employee (salary , position)
{
    this.salary = salary;
    this.position = position;

    this.work = function () {
        console.log(`Работаю ту ту ту `);
    };

}
function Person(name , age){

    this.name = name;
    this.age = age;
   
    this.sayName = function () {
        console.log(`Здравствуйте меня зовут ${this.name}`);
    };
    this.jump = function () {
        console.log(`Я смог прыгнуть в свои ${this.age} `);
    };
}
function createCalss( {constructor, ...methods })
{   
    return new function (){
          
        return function (...arg) {

          for (let method in methods) {
            this[method] = methods[method];
          }

          constructor.call(this, ...arg);
          return this;
        };
    };
}

let  Cat =  createCalss(
    {
      constructor(name, age)
      {
        this.name = name; 
        this.age = age;
            
      },
      meow(){
        console.log(`Meow ${this.name}`);
      },
      jump(){
        console.log(`Прыгнул выше своих ${this.age}`);
      }
    }
  );
 

let barsik =  new Cat("barsik",23);
let employee = new Employee("Вова",55);
let persone = new Person("Кирилл",99);
persone.sayName();
employee.work();

extend(employee, persone);

extend(barsik, persone);

barsik.sayName();
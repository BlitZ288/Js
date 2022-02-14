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


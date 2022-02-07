describe("testPromiseAll", function() {

    it("Ожидание всех  промиссов ", function() {
       
        let promises = [
            new Promise(resolve => setTimeout(() => resolve(1), 5000)), // 1
            new Promise(resolve => setTimeout(() => resolve(2), 6000)) , // 2
            new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
          ];

          let result;
          PromiseAll(promises).then( (value)=> 
            {
              result=value;
              console.log(value);
              assert.equal(result, [1,2,3]);
            },
            (error)=>{
              console.log("В блоке cath");
              console.log("Тут ошибка:"+ error);
            }
          );
       
    });
  });

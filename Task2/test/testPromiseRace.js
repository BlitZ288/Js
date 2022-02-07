describe("testPromiseRace", function() {

    it("Ожидание первого промиса ", function() {
       
        let promises = [
            new Promise(resolve => setTimeout(() => resolve(1), 5000)), // 1
            new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)) , // 2
            new Promise(resolve => setTimeout(() => resolve(3), 2000))  // 3
          ];
          
          PromiceRace(promises).then(
            (value)=>{  
                console.log(value);          
            },
            (error)=>{
                console.log("тут ошибка :"+error);          
      
            }
          );
       

    });
    



  });

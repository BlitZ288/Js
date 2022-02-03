

  function PromiseAll(promises){

    /*
    1. Получаем массив промисов. 
    2. Ждем пока все выполняться. 
    3. Проверяем на ошибочное выполнение. 
    4. Возврощяем промис.
    
    */
   let a= promises[0].then((x)=> console.log(x));

    return new Promise((resolve,reject) => 
    {
        while(true){

            let count = 0; 

            for(let promise of promises){
               promise.then((x)=>
               {
                   console.log(x);
                   count++; 
                }
               
               );       
            }

            if(count === promises.length){
                break;
            }
        }
    });

}
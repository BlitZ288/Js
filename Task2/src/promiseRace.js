
function PromiceRace(promises){

    return new Promise((resolve,reject)=>{

        for( let i =0; i < promises.length; i++ ){  
            
            promises[i].then(
                (value )=>
                {
                  resolve(value);
                },
                (error)=>{
                   
                    reject(error);
                }
            );
        }

    });




}
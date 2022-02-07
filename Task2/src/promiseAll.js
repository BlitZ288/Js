
  function PromiseAll(promises){

    let resultPromises =[];
    let countEnd = 0;

    return new Promise((resolve, reject )=>{

        for( let i =0; i < promises.length; i++ ){  
            
            promises[i].then(
                (value )=>
                {
                    resultPromises[i]=value;
                    countEnd++;

                    if(countEnd==promises.length){                       
                       
                        resolve(resultPromises);
                                   
                    } 
                },
                (error)=>{
                   
                    reject(error);
                }
            );
        }

    });
    
}



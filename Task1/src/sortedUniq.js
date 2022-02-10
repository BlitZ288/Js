
function MySortedUniq(array){

    let resultArray=[];
    resultArray.push(array[0]);

    for( let item of array )
    {        
         if( !baseEqual( resultArray[resultArray.length-1] , item ) )        
         {
            resultArray.push(item);                
         }
       
    }
    return resultArray;
}
//module.exports =
function sortedUniq(array){ 
    let resultArray= [array[0]];   

    for( let i=1; i <= array.length; i++){

        if( typeof(array[i]) === "number" && typeof(resultArray[i-1]) === "number" )
        {
            if(isNaN(array[i]) && !isNaN(resultArray[i-1])){

                resultArray.push(array[i]);
            }

        }else if(resultArray[i-1]!==array[i]){

            resultArray.push(array[i]);
        }
    }
    return resultArray;
}


function MyDifference (array, values){
   
    let resultArray = [];
    let flagPush = true;
 
    for( let i = 0 ; i < array.length; i++ )
    {
        for(let item of values )
        {
            if( baseEqual(item, array[i] ) )
            {
                flagPush=false;
                break;
            }
        }
        if(flagPush)
        {
            resultArray.push(array[i]);
        }
        flagPush=true;
    }

    return resultArray;   
}
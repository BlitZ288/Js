
function EqualObject ( firstObject , secondObject )
{
    let propertyFirst = Object.keys(firstObject);
    let propertySecond = Object.keys(firstObject);

    if(propertyFirst.length !== propertySecond.length) return false; 

    if(propertyFirst.length == 0 )
    {
       return firstObject.toString() == secondObject.toString();   
    }
    

    for(let prop of propertyFirst){

        if( !propertySecond.includes(prop) ) return false;       
    }

    for(let prop of propertyFirst){

        if( !MyIsEqual( firstObject[prop], secondObject[prop] ) ) return false;
    }

    return true;
}

function EqaulArray(firstArray , secondArray)
{
    if(firstArray.length !== secondArray.length)
    {
        return false;
    }
    for( let i = 0; i < firstArray.length; i++ )
    {
       if( !MyIsEqual( firstArray[i] , secondArray[i] ) )
       {
           return false;
       }
    }

    return true;
}

function EqualMap(firstMap , secondMap)
{
    if(firstMap.size !== secondMap.size)
    {
        return false;
    }

    for (let [key, val] of firstMap)
    {
        if(!secondMap.has(key))
        {
            return false;
        }
        if(!MyIsEqual(val, secondMap.get(key)))
        {
            return false;
        }
    }

    return true;
}

function MyIsEqual(firstValue , secondValue)
{       
    

    if(typeof (firstValue) !== typeof (secondValue) )
    {        
        return false;
    }

    if(typeof(firstValue) !== "object" )
    {
        return  baseEqual(firstValue , secondValue);
    }
    
    if( firstValue instanceof Array )
    {
        return EqaulArray(firstValue , secondValue);
    }

    if( firstValue instanceof Map)
    {
        return EqualMap(firstValue , secondValue);
    }

    if( firstValue instanceof Set)
    {
        let firstSet = [...firstValue];
        let secondSet = [...secondValue];

        return EqaulArray(firstSet , secondSet);
    }

    if( firstValue instanceof Object)
    {
        return EqualObject(firstValue , secondValue);
    }

}
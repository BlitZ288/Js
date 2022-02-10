function EqualNumber(firstValue , secondValue)
{
    if(typeof(firstValue) =="number")
    {
        if( isNaN(firstValue) && isNaN(secondValue) )
        {
            return true;
        }

        if( ( firstValue === -0 && secondValue === +0 ) || ( firstValue === +0 && secondValue === -0 ) )
        {
            return true;
        }

        if(firstValue === secondValue )
        {
            return true;
        }
        return false;
    }

}

function EqualNonNumber (firstValue , secondValue)
{
    type = typeof(firstValue);

    if ( type == "undefined" )
    {
        return true;
    }

    if( firstValue===null && secondValue === null )
    {
        return true;
    }

    if( type == "string"  || type == "boolean")
    {
        return firstValue === secondValue;
    }  

    if( type == "symbol" )
    {
        return firstValue === secondValue;
    }

    return firstValue == secondValue;
}
function baseEqual(firstValue , secondValue)
{
    if( typeof(firstValue) !== typeof(secondValue) )
    {
        return false ; 
    }

    if( typeof(firstValue) == "number" )
    {
        return EqualNumber(firstValue, secondValue);
    }
    else
    {
        return EqualNonNumber(firstValue , secondValue);
    }
}

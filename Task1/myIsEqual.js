function getType(type){
    ///Просто посчитал по смиволам поэтому 8 

    return Object.prototype.toString.call(type).slice(8,-1);
}

function IsPrimitive(type){

    /* просто буду переберать все примитивы   */    

    return["Null", "Undefined", "String", "Boolean", "Number", "Symbol"].includes(type);
}




function IsEuqalPrimitiv(firstItem , secondItem)
{
    if(getType(firstItem) === "Number"){

        if(typeof(secondItem) === "object"){

            return firstItem == secondItem;
        }

        if(isNaN(firstItem) && isNaN(secondItem)){
            return true;
        }
    }
    return firstItem === secondItem;
}

function IsEuqalArray(firstItem , secondItem){

    if(firstItem.length !== secondItem.length)  return false;

    for(let i = 0 ; i < firstItem.length; i++){

        if(IsPrimitive( getType(firstItem[i]) ) && IsPrimitive( getType(secondItem[i]) ))
        {
            if( !IsEuqalPrimitiv (firstItem[i],secondItem[i]) )
            {
                 return false;
            }
            
        }else{

            if( !MediatorEuqal( firstItem[i],secondItem[i] ) )  return false;
        }
    }
    return true;
}

function IsEuqalMap(firstItem , secondItem){

    if(firstItem.keys().length !== secondItem.keys().length) return false; 

    for(let key of firstItem.keys()){

        if( !secondItem.has(key) ) return false;       
    }

    for(let key of firstItem.keys()){

        if( !MediatorEuqal( firstItem.get(key),secondItem.get(key) ) ) return false;
    }

    return true;

}



function MediatorEuqal(firstItem , secondItem){

    let typeFirst = getType(firstItem);
    let typeSecod = getType(secondItem);

    if(typeFirst !== typeSecod) return false;

    if( IsPrimitive(typeFirst) )  return IsEuqalPrimitiv( firstItem, secondItem );

    if( typeFirst === 'Array') return IsEuqalArray( firstItem, secondItem );


    if( typeFirst === 'Object') return IsEuqalObject( firstItem, secondItem );

    if(typeFirst === 'Map') return IsEuqalMap( firstItem, secondItem );

    if(typeFirst === 'Set') return IsEuqalArray( Array.from(firstItem), Array.from(secondItem))


}


function IsEuqalObject(firstItem , secondItem){

    let propertyFirst = Object.keys(firstItem);
    let propertySecond = Object.keys(secondItem);

    if(propertyFirst.length !== propertySecond.length) return false; 

    for(let prop of propertyFirst){

        if( !propertySecond.includes(prop) ) return false;       
    }

    for(let prop of propertyFirst){

        if( !MediatorEuqal( firstItem[prop],secondItem[prop] ) ) return false;
    }

    return true;

}

module.exports =
function IsEqual(firstItem , secondItem){

    let typeFirst = getType(firstItem);
    let typeSecod = getType(secondItem);

    if(typeFirst !== typeSecod) return false;

    if( IsPrimitive(typeFirst) )  return IsEuqalPrimitiv( firstItem, secondItem );

    if( typeFirst === 'Array') return IsEuqalArray( firstItem, secondItem );

    if( typeFirst === 'Object') return IsEuqalObject( firstItem, secondItem) ;

    if(typeFirst === 'Map') return IsEuqalMap( firstItem, secondItem );

    if(typeFirst === 'Set') return IsEuqalArray( Array.from(firstItem), Array.from(secondItem))


}/*
window.onload = function() {
    let map1 = new Map();
    map1.set(1,"str1");
 
 
    let map2 = new Map();
    map2.set(1,"str1");
 

    IsEqual( map1, map2 );
 };*/
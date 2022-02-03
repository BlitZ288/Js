
function getType(type){
    ///Просто посчитал по смиволам поэтому 8 

    return Object.prototype.toString.call(type).slice(8,-1);
}

function differenceForOneValue(array, value){

    var indexValue = array.indexOf(value);
    if(indexValue!==-1)
    {
        array.splice(indexValue,1);
    }
    return array;
}
function differenceForArrayValue(array, arrayValue){
      
    for(let item of arrayValue){
        
        differenceForOneValue(array,item);

    }
    return array;
}

function difference(array, values){
    
    if(array.length===0) 
    {
        return [];
    }
   if(getType(values)==="Array") return differenceForArrayValue(array,values);
   return differenceForOneValue(array,values);
}
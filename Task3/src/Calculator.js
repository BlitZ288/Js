
function Calculator(params) {

    let result=params;

    if(!new.target){
        throw new Error("Функция должна вызываться в режиме конструктору");
    }

    this.multiply=function(param){
        result=param*result;
        return this;
    };

    this.plus=function(param){
        result=result+param;
        return this;
    };

    this.minus=function (param) {
        result=result-param;
        return this;
    };

    this.divide=function (param) {
        
        if(param==0)
        { 
            throw new Error("Деление на 0 невозможно");
        }

        result=result/param;
        return this;
    };

    this.calculator=function () {
        return result;
    };
}
console.log(new Calculator(5).divide(0).calculator());
/*TODO: Нужно что то сделать с порядком вычислений */

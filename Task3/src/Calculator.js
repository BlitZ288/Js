/*
TODO: 1.Избавиться от матрицы. (можно попробывать через объект) Сделал 
      2.Помеянть метод calculate (разделить работу упрастить все )
*/
function Calculator(params)
{
  let result = params;

  if (!new.target)
  {
    throw new Error("Функция должна вызываться в режиме конструктору");
  }

  let buffer = [];

  function calculatorOfValues(firstValue, secondValue, sign)
   {
        switch (sign) 
        {
        case "+":
            return firstValue + secondValue;

        case "-":
            return firstValue - secondValue;

        case "*":
            return firstValue * secondValue;

        case "/":
            return firstValue / secondValue;
        }
  }

  this.multiply = function (param) 
  {
    buffer.push({ sign: "*", argumen: param });

    return this;
  };

  this.plus = function (param)
  {
    buffer.push({ sign: "+", argumen: param });

    return this;
  };

  this.minus = function (param)
  {
    buffer.push({ sign: "-", argumen: param });

    return this;
  };

  this.divide = function (param)
  {
    if (param == 0)
    {
      throw new Error("Деление на 0 невозможно");
    }

    buffer.push({ sign: "/", argumen: param });

    return this;
  };

  function TransformArrayWithHighPriority ()
  {
    let temp;
    
    for (let i = 0; i < buffer.length; i++)
    {
      if (buffer[i].sign == "*" || buffer[i].sign == "/")
      {          
        if (i == 0)
        { 
          result = calculatorOfValues(result, buffer[i].argumen, buffer[i].sign);
          buffer.splice(i, 1);
          i--;

        } else {
          temp = calculatorOfValues(
            buffer[i - 1].argumen,
            buffer[i].argumen,
            buffer[i].sign
          );

          buffer.splice(i - 1, 2, {
            sign: buffer[i - 1].sign,
            argumen: temp,
          });
          i -= 2;
        }
      }
    }
    return buffer;
  }

  this.calculate = function () 
  {
    let arrayCalculationObject = TransformArrayWithHighPriority();
    
    for (let i = 0; i < arrayCalculationObject.length; i++)
    {
      if (i == 0) 
      {
        result = calculatorOfValues(result, arrayCalculationObject[i].argumen, arrayCalculationObject[i].sign);

      } else {
        result = calculatorOfValues(result, arrayCalculationObject[i].argumen, arrayCalculationObject[i].sign);
      }
    }

    return result;
  };
}

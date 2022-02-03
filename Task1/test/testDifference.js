

describe("difference", function() {

    it("Удалить одно число из массива", function() {
       
        let result = difference([1,2,3,4],1);
      
        assert.deepEqual(result, [2,3,4]);
       
    });

    it("Удалить массив элементов из массива ", function() {
        
        let result = difference([1,2,3,4],[1,2]);

        assert.deepEqual(result, [3,4]);
      });

      it("Удалить строку  из массива ", function() {
        
        let result = difference(["Fedor","Kirill","Max","Oleg"],"Fedor");

        assert.deepEqual(result, ["Kirill","Max","Oleg"]);
      });

      it("Удалить массив строк из массива ", function() {
        
        let result = difference(["Fedor","Kirill","Max","Oleg"],["Fedor","Kirill"]);

        assert.deepEqual(result, ["Max","Oleg"]);
      });
  
  
  
  });

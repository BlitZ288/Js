

describe("sortedUniq", function() {

    it("числа ", function() {
       
        let result =sortedUniq([1,2,2,3,4,5,6]);

        assert.deepEqual(result, [1,2,3,4,5,6]);
    });

    it("строки ", function() {
        assert.deepEqual(sortedUniq(["Fedor","Fedor","Kirill"]), ["Fedor","Kirill"]);
      });

      it("NaN ", function() {
        assert.deepEqual(sortedUniq([NaN,NaN,2]), [NaN,2]);
      });

     
  
  });


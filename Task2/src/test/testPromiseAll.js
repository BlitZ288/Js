describe("testPromiseAll", function() {

    it("Обычные промиссы ", function() {
       
        let promises = [
            new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
            new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
            new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
          ];
       
        let result = PromiseAll(promises);

        assert.equal(result, promises);
       
    });

  });

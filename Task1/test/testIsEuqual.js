describe("myIsEqual", function() {


    it("NaN is equal NaN", function() {
        
         assert.equal(IsEqual(NaN,NaN),true);
    
    });
    
    
    it("PrimitiveObject is equal PrimitiveObject", () => {
        
        let user1 ={
            a : 5 
        };
    
        let user2 ={
            a : 5 
        };
    
         assert.equal(IsEqual(user1,user2),true);
    
    });
    
    it("PrimitiveObject is not equal PrimitiveObject", () => {
        
        let user1 ={
            a : 2 
        };
        let user2 ={
            a : 5 
        };
    
        // assert.equal(IsEqual(user1,user2),false);
         assert.equal(IsEqual(user1,user2),false);
    
    });
    
    it("PrimitiveAndArrayObject is equal PrimitiveAndArrayObject", () => {
        
        let user1 ={
            a : 5 ,
            array : [1,2,3,4]
        }
        let user2 ={
            a : 5 ,
            array : [1,2,3,4]
        }
    
         assert.equal(IsEqual(user1,user2),true);
    
    });
    it("PrimitiveAndArrayObject is not equal PrimitiveAndArrayObject", () => {
        
        let user1 ={
            a : 5 ,
            array : [1,2,3,4]
        }
        let user2 ={
            a : 5 ,
            array : [1,2,2,4]
        }
    
         assert.equal(IsEqual(user1,user2),false);
    
    });
    it( "ObjectInObject is  equal ObjectInObject", () => {
        
        let user1 ={
            a : 5 ,
            array : [1,2,3,4],
            "manager": {
                a1:1,
                b1:2
            }
        };
        let user2 ={
            a : 5 ,
            array : [1,2,3,4],
            "manager": {
                a1:1,
                b1:2
            }
        };
    
         assert.equal(IsEqual(user1,user2),true);
    
    });
    it( "ObjectInObject is not equal ObjectInObject", () => {
        
        let user1 ={
            a : 5 ,
            array : [1,2,3,4],
            "manager": {
                a1:1,
                b1:2
            }
        };
        let user2 ={
            a : 5 ,
            "manager": {
                a1:1,
                b1:1
            },
            array : [1,2,2,4]
        };
    
         assert.equal(IsEqual(user1,user2),false);
    
    });
    
    it( "object nesting is  equal object nesting ", () => {
        
        let user1 ={
            a : 5 ,
            array : [1,2,3,4],
            "manager": {
                a1:1,
                b1:2
            },
            arrayObject :
            [ 
                {
                    a1:1,
                    b1:2
                },
                {
                    str1:"Fedor",
                    str2:"Hi Fedor"
                }
    
            ]
        };
        let user2 ={
            a : 5 ,
            array : [1,2,3,4],
            "manager": {
                a1:1,
                b1:2
            },
            arrayObject :
            [ 
                {
                    a1:1,
                    b1:2
                },
                {
                    str1:"Fedor",
                    str2:"Hi Fedor"
                }
                
            ]
        };
         assert.equal(IsEqual(user1,user2),true);
    
    });
    it( "object nesting is not equal object nesting ", () => {
        
        let m = new Map();
        m.set(1,"sss");
        let m2 = new Map();
        m2.set(1,"s22ss");
        let user1 ={
            a : 5 ,
            array : [1,2,3,4],
            "manager": {
                a1:1,
                b1:2
            },
            arrayObject :
            [ 
                {
                    a1:1,
                    b1:2
                },
                {
                    str1:"Fedor",
                    str2:"Hi Fedor"
                }
    
            ],
            map:m
        };
        let user2 ={
            a : 5 ,
            array : [1,2,3,4],
            "manager": {
                a1:1,
                b1:2
            },
            arrayObject :
            [ 
                {
                    a1:1,
                    b1:2
                },
                {
                    str1:"Fedor",
                    str2:"Hi Fedor"
                }
                
            ],
            map:m2
    
        };
         assert.equal(IsEqual(user1,user2),false);
    
    });
    
    it("undefined is equal undefined", () => {
    
         assert.equal(IsEqual(undefined, undefined),true);
    
    });
    it("undefined is not equal  1", () => {
    
         assert.equal(IsEqual(undefined, 1),false);
    
    });
    
    it("Easy object is  equal Easy object", () => {
    
        const obj1 ={
            a: 1,
            b: 2,
            another:[],
            array:[1,2,3,4]
        }
    
        const obj2 ={
            a: 1,
            b: 2,
            another:[],
            array:[1,2,3,4]
        }
        
       
         assert.equal(IsEqual(obj1,obj2),true);
    
    });
    
    it("Math.PI is equal Math.PI", () => {
    
         assert.equal(IsEqual(Math.PI,Math.PI),true);
    
    });
    
    it("15.66 is equal 15.66", () => {
    
         assert.equal(IsEqual(15.66,15.66),true);
    
    });
    it("[] is equal []", () => {
    
         assert.equal(IsEqual([], []),true);
    
    });
    
    it("DimaitObject is equal DimaitObject", () => {
    
        const objA = [
            {
              "artist": "Billy Joel",
              "title": "Piano Man",
              "release_year": 1973,
              "formats": [
                "CS",
                "8T",
                "LP"],
              "gold": true
            },
            1,
            [3, 1],
            [3, [4]],
          ];
          const objA2 = [
            {
              "artist": "Billy Joel",
              "title": "Piano Man",
              "release_year": 1973,
              "formats": [
                "CS",
                "8T",
                "LP"],
              "gold": true
            },
            1,
            [3, 1],
            [3, [4]],
          ];
         assert.equal(IsEqual(objA, objA2),true);
    
    });
    it("DimaitObject is not equal DimaitObject", () => {
    
        const objA = [
            {
              "artist": "Billy Joel",
              "title": "Piano Man",
              "release_year": 1973,
              "formats": [
                "CS",
                "8T",
                "LP"],
              "gold": true
            },
            1,
            [2, 1],
            [3, [4]],
          ];
          const objA2 = [
            {
              "artist": "Billy Joel",
              "title": "Piano Man",
              "release_year": 1973,
              "formats": [
                "CS",
                "8T",
                "LP"],
              "gold": true
            },
            1,
            [3, 1],
            [3, [4]],
          ];
    
         assert.equal(IsEqual(objA, objA2),false);
    
    });
    it("[1,2, obj] is equal [1,2, obj]", () => {
    
        const obj1 ={
            a: 1,
            b: 2,
            another:[],
            array:[1,2,3,4]
        }
         assert.equal(IsEqual([1,2,obj1], [1,2,obj1]),true);
    
    });
    it("[''1','2','3'] is equal ['1','2','3']", () => {
    
         assert.equal(IsEqual(["1","2","3"], ["1","2","3"]),true);
    
    });
    it("{} is equal {}", () => {
    
         assert.equal(IsEqual({}, {}),true);
    
    });
    
    it("''  is equal '' ", () => {
    
         assert.equal(IsEqual( '' , '' ),true);
    
    });
    it("0  is equal new Number(0) ", () => {
    
         assert.equal(IsEqual( 0 , new Number(0) ),true);
    
    });
    it("0  is not equal new Number(1)  ", () => {
    
         assert.equal(IsEqual( 0 , new Number(1) ),false);
    
    });
    it("Map  is  equal Map  ", () => {
        let map1 = new Map();
        map1.set(1,"str1");
     
     
        let map2 = new Map();
        map2.set(1,"str1");
     
         assert.equal(IsEqual( map1, map2 ),true);
    
    });
    it("Map  is not  equal Map  ", () => {
        let map1 = new Map();
        map1.set(1,"2");
     
     
        let map2 = new Map();
        map2.set(1,"str1");
     
         assert.equal(IsEqual( map1, map2 ),false);
    
    });
    it("Set  is  equal Set  ", () => {
        let Set1 = new Set();
        Set1.add("str1");
     
        let Set2 = new Set();
        Set2.add("str1");
     
         assert.equal(IsEqual( Set1, Set2 ),true);
    
    });
    it("Set  is not equal Set  ", () => {
        let Set1 = new Set();
        Set1.add("str122");
     
        let Set2 = new Set();
        Set2.add("str1");
     
         assert.equal(IsEqual( Set1, Set2 ),false);
    
    });
    it("'str'  is equal 'str' ", () => {
    
         assert.equal(IsEqual( 'str' , 'str' ),true);
    
    });
    
    it("{ a : 'Fedor' } is equal { a : 'Fedor' }", () => {
    
         assert.equal(IsEqual( {a : 5} , {a : 5} ),true);
    
    });
    it("null is not equal undefined", () => {
    
         assert.equal(IsEqual( null, undefined),false);
    
    });
    
    it("''  is not equal 'str' ", () => {
    
         assert.equal(IsEqual( '' , 'str' ),false);
    
    });
    
    it("null is not equal undefined", () => {
    
         assert.equal(IsEqual( null, undefined),false);
    
    });
    it("object is not equal object", () => {
    
        const obj1 ={
            a: 1,
            b: 2,
            another:[],
            array:[1,2,3,4]
        }
    
        const obj2 ={
            a: 1,
            b: 1,
            another:[],
            array:[1,2,3,4]
        }
    
        obj1.self=obj1;
        obj2.self=obj2;
    
        obj1.another.push(obj2);
        obj2.another.push(obj1);
    
         assert.equal(IsEqual(obj1,obj2),false);
    
    });
    
    
    
    
    
  
  
  });

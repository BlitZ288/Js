const isEqual= require("./myIsEqual.js");

test("NaN is equal NaN", () => {

    expect(isEqual(NaN,NaN)).toBe(true);

});


test("PrimitiveObject is equal PrimitiveObject", () => {
    
    let user1 ={
        a : 5 
    };

    let user2 ={
        a : 5 
    };

    expect(isEqual(user1,user2)).toBe(true);

});

test("PrimitiveObject is not equal PrimitiveObject", () => {
    
    let user1 ={
        a : 2 
    }
    let user2 ={
        a : 5 
    }

    expect(isEqual(user1,user2)).toBe(false);

});

test("PrimitiveAndArrayObject is equal PrimitiveAndArrayObject", () => {
    
    let user1 ={
        a : 5 ,
        array : [1,2,3,4]
    }
    let user2 ={
        a : 5 ,
        array : [1,2,3,4]
    }

    expect(isEqual(user1,user2)).toBe(true);

});
test("PrimitiveAndArrayObject is not equal PrimitiveAndArrayObject", () => {
    
    let user1 ={
        a : 5 ,
        array : [1,2,3,4]
    }
    let user2 ={
        a : 5 ,
        array : [1,2,2,4]
    }

    expect(isEqual(user1,user2)).toBe(false);

});
test( "ObjectInObject is  equal ObjectInObject", () => {
    
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

    expect(isEqual(user1,user2)).toBe(true);

});
test( "ObjectInObject is not equal ObjectInObject", () => {
    
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

    expect(isEqual(user1,user2)).toBe(false);

});

test( "object nesting is  equal object nesting ", () => {
    
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
    expect(isEqual(user1,user2)).toBe(true);

});
test( "object nesting is not equal object nesting ", () => {
    
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
    expect(isEqual(user1,user2)).toBe(false);

});

test("undefined is equal undefined", () => {

    expect(isEqual(undefined, undefined)).toBe(true);

});
test("undefined is not equal  1", () => {

    expect(isEqual(undefined, 1)).toBe(false);

});

test("Easy object is  equal Easy object", () => {

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
    
   
    expect(isEqual(obj1,obj2)).toBe(true);

});

test("Math.PI is equal Math.PI", () => {

    expect(isEqual(Math.PI,Math.PI)).toBe(true);

});

test("15.66 is equal 15.66", () => {

    expect(isEqual(15.66,15.66)).toBe(true);

});
test("[] is equal []", () => {

    expect(isEqual([], [])).toBe(true);

});

test("DimaTestObject is equal DimaTestObject", () => {

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
    expect(isEqual(objA, objA2)).toBe(true);

});
test("DimaTestObject is not equal DimaTestObject", () => {

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

    expect(isEqual(objA, objA2)).toBe(false);

});
test("[1,2, obj] is equal [1,2, obj]", () => {

    const obj1 ={
        a: 1,
        b: 2,
        another:[],
        array:[1,2,3,4]
    }
    expect(isEqual([1,2,obj1], [1,2,obj1])).toBe(true);

});
test("[''1','2','3'] is equal ['1','2','3']", () => {

    expect(isEqual(["1","2","3"], ["1","2","3"])).toBe(true);

});
test("{} is equal {}", () => {

    expect(isEqual({}, {})).toBe(true);

});

test("''  is equal '' ", () => {

    expect(isEqual( '' , '' )).toBe(true);

});
test("0  is equal new Number(0) ", () => {

    expect(isEqual( 0 , new Number(0) )).toBe(true);

});
test("0  is not equal new Number(1)  ", () => {

    expect(isEqual( 0 , new Number(1) )).toBe(false);

});
test("Map  is  equal Map  ", () => {
    let map1 = new Map();
    map1.set(1,"str1");
 
 
    let map2 = new Map();
    map2.set(1,"str1");
 
    expect(isEqual( map1, map2 )).toBe(true);

});
test("Map  is not  equal Map  ", () => {
    let map1 = new Map();
    map1.set(1,"2");
 
 
    let map2 = new Map();
    map2.set(1,"str1");
 
    expect(isEqual( map1, map2 )).toBe(false);

});
test("Set  is  equal Set  ", () => {
    let Set1 = new Set();
    Set1.add("str1");
 
    let Set2 = new Set();
    Set2.add("str1");
 
    expect(isEqual( Set1, Set2 )).toBe(true);

});
test("Set  is not equal Set  ", () => {
    let Set1 = new Set();
    Set1.add("str122");
 
    let Set2 = new Set();
    Set2.add("str1");
 
    expect(isEqual( Set1, Set2 )).toBe(false);

});
test("'str'  is equal 'str' ", () => {

    expect(isEqual( 'str' , 'str' )).toBe(true);

});

test("{ a : 'Fedor' } is equal { a : 'Fedor' }", () => {

    expect(isEqual( {a : 5} , {a : 5} )).toBe(true);

});
test("null is not equal undefined", () => {

    expect(isEqual( null, undefined)).toBe(false);

});

test("''  is not equal 'str' ", () => {

    expect(isEqual( '' , 'str' )).toBe(false);

});

test("null is not equal undefined", () => {

    expect(isEqual( null, undefined)).toBe(false);

});
test("object is not equal object", () => {

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

    expect(isEqual(obj1,obj2)).toBe(false);

});





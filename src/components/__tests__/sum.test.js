// here i will write test cases

import {sum} from "../sum"

test("sum sunction should Calculate the sum of two numbers",()=>{

    const result  = sum(3,4)

    //Assertion, it is not mandatory but we have to write this
    expect(result).toBe(7)
})
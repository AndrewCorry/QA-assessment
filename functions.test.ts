import { createProperty } from "typescript"

const {shuffleArray, array, arrCopy} = require('./utils')

describe('shuffleArray should', () => {
    
    let originalArr = array.length
    let copyArr = arrCopy.length

    test('The shuffled array should return an array of equal length', ()=>{
        expect(copyArr).toBe(originalArr)
    })
    
    test('The shuffled array should have all the elements of the original array', ()=>{
        expect(array).toEqual(expect.arrayContaining(copyArr))
    })

})
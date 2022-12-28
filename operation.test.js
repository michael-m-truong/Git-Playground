const sum = require('./add')

test('adds 1 + 2 to equal 3', sumTest) //idk

function sumTest() {
    expect(sum(1,2)).toBe(3)
}
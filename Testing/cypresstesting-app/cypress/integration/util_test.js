import { sum, square, greet } from '../../src/util';


describe("Test 1", function() {
    it("Test sum function", function() {
        expect(sum(5,5)).to.equal(10)
    })
    it("Test square function", () => {
        expect(square(10)).to.equal(100)
    })
    it("Test Greet Function", function(){
        expect(greet("Shannon", "purple"))
        .to.equal("Hello Shannon, I see your favorite color is purple")
    })
})
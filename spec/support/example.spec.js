const SimpleService = require("../../services/simple.service");

describe("example for run jasmine test", ()=> {
    it("should true", ()=> {
        expect(true).toBe(true);
    });

    it("should return 'learning javascript' when call SimpleService.getNameAsyn", async (done) => {
        let name = await SimpleService.getNameAsync();
        expect(name).toEqual("learning javascript (async)");
        done();
    });

    it("should return 'learning javascript' when call SimpleService.getName", () => {
        let name = SimpleService.getName();
        expect(name).toEqual("learning javascript (sync)");
    });
});
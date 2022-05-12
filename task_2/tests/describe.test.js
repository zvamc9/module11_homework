const getPercents = require  ("../index");


describe("test getPercents", () => {
    it("getPercents 30% of 200 equals 60", () => {
        const result = getPercents(30, 200);
        expect(result).toBe(60);
    }),
        it("getPercents 101% of 9 equals 9.09", () => {
            const result = getPercents(101, 9);
            expect(result).toBe(9.09);
        }),
        it("getPercents 0% of 150 equals 0", () => {
            const result = getPercents(0, 150);
            expect(result).toBe(0);
        });
});
import {getPercent} from "../index" ; 

describe('tests for getPercent function', () => {
    it ("must work correctly with a number and not a string", () => {
       expect(getPercent('')).toBe(false);
    });
});

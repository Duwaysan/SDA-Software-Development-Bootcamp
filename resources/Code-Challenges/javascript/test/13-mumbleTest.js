import { mumble } from "../JS_code_challenges/13-mumble.js";
import { expect } from "chai";

describe("13-mumble", function () {
    it("repeats characters correctly", function () {
        expect(mumble('X')).to.equal('X');
    });
    it("repeats characters correctly", function () {
        expect(mumble('abc')).to.equal('a-bb-ccc');
    });
    it("repeats characters correctly", function () {
        expect(mumble('121')).to.equal('1-22-111');
    });
    it("repeats characters correctly", function () {
        expect(mumble('!A 2')).to.equal('!-AA-   -2222')
    });
});

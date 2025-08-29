import { isPalindrome } from "../JS_code_challenges/11-isPalindrome.js";
import { expect } from "chai";

describe("11-isPalindrome", function () {
    it("returns a boolean", function () {
        expect(typeof isPalindrome('abc')).to.equal('boolean');
    });
    it("empty string returns true", function () {
        expect(isPalindrome("")).to.equal(true);
    });
    it("returns true for simple palindrome", function () {
        expect(isPalindrome('A')).to.equal(true);
    });
    it("returns false if not palindrome", function () {
        expect(isPalindrome('abc')).to.equal(false);
    });
    it("returns true for palindrome phrase", function () {
        expect(isPalindrome('A nut for a jar of tuna')).to.equal(true);
    });
});

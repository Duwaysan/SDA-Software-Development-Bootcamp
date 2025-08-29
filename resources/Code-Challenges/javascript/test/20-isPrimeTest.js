import { isPrime } from "../JS_code_challenges/20-isPrime.js";
import { expect } from "chai";

describe("20-isPrime", function () {
    it("primes are greater than 1", function () {
        expect(isPrime(1)).to.equal(false);
    });

    it("primes are whole numbers", function () {
        expect(isPrime(3.1)).to.equal(false);
    });
    
    it("checks for prime number", function () {
        expect(isPrime(2)).to.equal(true);
        expect(isPrime(3)).to.equal(true);
        expect(isPrime(4)).to.equal(false);
        expect(isPrime(29)).to.equal(true);
        expect(isPrime(200)).to.equal(false);
    });
});

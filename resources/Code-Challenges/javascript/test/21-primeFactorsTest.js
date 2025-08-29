import { primeFactors } from "../JS_code_challenges/21-primeFactors.js";
import { expect } from "chai";

describe("21-primeFactors", function () {
    it("returns an empty array if num not greater than 1", function () {
        expect(primeFactors(1)).to.be.an('array').that.is.empty;
    });

    it("returns prime factors", function () {
        expect(primeFactors(2).sort()).to.include(2);
        expect(primeFactors(3).sort()).to.include(3);
        expect(primeFactors(4).sort()).to.include(2, 2);
        expect(primeFactors(18).sort()).to.include(2, 3, 3);
        expect(primeFactors(29).sort()).to.include(29);
        expect(primeFactors(105).sort()).to.include(3, 5, 7);
        expect(primeFactors(200).sort()).to.include(2, 2, 2, 5, 5);
    });
});


// // SOLUTION
// function primeFactors(n) {
//     let factors = [];
//     if (n < 2 || !Number.isInteger(n)) return factors;

//     // function to help find next prime to divide by...
//     function isPrime(n) {
//         if (n < 2 || !Number.isInteger(n)) return false;
//         for (let i = 2; i <= n / 2; i++) {
//             if (Number.isInteger(n / i)) return false;
//         }
//         return true;
//     }

//     let prime = 2;  // start with smallest prime
//     while (!isPrime(n)) {
//         if (Number.isInteger(n / prime)) {
//             factors.push(prime);
//             n = n / prime;
//         } else {
//             // find next prime
//             prime++;
//             while (!isPrime(prime)) prime++;
//         }
//     }
//     factors.push(n);
//     return factors;
// }

/*-- a more efficient algorithm that relies on the fact
     that you don't have to check if the divisor is prime 
     as shown here:
     https://people.revoledu.com/kardi/tutorial/BasicMath/Prime/Algorithm-PrimeFactor.html ---*/
// function primeFactors(n) {
//   let factors = [];
//   if (n < 2 || !Number.isInteger(n)) return factors;
//   let divisor = 2;
//   while (n >= divisor * divisor) {
//     if (Number.isInteger(n / divisor)) {
//       factors.push(divisor);
//       n = n / divisor;
//     } else {
//       divisor++;
//     }
//   }
//   factors.push(n);
//   return factors;
// }
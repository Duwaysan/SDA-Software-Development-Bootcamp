import { findHighestPriced } from "../JS_code_challenges/16-findHighestPriced.js";
import { expect } from "chai";

describe("16-findHighestPriced", function () {
    it("returns an object", function () {
        expect(findHighestPriced([{ price: 1 }, { price: 2 }, { price: 3 }])).to.be.an('object')
    });

    it("finds the highest priced object", function () {
        var items = [
            { sku: 'a1', price: 25 },
            { sku: 'b2', price: 5 },
            { sku: 'c3', price: 50 },
            { sku: 'd4', price: 10 }
        ];
        expect(findHighestPriced(items)).to.be.an('object').to.include(items[2]);
    });

    it("returns first object if tie", function () {
        var items = [
            { sku: 'a1', price: 25 },
            { sku: 'b2', price: 25 }
        ];
        expect(findHighestPriced(items)).to.be.an('object').to.include(items[0]);
    });
});

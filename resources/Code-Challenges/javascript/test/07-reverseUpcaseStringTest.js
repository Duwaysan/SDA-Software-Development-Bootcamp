import { reverseUpcaseString } from "../JS_code_challenges/07-reverseUpcaseString.js";
import { expect } from "chai";

describe("07-reverseUpcaseString", function () {
    it("returns string reversed and upcased", function () {
      expect(reverseUpcaseString("SEI Rocks!")).to.equal("!SKCOR IES");
    });
  });
  
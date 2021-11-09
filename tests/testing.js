// node 12 and up
import chai from "chai"
import eq from "../src/eq.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect

describe("Eq example TEST NAME", () => {
 it("TEST DESCRIPTION", () =>{
     expect(eq("a","a")).to.be.true
 });
})
const assert = require("assert");
const { shortenAddr } = require("../src/utils");
assert(shortenAddr("0x"+"a".repeat(40)).includes("..."));
console.log("tests passed v86");

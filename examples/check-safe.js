const { MultisigChecker } = require("../src/multisig");
async function main() {
  const c = new MultisigChecker(process.env.RPC_URL);
  console.log(await c.check(process.argv[2]));
}
main();
// example v88

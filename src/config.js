const fs = require("fs");
const DEFAULTS = { timeout: 75, retries: 3 };
function load(p) { try { return {...DEFAULTS, ...JSON.parse(fs.readFileSync(p))}; } catch { return DEFAULTS; } }
module.exports = { load, DEFAULTS };

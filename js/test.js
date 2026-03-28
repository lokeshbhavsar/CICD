const sum = require("./sum");

// ✅ pass test
if (sum(1, 2) === 3) {
  console.log("JS Test 1 Passed");
} else {
  throw new Error("JS Test 1 Failed");
}

// ❌ fail test
if (sum(2, 2) === 5) {
  console.log("JS Test 2 Passed");
} else {
  throw new Error("JS Test 2 Failed");
}
import { slugify, randomId, formatDate, groupBy, deepClone } from './utils.js';

// Simple test assertions
console.assert(slugify("Hello World!") === "hello-world", "slugify failed");
console.assert(randomId(5).length === 5, "randomId length mismatch");
console.assert(formatDate(new Date(2026, 1, 10), "DD/MM/YYYY") === "10/02/2026", "formatDate failed");

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 999;
console.assert(original.b.c === 2 && cloned.b.c === 999, "deepClone failed");

console.log("✅ All tests passed!");

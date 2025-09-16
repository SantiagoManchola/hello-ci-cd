const assert = require("assert");
const suma = require("./index");

// Test básico
assert.strictEqual(suma(2, 3), 5);
assert.strictEqual(suma(10, 5), 15);

console.log("✅ Todos los tests pasaron correctamente");

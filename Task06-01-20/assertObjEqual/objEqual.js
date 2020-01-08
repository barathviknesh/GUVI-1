var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 };
function assertObjectsEqual(actual, expected) {
    if (JSON.stringify(actual) == JSON.stringify(expected)) {
        alert("Passed");
    }
    else {
        alert("FAILED");
    }
}
assertObjectsEqual(actual, expected);

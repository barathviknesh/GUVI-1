var obj = {};
var i = 0;
var arr = [];
var list = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var kv = list_1[_i];
    for (var _a = 0, kv_1 = kv; _a < kv_1.length; _a++) {
        var _b = kv_1[_a], k = _b[0], v = _b[1];
        obj[k] = v;
    }
    arr[i] = obj;
    obj = {};
    i += 1;
}
alert(JSON.stringify(arr));

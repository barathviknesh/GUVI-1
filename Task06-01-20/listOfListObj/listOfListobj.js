var obj = {};
var list = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var _a = list_1[_i], key = _a[0], value = _a[1];
    obj[key] = value;
}
alert(JSON.stringify(obj));

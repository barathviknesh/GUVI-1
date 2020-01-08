var obj = { name: "RajiniKanth", age: 33, hasPets: false };
var list = [];
var i = 0;
for (var prop in obj) {
    list[list.length] = [prop, obj[prop]];
    i += 1;
}
console.log(list);

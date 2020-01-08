let obj ={name: "RajiniKanth", age: 33, hasPets : false};
let list = [];
let i = 0;
for(let prop in obj)
{
	list[list.length] = [prop, obj[prop]];
    i+=1;
}
console.log(list);

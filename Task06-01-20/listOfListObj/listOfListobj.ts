let obj ={};
let list = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
for(const [key, value] of list)
{
	obj[key]=value;
}
alert(JSON.stringify(obj));
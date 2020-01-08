let obj ={};
let list = ["GUVI", "I", "am", "Geek"];
obj[list[0]] = list[list.length - 1];

alert(JSON.stringify(obj));
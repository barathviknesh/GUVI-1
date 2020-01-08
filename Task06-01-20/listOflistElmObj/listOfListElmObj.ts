let obj ={};
let i =0;
let arr =[];
let list = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
for(const kv of list)
{
	for(const [k, v] of kv)
    {
        obj[k] =v;
    }
    arr[i] = obj;
    obj={};
    i+=1;
}
alert(JSON.stringify(arr));
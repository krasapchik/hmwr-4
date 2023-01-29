
var projekts = [ 'li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']


var li = 0;
var span = 0;
var div = 0;
var h3 = 0;
var a = 0;
for(var i = 0; i < projekts.length; i++){
if(projekts[i]=="li")
{
li= li+1
}
else if(projekts[i]=='div'){
    div= div +1
   
}
else if(projekts[i]=='span'){
    span= span +1

}
else if(projekts[i]=='h3'){
    h3= h3 +1
}
else if(projekts[i]=='a'){
    a= a +1
}

}


const obj = {

li :li,
div : div,
span : span,
h3 : h3,
a: a,
};
const sorter = Object.entries(obj)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

console.log(sorter);




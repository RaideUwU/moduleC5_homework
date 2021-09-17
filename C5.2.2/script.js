let jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

let jsonObject = JSON.parse(jsonString);
jsonObject["list"].forEach(function(element){
  for(let key of Object.keys(element)){
    if(Number(element[key])){
      element[key] = Number(element[key]);
    }
  }
});

console.log(jsonObject);
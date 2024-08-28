const txt ='{"sarthak": "softdeveloper","Nikita": "webDeveloper","Abhishek": "Admistrator"}'
console.log(txt);
const obj = JSON.parse(txt);
console.log(obj);
console.log(JSON.stringify(txt));
document.getElementById('demo').innerHTML = `${JSON.stringify(txt.sarthak)}`;
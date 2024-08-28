let mail = 'kacharesarthak1011@gmail.com';
let mail2 ='salunkhenikita330@gmail.com';
//lower letters

let pattern = /[a-z0-9]{18}\W[a-z]{5}.{1}[a-z]{3}/g;

let result = mail.match(pattern);
console.log(result);
let result1 = mail2.match(pattern);
console.log(result1);


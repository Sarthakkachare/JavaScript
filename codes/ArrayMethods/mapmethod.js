let data = [
    {
        name:'sarthak',id:1,course:'js'
    },
    {
        name:'nikita',id:2,course:'cpp'
    },
    {
        name:'sonya',id:3,course:'java'
    }
];

const details = data.map((d) => {
        console.log(`${d.name}-${d.course}`);
    return d;
});
console.log(details);
console.log(details[0]);
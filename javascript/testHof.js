import users from './users.js';


const checker = (item )=>{
    return item.id === 1;
};

//using find function
let newUsers = users.find(checker);

console.table(newUsers);



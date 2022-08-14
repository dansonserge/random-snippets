import users from './users.js';


const checker = (item )=>{
    return item.id > 1;
};

//using find function
let usersFind = users.find(checker);

//using filter function

let usersFilter = users.filter(checker);


console.table(usersFilter);



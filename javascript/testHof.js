import users from './users.js';


const checker = (item )=>{
    return item.id > 1;
};

//using find function
let usersFind = users.find(checker);

//using filter function

let usersFilter = users.filter(checker);

const userIds = users.map(user => user.id)

/* 
        Map method
        The map method returns a new array filled with items that 
        satisfies the condition of the callback function. 
        It also ends up changing the original array.
*/


console.table(userIds);



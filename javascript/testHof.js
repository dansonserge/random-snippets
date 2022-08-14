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


/* 

The include method is used to check whether a given item is present in an array, 
it returns a boolean value, either true or false.
 */

const userIsPresent = users.map(i=> i.id).includes(1)


// Reduce

/* 

The reduce method takes in a reducer function to return a singular value,

Anatomy of the reduce method looks like below;
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

*/


const reducerFunction = (total, currentValue)=>{

    return total+currentValue.lifeTimePurchase;

}

const totalLifeTimePurchase = users.reduce(reducerFunction, 0);


console.log(totalLifeTimePurchase);





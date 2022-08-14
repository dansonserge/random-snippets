
//=======================
//LET and CONST

/* 
   LET indicates the variable can still be re-assigned to another value, 
   whille with CONST, we're saying that's the final value
*/

let favNumber = 7;
const LargestSea ='The Philippine Sea'

/* 
    favNumber can still be re-assigned without any issue, 
    but if you try to re-assign LargestSea, you will get a parser error, Assignment to constant variable.
*/

const Tenary = ()=>{
 return (<div className={success?'success-item' :'item'}>
    Items List
</div>)}

//=============================
//Template literals

const ageOutput = `You are ${age} years old `

//instead of the old way
const ageOutputOld = 'You are ' + age + ' years old'

//=================

//Shorthand Properties

const userName = "Danson"

// instead of doing this
let user = {userName: userName};
//let's do this to use the shorthand property
let userGood = {userName}  


//=====================
//Rest/Spread

const restSpread =()=>{
    const user2  = {
        name:'Tony',
        age:12
      }
      
      const otherPropertie = {
      hobby:'hiking',
      bestColor:'red'
    }

    // use spread operator to join the two objects
    let joined = {...user2, ...otherPropertie}
    //this can also be used in arrays
    
}

//========
//distructuring
/* Destructuring is a way of accessing the values inside an object or array in a more cleaner and readable way. */

const distructuring1 =  ()=> {
    const person ={
        favNumber:'green',
        name:'Mike',
        cars:['mercedes', 'toyota']
      }
    
      /* before es6, if we want to get the individual properties in the person object,
       we'll first need to assign each of the properties to a varaiable; */
    
    
    const favNumber1 = person.favNumber;
    const name = person.name
    const cars = person.cars
    
    // with object destructuring, we could do something like below;
    
    function distructuring(){
        const { favNumber, name, cars } = person
    console.log(favNumber, name, cars)
    }
}

//============

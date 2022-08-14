
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





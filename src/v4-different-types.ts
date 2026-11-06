//Top types
let x:any="hello world"

x=123;

//Core Types
let something:unknown
const number:number=123

something=number
//nullish type
interface User{
    name:string;
}

type loggedInUser=User |null


const currentUser:loggedInUser=null;

//Unit Types


//sub type of unit types

//Bottom types
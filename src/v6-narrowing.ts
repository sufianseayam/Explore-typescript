//type of

let x=123
console.log(typeof x)

//type guard

const print=(value:string|number)=>{
    if(typeof value==="string"){
        return value.toUpperCase();

    }
  
    else{
        return value
    }
}

//truthiness

type User={
    name:string
    address:{
        street:string
    };

} | null;

const loggedInUser:User={
    name:"sufian",
    address:{
       street:"abcd",
    }
}

const showAddress=(user:User)=>{
console.log(user?.address.street);
}



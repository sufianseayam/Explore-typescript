//type alias vs interface

//interface generally connected to objects
//type alias is more connected to literals,unions,tuples,primitive

type Id=number


interface User{
    name: string,
    id:Id,
    role:"admin" |"user",

}

const user:User={
    name:"rahim",
    id:3453,
    role:"admin"
}


//interface benefits

interface Animal{
    species:string
}

interface Cat extends Animal{
    breed:string
}

const cat:Cat={
    species:"catus",
    breed:"persian"
}


//using type alias by intersection

type Vehicle={
    brand:string,
}
type Car= Vehicle &{
    model:string
}

const car:Car={

model:" corolla",
brand:"Toyota"
}

//multiple interface with same name get merged 

//multiple type with same name is an error
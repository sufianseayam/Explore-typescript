// literal type
type Status="pending"

const status:Status="pending"
console.log(status);

//basic union

type Identity=string | number

const id:Identity=487359840923
console.log(id);

//literal type

type Role= "user" | "admin"

const userRole:Role="admin"
console.log(userRole);


//Object Union
type Admin={id:number,role:"admin",privileges:string[]}

 type Member={id:number,role:"member",plans:string[]}

 type User=Admin|Member

 const user:User={id:123,role:"member", plans:['and','ehw'] }

//some caveat of type guards

const printAll=(x:string |string[]|null)=>{
    if(x && typeof x==="object"){
        for(let str of x){
            console.log(str);
        }
    }
    else if(typeof x==="string"){
        console.log(x);
    }
    else{
        console.log("");
    }
}

//equality

const compare=(x:string|number ,y:number|boolean)=>{
    if(x===y){
        console.log(x,y)
    }

}
const printAll2=(x:string |string[]|null)=>{
if( x!==null){
    if(typeof x==="object"){
for(let str of x){
    console.log(x);
}
    }
    console.log(x);
 return;
}
console.log("");

}

//in operator

type Bird={fly:()=>void};
type Fish={swim:()=>void};

const move=(animal:Bird|Fish)=>{
if("fly" in animal){
    animal.fly();
    return
}
animal.swim();
}

//discriminated union

interface Circle{
    kind:"circle",
    radius:number;
}
interface Square{
    kind:"square",
    sideLength:number
}

const getArea=(shape:Circle|Square)=>{
    if(shape.kind==="circle"){
        console.log(shape.radius);
    }
    else{
        console.log(shape.sideLength);
        
    }
}

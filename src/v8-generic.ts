const wrappedInArray=<T>(value:T)=>{
    return [value];

}

const stringArr=wrappedInArray<string>("abc");
const numberArr=wrappedInArray<number>(123)

stringArr.map((item)=>item.toUpperCase());


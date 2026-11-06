//type of
let x = 123;
console.log(typeof x);
//type guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};
const loggedInUser = {
    name: "sufian",
    address: {
        street: "abcd",
    }
};
const showAddress = (user) => {
    console.log(user?.address.street);
};
export {};

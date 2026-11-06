//some caveat of type guards
const printAll = (x) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("");
    }
};
//equality
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const printAll2 = (x) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(x);
            }
        }
        console.log(x);
        return;
    }
    console.log("");
};
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};

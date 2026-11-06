const wrappedInArray = (value) => {
    return [value];
};
const stringArr = wrappedInArray("abc");
const numberArr = wrappedInArray(123);
stringArr.map((item) => item.toUpperCase());
export {};

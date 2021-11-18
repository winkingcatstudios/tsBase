// // can specify return type, but best practice is to let ts use type inference
// function add(n1: number, n2: number): number {
//     return n1 + n2;
// }

function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

printResult(add(5, 12));

// notice capital on Function
// let combineValues: Function;

// function type with specified params and return type
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

// function types and callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});


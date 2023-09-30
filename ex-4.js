// Exercise #4 Grouping Function with Objects

// Start coding here

let add = (a,b) => {return a + b};
let subtract = (a,b) => {return a - b};
let multiple = (a,b) => {return a * b};
let divide = (a,b) => {return a / b};

let calculator = { add : add , subtract : subtract ,
                   multiple : multiple , divide : divide };

let resultAdd = calculator.add(10,20);

let resultDivide = calculator.divide(3000,10);

console.log(resultAdd);
console.log(resultDivide);
            

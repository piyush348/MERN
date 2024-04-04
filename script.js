
// function print(str) {
//     console.log(str);
// }
// const s = 'Hello';
// print(s);


// function sum(a, b) {
//     if (a && b) {
//         console.log(a + b);
//     } else {
//         console.log(a);
//     }
// }
// sum(1);

//function declaration
// function print() {
//     console.log('--')
// }

// //function assignment (named)
// let a = function print() {
//     console.log('--')
// }
// //function assignment(anonymous)
// let b = function () {
//     console.log('--')
// }
// //arrow function assignment
// let c = () => {
//     console.log('--')
// }
// print();
// a();
// b();
// c();

// let a = 2;
// switch (a) {
//     case a: {
//         console.log('one');
//         break;
//     }
//     case b: {
//         console.log('two');
//         break;

//     }
//     case c: {
//         console.log('three');
//         break;

//     }
//     default: {
//         console.log('not 1,2,3');
//     }
// }

const obj = {
    1: 'one',
    'firstName': 'piyush',
    'lastName': 'chaturvedi',
    2: 'two',
    12: 'twelve',
};
const fulName = obj.firstName + ' ' + obj.lastName;
const fulName1 = `${obj.firstName} ${obj.lastName}`;
console.log(obj);
console.log(fulName);
console.log(fulName1);


const h = prompt('Please tell the property to know');
console.log(obj[h]);
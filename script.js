//  let a= new String("Hello");
//  let b = "Hello"
//  if(a===b){
//     console.log("Yes");
//  }
//  else{
//     console.log("No");
//  }



// const person={
//     firstName: "Piyush",
//     lastName: "Chaturvedi",
//     age: 55,

//     fullName: function(){
//         return this.firstName+" "+this.lastName;
//     }
// };
// document.getElementById("demo").innerHTML=person.fullName();




// const cars= ["Saab", "Volvo","BMW"]




// const obj = {
//     "name": "piyush",
//     "lastname": "chatuevedi"
// }
// obj.name = 20;
// console.log(obj);



// let arr = [1, 2, 3, 4];
// arr = [2, 3, 4];
// console.log(arr);

// let arr = [1, 2, 3, 4];
// arr[10] = 20;
// console.log(arr);


// const obj = {
//     "name": "piyush",
//     "lastname": "chatuevedi"
// }

// let arr = [1, 2, 3, 4];
// arr.push(10);
// console.log(typeof (arr));
// console.log(Array.isArray(arr));
// console.log(typeof (obj));
// console.log(Array.isArray(obj));


// const obj = {
//     "name": "piyush",
//     "lastname": "chatuevedi"
// }

// const x = [1, 2, 3];
// function objornot(x) {
//     if (Array.isArray(x)) {
//         console.log("Not Object");
//     } else if (typeof (x) == "object") {
//         console.log("Object")
//     }
//     else {
//         console.log("Not object");
//     }

// }
// objornot(1);



// const arr = ['name', 1, true];
// const obj = {
//     'name': "piyush", age: 21,
//     'na': "piyush", ag: 21,
// };
// for (let i = 0; i < 3; i++) {
//     console.log(obj[i]);
// }

// for (let i of arr) {
//     console.log(i);
// }


// for (let i of obj) {
//     console.log(i);
// }


// for (let i in arr) {
//     console.log(i);
// }


// for (let i in obj) {
//     console.log(i);
// }



//DOM
// console.log(window)
// console.log(innerHeight)
// console.log(innerWidth)

// console.log(window.document)
// console.log(window)
// // console.dir(window)
// // console.log(window)

//SELECTORS
// const res = document.getElementsByTagName('h3');
// const re = document.getElementsByTagName('p');
// console.log(res)
// console.log(re)


// const res = document.getElementById('demo');
// const re = document.getElementById('p');
// console.log(res)
// console.log(re)

// const res = document.getElementById("p").innerHTML = "Hello";
// console.log(res)
// const re = document.getElementById("p1");
// re.innerText = "hello sir kya ho raha hai"
// res.innerHTML = "hello sir kya  hai"
//query selector
// const res = document.querySelectorAll('div>h3');
// console.log(res)




// const ne = document.createElement("h3");
// // console.log(ne);
// ne.innerText = "Dynamic Text";
// // console.log(ne);
// const firstDiv = document.getElementsByTagName("div");
// firstDiv[2].appendChild(ne);
// firstDiv[1].remove(ne);
// // document.body.appendChild(ne);


// const res =
//     document.querySelector('div');
// console.log(res);
// const c = document.querySelector('p:nth-of-type(2)');//second p
// const d = document.querySelector('p');//first p
// res.removeChild(c);
// div.remove();
// // document.getElementsByTagName("div");
// console.log(div);


//To add a new element to the HTML DOM, you
// must create the element (element node) first,
// and then append it to an existing element.
// const pa = document.createElement("p");
// const node = document.createTextNode("This is new.");
// pa.appendChild(node);
// const element = document.getElementById("div1");
// element.appendChild(pa);


// function getInfo() {
//     const d = document.querySelector("div");
//     const el = document.createElement("p");
//     el.innerText = "My name is piyush";
//     d.prepend(el);
//     console.log(d);

//}

// function getInfo(e) {
//     console.log(e);
//     e.target.class = "abc";
//     e.target.setAttribute('style', 'color:red')
// }


// const firstNameChange = (e) => {
//     const val = e.target.value;
//     if (val.length > 3) {
//         console.log('correct');
//     }
// }
// const submitForm = (e) => {
//     const va = e.target.value;
//     console.log(va);
// }

// function submitForm(e) {
//     e.preventDefault();
//     const t = e.target
//     const res = {
//         hobbies: [],
//     };
//     for (let i = 0; i < t.length; i++) {
//         //     console.dir(t[i].value);
//         // }
//         const ty = t[i].type;
//         if (ty != 'submit') {
//             const vl = t[i].value;
//             const nm = t[i].name;
//             // res[nm] = vl;
//             // console.log(nm, ty, vl);
//             // if (ty == 'checkbox') {
//             //     console.log(t[i].checked)
//             // }
//             // if (ty != 'submit') {
//             //     res[nm] = vl;

//             if (ty == 'checkbox' && t[i].checked) {
//                 res.hobbies.push(vl);
//             }
//             if (ty != 'checkbox') {
//                 res[nm] = vl;

//             }
//         }
//     }
//     console.log(res);
// }


//HOF
function sum(a, b, fun) {
    const ans = a + b;
    fun(ans);
}

function print(x) {
    console.log('**** ', x, ' ***');
}

sum(3, 4, print);











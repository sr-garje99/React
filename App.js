
import  ReactDOM  from "react-dom";
import React from "react";

const parent = React.createElement("div",{id:"parent"},
[ React.createElement("div",{id:"children"},[
    React.createElement("h1",{id:"heading1"},"Namaste React"),
    React.createElement("h2",{id:"heading2"},"Namaste React")
]),
]);

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

const Heading = () => (
    <div>
        <h1>Inside component</h1>
    </div>
);
root.render(<Heading/> ); 
// block scope and shdowing
// var a = 10;
// {
//     //var a =30;
//     let a =20;
//     console.log(a);
// }
// function x(){
//     var a = 100;
// }
// console.log(a);
// //closure
// function outest(){
//     for(var i =0;i<5;i++){
//         function outer(x){
//             setTimeout(function(){
//                 console.log(x);
//             },x*1000);
//         }
//         outer(i);
//     }
// }
// //outest();
// //counter
// function counter(){
//     var count =0;
//     function increment(){
//         count++;
//         console.log(count);
//     }
//     return increment
// }
// const out = counter()
// out()
// out()
// counter()
// const stock = [
//     {name:"RIL",open:1200,close:1100},
//     {name:"Wipro",open:200,close:300},
//     {name:"Agro",open:100,close:100},
// ]

// var green = stock.filter((s)=>s.close>s.open)
// var red = stock.filter((s)=>s.open>s.close)
// var list = stock.map((s)=>s.name)
// var change = stock.reduce(function (p,s){
//   p[s.name]=s.open-s.close
//     return p;},{})
// console.log(red,green)
// console.log(list)
// console.log(change)

// //event listner and callback function
// function listen(){
//     var count =0;
//     document.getElementById("clickMe").addEventListener("click",
//     function x(){
//         count++;
//         console.log(count);
//     })
// }
// listen();
// //promise
// const GITHUB_API ="https://api.github.com/users/sr-garje99"
// async function reader(){
// const user = await fetch(GITHUB_API);
// // user.then((r)=>{
// //     console.log(r.body.getReader().read());
// // })
//    setTimeout(function(){console.log(user.body.getReader().read())},8000);
// }
// reader();

     
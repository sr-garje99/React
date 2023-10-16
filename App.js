// block scope and shdowing
var a = 10;
{
    //var a =30;
    let a =20;
    console.log(a);
}
function x(){
    var a = 100;
}
console.log(a);
//closure
function outest(){
    for(var i =0;i<5;i++){
        function outer(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        outer(i);
    }
}
//outest();
//counter
function counter(){
    var count =0;
    function increment(){
        count++;
        console.log(count);
    }
    return increment
}
const out = counter()
out()
out()
counter()

        const parent = React.createElement("div",{id:"parent"},
        [ React.createElement("children",{id:"children"},[
            React.createElement("h1",{id:"heading1"},"Namaste React"),
            React.createElement("h2",{id:"heading2"},"Namaste React")
        ]),
    ]);
        

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
        console.log(parent)
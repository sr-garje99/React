

        const parent = React.createElement("div",{id:"parent"},
        [ React.createElement("children",{id:"children"},[
            React.createElement("h1",{id:"heading1"},"Namaste React"),
            React.createElement("h2",{id:"heading2"},"Namaste React")
        ]),
    ]);
        

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
        console.log(parent)
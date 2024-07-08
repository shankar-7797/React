// const heading = React.createElement("h1", {id:"heading",xyz:"abc"}, "Hello React");
// console.log(heading);
const roots = ReactDOM.createRoot(document.getElementById("root"));
// roots.render(heading);

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]
    )]
)
roots.render(parent);
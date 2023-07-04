{
  /* <div id='parent'>
    <div id="child">
        <h1>i'm h1 tag</h1>
        <h1>i'm h1 tag</h1>

    </div>

<div id="child2">
    <h1> i am h1 tag</h1>
    <h1> i am h1 tag</h1>

</div>
</div> */
}

const element = React.createElement("div", { id: "parent" },[
    React.createElement("div",{id:'child'},[
    React.createElement("h1",{},"i am h1 tag"),
    React.createElement("h1",{},"i am h1 tag")
    ],

    )
],
[React.createElement("div",{id:"child2"},
React.createElement("h1",{},"i am h1 tag"),
React.createElement("h1",{},"i am h1 tag"),

)]



);
const root = ReactDOM.createRoot(document.getElementById("demo"));
root.render(element);

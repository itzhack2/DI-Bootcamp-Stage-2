fetch("http://localhost:3001/all")
.then(res=>res.json())
.then(produts =>{
    console.log(produts);
})
.catch((err)=>{
    console.log(err);
})

const render = (arr) => {
    const html = arr.map(item =>{
        return `<div style="
        display:inline-block;
        margin:20px
        padding:20px
        border: 1px solid #000;
        text-align:center;
        ">
        <h2>${item.name}</2>
        <h3>$(item.price)</3>
        </div>`
    });
    document.getElementById("cont").innerHTML = html.join("");
};
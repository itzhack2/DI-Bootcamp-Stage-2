const express = require ("express")
const {products} = require ("./config/db.js")
const products_router = require('./routes/products.router')

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(process.env.PORT || 3001,()=>{
    console.log(`run on ${process.env.PORT || 3001}`);
});

const products = [
    { id: 1, name: "iPhone", price: 800 },
    { id: 2, name: "iPad", price: 700 },
    { id: 3, name: "iWatch", price: 600 },
  ];

app.get("/start" , (req,res)=> {
    res.send("ok");
});

app.get ('/api/products', (req, res) =>{
    res.json(products);
});

app.get ('/api/products/:id',(req,res)=>{
    // console.log(req.params);
    const {id} = res.params;
    const products = products.find((item) => item.id == id);
    if(!products){
        return res.status(404).json ({message: 'not found'})
    }
    res.json(products)
});

// get data from reques with query ?name=aaa%email==bbb

app.get('/api/search', (req,res)=>{
    console.log(req.query);
    const {name} = req.query;
    const filterproducts = products.filter((item)=>{
        return item.name.toLowerCase().includes(name.toLowerCase());
    });
    if(filterproducts.length===0){
        return res.status(404).json({message: "your search name not found"});
    }
    res.json(filterproducts);
    res.send('ooookkk')
});

// get data from body => req.body
app.post("/api/products",(req,res)=>{
    console.log(req.body);
    const {name ,price}= req.body;
    const newProducts = {...req.body,id: products.length + 1}; 
    // const newProducts={
    //     id: products.length +1,
    //     name: req.body.name,
    //     price: req.body.price,
    // };
    products.push(newProducts)
    res.json(products);
});

//PUT  - UPDATE a products = > id of products in the params 
// the name and price -> on the body 
// app.put()

app.put("/api/products/:id",(req,res)=>{
    const {id} = req.params
    const {name, price}= req.body;

    const index = products.findIndex((item)=> item.id == id);
    products[index] = {...products[index] , name, price};
    
    res.json(products);
    });

// Delete a products - id in params

app.delete("/api/products/", (req,res)=>{
    const {id} = req.params
    const index = products.slice((item)=> item.id == id);
    products.splice(index,1);
    res.json(products)
    });

const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})

app.get('/api/greetings', (req, res) => {
    res.json([
        { name: 'iPhone', price: 800 },
        { name: 'iPad', price: 650 },
        { name: 'iWatch', price: 750 }
    ])
});
// app.get('/thing',(req,res)=>{
//     res.send(<h>hello</h>)
// })
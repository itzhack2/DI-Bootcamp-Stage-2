const knex = require ('knex');

const db = knex({
    client : 'pg',
    connection:{
        host:"localhost",
        port:5432,
        database:'postgres',
        user:"postgres",
        password:"123456",
    }
});
// console.log(db);
// db.select('id', 'name', 'price').from('products')
// .then(rows => {
//     console.log(rows);
// })
// .catch((err)=> {
//     console.log(err);
// });

// const getdata = async()=>{
//     const rows = await db.select('id', 'name', 'price').from('products');
//     console.log(rows);
// };
// getdata()

// db('products')
// .insert([
//     {name: 'samsung s28', price: 6000, description:"best mobile in the world"},
//     {name: 'samsung s27', price: 8000, description:"best mobile"},
// ],['*']
// )
// .then(result =>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// });

// db('products')
// .update({name: 'samsung s30s', price: 5700 , description: "bla lva "},['*'])
// .where({id:2})
// .then(result =>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// });
// db('products')
// .del()
// .where({id:2})
// .then(result =>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// });
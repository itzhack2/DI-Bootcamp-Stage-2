// const {getUsers} = require("./users");
import{getUsers}from "./users"
async function emails(){
    try{
        const users= await getUsers();
        users.foreach((element)=>{
            console.log();
        })
    }
};
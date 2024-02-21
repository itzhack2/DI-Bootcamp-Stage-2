import { db} from "../config/db.js";

export const oneSearchParhams = (id) => {
return db ("products")
.select("id", "name", "price")
// .where("name",name)
.whereILike ("name", "%" + id + "%")
}

export const getAllproducts = () => {
    return db ('products')
    .select("id", "name", "price")
    .orderBy("name");

};
export const search4product = (name) => {
    return db ("products")
    .select("id", "name", "price")
    // .where("name",name)
    .whereILike ("name", "%" + name+ "%")
};



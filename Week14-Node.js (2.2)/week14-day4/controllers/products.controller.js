import { getAllproducts , search4product, oneSearchParhams } from "../models/products.model.js";

export const oneSearchParhams = (req, res) => {
    //   console.log(req.params);
    const { id } = req.params;
    const product = products.find((item) => item.id == id);
    if (!product) {
      return res.status(404).json({ message: "not found" });
    }
    res.json(product);
  };


export const _getAllproducts2 = async (req,res) => {

    try {
        const data = await getAllproducts();
        res.json(data);

    }catch(error){
        console.log(error);
        res.status(404).json({msg:"not found"})
    }

};

export const _search4product = async (req,res) => {

    const {name} = req.query;

    try {
        const data = await search4product(name);
        res.json(data);

    }catch(error){
        console.log(error);
        res.status(404).json({msg:"not found"})
    }

};
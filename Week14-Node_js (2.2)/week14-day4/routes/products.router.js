import express from "express";
import {
_getAllproducts2, 
_search4product,
oneSearchParhams
} from "../controllers/products.controller.js";

const router = express.Router()

router.get("/all", _getAllproducts2);
router.get('/search', _search4product)
router.get('/one/:id', oneSearchParhams)

export default router

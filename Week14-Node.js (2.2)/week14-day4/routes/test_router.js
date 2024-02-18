import express from "express";
// import router from "./test_router";
const router = express.Router()
router.get('/test',(req,res) => {
    res.send("ok from test test router")
})

export default router;
import { Router } from "express"
import Cloth from "../models/Cloth"

const router = Router()

router.get("/", (req, res) => {
    res.render('index')
})

router.post("/cloth/add", (req, res) => {
    const cloth = Cloth(req.body)
    res.send('saved')
    console.log(cloth)
})

export default router
const express = require("express")
const {PrismaClient} = require("@prisma/client")
const route = express.Router()
const prisma = new PrismaClient()
const app = express()

route.post("/genre",async(req,res)=>{
    const {name} = req.body

    
    const genre = await prisma.genre.create({
        data:{name}
    })
    res.json(genre)
})

app.listen(3000,()=>{
    console.log("Server started")
})
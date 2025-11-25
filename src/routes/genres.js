const express = require("express")
const {PrismaClient} = "@prisma/client"
const router = express.router()
const prisma = new PrismaClient()

app.post("/",async(req,res)=>{
    const {name} = req.body

    
    const genre = await prisma.genre.create({
        data:{name}
    })
    res.json(genre)
})
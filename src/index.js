require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("OK")
})

app.post("/api/v1/genres", async (req, res) => {
  const body = req.body;
  let genre = await prisma.genre.create({
    data: {
      name: body.name
    }
  })
  res.status(201).json(genre);
})

app.get("/genres",async(req,res)=>{
  const genres = await prisma.genre.findMany();
  res.status(200).json(genres)

})

app.get("/genres/:id",async(req,res)=>{
  const id = req.params.id
  const genre = await prisma.genre.findUnique({
    where :{Genre_id: id}
  })
  if (!genre) return res.status(404).json({error:"NOt Available"})
  res.status(200).json(genre)
})

app.patch("/genres/:id",async(req,res)=>{
  const id = req.params.id
  const {name} = req.body
  const updated = await prisma.genre.update({
    where: { Genre_id: id },
    data: { name },
  });
  res.status(200).json(updated)
})


app.delete("/genres/:id", async (req, res) => {
  const id = req.params.id;
  await prisma.genre.delete({
    where: { Genre_id: id },
  });

  res.status(200).json({ message: "deleted" });
})







app.get("/author",async(req,res)=>{
  const author = await prisma.author.findMany();
  res.status(200).json(author)
})
app.post("/api/v1/authors",async (req,res)=>{
  const {name,DOB} = req.body;
  let authors = await prisma.author.create({
    data:{
      name,DOB
    }
  }) 
  res.status(201).json(authors)
})


app.listen(3003, () => {
  console.log("Server started on port 3003")
})
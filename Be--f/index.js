import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const blogSchema = new mongoose.Schema({
    title: String,
    des:String,
    icon:String,
    price:Number,
  });
  const BlogModel = mongoose.model("mongoose", blogSchema);
app.get('/mongoose', async (req, res) => {
  const mong= await BlogModel.find()
  res.send(mong)
})

app.get('/mongoose/:id', async (req, res) => {
    const {id}= req.params
    const mong= await BlogModel.findById(id)
    res.send(mong)
  })
  app.delete('/mongoose/:id', async (req, res) => {
    const {id}= req.params
    const mong= await BlogModel.findByIdAndDelete(id)
    res.send(mong)
  })

  app.put('/mongoose/:id', async (req, res) => {
    const {id}= req.params
    const body= req.body
    const mong= await BlogModel.findByIdAndUpdate(id,body)
    res.send(mong)
  })

  app.post('/mongoose', async (req, res) => {
    
    const body= req.body
    const mong=  new BlogModel(body)
     await mong.save()
    res.send(mong)
  })
mongoose.connect('mongodb+srv://NiyazovAsad:Niyazovesed2004@ourdb.n1ga79r.mongodb.net/')
.then(()=>console.log("connected"))
.catch(()=>console.log("connected"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
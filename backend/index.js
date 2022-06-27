const express =require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const connectDB = require("./db/config")
const userRoutes = require("./routes/users.route");
const productRoutes = require("./routes/product.route")

app.use('/users',userRoutes);
app.use("/products",productRoutes)


app.listen(8080, ()=>{
    try{
        connectDB()
        console.log("connected to DB")
        console.log("listening on port 8080!")
    }catch(err){
        console.log("something went wrong",err)
    }
})
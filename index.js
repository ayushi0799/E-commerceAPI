const express = require('express')
const mongoose=require("mongoose");
const app = express()
const port = 8080
const db=mongoose.connection;
const router=require("./Routes/routes")
const cartRouter=require("./Routes/cartRoute")
const productrouter=require("./Routes/productRoutes")
const categoriesRoute=require("./Routes/categoriesRoute")
const ordersRoute=require("./Routes/ordersRoute")
const rolesRoute=require("./Routes/rolesRoute")
const tagsRoute=require("./Routes/tagsRoute")
const loginRoute=require("./Routes/loginRoute")
const authRoute = require("./Routes/signinRoute");
const logoutRoute=require("./Routes/logoutRoute")


app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.use("/users",router)
app.use("/products",productrouter)
app.use("/cart",cartRouter)
app.use("/categories",categoriesRoute)
app.use("/orders",ordersRoute)
app.use("/roles",rolesRoute)
app.use("/tags",tagsRoute)
app.use("/login",loginRoute)
app.use("/signin",authRoute);
app.use("/logout",logoutRoute)




app.listen(port,  () => {
    try{
    mongoose.connect("mongodb://127.0.0.1:27017/node-express")
   
    db.once("open",()=>console.log("Mongoose connected"))
   
    }catch(error){
        console.log("Something went wrong")
    }
    console.log(`Example app listening on ${port} port!`)
})
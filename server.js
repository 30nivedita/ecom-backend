const express = require("express");
const {config}=require("dotenv");
const cors = require("cors");
const connectDB=require("./config/db");    
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cookieParser = require("cookie-parser");
const cartItemRoutes= require("./routes/cartItemRoutes");
config();

const app=express();
app.use(express.json());
app.use(cors());

app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).json({
        message:"Server is running",
    });
});

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

app.use("/api/cart", cartItemRoutes);

const PORT= process.env.PORT||5000;

connectDB();
app.listen(PORT,() =>{
    console.log(`Server is running in ${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

app.post("/Signup", (req, res)=>{
    const {Username, Email, Password, DateofBirth} = req.body;

    if(!Username){
        return res.status(400).json({errorMessage : "Username cannot be empty"});
    }
    if(!Email){
        return res.status(400).json({errorMessage : "Email cannot be empty"});
    }
    if (Password.length<8 || Password.length>16){
        return res.status(400).json({errorMessage : "Password length should be greater than 8 or less than or equal to 16"});
    }

    res.json({
        successMessage : "SignUp Successfull !"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
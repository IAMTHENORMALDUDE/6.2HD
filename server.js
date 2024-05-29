// Import Express:
const express = require("express");
const app = express();
// PORT:
const PORT = 3000;
// Middleware:
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));
let users =[]
app.get('/api/users',(req,res) =>{
    res.json(users);
})

app.post('/api/users',(req,res) =>{

    const {firstName , lastName, email,password} = req.body;

    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    users.push(userData);
    
    res.sendStatus(200);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);

});

app.listen(PORT, ()=>(console.log("Server has started on port:", PORT)));

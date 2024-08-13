const express = require('express')
const port = 3005
const cors = require('cors');
const db = require('./db');
const user = require('./models/user');
const bodyParser = require('body-parser');
const app = express();

const jwt = require('jsonwebtoken');


app.use(cors({
    origin: 'http://localhost:3000'
  }));
app.use(bodyParser.json());


app.post('/register', async (req, res) => {
    try {
      const data = req.body;
      const newUser = new user(data);
      const response = await newUser.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error' });
    }
  });

app.post('/signin', async (req, res) =>{
  const {username,password} = req.body; // variable destruct  
  try{
    const data = await user.findOne({username});
    if(data.password == password){
      console.log("user matched");
      res.status(200).json({msg: "user matched"})
    }
    else{
      console.log("user not matches");
      res.status(200).json({msg: "user not matched"})
    }
  }catch (err){
  console.log (err);
  res.status (500).json({error: 'Internal Server Error'});
  }
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routers/authRouter');
const landRouter = require('./routers/landRouter');
const transferlandRouter = require('./routers/transferlandRouter');
const landcase = require('./routers/landcaseRouter');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const configureSocket = require('./controllers/chat');
app.use(bodyParser.json());
dotenv.config();

const corsOptions ={
  origin:['http://localhost:5173'], 
  credentials:true,         
  optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello User!');
});

app.use('/auth', authRouter);
app.use('/land', landRouter);
app.use('/transferland', transferlandRouter);
app.use('/case', landcase);

const port = 3000;

configureSocket(app);
  
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


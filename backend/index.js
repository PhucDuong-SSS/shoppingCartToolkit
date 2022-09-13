const express =require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("welcome to my api service");
})

app.get('/products', (req, res) => {
    res.send([2,3,4])
})

const port = process.env.POST || 5000;

app.listen(port, console.log(`Server is running at port: ${port}`));

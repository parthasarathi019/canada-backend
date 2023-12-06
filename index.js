const express = require('express')
const app = express()

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
var cors = require('cors')
app.use(cors())
require('dotenv').config();

var jwt = require('jsonwebtoken')

app.use(express.json())
const port = process.env.PORT || 7000

//mongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongmongomongomongomongomongo

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.by31wed.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
//𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.

const verifyJWT = (req, res, next) => {
    console.log('hitting verifyJWT');
    console.log(req.headers.authorization);
    const authorization = req.headers.authorization
    if (!authorization) {
        return res.status(401).send({ error: true, message: 'Unauthorized Access' })
    }
    const token = authorization.split(' ')[1];

    // verify a token symmetric
    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(403).send({ error: true, message: 'Token Expaired ,, Unauthorized Access' })
        }
        req.decoded = decoded
        next()
    })
}

//𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.
async function run() {
    try {

        const User_Data = client.db("User_Info_Management_Client_USA").collection("User_Data"); //database collection 5

        //𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣
        app.post('/jwt', async (req, res) => {  //<<<<==== get access token 𝓙𝓦𝓣 <<<<<<<<<<<
            const user = req.body;
            console.log(user);
            var token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, { expiresIn: '12h' });
            res.send({ token })
        })
        //𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣


        //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        app.get('/User_Data', async (req, res) => {   //<<<==== get data from database<<<<<<<<<<
            // https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/
            const cursor = User_Data.find();
            const result = await cursor.toArray()                                               //𝐆𝐄𝐓
            res.send(result)
        })


        app.get('/result/:id', async (req, res) => {
            const { id } = req.params;

            try {
                const user = await User_Data.findOne({ id });
                if (user) {
                    res.json(user);
                } else {
                    res.status(404).json({ error: 'User not found' });
                }
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });

        //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    }
}
run().catch(console.dir);

//mongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongmongomongomongomongomongo

app.get('/', (req, res) => {
    res.send('summer camp is running')
})


app.listen(port, () => {
    console.log(`summer camp is running on port ${port}`)
})


























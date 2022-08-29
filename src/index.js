import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
    let newUser = req.body; 
    users.push(newUser);
    res.send("OK");
});

server.post("/tweets", (req, res) => {
    let newTweet = req.body;
    tweets.push(newTweet);
    res.send("OK");
});

server.get("/tweets", (req, res) => {
    let visibleTweets = tweets.filter((value, index) => index >= tweets.length -10);
    res.send(visibleTweets);
})

server.listen(5000, () => console.log("Listening on port 5000..."))
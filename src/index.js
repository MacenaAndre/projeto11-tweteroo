import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
    const newUser = req.body; 
    users.push(newUser);
    res.send("OK");
});

server.post("/tweets", (req, res) => {
    const newTweet = req.body;
    tweets.push(newTweet);
    res.send("OK");
});

server.get("/tweets", (req, res) => {
    const visibleTweets = tweets.filter((value, index) => index >= tweets.length -10);
    for(let i = 0; i < visibleTweets.length; i++) {
         visibleTweets[i] = {
            ...visibleTweets[i],
            avatar: users.find((value) => value.username === visibleTweets[i].username).avatar
         };
    }

    res.send(visibleTweets);
});

server.listen(5000, () => console.log("Listening on port 5000..."));
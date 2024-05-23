require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

const githubData = {
  "id": "38587571019",
  "type": "WatchEvent",
  "actor": {
    "id": 85225156,
    "login": "Vikash-8090-Yadav",
    "display_login": "Vikash-8090-Yadav",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Vikash-8090-Yadav",
    "avatar_url": "https://avatars.githubusercontent.com/u/85225156?"
  },
  "repo": {
    "id": 802029431,
    "name": "Web3-Plurality/demo-application",
    "url": "https://api.github.com/repos/Web3-Plurality/demo-application"
  },
  "payload": {
    "action": "started"
  },
  "public": true,
  "created_at": "2024-05-22T00:11:54Z",
  "org": {
    "id": 115800958,
    "login": "Web3-Plurality",
    "gravatar_id": "",
    "url": "https://api.github.com/orgs/Web3-Plurality",
    "avatar_url": "https://avatars.githubusercontent.com/u/115800958?"
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('sheelganvir')
})

app.get('/login', (req,res) => {
    res.send('<h1>Please login at Chai aur Code</h1>')
})

app.get('/github', (req,res) => {
    res.send(githubData)
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
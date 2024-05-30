![Screenshot_20240519_134018](https://github.com/sheelganvir/Web-Dev-Projects/assets/128175450/fdc7908d-4ac3-4e55-9ad8-9b595c36a72f)

## Lec2:
   1) Create empty node application using command
       ######
          npm init
   2) Create index.js
   3) Go to package.json and make a script command update test inside scripts as
      ######
           "start": "node index.js"
   4) Now start the server using command
      ######
          npm run start
   5) Install express using command
      ######
          npm install express
   6) Copy and paste this below command on index.js file
      ######
          const express = require('express')
          const app = express()
          const port = 3000
          
          app.get('/', (req, res) => {
            res.send('Hello World!')
          })
          
          app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
   7) Now start the server using command
      ######
          npm run start
   8) Go to browser and open port 3000 using url
      ######
          http://localhost:3000
   9) Now if update the index.js file, browser will not respond to new changes because of hot reloading.
      Now we start reprocessing by stop and start the server again.
      ###### Command to stop server
          Ctrl + C
   10) This process of restarting becomes annoying with every changes in index.js file. To overcome it
       we install some packages which will see in further lecs

   11) It's time for production but see port 3000 is free on our system but it may not free on others system.
       Therefore before deploying we need to install dotenv package using command
       ######
           npm i dotenv
   12) Create .env file and write "PORT=3000" inside .env file to setup environment variables
   13) Copy and paste the below command in the top of index.js file
       ######
           require('dotenv').config()
   14) Now go to index.js file and change port variable inside app.listen as
       ######
            app.listen(process.env.PORT, () => {
              console.log(`Example app listening on port ${port}`)
            })
   15) Now application is ready for production.
   16) Now make a github repository for this application.
   17) Before pushing the application in github create a .gitignore file. Add this in .gitignore file
       ######
             node_modules
             .env
   18) Suppose we have a data in our database (use data given below). Now if we want to make a url where all this data is passed.
       For this first copy and paste the below data in index.js file
       ######
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
   19) Now we will send the response in the form of json response using 'res.json'. For this paste the below command in index.js file.
        ######
              app.get('/github', (req,res) => {
                  res.send(githubData)
              })
  20) Again run the start command and go to /github page, see it is showing data now.
</br>
*****************************************************************************************************************************************

## Lec 3: How to connect frontend and backend in javascript | Fullstack Proxy and CORS
   ### Backend
   1) Create backend and frontend folders in the root.
   2) Now follow the steps from Lec2 upto step-5 inside backend folder. 
   3) Now let's try the modern syntax to bring express paste the below command in index.js
      ######
            import express from 'express'
   4) Create app using express
      ######
            const app = express();
   5) Now serve use the below code in index.js
      ######
            app.get('/',(req, res) => {
               res.send('Server is ready');
            });
   6) Assign port. If we have environment variable(.env file) then we can use the below code in index.js
      ######
            const port = process.env.PORT
      Suppose there may or may not be .env file then we can take it using hard coded port. Use the below code
      ######
            const port = process.env.PORT || 3000;
   7) Copy paste the below code in index.js
      ######
            app.listen(port, () => {
                console.log(`Serve at http://localhost:${port}`)
            })
   8) Since we are using the new syntax of import express. We need to tell the type module.
      Copy paste the below code in package.json file below the line "main": "index.js",
      ######
            "type": "module",
      It tells that all the js files should be arranged as module not as common js
   9) Run the application using npm run start.
   10) Now make a route where all the values will be served. Suppose we serve 5 jokes.
       Copy paste the below code
       ######
             app.get('/jokes', (req, res) => {
                const jokes = [
                    {
                        id: 1,
                        title: 'A joke',
                        content: 'This is a joke'
                    },
                    {
                        id: 2,
                        title: 'Another joke',
                        content: 'This is another joke'
                    }
                ]
                res.send(jokes);
            })
   12) You can run the application again. Backend is done.
### Frontend 
   13) Open the frontend terminal. We have to create react app with vite. Run the below code in terminal
       ######
             npm create vite@latest .
   14) Here . is used so that all the files will generate inside the same folder.
   15) Open the terminal inside frontend folder. And install npm packages using 'npm i'
   16) Run the react app using
       ######
             npm run dev
   17) Go to app.jsx inside src folder. Delete lines 11-30. Give paste this inside the tags
       ######
             <h1>Chai aur Full Stack</h1>
   18) Delete line no. 7 of app.jsx file.
   19) Create a empty array of jokes stored in a const, copy paste the below code
       ######
            const [jokes, setJokes] = useState([])
   20) Now paste the below code in line no. 12
       ######
             <p>JOKES: {jokes.length}</p>
       ###### Paste the below code after the above code
             {
              jokes.map((joke, index) => (
                <div key={joke.id}>
                  <h3>{joke.title}</h3>
                  <p>{joke.content}</p>
                </div>
              ))
            }
   22) Now for doing web request we install axios package. Axios js is a promise-based HTTP library that lets you consume an API service. It offers different ways of making HTTP requests such as GET, POST, PUT, and DELETE. Axios can be used in any JavaScript framework, and once installed, it enables your application to interact with an API service. Stop the running application through 'Ctrl+C' and run the below command in terminal
       ######
             npm i axios
   23) Now import axios. Paste it in line no.5 of app.jsx file
       ######
             import axios from 'axios'
   24) Paste the usestate function above return
       ######
             useEffect(() => {
                axios.get('http://localhost:3000/api/jokes')
                .then((response) => {
                  setJokes(response.data)
                })
                .catch((error) => {
                  console.log(error)
                })
              })
   25) Backend running on port = 3000
       Frontend running on port = 5173
   26) Go to the index.js file of backend folder and update '/api' in app.get jokes
       ######
             app.get('/api/jokes', (req, res) => {
   27) Now run backend and frontend in two different terminals.
   28) Now lets perform whitelisting, inside app.jsx of frontend inside useEffect remove http://localhost:3000. So it will become only
       ######
             useEffect(() => {
             axios.get('/api/jokes')
             .then((response) => {
               setJokes(response.data)
             })
             .catch((error) => {
               console.log(error)
             })
           })
   29) Now it will show error and there comes concept of proxy.
   30) Whenever we request on /api then we want that http://localhost:3000 automatically append before it this is called proxy. For this, go to vite.config.js inside frontend folder. So, vite.config.js  file will become
       ######
            import { defineConfig } from 'vite'
            import react from '@vitejs/plugin-react'
            
            // https://vitejs.dev/config/
            export default defineConfig({
              server: {
                proxy: {
                  '/api': 'http://localhost:3000',
                },
              },
              plugins: [react()],
            })
   31) It means that if the backend and frontend have two different origins (backend on port=3000 and frontend on port=5173)
       Server will treat as both the backend and frontend have same origin i.e., both is running on port = 3000.
   32) Now see backend and frontend is now connected.
</br>
*************************************************************************************************************************
## Lec 4: Data modelling for backend with mongoose

   1) We will learn about data modelling with the help of mongoose.
   2) First go to eraser.io to create diagram and create a file, first create a registration form and then login form then To dos.
   3) Login form validate the data.
   4) ![image](https://github.com/sheelganvir/Web-Dev-Projects/assets/128175450/fce6b38d-32a9-494f-87de-e9b77214af81)
   5) Go to https://stackblitz.com/ or https://github.com/codespaces/templates . They creates an environment without any installation of packages.
   6) Create a new project of express.
   7) Now open a new terminal and install mongoose
      ######
            npm i mongoose
   8) Now create a folder called models in it.
   9) Inside models create a folder named as todos.
   10) Inside it create a file named as "user.models.js"
   11) Create another file inside todos named as "todo.models.js"
   12) Create another file named as "sub_todo.models.js". Inside this file import mongoose using
       ######
             import mongoose from "mongoose"
   13) Create a schema and store it inside a const
       ######
             

   



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
   12) Create .env file and write "PORT=3000" inside .env file
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
   18) 

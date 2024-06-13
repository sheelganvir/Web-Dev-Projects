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
   12) Create another file named as "sub_todo.models.js". Inside user.models.js file import mongoose. Create a schema and store it inside a const. Now export const User 
       ######
             import mongoose from "mongoose"

             const userSchema = new mongoose.Schema({})
            
             export const User = mongoose.model('User', userSchema);
       Here, if "User" store in mongoDB databse it will store in lowercase+s here 's' is suffix for plural.
   13) Now define schema by creating fields inside schema in the form of objects i.e., update schema of line 2 by the below code
       ######
             const userSchema = new mongoose.Schema(
                {
                    username: {
                        type: String,
                        required: true,
                        unique: true,
                        lowercase: true
                    },
                    email: {
                        type: String,
                        required: true,
                        unique: true,
                        lowercase: true
                    },
                    password: {
                        type: String,
                        required: [true, "Password is required"]
                    }
                }
             )
   14) We can give the timestamps which defines when the above schema is created and updated. We add it as the last object inside schema.
       ######
             const userSchema = new mongoose.Schema(
                {
                    username: {
                        type: String,
                        required: true,
                        unique: true,
                        lowercase: true
                    },
                    email: {
                        type: String,
                        required: true,
                        unique: true,
                        lowercase: true
                    },
                    password: {
                        type: String,
                        required: [true, "Password is required"]
                    }
                }, {timestamps: true}
            )
   15) We have done user schema (i.e., for register and login form)
   16) Now Create schema for todos. Go to todo.models.js file.
   17) Inside this file make todo schema and add timestamps
       ######
             import mongoose from "mongoose"

            const todoSchema = new mongoose.Schema(
                {
                    
                }, {timestamps: true}
            )
            
            export const Todo = mongoose.model('Todo', todoSchema);
   18) Now go inside sub_todo.models.js file and create schema for it
       ######
             import mongoose from "mongoose"

            const subTodoSchema = new mongoose.Schema({}, {timestamps: true})
            
            export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
   19) Now inside todo.models.js create schema fields.
       ######
             const todoSchema = new mongoose.Schema(
                {
                    content:{
                        type: String,
                        required: true
                    },
                    complete: {
                        type: Boolean,
                        default: false
                    },
                    createdBy: {
                        
                    }
                }, {timestamps: true}
            )
       Inside created by we have to ake user data for this we have to set a relationship between user.models.js and todo.models.js files. For this take two things into consideration:
       First is the type, second is the reference. Now replace the createdBy object by the below code
       ######
             createdBy: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "User"
             }
       Here, type is specially define for reference. And reference is taken by the model "User" of user.models.js file
   20) Now create another field called "subTodos" below the "createdBy" field. subTodos field is array of objects. for the first object do type, ref as similar to "createdBy" field.
       ######
             subTodos: [
                  {
                      type: mongoose.Schema.Types.ObjectId,
                      ref: "SubTodo" 
                  },
              ], // Array of Sub-Todos
       Here, reference is taken by the model "SubTodo" of sub_todo.models.js file
   21) Do the similar with sub_todo.models.js file. sub_todo.models.js file will become
       ######
             import mongoose from "mongoose"

               const subTodoSchema = new mongoose.Schema({
                   content:{
                       type: String,
                       required: true
                   },
                   complete: {
                       type: Boolean,
                       default: false
                   },
                   createdBy: {
                       type: mongoose.Schema.Types.ObjectId,
                       ref: "User"
                   },
               }, {timestamps: true})
               
               export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
   22) todo.models.js file will become
       ######
             import mongoose from "mongoose"

               const todoSchema = new mongoose.Schema(
                   {
                       content:{
                           type: String,
                           required: true
                       },
                       complete: {
                           type: Boolean,
                           default: false
                       },
                       createdBy: {
                           type: mongoose.Schema.Types.ObjectId,
                           ref: "User"
                       },
                       subTodos: [
                           {
                               type: mongoose.Schema.Types.ObjectId,
                               ref: "SubTodo" 
                           },
                       ], // Array of Sub-Todos
                   }, {timestamps: true}   
               )
               
               export const Todo = mongoose.model('Todo', todoSchema);
   23) user.models.js file will become
       ######
             import mongoose from "mongoose"

            const userSchema = new mongoose.Schema(
                {
                    username: {
                        type: String,
                        required: true,
                        unique: true,
                        lowercase: true
                    },
                    email: {
                        type: String,
                        required: true,
                        unique: true,
                        lowercase: true
                    },
                    password: {
                        type: String,
                        required: [true, "Password is required"]
                    }
                }, {timestamps: true}
            )
            
            export const User = mongoose.model('User', userSchema);
</br>
****************************************************************************************************************************

## Lec 5 : Ecommerce and Hospital management Data modelling

   1) Create a folder name "Eommerce" inside models folder
   2) Create category.models.js, order.models.js, product.models.js, user.models.js files inside "Ecommerce" folder.
   3) Inside user.models.js file paste the we will create Schema as per our input type.
   4) Paste the below code inside user.models.js file
      ######
            import mongoose from "mongoose"

            const userSchema = new mongoose.Schema({
                username: {
                    type: String,
                    required: true,
                    unique: true,
                    lowercase: true
                },
                email: {
                    type: String,
                    required: true,
                    unique: true,
                    lowercase: true
                },
                password: {
                    type: String,
                    required: true,
                },
            }, {timestamps: true});
            
            export const User = mongoose.model("User", userSchema)
   5) Inside category.models.js paste the below code
      ######
            import mongoose from 'mongoose';

            const categorySchema = new mongoose.Schema(
                {
                    name: {
                        type: String,
                        required: true,
                    },
                },
                { timestamps: true }
            );
            
            export const Category = mongoose.model('Category', categorySchema);
   6) Inside order.models.js paste the below code
      ######
            import mongoose from "mongoose";

            const orderItemSchema = new mongoose.Schema({
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },
                quantity: {
                    type: Number,
                    required: true
                }
            })
            
            const orderSchema = new mongoose.Schema(
                {
                    orderPrice: {
                        type: Number,
                        required: true
                    },
                    customer: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "User"
                    },
                    orderItems: {
                        type: [orderItemSchema]
                    },
                    address: {
                        type: String,
                        required: true
                    },
                    status: {
                        type: String,
                        enum: ["PENDING", "CANCELLED", "DELIVERED"], // enum is for choice, you can select any one of these
                        default: "PENDING"
                    }
                },
                {timestamps:true}
            )
            
            export const Order = mongoose.model("Order", orderSchema)
   7) Inside product.models.js paste the below code
      ######
            import mongoose from "mongoose";

            const productSchema = new mongoose.Schema(
                {
                    description: {
                        required: true,
                        type: String
                    },
                    name: {
                        required: true,
                        type: String
                    },
                    productImage: {
                        type: String
                    },
                    price: {
                        type: Number,
                        default: 0
                    },
                    stock: {
                        type: Number,
                        default: 0
                    },
                    category: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Category",
                        required: true
                    },
                    owner: {
                        category: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "User",
                        }
                    }
                },
                {timestamps: true}
            );
            
            export const Product = mongoose.model("Product", productSchema);
   8) Ecommerce project is completed.
   9) Now lets make Hospital project.
   10) Create a Hospital management folder.
   11) Inside this folder create doctor.models.js, medical_record.models.js, patient.models.js, hospital.models.js files.
   12) Inside medical_record.models.js paste this code
       ######
             import mongoose from "mongoose";

            const medicalRecordSchema = new mongoose.Schema({}, {timestamps:true});
            
            export const MedicalRecord = mongoose.model(
                'MedicalRecord',
                medicalRecordSchema
            );
   14) Inside hospital.models.js paste this code
       ######
             import mongoose from "mongoose";

            const hospitalSchema = new mongoose.Schema({
                name: {
                    type: String,
                    required: true
                },
                addressLine1: {
                    type: String,
                    required: true
                },
                addressLine2: {
                    type: String,
                },
                city: {
                    type: String,
                    required: true
                },
                pincode: {
                    type: String,
                    required: true
                },
                specializedIn: [{
                    type: String,
                },],
                
            }, {timestamps:true});
            
            export const Hospital = mongoose.model(
                'Hospital',
                hospitalSchema
            );
   16) Inside doctor.models.js paste this code
       ######
             import mongoose from "mongoose";

            const doctorSchema = new mongoose.Schema({
                name:{
                    type: String,
                    required: true
                },
                salary: {
                    type: String,
                    required: true
                },
                qualification: {
                    type: String,
                    required: true
                },
                experienceInYears: {
                    type: Number,
                    default: 0
                },
                worksInHospitals: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Hospital'
                    },
                ],
            
            }, {timestamps:true});
            
            export const Doctor = mongoose.model(
                'Doctor',
                doctorSchema
            );
   18) Inside patient.models.js paste this code
       ######
             import mongoose from "mongoose";

            const patientSchema = new mongoose.Schema({
                name: {
                    type: String,
                    required: true
                },
                diagonsedWith: {
                    type: String,
                    required: true
                },
                address: {
                    type: String,
                    required: true
                },
                age: {
                    type: Number,
                    required: true
                },
                bloodGroup: {
                    type: String,
                    required: true
                },
                gender: {
                    type: String,
                    enum: ["Male", "Female", "Others"]
                },
                admittedIn: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Hospital'
                },
            }, {timestamps:true});
            
            export const Patient = mongoose.model(
                'Patient',
                patientSchema
            );
       
   19) We have created the hospital management app.
</br>
**************************************************************************************

## Lec 6: How to setup a professional backend project

   1) Create a MyYoutube-Clone repo and folder.
   2) Inside it, create empty node application using command
       ######
          npm init
   3) Create README.md file
   4) Create a public folder. Inside this public folder create a temp folder.
   5) Inside temp folder create a .gitkeep file, this file is used to push the empty folders in the github
   6) Inside MyYoutube-Clone folder create a .gitignore file and paste the below code inside it
      ######
            # Logs
            logs
            *.log
            npm-debug.log*
            yarn-debug.log*
            yarn-error.log*
            lerna-debug.log*
            .pnpm-debug.log*
            
            # Diagnostic reports (https://nodejs.org/api/report.html)
            report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
            
            # Runtime data
            pids
            *.pid
            *.seed
            *.pid.lock
            
            # Directory for instrumented libs generated by jscoverage/JSCover
            lib-cov
            
            # Coverage directory used by tools like istanbul
            coverage
            *.lcov
            
            # nyc test coverage
            .nyc_output
            
            # Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
            .grunt
            
            # Bower dependency directory (https://bower.io/)
            bower_components
            
            # node-waf configuration
            .lock-wscript
            
            # Compiled binary addons (https://nodejs.org/api/addons.html)
            build/Release
            
            # Dependency directories
            node_modules/
            jspm_packages/
            
            # Snowpack dependency directory (https://snowpack.dev/)
            web_modules/
            
            # TypeScript cache
            *.tsbuildinfo
            
            # Optional npm cache directory
            .npm
            
            # Optional eslint cache
            .eslintcache
            
            # Microbundle cache
            .rpt2_cache/
            .rts2_cache_cjs/
            .rts2_cache_es/
            .rts2_cache_umd/
            
            # Optional REPL history
            .node_repl_history
            
            # Output of 'npm pack'
            *.tgz
            
            # Yarn Integrity file
            .yarn-integrity
            
            # dotenv environment variables file
            .env
            .env.test
            .env.production
            
            # parcel-bundler cache (https://parceljs.org/)
            .cache
            .parcel-cache
            
            # Next.js build output
            .next
            out
            
            # Nuxt.js build / generate output
            .nuxt
            dist
            
            # Gatsby files
            .cache/
            # Comment in the public line in if your project uses Gatsby and not Next.js
            # https://nextjs.org/blog/next-9-1#public-directory-support
            # public
            
            # vuepress build output
            .vuepress/dist
            
            # Serverless directories
            .serverless/
            
            # FuseBox cache
            .fusebox/
            
            # DynamoDB Local files
            .dynamodb/
            
            # TernJS port file
            .tern-port
            
            # Stores VSCode versions used for testing VSCode extensions
            .vscode-test
            
            # yarn v2
            .yarn/cache
            .yarn/unplugged
            .yarn/build-state.yml
            .yarn/install-state.gz
            .pnp.*
            
            # End of https://mrkandreev.name/snippets/gitignore-generator/#Node
   7) Create .env file.
   8) Create .env.sample file
   9) Create a src folder
   10) Inside src folder create app.js, constants.js, index.js files
   11) We will use modern import syntax to import js files, for that go to package.json add a line below description
       ######
             "type": "module",

   12) Now install Nodemon which restarts the server each time when the files save (it usually install dev dependencies)
       ######
             npm i -D nodemon
   13) Dev dependencies are the dependencies are used during development are not carried in production.
   14) Nodemon will help us to reload the index.js file inside src. For that go to package.json inside "scripts" remove the test command and add
       ######
             "dev": "nodemon src/index.js"
   15) Inside src folder create the below folders
       - controllers : For functionality
       - db : For database connection
       - middlewares : Codes which are run in between
       - models : to create various models files
       - routes : like index.js
       - utils : utility such as file uploads, mails, tokens, functionality which repeats are stored here
   16) install Prettier for teamwork communication, it is also a dev dependency
       ######
             npm i -D prettier
   17) Inside MYYoutube-clone or in the root, create a .prettierrc file and add below code inside it
       ######
             {
                "singleQuote": false,
                "bracketSpacing": true,
                "tabWidth": 2,
                "trailingComma": "es5",
                "semi": true
            }
   18) Create a .prettierignore file inside root to restrict prettier inside certain files. Add below code inside it
       ######
             /.vscode
             /node_modules
             ./dist

             *.env
             .env
             .env.*
   19) Done for this lec.
</br>

*******************************************************************************

## Lec 7: How to connect database in MERN with debugging

   1) Database used : MongoDB
   2) Go to https://www.mongodb.com/products/platform/atlas-database
   3) After sign in click on 'PROJECTS'-> 'New Project'. Add project name then click on 'next', then 'create project'.
   4) Create cluster: Click on 'Create'-> Free -> aws -> Mumbai ->  Name(any) -> Click on 'Create Deployment'
   5) Now you can edit the username and password generated and click on 'Create Database User'
   6) Go to 'Network Access' -> 'Add IP Address' -> 'Allow Access from Anywhere' -> 'confirm'
   7) Go to 'Database Access' -> If there is already a database user, change its 'MongoDB roles' or 'Built in roles' to 'read and write to any database'
   8) Then go to "Database" -> Connect -> Compass -> Copy the connection string
   9) Open .env file of the project, SET PORT and MONGODB_URI
       ######
            PORT=8000
            MONGODB_URI=
      Now paste the copied connection string here in the second line, it will become
      ######
            PORT=8000
            MONGODB_URI=mongodb+srv://sheel:<password>@cluster0.yyxublz.mongodb.net/
      Update your password in it and remove the ending '/'
   10) Lets change the name of database. Go to constants.js file inside src folder and paste
       ######
             export const DB_NAME = "sheelg"
   11) Required packages: dotenv, mongoose, express
   12) Open terminal and install the above packages by using the below command
       ######
             npm i mongoose express dotenv
       You can check if packages are installed or not by 'package.json' -> Dependencies
   13) Go to index.js file and import mongoose, and connect database with a async wait and always use try and catch and await.
       Also import Database name. Also import express and store in a const. Now add app listener which listen to the error event. Also add app.listen which we had learned in very starting.
       ######
               import mongoose from "mongoose";
               import { DB_NAME } from "./constants";
               
               import express from "express";
               const app = express()
               
               ( async () => {
                   try {
                       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
                       app.on("error", (error) => {
                           console.log("ERRR: ", error);
                           throw error
                       })
               
                       app.listen(process.env.PORT, () => {
                           console.log(`App is listening on port ${process.env.PORT}`);
                       })
                   } catch (error) {
                       console.error("ERROR: ", error);
                       throw err
                   }
               })

       We can write this code directly here or second approach is we can write these all inside db folder export functions in it and import functions here in the index.js file this is the most optimal approach.
   14) Comment all the above code except first 2 lines. 
   15) Go to db folder and create an index.js file Paste below code  inside it.
       ######
            import mongoose from "mongoose";
            import { DB_NAME } from "../constants.js";
            
            const connectDB = async () => {
                try {
                    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
                    console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
                } catch (error) {
                    console.log("MONGODB CONNECTION ERROR ", error);
                    process.exit(1);
                }
            }
            
            export default connectDB
   16) Go to index.js file of the root and import connectDB here, and import the dotenv and config the path, so this index.js file will become
       ######
            import dotenv from "dotenv"
            import connectDB from "./db/index.js";
            
            dotenv.config({
                path: './env'
            })
            
            connectDB()
   17) This type of import of dotenv is experimental setup for this to run go to package.json file
       Under scripts tag update the dev tag to
       ######
             "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
   18) Done for this lec
</br>

************************************************************************************

## Lec 8 : Custom API response and Error Handling

   1) Go to app.js and import express
      ######
            import express from "express";
            const app = express()
            export {app} // it is same as 'export default app'
   2) Go to index.js of src folder. Now understand that if there database is connected then it will return some promises thats why we use '.then', '.catch'.
      If database is connected then to start the server we need app.listen command. So this index.js file will become
      ######
            import dotenv from "dotenv"
            import connectDB from "./db/index.js";
            
            dotenv.config({
                path: './env'
            })
            
            connectDB()
            .then(() => {
                app.listen(process.env.PORT || 8000, () => {
                    console.log(` Server is running at port : ${process.env.PORT}`);
                })
            })
            
            .catch((err) => {
                console.log("MONGODB connection failed !! ", err);
            })
   3) Go to https://www.npmjs.com/ and search two packages 'cookie-parser' and 'cors'
   4) cors : it helps in cross origin resource sharing
   5) Install using command
      ######
            npm i cookie-parser cors
   6) Go to app.js and import cors and cookie-parser. Now config cors using app.use, it tells about the server of frontend from which request will be generated.
      This can be achieved by allowing the origin. Also allow the credentials. 
      Now understand that data can be received in any format (like url, json, form, etc) under certain limit.
      Also we make a static config it is just like a public folder where all types of files can be stored publically. That's why we have created a public folder in the root.
      Cookie-parser is used to access and set the cookies of user's browser
      ###### app.js file
            import express from "express";
            import cors from "cors"
            import cookieParser from "cookie-parser";
            
            const app = express()
            
            app.use(cors({
                origin: process.env.CORS_ORIGIN,
                credentials: true
            }))
            
            app.use(express.json({limit: "16kb"}))
            app.use(express.urlencoded({extended: true, limit: "16kb"}))
            app.use(express.static("public"))
            app.use(cookieParser())
            
            export {app} // it is same as 'export default app'
      ###### .env file
            PORT=8000
            CORS_ORIGIN=*
      Here, mongodb url is not shown but it is there in the file of the system. Here '*' is allowing request from any server
   7) What is middlewares? Middle ware is used as a check(such as check if user is loggedin) between the responses/requests.
      ![image](https://github.com/sheelganvir/Web-Dev-Projects/assets/128175450/e634d15d-9ff7-4da0-b9fc-0f8f6b0b38ae)
   8) Whenever we talk with database, async wait will always arise and we have to use 'try' and catch (or we use .then .catch for promises) each time.
      It means we will use the same function multiple times so we just wrap the function inside utils folder. For that create 'asyncHandler.js' file inside 'utils' folder
      asyncHandler creates a method and will export it.
      ###### asyncHandler.js file
            const asyncHandler = (requestHandler) => {
                (req, res, next) => {
                    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
                }
            }
            
            /* Above function can be written by the below format
            
            const asyncHandler = (fn) => async (req, res, next) => {
                try {
                    await fn(req, res, next)
                } catch (error) {
                    res.status(err.code || 500).json({
                        success: false,
                        message: err.message
                    })
                }
            }
            */
            
            export {asyncHandler}
   9) Now we want to standardize API error and API response. Create a file named "ApiError.js" inside utils folder.
       ###### ApiError.js file
             class ApiError extends Error {
                   constructor(
                       statusCode,
                       message= "Something went wrong",
                       errors = [],
                       stack = ""
                   ){
                       super(message)
                       this.statusCode = statusCode
                       this.data = null
                       this.message = message
                       this.success = false;
                       this.errors = errors
               
                       if (stack) {
                           this.stack = stack
                       } else {
                           Error.captureStackTrace(this, this.constructor)
                       }
                   }
               }
               
               export { ApiError }
   10) Create a "ApiResponse.js" file inside utils folder
       ###### ApiResponse.js file
             class ApiResponse{
                   constructor(statusCode, data, message = "Success"){
                       this.statusCode = statusCode
                       this.data = data
                       this.message = message
                       this.success = statusCode < 400
                   }
               }
   11) Done for this lec
</br>

**********************************************************************************

## Lec 9 : User and video model with hooks and JWT

   1) Create files "user.model.js" and "video.model.js" inside "models" folder inside "src" folder
   2) Code snippet for defining a Mongoose schema for a user
      ###### user.model.js file
            import mongoose, {Schema} from "mongoose";

            const userSchema = new Schema({
                username: {
                    type: String,
                    required: true,
                    unique: true,
                    lowercase: true,
                    trim: true,
                    index: true     // it optimizes searching in database
                },
                email: {
                    type: String,
                    required: true,
                    unique: true,
                    lowercase: true,
                    trim: true,
                },
                fullname: {
                    type: String,
                    required: true,
                    trim: true,
                    index: true
                },
                avatar: {
                    type: String,   //cloudinary url
                    required: true,
                },
                coverImage: {
                    type: String,   //cloudinary url
                }, 
                watchHistory: [
                    {
                        type: Schema.Types.ObjectId,
                        ref: "Video"
                    }
                ],
                password: {
                    type: String,
                    required: [true, 'Password is required']
                },
                refreshToken: {
                    type: String
                }
            },{timestamps:true})
            
            export const User = mongoose.model("User", userSchema)
   
   3) Go to https://www.npmjs.com/ and search "mongoose-aggregate-paginate-v2" this package allow us to write aggregation queries. Install this package using command
      ######
            npm install mongoose-aggregate-paginate-v2
      Now import "mongoose-aggregate-paginate" in video.model.js file
      Code snippet for defining a Mongoose schema for a video model
      ###### video.model.js file
            import mongoose, {Schema} from "mongoose";
            import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
            
            const videoSchema = new Schema(
                {
                    videoFile: {
                        type: String,   //cloudinary url
                        required: true
                    }, 
                    thumbnail: {
                        type: String,   //cloudinary url
                        required: true
                    },
                    title: {
                        type: String,   
                        required: true
                    },
                    description: {
                        type: String,   
                        required: true
                    },
                    duration: {
                        type: Number,   
                        required: true
                    },
                    views: {
                        type: Number,   
                        default: 0
                    },
                    isPublished: {
                        type: Boolean,
                        default: true
                    },
                    owner: {
                        type: Schema.Types.ObjectId,
                        ref: "User"
                    }
            
                },
                {timestamps:true}
            )
            
            videoSchema.plugin(mongooseAggregatePaginate)
            
            export const Video = mongoose.model("Video", videoSchema)
            
   6) Go to https://www.npmjs.com/ and search "jsonwebtoken". Go to https://www.npmjs.com/ and search "bcrypt" (A library to help you hash passwords or it encrypt the password)
      - Install these packages using command
         ######
               $ npm i bcrypt jsonwebtoken
      - Inside "user.model.js" file import "jwt" and "bcrypt"
      - For encryption we need to take help of some hooks of mongoose. Go to https://mongoosejs.com/docs/middleware.html.
      - Click on "Pre" (It make changes just before saving the data i.e., it encrypts the password). We will directly use it as a middleware in user.model.js file
      - Now use methods to check the entered password is correct or not.
      - jwt is a bearer token (It acts like a key, if someone has this key, it will return the data to them)
      - ACCESS tokens will not store in database while the REFRESH token will store in database.
      - Add this below code in .env file
        ######
               ACCESS_TOKEN_SECRET=sheel-ganvir-code
               ACCESS_TOKEN_EXPIRY=1d
               REFRESH_TOKEN_SECRET=sheel-ganvir-backend
               REFRESH_TOKEN_EXPIRY=10d
      - Update user.model.js code
        ###### user.model.js code file
               import mongoose, {Schema} from "mongoose";
               import jwt from "jsonwebtoken";
               import bcrypt from "bcrypt"
               
               const userSchema = new Schema({
                   username: {
                       type: String,
                       required: true,
                       unique: true,
                       lowercase: true,
                       trim: true,
                       index: true     // it optimizes searching in database
                   },
                   email: {
                       type: String,
                       required: true,
                       unique: true,
                       lowercase: true,
                       trim: true,
                   },
                   fullName: {
                       type: String,
                       required: true,
                       trim: true,
                       index: true
                   },
                   avatar: {
                       type: String,   //cloudinary url
                       required: true,
                   },
                   coverImage: {
                       type: String,   //cloudinary url
                   }, 
                   watchHistory: [
                       {
                           type: Schema.Types.ObjectId,
                           ref: "Video"
                       }
                   ],
                   password: {
                       type: String,
                       required: [true, 'Password is required']
                   },
                   refreshToken: {
                       type: String
                   }
               },{timestamps:true})
               
               userSchema.pre("save", async function (next) {
                   if(!this.isModified("password")) return next();
               
                   this.password = bcrypt.hash(this.password, 10)
                   next()
               })
               
               userSchema.methods.isPasswordCorrect = async function(password){
                   return await bcrypt.compare(password, this.password)
               }
               
               userSchema.methods.generateAccessToken = function(){
                   return jwt.sign(
                       {
                           _id: this._id,
                           email: this.email,
                           username: this.username,
                           fullName: this.fullName
                       },
                       process.env.ACCESS_TOKEN_SECRET,
                       {
                           expiresIn: process.env.ACCESS_TOKEN_EXPIRY
                       }
                   )
               }
               
               userSchema.methods.generateRefreshToken = function(){
                   return jwt.sign(
                       {
                           _id: this._id,
                       },
                       process.env.REFRESH_TOKEN_SECRET,
                       {
                           expiresIn: process.env.REFRESH_TOKEN_EXPIRY
                       }
                   )
               }
               
               export const User = mongoose.model("User", userSchema)
   7) Done for this lec
</br>

**********************************************************************************************

## Lec 10 : How to upload file in the backend

   1) Go to https://console.cloudinary.com/pm/c-351f0fa8453aa267bc26a3edd34eb8/getting-started
   2) Install cloudinary using command
      ######
            npm install cloudinary
   3) Go to https://www.npmjs.com/package/multer and intall multer using command
      ######
            npm i multer
      Multer: Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files
   4) Go to utils folder and create a new "cloudinary.js" file inside it
   5) Inside "cloudinary.js" file import v2, import fs from "fs" (fs works like read, write, open the file).
      - Go to https://console.cloudinary.com/pm/c-351f0fa8453aa267bc26a3edd34eb8/getting-started and copy cloudinary config
        ######
              cloudinary.config({ 
                 cloud_name: 'dzzzitz1c', 
                 api_key: '721218623789735', 
                 api_secret: '-ZLhoNBGb1BsZzIqnscD-DroOOA' 
               });
      - Now we get the cloudinary credentials. Now open .env file and paste the below code
        ######
              CLOUDINARY_CLOUD_NAME=dzzzitz1c
              CLOUDINARY_API_KEY=721218623789735
              CLOUDINARY_API_SECRET=-ZLhoNBGb1BsZzIqnscD-DroOOA
      - Inside "cloudinary.js" file paste the below code
        ######
              cloudinary.config({ 
                   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
                   api_key: process.env.CLOUDINARY_API_KEY, 
                   api_secret: process.env.CLOUDINARY_API_SECRET 
               });
        This will give file uploading permission
      - Go to https://console.cloudinary.com/pm/c-351f0fa8453aa267bc26a3edd34eb8/getting-started and copy the code for your preferred SDK
        ######
              cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
                 { public_id: "olympic_flag" }, 
                 function(error, result) {console.log(result); });
      - Add the below code inside "Cloudinary.js" file
        ######
              const uploadOnCloudinary = async (localFilePath) => {
                   try{
                       if(!localFilePath) return null
                       //upload the file on cloudinary
                       const response = await cloudinary.uploader.upload
                       (localFilePath, {
                           resource_type: "auto"
                       })
                       //file has been uploaded successfully 
                       console.log("File is uploaded on Cloudinary: ", response.url);
                       return response;
               
                   } catch(error){
                       fs.unlinkSync(localFilePath)    //remove the local saved temporary file as the upload operation got failed
                       return null;
                   }
               }
   6) Go to "middlewares" folder and create a "multer.middleware.js" file and import multer inside it 
      - Go to https://github.com/expressjs/multer and copy Diskstorage
        ######
              const storage = multer.diskStorage({
                 destination: function (req, file, cb) {
                   cb(null, '/tmp/my-uploads')
                 },
                 filename: function (req, file, cb) {
                   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                   cb(null, file.fieldname + '-' + uniqueSuffix)
                 }
               })
               
               const upload = multer({ storage: storage })
   7) "multer.middleware.js" file will become
      ######
            import multer from "multer";

            const storage = multer.diskStorage({
                destination: function (req, file, cb) {
                  cb(null, '/public/temp')
                },
                filename: function (req, file, cb) {
                  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                  cb(null, file.originalname)
                }
              })
              
            export const upload = multer({ 
                storage,
            })
      This code explains that whenever a file is uploaded in the server it will temporary store in the "temp" folder inside "public" folder with the original file name before uploading it to cloudinary
   8) "cloudinary.js" file will become
      ######
            import { v2 as cloudinary } from "cloudinary";
            import fs from "fs"
            
            cloudinary.config({ 
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
                api_key: process.env.CLOUDINARY_API_KEY, 
                api_secret: process.env.CLOUDINARY_API_SECRET 
            });
            
            const uploadOnCloudinary = async (localFilePath) => {
                try{
                    if(!localFilePath) return null
                    //upload the file on cloudinary
                    const response = await cloudinary.uploader.upload
                    (localFilePath, {
                        resource_type: "auto"
                    })
                    //file has been uploaded successfully 
                    console.log("File is uploaded on Cloudinary: ", response.url);
                    return response;
            
                } catch(error){
                    fs.unlinkSync(localFilePath)    //remove the local saved temporary file as the upload operation got failed
                    return null;
                }
            }
            
            export {uploadOnCloudinary}
   9) Done for this lec
</br>

**************************************************************************************

## Lec 11: HTTP crash course

![image](https://github.com/sheelganvir/Web-Dev-Projects/assets/128175450/9d100eb6-4753-4599-8d41-f1f2fc693741)
![image](https://github.com/sheelganvir/Web-Dev-Projects/assets/128175450/7a2e79de-002e-4fba-8fc8-60b39e5757a5)
![image](https://github.com/sheelganvir/Web-Dev-Projects/assets/128175450/535bbecb-5b2c-4949-93e4-da03f75ba130)
![image](https://github.com/sheelganvir/Web-Dev-Projects/assets/128175450/09e64566-c603-44a3-8b37-58b1182eb316)

</br>

**************************************************************************************

## Lec 12: Complete guide for router and controller with debugging

   1) Make a "user.controller.js" file inside "controllers" folder
      ###### user.controller.js file
            import { asyncHandler } from "../utils/asyncHandler.js";

            const registerUser = asyncHandler(async(req, res) => {
                res.status(200).json({
                    message: "Ok"
                });
            });

            export {registerUser}
   2) Make a "user.routes.js" file inside "routes" folder
      ###### user.routes.js file
            import { Router } from "express";
            import { registerUser } from "../controllers/user.controller.js";
            
            const router = Router()
            
            router.route("/register").post(registerUser)
            
            export default router
   3) Import routes inside app.js file and declaration of routes
      ###### app.js file
            import express from "express";
            import cors from "cors"
            import cookieParser from "cookie-parser";
            
            const app = express()
            
            app.use(cors({
                origin: process.env.CORS_ORIGIN,
                credentials: true
            }))
            
            app.use(express.json({limit: "16kb"}))
            app.use(express.urlencoded({extended: true, limit: "16kb"}))
            app.use(express.static("public"))
            app.use(cookieParser())
            
            //routes import
            import userRouter from './routes/user.routes.js'
            
            //routes declaration
            app.use("/api/v1/users", userRouter)
            
            //http://localhost:8000/api/v1/users/register
            
            export {app} // it is same as 'export default app'
   4) Open Postman -> Collections -> Open new tab -> select POST and enter url http://localhost:8000/api/v1/users/register and click on Send. If it is "Ok" app run successfully.
   5) Done for this lec

</br>

**************************************************************************************

## Lec 13: Logic Building and Register Controller 

   1) Inside controller.js file -> inside registerUser method
      - Firstly get user details from the frontend then
      - Check validation then
      - Check if user already exist(by username, email)
      - Check for images, check for avatar
      - Upload them to cloudinary, check if avatar is uploaded
      - Create user object - Create entry in db
      - Remove password and refresh token field from response
      - Check for user creation
      - return res
   2) Take data from req.body
      ######
            const registerUser = asyncHandler(async(req, res) => {
                const {fullName, email, username, password} = req.body
                console.log("email: ", email);
            });
      Now, check if it working, go to postman -> enter URL "http://localhost:8000/api/v1/users/register" under POST request.
      Go to body -> select raw -> JSON ->
      ######
            {
                "email": "dfmlkds@.com",
                "password": ""
            }
      Now, click on SEND -> see in vscode terminal, you will see the email is showing
   3) For file handling,
      - Go to 'user.routes.js' file -> from multer.middleware.js import upload inside 'user.routes.js' file
      ######
            import {upload} from "../middlewares/multer.middleware.js"
      - Middle acts in the middle as a checker, if someone is requesting in /register route then the registerUser method executes.
      - But we want before execute any method it must pass through the middleware
      - For that inject middleware (here upload.fields) before registerUser method
        ###### user.routes.js file
              router.route("/register").post(
                   upload.fields([
                       {
                           name: "avatar",
                           maxCount: 1
                       },
                       {
                           name: "coverImage",
                           maxCount: 1
                       }
                   ]),
                   registerUser)
        Now we can send Images
   4) Now validation :
      - Go to user.controller.js
      - Import ApiError from ApiError.js
        ######
              import {ApiError} from "../utils/ApiError.js"
      - Inside registerUser method add if condition and pass array and apply method 'some' 
         (A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate return a value which is coercible to the Boolean value true, or until the end of the array.)
      - Apply field. If any of the fields returns true it means the field is empty.
        ######
              if(
                  [fullName, email, username, password].some((field) => field?.trim() === "")
              ) {
                  throw new ApiError(400, "All fields are required")
              }
   5) Now, Check if user already exist(by username, email) :
      - Go to user.controller.js file and import User
        ######
              import {User} from "../models/user.model.js"
      - This user can directly contact with the database because it is made with mongoose (see last line of user.model.js file)
      - Now ask the database if there any user exists with these credentials (email or username) by User.findOne and store inside const. And Of user exist throw ApiError
        ######
                const existedUser = User.findOne({
                    $or: [{ username }, { email }]
                })
            
                if (existedUser) {
                    throw new ApiError(409, "User with email or username already exists")
                }
   6) Now, check for images, check for avatar
      - GO to User.controller.js file
      - Multer gives the access of files using "req.files" and look for the first property
        ######
             const avatarLocalPath = req.files?.avatar[0]?.path;
             const coverImageLocalPath = req.files?.coverImage[0]?.path;
         
             if(!avatarLocalPath){
                 throw new ApiError(400, "Avatar file is required")
             }
       
      













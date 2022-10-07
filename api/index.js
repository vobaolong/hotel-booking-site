const express = require('express')
const path = require('path')
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')

const errorHandler = require('./middleware/error')

const DBConnection = require('./config/db')

dotenv.config({path:  './config/.env'})

DBConnection()

//Include Routes
const authRoutes = require('./routes/auth')
//Config app and routes
app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(cookieParser());

if(process.env.NODE_ENVIRONMENT === 'development') {
    app.use(morgan('dev'))
}

app.use(cors({
    origin: true,
    credentials: true,
}))

app.use(express.static(path.join(__dirname, 'public')))

const versionOne = (routeName) => `api/v1/${routeName}`

//routes
app.use(versionOne('auth'), authRoutes)

app.use(errorHandler)

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
    console.log(`We are live on ${process.env.NODE_ENVIRONMENT} mode on port ${PORT} `)
})

//Handle unhandled promise rejections 
process.on('UnhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    //Close server and exit process
    server.close(() => process.exit(1))
})
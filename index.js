//declarations
const express = require('express');
const app = express();
const appPages = require('./routes/appPages');
const middlewares = require('./middlewares');


//statics
app.use("/css",express.static("./public/css"));
app.use("/",express.static("./public/images"));
app.use("/freez",express.static("./public/blocked.html"));
app.use("/page-not-found",express.static("./public/notfound.html"))

//routing
app.use(middlewares.blocking);
app.use(appPages);
app.use(middlewares.notFound)

//server
app.listen(5000,(error)=>{
    if (error) console.log('serveur is not running')
    else console.log ('sever is running on port 5000')
})
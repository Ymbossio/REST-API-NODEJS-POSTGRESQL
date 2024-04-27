import express from 'express';
import PORT from 'config.js'
import {PORT} from './config.js'
import router from './routes/users.routes.js';

const app = express();


app.listen(PORT, ()=>{
    console.log(`Run on port ${PORT}🚀`);
})

app.get(('/'), (req, resp) =>{
    return resp.send(`Run on port ${PORT}🚀`)
});

const app = express();
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Run on port ${PORT}🚀`)
});
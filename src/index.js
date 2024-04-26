const express = require ('express');


const app = express();
const PORT = 3000 || 4500

app.listen(PORT, ()=>{
    console.log(`Run on port ${PORT}🚀`);
})

app.get(('/'), (req, resp) =>{
    return resp.send(`Run on port ${PORT}🚀`)
});
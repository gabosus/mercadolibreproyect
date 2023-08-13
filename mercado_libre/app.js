const express = require("express");

const app = express();

const PORT = 3030;





app.use(express.static("public"));

app.get('/',(req,res)=> {
    res.sendFile(__dirname + 'mercadoLibre.html')
});
app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`)
});
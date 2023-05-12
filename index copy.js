const app = require ('express')();
const PORT = 8080;

app.listen( PORT, ()=> console.log(`working on localhost${PORT}`)
);


app.get("/",(req,res)=>{
    res.send("hwllo")
}); 


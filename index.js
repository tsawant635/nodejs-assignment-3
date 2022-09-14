const http=require("http")
const fs =require("fs")

const data=(`<h1> Hello World </h1>
<p> This is Tukaram Sawant... </p>`)
fs.writeFile("index.html",data,(err)=>{
    console.log(err)
})

const server=http.createServer((req,res)=>{ 
    fs.readFile("index.html", (err,html)=>{
       res.end(html)  
    })
})

server.listen(5000, () => console.log("Server is up at 5000"));
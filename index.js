var express = require("express")
var app = express()
var request = require("request")
var cors = require("cors")
app.use(cors())
app.use(express.json())
app.get("/youtubeapi",(req,res,next)=>{
    const search =  req.query.search
    request(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${search}&key=AIzaSyAHBuxJ1_m91kWx2-pUAp4_zuF02T4wymk`,(error,response,body)=>{
        if (!error && response.statusCode == 200) {    
          const req =JSON.parse(body)
        return res.send(req)
        }
    })
    
})

app.listen(5000,()=>{
    console.log("Server Started")
})
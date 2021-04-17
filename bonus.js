const http =require("http")


const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001




let Subjects = ["The heads on Easter Island have bodies","The moon has moonquakes","Goosebumps are meant to ward off predators","You lose up to 30 percent of your taste buds during flight","Your nostrils work one at a time","A chef’s toque contains 100 folds"]

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Context-Type','text/plain')
    res.write(Subjects[Math.floor(Math.random()*Subjects.length)])
    res.end()
})
server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
  })

const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr><th>LOCATION</th><th>EXPENSES</th><th>TIME</th></tr><tr><tr><td>Simla</td><td>400</td><td>5</td></tr><tr><td>Ontario</td><td>1000</td><td>24</td></tr><tr><td>Goa</td><td>500</td><td>8</td></tr><tr><td>Delhi</td><td>600</td><td>9</td></tr>')
      res.write('</table>')    
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})
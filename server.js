const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('99 Bottles of Beer on the Wall <br></br><a href ="/98">Take one down, Pass it around!</a>')
})
app.get('/:numberOfBottles', (req, res) => {
    if(req.params.numberOfBottles <= 0){
        res.send(`No more bottles of beer on the wall :( <br></br><a href = "/"> START OVER</a>  `)
    }else{
        res.send(`${req.params.numberOfBottles} Bottles of Beer on the Wall! <br></br><a href ="/${req.params.numberOfBottles-1}">Take one down, Pass it around!</a>`)
    }
})


app.listen(port, function () {
    console.log('Listening...');
  });
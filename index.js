const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json({
    extended: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '20mb'
}))
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.get('/profile/:username/:id', (req, res) => {
//     console.log(req.params)
//     res.send('Username Anda' + req.params.username)
// })

app.get('/daerah/:namaDaerah/:idDaerah', (req, res) => {
    console.log(req.params)
    const namaDaerah = req.params.namaDaerah
    const idDaerah = req.params.idDaerah
    res.send('Nama Daerah Anda ' + namaDaerah + ' Id Daerah ' + idDaerah)
})

app.post('/register', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})
 
app.listen(3000, () =>{
    console.log('server started')
})

// instal npm init
// install npm i express
// install nodemon
// download postman
// 
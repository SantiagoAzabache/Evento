const express = require('express');
const app = express();
const user = require('./user.controller')
const applyConfing = require('./setting')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')

applyConfing(app)
mongoose.connect('mongodb+srv://santiagoazabache:Arenas-2008@dataevent.vgxnreu.mongodb.net/event?retryWrites=true&w=majority')
app.use(express.static('app'))
app.use(express.static(path.join(__dirname, 'EVENTO')))
app.use(cors({
        origin: 'http://127.0.0.1:5500'
    }))

app.use(express.json())
//router

app.get('/', user.list)

app.post('/enviar-inscripcion', user.create)
app.put('/id:', user.update)
app.patch('/id:', user.update)
app.delete('/id:', user.delete)

app.get('*', (req, res) => {
    res.send(404).send('Esta pagina no existe')
})

//inicio del puerto
app.listen(app.get('port'), () => {
    console.log(`${app.get('title')}Server iniciado en el puerto ${app.get('port')}`)
})
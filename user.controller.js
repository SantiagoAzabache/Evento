const Users = require('./User')

const User = {
    get: async (req,res)=>{
        res.status(200).send('Todo esta bien')
    },
    list: async (req, res)=>{
        res.status(200).send('Todo esta bien')
    },
    create:async (req, res)=>{
        const nuevouser = new Users(req.body)
        await nuevouser.save()

    },
    update :async (req, res) =>{
        res.status(204).send('actualizar usuario')
    },
    delete: async(req, res)=>{
        res.status(204).send('eliminando usuario')
    }
}

module.exports = User
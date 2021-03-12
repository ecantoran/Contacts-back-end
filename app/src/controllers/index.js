const Contact = require('../models/contact')

function getContacts(req, res){
    Contact.findAll({ attributes: ['id', 'nombre', 'apellido', 'email', 'telefono', 'avatar'] })
    .then(users => {
        console.log(users)
        res.json({
            data: users
        })
    })
    .catch(err => {
        console.log(err)
        res.status.json({
            message: "Something wrong",
            data: []
        })
    });
};

 async function createContact(req, res){
    const { nombre, apellido, email, telefono, avatar } = req.body;
    try{
        const new_contact = await Contact.create({
            nombre,
            apellido,
            email,
            telefono,
            avatar
        }, {
            fields: ["nombre", "apellido", "email", "telefono", "avatar"]
        })
        res.json({
            message: "New contact created",
            data: new_contact
        })

    }catch (error){
        console.log(error.message)
        res.status(500).json({
            message: "This contact already exist",
            data: {}
        })
    }
};

async function updateContact(req, res) {
    const { id, nombre, apellido, email, telefono, avatar } = req.body;
    const contact = await Contact.findByPk(id);
    if (contact == null){
        res.status(404).json({
            message: "This contact don't exist"
        })
    } else{
        contact.nombre = nombre;
        contact.apellido = apellido;
        contact.email = email;
        contact.telefono = telefono;
        contact.avatar = avatar
        try {
            await contact.save()
            res.json({
                message: "Contact updated",
                data: contact
            });
        } catch (error){
            res.status(500).json({
                message: "Exist another contact with the same data"
            })
        }

    }
}

async function deleteContact(req, res){
    const { id } = req.body;
    const contact = await Contact.findByPk(id);
    if (contact == null){
        res.status(404).json({
            message: "This contact don't exist"
        })
    } else{
        await contact.destroy()
        res.json({
            message: "Contact deleted",
            data: contact
        });
    }
};

module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
}
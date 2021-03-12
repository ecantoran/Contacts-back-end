
const getContacts = (req, res) => {
    res.send('contacts');
};

const createContact = (req, res) => {
    res.send('new contact');
};

const updateContact = (req, res) => {
    res.send('update contact');
}

const deleteContact = (req, res) => {
    res.send('delete contact');
};

module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
}
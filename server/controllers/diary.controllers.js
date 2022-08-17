const Entry = require('../models/diary.model.js')

module.exports = {
    
    createEntry: (req,res) =>{
        Entry.create(req.body)
        .then((newEntry) =>res.json(newEntry))
        .catch((err) => console.log(err))
    },

    getAllEntrys: (req,res) =>{
        Entry.find({})
        .then((allEntrys) => res.json(allEntrys))
        .catch((err) => console.log(err))
    },

    getOneEntry: (req, res) =>{
        
        Entry.findOne({_id: req.params.id})
            .then((oneEntry) =>{
                console.log(oneEntry);
                res.json(oneEntry);
            })
            .catch((err) => console.log(err))
    },

    updateEntry: (req,res) => {
        Entry.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedEntry) =>{
                console.log(updatedEntry);
                res.json(updatedEntry);
            })
            .catch((err) => console.log(err))
    },

    deleteEntry:(req,res) =>{
        Entry.deleteOne({ _id: req.params.id })
            .then((deletedEntry)=>{
                console.log(deletedEntry);
                res.json(deletedEntry);
            })
            .catch((err)=> console.log(err))
    }
};
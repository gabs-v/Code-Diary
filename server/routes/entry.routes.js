const EntryController = require('../controllers/diary.controllers');


module.exports = (app) => {
    app.post("/api/entry", EntryController.createEntry);
    app.get("/api/entry", EntryController.getAllEntrys);
    app.get("/api/entry/:id", EntryController.getOneEntry);
    app.put("/api/entry/:id", EntryController.updateEntry);
    app.delete("/api/entry/:id", EntryController.deleteEntry);
}
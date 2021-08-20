module.exports = app => {
    const todos = require("../contollers/todo.controller")
    const router = require("express").Router();

    router.post("/", todos.create)
    router.get("/", todos.findAll)
    router.get("/done", todos.findAllDone)
    router.get("/:id", todos.findOne)
    router.put("/toggle/:id", todos.update)
    router.delete("/:id", todos.delete)
    router.delete('/', todos.deleteAll)

    app.use('/api/todos', router)

}

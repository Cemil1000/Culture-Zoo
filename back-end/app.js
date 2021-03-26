const {checkAndChange} = require('./assets/function')
const express = require('express')
const morgan = require('morgan')('dev')
const config = require('./assets/config')
const mysql = require('promise-mysql')
const cors = require('cors')

mysql.createConnection({
    host: config.db.host,
    database: config.db.database,
    user: config.db.user,
    password: config.db.password
}).then((db) =>{

    console.log('Connected.');
        
    const app = express()

    let MembersRouter = express.Router()
    let Members = require('./assets/classes/members-class')(db, config)

    app.use(morgan)
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    MembersRouter.route('/')

        // Récupère tous les membres
        .get(async (req, res) => {
            let allMembers = await Members.getAll(req.query.max)
            res.json(checkAndChange(allMembers))
        })

        // Ajoute un membre avec son nom
        .post(async(req, res) => {
            let addMember = await Members.add(req.body.name)
            res.json(checkAndChange(addMember))
        })
    app.use(config.rootAPI + 'members', MembersRouter)
    app.listen(config.port, () => console.log('Started on port ' + config.port))

}).catch((err) =>{
    console.log("Error during database connection");
    console.log(err.message);
})

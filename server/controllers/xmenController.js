const connection = require('../database/connection');


const xmenController = {
    getAllXmen: (req, res) =>{
        connection.query(
            'SELECT * from xmen',
            (error, xmen, fields) =>{
                res.json(xmen);
            }
        )
    },
}

module.exports = xmenController;

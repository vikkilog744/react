const express = require("express");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const connection = require('./demo_db_connection.js');
const router = express.Router()

app.use(cors());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/express_backend', (req, res, next) => { //Line 9

    connection.query('SELECT id, name, address FROM mydb.customers', function (err, rows) {
        console.log('res', rows);
        res.send({dashboardTable: rows}); //Line 10
    });
    
});

module.exports = router;
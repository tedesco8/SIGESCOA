require('dotenv').config();

module.exports = {
    user: process.env.USR_EMAIL,
    pass: process.env.PWD_EMAIL,
    host: process.env.HS_EMAIL,
    port: process.env.PORT_EMAIL
}
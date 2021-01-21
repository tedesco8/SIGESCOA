"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./routes/"));

var _database = _interopRequireDefault(require("./config/database"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_database["default"].connectDatabase();

var app = (0, _express["default"])(); //muestra peticiones http en la consola

app.use((0, _morgan["default"])('dev')); //gestiono peticiones remotas

app.use((0, _cors["default"])()); //permito que el servidor reciba peticiones JSON a traves de post

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); //configurando direccion de archivos estaticos publicos

app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public'))); //rutas

app.use('/api', _routes["default"]); //asigno puerto por defecto del sistema, o en su defecto el puerto 4000

app.set('port', process.env.PORT || process.env.PORT_DEF);
app.listen(app.get('port'), function () {
  console.log('server on port ' + app.get('port'));
});
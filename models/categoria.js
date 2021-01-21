const mongoose = require("mongoose");
const { Schema } = mongoose;

const categoriaSchema = new Schema({
    nombre: {type:String, maxlength: 50, unique: true, required: true},
    descripcion: {type:String, maxlength: 255},
    estado: {type:Number, default:1},
    createAt:{type:Date, default:Date.now}
});

const Categoria = mongoose.model('categoria', categoriaSchema);

module.exports = Categoria;
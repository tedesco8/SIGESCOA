import mongoose, {Schema} from 'mongoose';

const articuloSchema = new Schema({
    categoria: {type: Schema.ObjectId, ref:'categoria'},
    codigo: {type: String, maxlength: 64},
    nombre: {type: String, maxlength: 50, unique: true, required: true},
    descripcion: {type: String, maxlength: 255},
    precio_venta: {type: Number, required: true},
    stock: {type: Number, required: true},
    estado: {type: Number, default: 1},
    createAt: {type: Date, default: Date.now}
});

const Articulo = mongoose.model('articulo', articuloSchema);

export default Articulo;
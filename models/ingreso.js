import mongoose, {Schema} from 'mongoose';

const ingresoSchema = new Schema({
    usuario:{type: Schema.ObjectId, ref: 'usuario', required:true},
    persona:{type: Schema.ObjectId, ref: 'persona', required:true},
    tipo_comprobante:{type: String, maxlength:20, required:true},
    serie_comprobante:{type: String, maxlength:20},
    num_comprobante:{type: String, maxlength:10, required:true},
    impuesto:{type: Number, required:true},
    total:{type: Number, required:true},
    detalle:[{
        _id:{
            type: String,
            required: true
        },
        articulo:{
            type: String,
            required: true
        },
        cantidad:{
            type: Number,
            required: true
        },
        precio:{
            type: Number,
            required: true
        }
    }],
    estado:{type: Number, default:1},
    createAt:{type: Date, required:Date.now}
});

const Ingreso = mongoose.model('ingreso', ingresoSchema);

export default Ingreso;
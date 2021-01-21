const mongoose = require("mongoose");
const { Schema } = mongoose;

const ingresoSchema = new Schema({
    usuario:{type: Schema.ObjectId, ref: 'usuario',required:true },
    persona:{ type: Schema.ObjectId, ref: 'persona',required:true },
    tipo_comprobante:{ type:String,maxlength:20,required:true},
    serie_comprobante: { type:String,maxlength:7},
    num_comprobante: { type:String,maxlength:10,required:true},
    impuesto:{ type:Number, required:true},
    total:{ type:Number, required:true},
    detalles: [{
        _id:{
            type:String,
            required:true
        },
        articulo:{
            type:String,
            required:true
        },
        cantidad:{
            type:Number,
            required:true
        },
        precio:{
            type:Number,
            required:true
        }
    }],
    estado: { type:Number, default:1},
    createdAt: { type: Date, default: Date.now }
});
const Ingreso = mongoose.model('ingreso',ingresoSchema);
module.exports = Ingreso;
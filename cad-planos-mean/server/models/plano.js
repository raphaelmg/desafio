var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;

var planoSchema = new Schema({  
 _id: { type: objectId, auto: true },
 codigo: { type: String},
 descricao: { type: String, required: true },
 vigenciaInicial: { type: String, required: true },
 vigenciaFinal: { type: String, required: true },
 valorParcela: { type: String, required: true },
 desconto: { type: String, required: true }
}, 
{
 versionKey: false
});

var plano = mongoose.model('planos', planoSchema);

module.exports = plano;
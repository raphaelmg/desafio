var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;

var planoSchema = new Schema({
 _id: { type: objectId, auto: true },
 name: { type: String, required: true },
 contactNo: { type: String, required: true }
}, 
{
 versionKey: false
});

var plano = mongoose.model('planos', planoSchema);

module.exports = plano;
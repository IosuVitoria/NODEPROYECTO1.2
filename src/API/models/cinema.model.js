/*5. Crear un modelo Cinema el cual tendrá las propiedades:
1. name (campo requerido).
2. location (campo requerido).
3. movies [ ] (relación con la colección movies).*/


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        movies: [{type: Schema.Types.ObjectId, ref: 'movie'}]
    },{
        timestamps: true
    }
)

const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = Cinema;
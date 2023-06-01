const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title:{type:String,required:true},
        director:{type:String,required:true},
        year:{type:Number,required:true},
        genre:{type:String,required:true},
    },{
        timestamps:true,
    }
)

//timestamps : Da datos de cuando se han creado las entradas en la base de datos.

const Movie = mongoose.model("movie",movieSchema)

module.exports = Movie;

// Se exporta sin corchetes porque NO ES UNA FUNCIÓN. Es otro tipo de objeto.



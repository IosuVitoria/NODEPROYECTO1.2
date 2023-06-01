// Antes de generar los métodos get se realizan los controladores.

const Movie = require("../models/movie.models")

//PUNTOS DEL PROYECTO V1
const getMovies = async(req, res) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
}
const getMovieById = async (req, res) => {
    console.log("esta es la funcion id");
    const id = req.params.id;
    try {
      const movieById = await Movie.findById(id);
      return res.status(200).json(movieById);
    } catch (error) {
      return res.status(500).json(error);
    }
};
const getMovieByTitle = async (req, res) => {
    console.log("Esta es la función por título");
    const title = req.params.title;
    try {
        const movieByTitle = await Movie.findOne({ title: title });
        if (movieByTitle) {
            return res.status(200).json(movieByTitle);
        } else {
            return res.status(404).json({ message: "Película no encontrada" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};
const getMovieByGenre = async (req, res) => {
    console.log("Esta es la función por género");
    const genre = req.params.genre;
    try {
        const movieByGenre = await Movie.find({ genre: genre });
        if (movieByGenre) {
            return res.status(200).json(movieByGenre);
        } else {
            return res.status(404).json({ message: "Género no reconocido, pruebe otro." });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};
const getMoviesByYear = async (req, res) => {
    console.log("Esta es la función por año");
    const year = 2010; // Genero una variable para poder utilizar en el filtro.

    try {
        const moviesByYear = await Movie.find({ year: { $gte: year } });
        return res.status(200).json(moviesByYear);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Puntos del proyecto V1.2

//2. Crear un método post de Movies para crear una nueva película.

const postMovies = async(req,res) => {
    try {
        const newMovie = new Movie(req.body);
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error)
    }
}

//3. Crear un método put de Movies para modificar una película.

const putMovies = async(req,res) => {
    try {
        const {id} = req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;
        
        const updatedMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true})
        //Comprobamos que existe la película mediante el id.
        if(!updatedMovie){
            return res.status(404).json({message: "El id de este película no existe"});
        }
        return res.status(200).json(updatedMovie);
    } catch (error) {
        return res.status(500).json(error)
    }
}

//4. Crear un método delete de Movies para eliminar una película.

const deleteMovies = async(req,res) => {
    try {
        // Tomo como parámetro el id para identificar y después paso la función predefinida findByIdAndDelete para encontrar la película y eliminarla.
        const {id} = req.params;
        const deletedMovies = await Movie.findByIdAndDelete(id);
        // Al igual que en el caso anterior, para evitar problemas comprobamos que exista el id correspondiente.
        if(!deletedMovies){
            return res.status(404).json({message: "El id del película no existe"});
        }
        return res.status(200).json(deletedMovies)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}


module.exports = { getMovies, getMovieById, getMovieByTitle, getMovieByGenre, getMoviesByYear, postMovies, putMovies, deleteMovies};







// Punto 6. Crear los métodos GET, POST, PUT y DELETE de la colección Cinema.

const Cinema = require('../models/cinema.model');

//Método GET para cinemas.
const getCinemas = async (req, res) => {
    try {
        const cinemas = await Cinema.find().populate('movies');
        return res.status(200).json(cinemas);
    } catch (error) {
        return next(error);
    }
};

// Método POST para cinemas.
const postCinemas =  async (req, res) => {
    try {
        const { name, location, movies } = req.body;
        const newCinema = new Cinema({
            name,
            location,
            movies: movies || []
        });

        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema);
    } catch (error) {
        return next(error);
    }
};

//Método DELETE para cinema.
const deleteCinema = async (req, res) => {
    try {
        const { id } = req.params;
        //Se busca el cine por id.
        const cinemaDeleted = await Cinema.findByIdAndDelete(id);
        if (!cinemaDeleted) {
            return res.status(404).json({ message: "Cinema no encontrado. No es posible el borrado." });
        }
        return res.status(200).json(cinemaDeleted);
    } catch (error) {
        return next(error);
    }
};

//Método PUT para cinema.
const putCinema = async (req, res) => {
    try {
        const { cinemaId, movieId } = req.body;
        const updatedCinema = await Cinema.findByIdAndUpdate(
            cinemaId,
            { $push: { movies: movieId } },
            { new: true }
        );
        if (!updatedCinema) {
            return res.status(404).json({ message: "Cinema no econtrado." });
        }
        return res.status(200).json(updatedCinema);
    } catch (error) {
        return next(error);
    }
};

module.exports = {getCinemas, postCinemas, deleteCinema, putCinema};
const express = require("express");
const {getCinemas, postCinemas, deleteCinema, putCinema} = require("../controllers/cinema.controller")
const cinemaRoutes = express.Router();


cinemaRoutes.get('/', getCinemas)
cinemaRoutes.post('/', postCinemas)
cinemaRoutes.delete('/:id', deleteCinema)
cinemaRoutes.put('/add-movie', putCinema)

module.exports = cinemaRoutes;
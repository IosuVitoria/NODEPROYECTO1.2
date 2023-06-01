const express = require("express");
const {getMovies, getMovieById, getMovieByTitle, getMovieByGenre, getMoviesByYear, postMovies, putMovies, deleteMovies} = require("../controllers/movies.controllers")
const moviesRoutes = express.Router();

moviesRoutes.get("/", getMovies);
moviesRoutes.get("/id/:id", getMovieById);
moviesRoutes.get("/id/:title", getMovieByTitle);
moviesRoutes.get("/genre/:genre", getMovieByGenre);
moviesRoutes.get("/year/:year", getMoviesByYear);

// Punto 2. Del ejercicio del proyecto V2.
moviesRoutes.post("/", postMovies);
// Punto 3. Del ejercicio del proyecto V2.
moviesRoutes.put("/:id", putMovies); //Introduzco el iD porque es lo que recibo como parámetro para localizar la película en primer término.
// Punto 4. Del ejercicio del proyecto V2.
moviesRoutes.delete("/:id", deleteMovies); //Introduzco el iD porque es lo que recibo como parámetro para localizar la película en primer término.


module.exports = moviesRoutes;



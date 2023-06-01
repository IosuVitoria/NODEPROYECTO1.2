El objetivo de este proyecto es completar un CRUD completo y crear una colección en base de datos que contenga la información de los cines que van a emitir las películas. Para ello se debe:

1. Crear un directorio de rutas y mover las rutas ya creadas a `movie.routes.js`
2. Crear un método post de Movies para crear una nueva película.
3. Crear un método put de Movies para modificar una película.
4. Crear un método delete de Movies para eliminar una película.
5. Crear un modelo Cinema el cual tendrá las propiedades:
    1. name (campo requerido).
    2. location (campo requerido).
    3. movies [ ] (relación con la colección movies).
6. Crear los métodos GET, POST, PUT y DELETE de la colección Cinema.
7. Insertar dos documentos en la colección cinema que tengan al menos una relación con una película.
8. Controlar los errores.
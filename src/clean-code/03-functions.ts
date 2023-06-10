(() => {

    // función para obtener información de una película por Id
    function getMovieInfoById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastByMovieId( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getBiographyOfActor( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Interface
    interface movieData{
        title: string;
        description: string;
        rating: number;
        cast: string[]; 
    }

    // Crear una película
    function createMovie({title, description, rating, cast}: movieData): boolean {
        console.log({ title, description, rating, cast });
        return true;
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        
        if ( isDead ) return 1500; 
        if ( isSeparated ) return 2500;

        return ( isRetired ) ? 3000: 4000;
        /* if ( isRetired ) {
            return = 3000;
        } else {
            result = 4000; 
        } */
        
    }


})();

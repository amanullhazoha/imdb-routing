const Movie = ({ location, match }) => {
    const { movie } = location;

    return (
        <div className="row">
            <div className="col-12">
                <figure className="d-flex movie">
                    <img src={movie.posterUrl} alt={movie.id} className="img-fluid" />
                    <figcaption>
                        <h4>{movie.title}</h4>
                        <p><b>Release Year : </b>{movie.year}</p>
                        <p><b>Director : </b>{movie.director}</p>
                        <p><b>Actors : </b>{movie.actors}</p>
                        <p>{movie.plot}</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}
 
export default Movie;
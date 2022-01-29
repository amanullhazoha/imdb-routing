import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import _ from "lodash";

import getMoives from "../services/getMovies.service";
import getGenres from "../services/getGenres.service";
import Table from "./common/table.component";
import FilterList from "./common/filterList.component";
import Pagination from "./common/pagination.component";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [filter, setFilter] = useState("All Genres");
    const [page, setPage] = useState({activePage: 1, pageCount: 15}) 
    const [sorting, setSorting] = useState({ path: "id", order: "asc" });

    useEffect(() => {
        const movies = getMoives();
        const genres = ["All Genres", ...getGenres()];
        setMovies(movies);
        setGenres(genres);
    }, []);

    const handleFilter = (filter) => {
        setFilter(filter);
        setPage({ ...page, activePage: 1 })
    }

    const handlePageClick = (activePage) =>  {
        setPage({ ...page, activePage })
    }

    const handleSort = (sorting) => {
        setSorting(sorting);
    };

    const filterMovies = () => {
        const filteredMovies = movies.filter(movie => {
            if(filter === "All Genres") return true;
            if(movie.genres.includes(filter)) return true;
            return false;
        })

        return filteredMovies;
    }

    const paginateMovies = (movies) => {
        const { activePage, pageCount } = page;
        const start = (activePage - 1) * pageCount;
        return movies.slice(start, start + pageCount);
    }

    const sortMovies = (movies) => {
        const { path, order } = sorting;
        const sortingMovies = _.orderBy(movies, [path], [order]);
        return sortingMovies;
    };

    const columns = [
        {
            label: "Poster",
            path: "posterUrl",
            content: (movie, path) => (
                <td>
                    <img
                        src={movie[path]}
                        alt={movie.id}
                        style={{ width: "45px", height: "auto" }}
                    />
                </td>
            ),
        },
        {
            label: "ID",
            path: "id",
            sort: true,
            content: (movie) => <td>{movie.id}</td>,
        },
        {
            label: "Title",
            path: "title",
            sort: true,
            content: (movie) => (
                <td>
                    <Link
                        to={{
                            pathname: `/movies/${movie.title}`,
                            movie: movie,
                        }}
                    >
                        {movie.title}
                    </Link>
                </td>
            ),
        },
        {
            label: "Run Time",
            path: "runtime",
            sort: true,
            content: (movie) => <td>{movie.runtime} min</td>,
        },
    ];

    const filteredMovies = filterMovies();
    const paginatedMovies = paginateMovies(filteredMovies);
    const sortingMovies = sortMovies(paginatedMovies);

    console.log(page)
    return (
        <div className="row">
            <div className="col-md-10 movieList">
                <Table
                    items={sortingMovies}
                    columns={columns}
                    sorting={sorting}
                    onSort={handleSort}
                />
            </div>
            <div className="col-md-2 filterList">
                <FilterList 
                    filterItems={genres} 
                    onFilter={handleFilter} 
                    filter={filter}
                />
            </div>
            <div className="col-12">
                <Pagination 
                    totalItems={filteredMovies.length}
                    activePage={page.activePage}
                    pageCount={page.pageCount}
                    onClickPage={handlePageClick}
                />
            </div>
        </div>
    );
};

export default Movies;
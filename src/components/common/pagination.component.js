import { range } from "lodash";

const Pagination = ({ totalItems, activePage, pageCount, onClickPage }) => {
    const totalPages = Math.ceil(totalItems / pageCount);
    const pages = range(1, totalPages + 1, 1);

    if(totalItems < pageCount) return true;

    return (
        <nav className="d-flex justify-content-center">
            <ul class="pagination">
                <li
                    class="page-item"
                    onClick={() =>
                        activePage > 1 && onClickPage(activePage - 1)
                    }
                >
                    <span class="page-link">Previous</span>
                </li>
                {pages.map((page) => (
                    <li
                        class={`page-item ${page === activePage && "active"}`}
                        key={page}
                        onClick={() => onClickPage(page)}
                    >
                        <span class="page-link">{page}</span>
                    </li>
                ))}
                <li
                    class="page-item"
                    onClick={() =>
                        activePage < totalPages && onClickPage(activePage + 1)
                    }
                >
                    <span class="page-link">Next</span>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;

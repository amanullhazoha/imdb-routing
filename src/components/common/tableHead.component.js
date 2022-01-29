const TableHead = ({ columns, sorting, onSort }) => {
    const handleSort = ({ path, sort }) => {
        if(!sort) return true;

        if(sorting.path === path) {
            if(sorting.order === "asc") {
                onSort({ path, order: "desc"});
            } else {
                onSort({ path, order: "asc" });
            }
        } else{
            onSort({ path, order: "asc"});
        }

    }

    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.label} onClick={() => handleSort(column)}>
                        {column.label}
                        <span>
                            {column.path === sorting.path ? (
                                sorting.order === "asc" ? (
                                    <i className="bi bi-sort-down-alt" />
                                ) : (
                                    <i className="bi bi-sort-down" />
                                )
                            ) : null}
                        </span>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;

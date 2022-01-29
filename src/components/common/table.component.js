import TableBody from "./tableBody.component";
import TableHead from "./tableHead.component";

const Table = ({ items, columns, sorting, onSort }) => {
    return (
        <table className="table">
            <TableHead 
                columns={columns} 
                sorting={sorting} 
                onSort={onSort}
            />
            <TableBody items={items} columns={columns} />
        </table>
    );
};

export default Table;

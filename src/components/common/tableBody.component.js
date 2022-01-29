import { Fragment } from "react/cjs/react.production.min";

const TableBody = ({ items, columns }) => {
    let count = 0;
    
    return (
        <tbody>
            {items.map(row => (
                <tr key={row.id}>
                    {columns.map(column => (
                        <Fragment key={count} {...count++}>
                            {column.content(row, column.path)}
                        </Fragment>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;

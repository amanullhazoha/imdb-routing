const FilterList = ({ filterItems, filter, onFilter }) => {
    return (
        <ul className="list-group">
            {filterItems.map(filterItem => (
                <li 
                    className={`list-group-item ${filterItem === filter ? "active" : null}`}
                    key={filterItem}
                    onClick={() => onFilter(filterItem)}
                >
                    {filterItem}
                </li>
            ))}
        </ul>
    );
};

export default FilterList;

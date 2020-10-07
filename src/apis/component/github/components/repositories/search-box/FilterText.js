/* react */
import React from 'react';


const FilterText = ({ search, selection, len }) => {
    if ((search) && (selection !== 'All')) {
        return <p>{len} results for repositories matching {search} written in {selection}</p>
    } else if (search) {
        return <p>{len} results for repositories matching {search}</p>
    } else if (selection !== 'All') {
        return <p>{len} results for repositories written in {selection}</p>
    } else {
        return null;
    }
}

export default FilterText;

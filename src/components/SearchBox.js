import React from "react";
import { useState } from "react";

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState("");
    console.log(searchValue);

    return (
        <div className="col col-sm-4">
            <input className="form-control" onChange={(e) => setSearchValue(e.target.value)} placeholder="Type to search..."></input>
        </div>
    );
};

export default SearchBox;

import React from 'react'

const Search = () => {
    const searchStyle = {
        width: "50%",
        margin: "10px",
        padding: "10px 15px",
        borderRadius: "100px",
        border: "1px solid black",
        boxshadow: "1px 0.5px #888888",
        fontsize: "24px",
      };

    return (
        <div className="search">
            <input style={searchStyle}></input>
            <button>Search</button>
        </div>
    )
}

export default Search

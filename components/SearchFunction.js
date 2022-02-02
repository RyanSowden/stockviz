import React, {useState} from "react"


const SearchFunction = (props) => {
    const ticker = props.value
    return(
        <h1>{ticker}</h1>
    )
}

export default SearchFunction

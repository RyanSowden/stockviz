import React, {useState} from "react"


const SearchFunction = (props) => {
    const current_price = props.current_stock
    const adjusted_price = props.adjusted_stock
    return(
	<div>
        <h1>{current_price}</h1>
        <h1>{adjusted_price}</h1>
	</div>
    )
}

export default SearchFunction

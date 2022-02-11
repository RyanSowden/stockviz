import React, {useState} from "react"
import styled from 'styled-components'

const SearchFunction = (props) => {
    const current_price = props.stock_data[1]
    const adjusted_price = props.stock_data[2]
    const company_name = props.stock_data[0]
    return(
	<div>
	    <Header1>{company_name}</Header1>
	    <Wrapper>
		    <CurrentStock>{current_price}</CurrentStock>
		    <AdjustedStock>{adjusted_price}</AdjustedStock>
	    </Wrapper>
	</div>
    )
}

export default SearchFunction


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;

`

const CurrentStock = styled.h3`
    width: 20%;
    margin-left: 10px;
`
const AdjustedStock = styled.h3`
`

const Header1 = styled.h1`
   margin-left: 5px;
   font-family: Helvetica;
`

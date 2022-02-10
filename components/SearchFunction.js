import React, {useState} from "react"
import styled from 'styled-components'

const SearchFunction = (props) => {
    const current_price = props.current_stock
    const adjusted_price = props.adjusted_stock
    const company_name = props.company_name
    return(
	<div>
	    <Header1>{company_name}</Header1>
	    <StockPrices>
        	<CurrentStock>{current_price}</CurrentStock>
        	<AdjustedStock>{adjusted_price}</AdjustedStock>
	    </StockPrices>
	</div>
    )
}

export default SearchFunction


const Wrapper = styled.div`
    display: flex;

`

const Header1 = styled.h1`
   margin-left: 5px;
   font-family: Helvetica;
`

const StockPrices = styled.div`
   display: flex;
   margin-left: 5px;
   flex-direction: row;
   justify-content: left;
`

const CurrentStock = styled.h3`
   martin-top: auto;
   flex: 1;

`
const AdjustedStock = styled.h3`
   margin-top: auto;
   flex: 2;
`

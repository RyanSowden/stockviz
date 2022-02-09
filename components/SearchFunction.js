import React, {useState} from "react"
import styled from 'styled-components'

const SearchFunction = (props) => {
    const current_price = props.current_stock
    const adjusted_price = props.adjusted_stock
    const company_name = props.company_name
    return(
	<Wrapper>
        <h2>{current_price}</h2>
        <h2>{adjusted_price}</h2>
	<Header1>{company_name}</Header1>
	</Wrapper>
    )
}

export default SearchFunction


const Wrapper = styled.div`
    display: flex;

`

const Header1 = styled.h1`
   display: flex;
   text-align: center;
   justify-content: center;
`

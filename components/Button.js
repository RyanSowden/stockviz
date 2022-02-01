import React, {useState} from "react"
import styled from "styled-components"
import SearchFunction from "./SearchFunction"



const SearchButton = () =>{

    const [ticker,setTicker] = useState('')
    const [currentStock,setCurrentStock] = useState('')

    const handleChange = (e) => {
        setTicker(e.target.value)
    }

    const getStock = () => {
        setCurrentStock(ticker)
        
    }

    const clearState = () => {
        setCurrentStock('')
    }

    const handleSubmit = (e) => {
     
        getStock();
        clearState();
    }

    return(
        <Container>
            <form id="form">
                <input
                type="text"
                vlaue={ticker}
                onChange={handleChange}
                style={form}
                id="search"
                placeholder="Stock Ticker"
                name="search" 
                />
            </form>
            <Button id='searchbutton' onClick={handleSubmit} style={{backgroundColor: '#3773f5', color: 'black'}}>
                    Search
            </Button>
           <SearchFunction value={ticker}/>
        </Container>

    )

}

const Button = styled.div `
	border: 1px solid #282b2f;
	padding: 0.3rem;
	font-size: 1.3rem;
	font-weight: 500;
	margin-right: 1rem;
	
	&:hover{
		cursor:pointer
	}
`

const form = {
    border: 'black ridge 1px',
    padding: '0.6rem',
    }
    
const Container = styled.div`
	width: calc(100% - 3rem);	
	padding: 1rem 1.5rem;
	display: flex;
	align-items: center;
	`

export default SearchButton

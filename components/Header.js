import React from 'react'; 
import styled from 'styled-components';
import { useState } from 'react';
import Graph from './Graph';
import SearchFunction from './SearchFunction';



const Header = (props) => {
	
	const [stockTicker,setStockTicker] = useState('')
	const [currentStock,setCurrentStock] = useState('')

	const handleChange = (e) => { 
		setStockTicker(e.target.value); 
	}

	const handleSubmit = (e) => {
		getStock();
	}

	const getTicker = () => {
		return(props.callBack(stockTicker))
	}

	return(
		<Wrapper>
			
			<Title>StockViz</Title>
			<ButtonContainer>
			<form id='form'>
			<input
			type="text"
			vlaue={stockTicker}
			onChange={handleChange}
			style={form}
			id="search"
			placeholder="Stock Ticker"
			name="search" 
			/>
		    </form>
			    <Button id='searchbutton' onClick={getTicker} style={{backgroundColor: '#3773f5', color: 'black'}}>
				    Search
			    </Button>
			</ButtonContainer>

		</Wrapper>
		
		
	)

	

	
}



const Wrapper = styled.div`
	width: 100%;
	padding: 1rem 1.5rem;
	border-bottom: 1px solid #282b2f;
	display: flex;
	align-items: center;
	background-color: #f5f5f5;
	`

const Title = styled.div`
	font-size: 2rem;
	font-weight: 600;
	margin-right: 0.8rem;
	flex: 1;
	color: black;
`

const ButtonContainer = styled.div`
	display: flex;	
`

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
 

export default Header

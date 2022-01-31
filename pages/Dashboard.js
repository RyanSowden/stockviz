import React, {useState} from 'react'
import styled from 'styled-components'
import Graph from '../components/Graph'
import Header from '../components/Header'
import { createContext } from 'react'
import SearchFunction from '../components/SearchFunction'
import axios from 'axios'

const Dashboard = () => {

    const [ticker,setTicker] = useState('')
    const [currentStock,setCurrentStock] = useState('')
    const [companyName, setCompanyName] = useState('')

    const handleChange = (e) => {
        setTicker(e.target.value)
    }

    const getStock = async (ticker) => {
        const stock = ticker
        try{
            const current_response = await axios.post('http://localhost:2000/current',{ticker});
			const current_result = await current_response
			let current_price = (current_result['data'].regularMarketPrice)
			let company_name = (current_result['data'].longName)
			setCurrentStock(current_price)
            setCompanyName(company_name)
            console.log(currentStock)
        } catch(err){
            console.log(err)
        }
        
        
    }

    const clearState = () => {
        setCurrentStock('')
    }

    const handleSubmit = (e) => {
        getStock();
        clearState();
    }

    return(
        <Wrapper>
                <MainContainer>
                    <Header callBack={getStock}/>
                    <SearchFunction value={currentStock}/>
                </MainContainer>
        </Wrapper>
    )
}

export default Dashboard

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #f8f8ff;
    color: black;
    
    

`

const MainContainer = styled.div `
    flex: 1;
`
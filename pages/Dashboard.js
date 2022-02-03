import React, {useState} from 'react'
import styled from 'styled-components'
import Graph from '../components/Graph'
import Header from '../components/Header'
import SearchFunction from '../components/SearchFunction'
import axios from 'axios'

const Dashboard = () => {

    const [ticker,setTicker] = useState('')
    const [currentStock,setCurrentStock] = useState('')
    const [adjustedStock,setAdjustedStock] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [historyStock,setHistoryStock] = useState('')
	const [historyDate, setHistoryDate] = useState('')

    const handleChange = (e) => {
        setTicker(e.target.value)
    }

    const getTicker = (ticker) =>{
        setTicker(ticker)

    }

    const getCurrentStock = async () => {
        try{
            const current_response = await axios.post('http://localhost:2000/current',{ticker});
            const current_result = await current_response
		    const current_price = (current_result['data'].regularMarketPrice)
		    const company_name = (current_result['data'].longName)
		    setCurrentStock(current_price)
		    setCompanyName(company_name)
        } catch(err){
            console.log(err)
        }
	    }
     const getAdjustedPrice = async ()  =>  {
         try {
            const adjusted_response = await axios.post('http://localhost:2000/current',{ticker});
		    const adjusted_result = await adjusted_response
		    const adjusted_price = (adjusted_result['data'].postMarketPrice)
		    setAdjustedStock(adjusted_price)
            console.log(adjustedStock)
	    } catch(err) {
		    console.log(err)
	    };
     }

     const getHistory = async ()  =>  {
		try {
			const history_response = await axios.post('http://localhost:2000/history',{ticker});
			const history_result = await history_response
			let day1 = (history_result['data'][4].close)
			let day2 = (history_result['data'][3].close)
			let day3 = (history_result['data'][2].close)
			let day4 = (history_result['data'][1].close)
			let day5 = (history_result['data'][0].close)
			let history_price = [day1,day2,day3,day4,day5]
			let date1 = (history_result['data'][4].date)
			let date2 = (history_result['data'][3].date)
			let date3 = (history_result['data'][2].date)
			let date4 = (history_result['data'][1].date)
			let date5 = (history_result['data'][0].date)
			let new_date1 = date1.slice(0,10)
			let new_date2 = date2.slice(0,10)
			let new_date3 = date3.slice(0,10)
			let new_date4 = date4.slice(0,10)
			let new_date5 = date5.slice(0,10)
			let history_date = [new_date1,new_date2,new_date3,new_date4,new_date5]
			setHistoryStock(history_price)
			setHistoryDate(history_date)
		} catch(err) {
			console.log(err)
		};
	}

     getCurrentStock()
     getAdjustedPrice()
     getHistory()

    return(
        <Wrapper>
                <MainContainer>
                    <Header callBack={getTicker}/>
                    <SearchFunction current_stock={currentStock}/>
                    <SearchFunction adjusted_stock={adjustedStock}/>
                    <Graph history_date={historyDate}/>
                    <Graph history_data={historyStock}/>
                   
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

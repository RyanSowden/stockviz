import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import TestContext from '../pages/Dashboard'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';


const Graph = (props) =>{
    const stockDates = props.history_date
    const stockData = props.history_data

    const state = {
        labels: stockDates,
        datasets: [
          {
                    label: 'Price',
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: 'LightGray',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 1,
                    data: stockData
                  }
              ]
  }
   
    return(
        <div>
            <Line className='graph'
				type='line'
				options={{
					plugins: {
						title: {
							display: true,
							text: 'Stock Price Over Last 5 Days',
							fontSize: 25,
						},
						legend:{
							display:true,
							position:'right'
						}
					}
				}}

				data={state}
		/>
          
        </div>      

    )
}

export default Graph
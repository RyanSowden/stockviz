import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import TestContext from '../pages/Dashboard'



const Graph = (props) =>{
    const test = props.name
    const test2 = props.name2
    return(
        <div>
            <h2>{test}</h2>
            <h3>{test2}</h3>
          
        </div>      

    )
}

export default Graph
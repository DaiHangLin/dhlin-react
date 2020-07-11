import React from 'react'
import './Counter.css'


export const Counter = (props) => {
    const { data, doIncreament, doDecreament } = props
    return <div className={"Counter-container"}>
        <div className={"counter-btn"} onClick={doDecreament}> - </div>
        {data}
        <div className={"counter-btn"} onClick={doIncreament}> +  </div>
    </div>
}
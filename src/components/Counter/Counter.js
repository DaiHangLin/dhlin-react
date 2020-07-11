import React from 'react'
import './Counter.css'


export default function Counter(props) {
    const { data, doIncreament, doDecreament } = props
    console.log(props)
    return <div className={"Counter-container"}>
        <div className={"counter-btn"} onClick={doIncreament}> +  </div>
        {data}
        <div className={"counter-btn"} onClick={doDecreament}> - </div>
    </div>
}
import React from 'react'
import './Date.css'
const Date = ({active,availableDate}) =>{
    return (
        <div className={`Date ${active?'active':''}`}>
            <p>
                {availableDate.day}<br/>
                {availableDate.dateOfay}
            </p> 
        </div>
    )
}

export default Date
import React from 'react'
import './Title.css'
const Title = (props) => {
    return (
        <div className="Title">
            <h2 className="py-3">
                {props.title}<br/>
                (متابعة)
            </h2>
        </div>

    );
}

export default Title;
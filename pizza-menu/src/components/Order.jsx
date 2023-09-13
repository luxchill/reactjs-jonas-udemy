import React from 'react'

export const Order = () => {
    return (
        <div className="order">
            <p>We're open until until {props.closeHour}:00. Come visit us or order online.</p>
            <button className='btn'>Order</button>
        </div>
    )
}

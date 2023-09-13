import React from 'react'

export const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
        <div className="footer">
            {isOpen ?
                <Order closeHour={closeHour} />
                :
                (
                    <div className="order">
                        <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
                        <button className='btn'>Reminder</button>
                    </div>
                )
            }
        </div>
    )
}

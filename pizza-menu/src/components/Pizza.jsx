import React from 'react'

export const Pizza = (props) => {
    const { pizzaOjb } = props;
    return (
        <li className={`pizza ${pizzaOjb.soldOut ? 'sold-out' : ""}`}>
            <img src={pizzaOjb.photoName} alt="Pizza spinaci" />
            <div>
                <h3>{pizzaOjb.name}</h3>
                <p>{pizzaOjb.ingredients}</p>
                <span>{pizzaOjb.soldOut ? "SOLD OUT" : pizzaOjb.price}</span>
            </div>
        </li>
    )
}

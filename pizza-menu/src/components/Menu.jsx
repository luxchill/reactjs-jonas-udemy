import React from 'react'
import { Pizza } from './Pizza'

export const Menu = (props) => {
    const pizzas = props.pizzaData
    return (
        <div className='menu'>
            <h2>Our Menu</h2>
            {
                pizzas.length > 0 ?
                    (
                        <>
                            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious</p>

                            <ul className="pizzas">
                                {
                                    pizzas.map((pizza) => <Pizza pizzaOjb={pizza} key={pizza.name} />)
                                }
                            </ul>
                        </>
                    ) :
                    (
                        <p>We're still working on our menu. Please come back later 😥</p>
                    )
            }
        </div>
    )
}

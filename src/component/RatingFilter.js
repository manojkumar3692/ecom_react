import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

function RatingFilter({ rating, onclick }) {
    return (
        <div style={{ marginBottom: '4px' }}>

            {
                [...Array(5)].map((_, i) => {
                    return (
                        <span key={i} onClick={() => onclick(i)}>
                            {
                                rating > i ? (<FaStar />) : (<FaRegStar />)
                            }
                        </span>
                    )
                })
            }

        </div>
    )
}

export default RatingFilter
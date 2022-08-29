import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

function Rating({ value }) {

    return (
        <div style={{ marginBottom: '4px' }}>

            {
                [...Array(5)].map((_, i) => {
                    return (
                        <span>
                            {
                                value > i ? (<FaStar />) : (<FaRegStar />)
                            }
                        </span>
                    )
                })
            }

        </div>
    )
}

export default Rating
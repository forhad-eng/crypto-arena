import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CoinDetails = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState({})

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [id])
    return (
        <div className="px-4 h-[90vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2">
            <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl">General Info:</h1>
                    <hr />
                    <h1>Coin name: {coin.name}</h1>
                </div>
                <div className="flex justify-center items-center">
                    <img src={coin.image?.large} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CoinDetails

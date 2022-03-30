import React from 'react'

const CoinCard = ({ coin }) => {
    return (
        <div className="shadow-lg rounded-lg p-2 bg-white flex justify-between items-center">
            <img width={80} src={coin.image} alt="" />
            <div>
                <h1>{coin.name}</h1>
                <h1>{coin.symbol}</h1>
            </div>
        </div>
    )
}

export default CoinCard

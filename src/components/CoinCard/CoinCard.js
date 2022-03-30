import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({ coin }) => {
    return (
        <div className="shadow-lg rounded-2xl p-4 w-[250px] bg-white ">
            <Link to={`/coin-details/${coin.id}`}>
                <div className="flex gap-4 justify-between items-center">
                    <div className="flex-shrink-0">
                        <img className="mx-auto object-cover rounded-full h-16 w-16" src={coin.image} alt="" />
                    </div>
                    <div className="">
                        <h1 className="font-medium text-gray-600">{coin.name}</h1>
                        <h1 className="text-xs text-gray-400">{coin.symbol}</h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CoinCard

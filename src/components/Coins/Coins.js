import React, { useEffect, useState } from 'react'
import CoinCard from '../CoinCard/CoinCard'
import Spinner from '../Spinner/Spinner'

const Coins = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
        )
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setCoins(data)
            })
    }, [])
    return (
        <>
            {loading ? (
                <Spinner></Spinner>
            ) : (
                <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl">
                    <h1 className="text-center text-2xl font-bold">Available Crypto Currencies</h1>
                    <p className="text-center">Total coins {coins.length}</p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-14 px-14 py-10">
                        {coins.map((coin, index) => (
                            <CoinCard key={index} coin={coin}></CoinCard>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Coins

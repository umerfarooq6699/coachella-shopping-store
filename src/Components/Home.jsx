import React from 'react'
import Navbar from './Navbar'
import Flashsale from './Flashsale'
import Sale from './Sale'
import Collections from './Collections'
import Allsandals from './Allsandals'
import Highheel from './Highheel'
import Cybersneakers from './Cybersneakers'
import Footer from './Footer'
import Deals from './Deals'
import Sellers from './Sellers'
import Model from './Model'

const Home = () => {
    return (
        <>

            <Model />
            <Navbar />
            <Flashsale />
            <Sale />
            <Collections />
            <Allsandals />
            <Deals />
            <Highheel />
            <Cybersneakers />
            <Sellers />
            <Footer />
        </>
    )
}

export default Home
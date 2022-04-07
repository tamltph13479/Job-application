import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type Props = {}

const Websitelayout = (props: Props) => {
    return (
        <div className="">
            <Header />

            <Outlet />
            <Footer />

        </div>
    )
}

export default Websitelayout
import React from 'react'
import Header from '../Header/header'
import OurSer from '../Content/ourservice'
import InvesPlan from '../Content/invesPlan'
import CalCul from '../Content/profitCal'
import WelcomeTrack from '../Content/cointrect'
import WhyUS from '../Content/whyUs'
import OurTeam from '../Content/team'
import Testiimonial from '../Content/testimony'
import Currency_ads from '../Content/currency'
import Footer from '../Footer/footer'
const Landing = () =>{

    return(
        <div>
            <Header />
            <WelcomeTrack/>
            <OurSer />
            <InvesPlan/>
            <CalCul/>
            <WhyUS/>
            <OurTeam/>
            <Testiimonial/>
            <Currency_ads/>
            <Footer/>
        </div>
    )
}
export default Landing
import React from 'react'
import Header from '../Header/header'
import WelcomeTrack from '../Content/cointrect'
import OurTeam from '../Content/team'
import Currency_ads from '../Content/currency'
import Footer from '../Footer/footer'
const About = () =>{

    return(
        <div>
            <Header />
           
            <OurTeam/>
            <Currency_ads/>
            <Footer/>
        </div>
    )
}
export default About
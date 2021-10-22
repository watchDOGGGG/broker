import React, { useEffect } from 'react'
import Image1 from './UKIMG/George_Roberts.jpeg'
import Image2 from './UKIMG/AmeliaCartney.jpg'
import Image3 from './UKIMG/GilesMarshall.jpg'
import Image4 from './UKIMG/Oliverwhite.jpg'
const Team = ()=>{

    
    return(
        <section>
            <div className="mt3">
            <div className="section-header">
                   <figure className="sec-h">OUR LEADERS</figure>
                </div>
                <div class="container">
<div class="row team-row">

  <div class="col-md-3 col-sm-6 team-wrap">
    <div class="team-member text-center">
      <div class="team-img">
        <img src={Image3} alt=""/>
        <div class="overlay">
          <div class="team-details text-center">
            <div class="socials mt-20">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-google-plus"></i></a>
              <a href="#"><i class="fa fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
      <h6 class="team-title">Giles Marshall</h6>
      <span>President
Chief Operating Officer
coinrector & Trade Limited</span>
    </div>
  </div>
  {/* <!-- end team member --> */}

  <div class="col-md-3 col-sm-6 team-wrap">
    <div class="team-member text-center">
      <div class="team-img">
        <img src={Image1} alt=""/>
        <div class="overlay">
          <div class="team-details text-center">
            <div class="socials mt-20">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-google-plus"></i></a>
              <a href="#"><i class="fa fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
      <h6 class="team-title">George Roberts</h6>
      <span>President
coinrector & Trade Limited</span>
    </div>
  </div>
  {/* <!-- end team member --> */}

  <div class="col-md-3 col-sm-6 team-wrap">
    <div class="team-member last text-center">
      <div class="team-img">
        <img src={Image2} alt=""/>
        <div class="overlay">
          <div class="team-details text-center">
            <div class="socials mt-20">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-google-plus"></i></a>
              <a href="#"><i class="fa fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
      <h6 class="team-title">Amelia Cartney</h6>
      <span>Investment Expert</span>
    </div>
  </div>
  {/* <!-- end team member --> */}

  <div class="col-md-3 col-sm-6 team-wrap">
    <div class="team-member last text-center">
      <div class="team-img">
        <img src={Image4} alt=""/>
        <div class="overlay">
          <div class="team-details text-center">
            <div class="socials mt-20">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-google-plus"></i></a>
              <a href="#"><i class="fa fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
      <h6 class="team-title">Oliver white</h6>
      <span>Senior Vice
Market Analysis and Marketing Support
</span>
    </div>
  </div>
  {/* <!-- end team member --> */}
</div>
</div>
            </div>
            </section>
    )
}
export default Team
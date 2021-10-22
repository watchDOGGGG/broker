import React, { useEffect } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import Slider from './slider'
const name = "prince"
const images = [
    { url: "http://static8.depositphotos.com/1468291/934/i/450/depositphotos_9346925-Portrait-of-office-worker-at-desk.jpg" },
    { url: "https://img3.stockfresh.com/files/r/ra2studio/m/55/9374244_stock-photo-business-woman-using-tablet-in-home-office-mood-with-bitcoin-link-network-concept.jpg" },
    { url: "https://www.finextra.com/finextra-images/oped/40.jpeg" },
  ];
const HeaderCont = ()=>{

    return(
        <div>
            <div className="container-fluid">
                {/* <SimpleImageSlider
                    width={1000}
                    height={450}
                    images={images}
                    showNavs={true}
                    
      /> */}
      <Slider/>
            </div>
            <div className="container">
                <article class="center " data-name="slab-stat-small">
                   
                    <div class="cf flex center">
                        <dl class="fl fn-l w-40 dib w-auto-l lh-title mr5-l">
                            <dd class="f4 b fw6 ml0">Established</dd>
                            <dd class="f3 fw6 ml0 ba pa2">2013</dd>
                        </dl>
                         <dl class="fl fn-l w-20 dib w-auto-l lh-title mr5-l">
                         <dd class="f4 b fw6 ml0 dib">Total deposited	</dd>
                            <dd class="f3 fw6 ml0 ba pa2">$883431	</dd>
                        </dl>
                        <dl class="fl fn-l w-20 dib w-auto-l lh-title mr5-l">
                        <dd class="f4 b fw6 ml0">Total withdraw</dd>
                            <dd class="f3 fw6 ml0 ba pa2">$952549831
</dd>
                        </dl>
                    </div>
                </article>
            </div>
            {/* active users */}
            <div className="bg-light-blue pa2">
                 <div class="cf flex center">
                        <dl class="fl fn-l w-50 dib w-auto-l lh-title mr5-l">
                            <dd class="f4 b fw6 ml0 dib">Total Investors</dd>
                            <dd class="f5 fw6 ml2 ba pa1 dib">524236</dd>
                        </dl>
                         <dl class="fl fn-l w-50 dib w-auto-l lh-title mr5-l">
                         <dd class="f4 b fw6 ml0 dib">Visitors Online</dd>
                            <dd class="f5 fw6 ml2 ba pa1 dib">403</dd>
                        </dl>
                        <dl class="fl fn-l w-50 dib w-auto-l lh-title mr5-l">
                        <dd class="f4 b fw6 ml0 dib">Newest Member</dd>
                            <dd class="f5 fw6 ml2 ba pa1 dib">{name}</dd>
                        </dl>
                    </div>
                    <div class="cf flex center">
                        <dl class="fl fn-l w-50 dib w-auto-l lh-title mr5-l">
                            <dd class="f4 b fw6 ml0 dib">Protect DDOS</dd>
                            <dd class="f5 fw6 ml2 ba pa1 dib">Very Good</dd>
                        </dl>
                         <dl class="fl fn-l w-50 dib w-auto-l lh-title mr5-l">
                         <dd class="f4 b fw6 ml0 dib">Last deposit</dd>
                            <dd class="f5 fw6 ml2 ba pa1 dib">$165.00 (Amanda)</dd>
                        </dl>
                        <dl class="fl fn-l w-50 dib w-auto-l lh-title mr5-l">
                        <dd class="f4 b fw6 ml0 dib">Last withdraw</dd>
                            <dd class="f5 fw6 ml2 ba pa1 dib">$45.00 (Juniper)</dd>
                        </dl>
                    </div>
            </div>
            </div>
    )
}
export default HeaderCont
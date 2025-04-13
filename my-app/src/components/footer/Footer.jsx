import './footer.css';

import facebookImg from './../../images/fashion-images/socials/fb.svg';
import inImg from './../../images/fashion-images/socials/in.svg';
import instagramImg from './../../images/fashion-images/socials/inst.svg';
import twitterImg from './../../images/fashion-images/socials/tw.svg';

export default function Footer(){

    return(

        <section className="footer">

            <div className="footer__content">

                <div className="footer__advertisement">

                    <div className="footer__advertisement-title">

                         FASHION

                    </div>

                    <div className="footer__advertisement-desc">

                         Complete your style with awesome clothes from us.

                    </div>

                    <div className="footer__advertisement-social">

                        <a href="#!"><img src={facebookImg} alt="" /></a>

                        <a href="#!"><img src={instagramImg} alt="" /></a>

                        <a href="#!"><img src={twitterImg} alt="" /></a>

                        <a href="#!"><img src={inImg} alt="" /></a>

                    </div>

                </div>

                <div className="footer__about">

                    <div className="footer__about-company">

                       <div className="footer__about-title">

                            Company

                       </div>
                       
                       <div className="footer__about-desc">

                            <span><a href="#!">About</a> </span>

                            <span><a href="#!">Contact us</a></span>

                            <span><a href="#!">Support </a></span>

                            <span><a href="#!">Careers </a></span>

                       </div>

                    </div>
                    
                    <div className="footer__about-company">

                       <div className="footer__about-title">

                            Quick Link

                       </div>
                       
                       <div className="footer__about-desc">

                            <span><a href="#!">Share Location</a></span>

                            <span><a href="#!">Orders Tracking</a></span>

                            <span><a href="#!">Size Guide</a></span>

                            <span><a href="#!">FAQs</a></span>

                       </div>

                    </div>

                    <div className="footer__about-company">

                       <div className="footer__about-title">

                             Legal

                       </div>
                        
                       <div className="footer__about-desc">

                             <span><a href="#!">Terms & conditions</a></span>

                             <span><a href="#!">Privacy Policy</a></span>

                       </div>

                    </div>

                </div>

            </div>

        </section>

    )

}
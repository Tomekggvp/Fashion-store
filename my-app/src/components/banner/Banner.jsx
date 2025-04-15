import './banner.css';

import bannerImg from './../../images/fashion-images/images/promo-img.jpg'

export default function Banner(){
    
    return(

        <section className='banner'>

            <div className="banner__container">
    
                <div className="banner__content">

                    <div className="banner__img">

                        <img src={bannerImg} alt="" />

                    </div>

                    <div className="banner__text">

                         <div className="banner_title">

                            <span className='highlight'>

                                PAYDAY </span>

                            SALE NOW

                         </div>

                         <div className="banner__desc-1">

                         Spend minimal $100 get 30% off
                     
                         voucher code for your next purchase

                         </div>
                        
                         <div className="banner__desc-2">
                            
                             <span>1 June - 10 June 2021 </span>

                            *Terms & Conditions apply

                        </div>

                        <div className="banner__btn-wrapper">

                            <a href="#!" className='banner__btn'>

                                SHOP NOW

                            </a>
                    </div>

                    </div>

                </div>

            </div>

        </section>

    )
}
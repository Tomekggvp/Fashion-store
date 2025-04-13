import './vouchers.css';

import appStoreImg from './../../images/fashion-images/icons/app-store.png';
import googlePlayImg from './../../images/fashion-images/icons/google-play.png';

import vouchersImg from './../../images/fashion-images/images/vouchers-img.png';

export default function Vouchers(){

    return(

        <section className="vouchers">

            <div className="container">

                <div className="vouchers__content">

                    <div className="vouchers__text">

                        <div className="vouchers__title">

                            DOWNLOAD APP &
                            GET THE VOUCHER!

                        </div>

                        <div className="vouchers__desc">

                            Get 30% off for first transaction using
                            Rondovision mobile app for now.

                        </div>

                        <div className="vouchers__social">

                            <a href="#!"><img src={appStoreImg} alt="app-Store" /></a>

                            <a href="#!"><img src={googlePlayImg} alt="google-Play" /></a>

                        </div>
                        
                    </div>

                    <div className="vouchers__img">

                        <img src={vouchersImg} alt="" />

                    </div>

                </div>
                
            </div>
            
        </section>

    )

}
import '../promo/promo.css';
import promoImg from './../../images/fashion-images/images/header-img.jpg'

export default function Promo() {
    return (

        <section className="promo">

            <div className="container">

                <div className="promo__content">


                    <div className="promo__text">

                    <div className="promo__title">LET’S EXPLORE UNIQUE CLOTHES.</div>

                    <div className="promo__desc">Live for Influential and Innovative fashion!</div>

                    <div className="promo__btn">Shop Now</div>

                    </div>



                    <div className="promo__img">
                        <img src={promoImg} alt="" />
                    </div>


                </div>

            </div>

        </section>

    )
}
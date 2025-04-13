import './brands.css';

import hm from './../../images/fashion-images/brands/HM.png';
import obey from './../../images/fashion-images/brands/Obey.png';
import amazon from './../../images/fashion-images/brands/Amazon.png';
import lacoste from './../../images/fashion-images/brands/Lacoste.png';
import levis from './../../images/fashion-images/brands/Levis.png';
import shopify from './../../images/fashion-images/brands/Shopify.png';

export default function Brands() {

    return(

        <section className="brands">

            <div className="container">

                <ul className="brands__list">

                    <li><a href="#!"><img src={hm} alt="" /></a></li>
                    <li><a href="#!"><img src={obey} alt="" /></a></li>
                    <li><a href="#!"><img src={shopify} alt="" /></a></li>  
                    <li><a href="#!"><img src={lacoste} alt="" /></a></li>
                    <li><a href="#!"><img src={levis} alt="" /></a></li>
                    <li><a href="#!"><img src={amazon} alt="" /></a></li>

                </ul>

            </div>

        </section>

    )


}
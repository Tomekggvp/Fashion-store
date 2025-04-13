import './favourite.css';

import card01 from './../../images/fashion-images/images/promo-01.jpg';
import card02 from './../../images/fashion-images/images/promo-02.jpg';

import Card from './../card/Card';


export default function Favourite() {

    return(

        <section className="favourite">

            <div className="container">

                <div className="favourite__header">

                    <h2 className="title-2">

                        Young’s Favourite
                        
                    </h2>

                </div>

                <div className="favourite__card">

                    <Card title="Trending on instagram" img={card01} />

                    <Card title="All Under $40" img={card02}/>

                </div>

            </div>

        </section>

    )
}
import './community.css';

export default function Community(){

    return(

        <section className="community">

            <div className="content">

                <div className="community__title">

                  JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO

                </div>

                <div className="community__desc">

                  Type your email down below and be young wild generation

                </div>

                <div className="community__input">

                    <form action="">

                        
                        <div className="input-wrapper">

                            <input type="email" placeholder='Add your email'/>

                            <button className='community__btn'>

                                SEND

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>

    )

}
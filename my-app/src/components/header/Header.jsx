import logoImg from './../../images/fashion-images/icons/logo.svg'
import "./header.css"

export default function Header () {
    return(
        
    <>

        <header className="header">

          <div className="container">
            
            <div className="header__row">

                <div className="header__logo">

                    <img src={logoImg} alt="" />

                    <span>Fashion</span>

                </div>

                <nav className="header__nav">
  
                    <ul>

                        <li><a href="#!">CATALOGUE</a></li>
                        <li><a href="#!">FASHION</a></li>
                        <li><a href="#!">FAVOURITE</a></li>
                        <li><a href="#!">LIFESTYLE</a></li>
                        <li><a href="#!" className='Header__nav-btn'><span>SIGN UP</span></a></li>

                    </ul>

                </nav>

            </div>
            
         </div>  


        </header>

    </>

    )   
    
}
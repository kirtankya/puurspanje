import React from 'react'
import './footer.scss';
import logo from '../../assets/logo/Group1.png';
import icon from '../../assets/icon/Facebook.png';
import icon1 from '../../assets/icon/Vector.png';
import icon2 from '../../assets/icon/Group.png';
import icon3 from '../../assets/icon/Ellipse 6.png';
import icon4 from '../../assets/icon/elsevier1.png';
import icon5 from '../../assets/icon/second.png';
import icon6 from '../../assets/icon/fd-1.png';
import icon7 from '../../assets/icon/rtl4-1.png';
import icon8 from '../../assets/icon/rtlz.png';


export default function Footer() {
  return (
    <div className='footer-main'>
      <div className="container">
        <div className="flex-between">
          <div className="profile">
            <img src={logo} alt="" />
          </div>
          <div className="icons">
            <img src={icon} alt="" />
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
          </div>
        </div>
        <div className="flex-profile">
          <div className="profile-1">
            <div className="profile-image">
              <img src={icon3} alt="" />
            </div>
            <div className="profile-containe">
              <p>info@puurspanje.nl</p>
              <span>+34 618245967</span>
            </div>
          </div>
          <div className="main-containe">
            <p>Ontvang de laatste informatie</p>
            <span>97% van onze abonnees beoordeelt onze nieuwsbrief als nuttig en positief.</span>
            <input type="email" placeholder='Email Address' name="" id="" />
          </div>
        </div>
        <div className="footer-grid">
          <div className="footer-text">
            <div className="flex">
              <p>Menu</p>
              <i class="bi bi-list icon"></i>
            </div>
            <a href="">Meer in de regio</a>
            <a href="">Verhuurgarantie</a>
            <a href="">Aanbod Huizen Spanje</a>
            <a href="">Zoekprofiel</a>
            <a href="">Over</a>
          </div>
          <div className="footer-text">
            <p>Ontdek</p>
            <a href="">Events</a>
            <a href="">Referenties</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Cabo Roig</a>
            <a href="">Puurspanje Wielerteam</a>
          </div>
          <div className="footer-text">
            <p>Costa Calida</p>
            <a href="">San Javier</a>
            <a href="">el Carmoli</a>
            <a href="">Dolores de Pacheco</a>
            <a href="">Cabo de Palos</a>
            <a href="">la Manga del Mar Menor</a>
            <a href="">la Peraleja Golf</a>
            <a href="">la Serena Golf</a>
            <a href="">lo Pagan</a>
            <a href="">lo Romero Golf</a>
            <a href="">los Belones</a>
            <a href="">los Urrutias</a>
            <a href="">Mar Menor Golf</a>
            <a href="">Playa Honda</a>
            <a href="">Roda Golf</a>
          </div>
          <div className="footer-text">
            <p></p>
            <a href="">San Pedro del Pinatar</a>
            <a href="">Santiago de la Ribera</a>
            <a href="">Sucina</a>
            <a href="">Cartagena</a>
            <a href="">San Juan de los Terreros</a>
            <a href="">Aguilas</a>
            <a href="">Altaona Village</a>
            <a href="">Mircia</a>
            <a href="">Mazarron</a>
            <a href="">los Alcazares</a>
            <a href="">Hacienda del Alamo</a>
          </div>
          <div className="footer-text">
            <p>Costa Calida</p>
            <a href="">San Javier</a>
            <a href="">el Carmoli</a>
            <a href="">Dolores de Pacheco</a>
            <a href="">Cabo de Palos</a>
            <a href="">la Manga del Mar Menor</a>
            <a href="">la Peraleja Golf</a>
            <a href="">la Serena Golf</a>
            <a href="">lo Pagan</a>
            <a href="">lo Romero Golf</a>
            <a href="">los Belones</a>
            <a href="">los Urrutias</a>
            <a href="">Mar Menor Golf</a>
            <a href="">Playa Honda</a>
            <a href="">Roda Golf</a>
          </div>
          <div className="footer-text">
            <p></p>
            <a href="">San Pedro del Pinatar</a>
            <a href="">Santiago de la Ribera</a>
            <a href="">Sucina</a>
            <a href="">Cartagena</a>
            <a href="">San Juan de los Terreros</a>
            <a href="">Aguilas</a>
            <a href="">Altaona Village</a>
            <a href="">Mircia</a>
            <a href="">Mazarron</a>
            <a href="">los Alcazares</a>
            <a href="">Hacienda del Alamo</a>
          </div>
        </div>
        <div className="images">
          <img src={icon4} alt="" />
          <img src={icon5} alt="" />
          <img src={icon6} alt="" />
          <img src={icon7} alt="" />
          <img src={icon8} alt="" />
        </div>
        <p>Juridische mededeling</p>
      </div>
    </div>
  )
}

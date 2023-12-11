import React from 'react'
import './contact.scss';
import image from '../../../assets/icon/Vector-1.png';
import image1 from '../../../assets/icon/Vector-2.svg';
import image2 from '../../../assets/icon/Vector-3.svg';



export default function Contact1() {
    return (
        <div className='contact-background'>
            <div className="container">
                <div className="flex-contact">
                    <div className="contct-box">
                        <h2>Contact</h2>
                        <p>Heeft u vragen of wilt u ons spreken, neem dan
                            contact met ons op. Wij staan voor u klaar!
                        </p>
                        <hr />
                        <div className="flex-icon">
                            <img src={image} alt="" />
                            <p>info@puurspanje.nl</p>
                        </div>
                        <div className="flex-icon">
                            <img src={image1} alt="" />
                            <p>+34 618245967</p>
                        </div>
                        <div className="flex-icon">
                            <img src={image2} alt="" />
                            <p className='text-icon'>Avenida De La Unión, 7630730 San Javier, Murcia Spanje ES-B30806699</p>
                        </div>
                    </div>
                    <div className="box-contact">
                        <p>Vrijblijvend contact</p>
                        <span>Heeft u vragen of wenst u meer informatie?</span>
                        <h3>Bel ons op +34 618245967.</h3>
                        <span className='text-span'>Of laat via onderstaand contactformulier uw gegevens achter en ik kom z.s.m. bij u terug.</span>
                        <hr />
                    </div>

                </div>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7437.533445780188!2d72.8849001!3d21.2410971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f572640e5c7%3A0xcf6dd1eb4bea1b47!2sRiver%20View%20Heights%2C%20Pedar%20Rd%2C%20Mota%20Varachha%2C%20Surat%2C%20Gujarat%20394101!5e0!3m2!1sen!2sin!4v1699421917801!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

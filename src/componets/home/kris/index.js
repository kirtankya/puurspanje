import React from 'react'
import './kris.scss';
import image from '../../../assets/images/Rectangle 1455.png';
import img from '../../../assets/images/Rectangle 1456.png';
import img1 from '../../../assets/images/Rectangle 1457.png';
import Bounce from 'react-reveal/Bounce';

export default function Kris() {
    return (
        <div className='container'>
            <div className='kris'>
                <Bounce delay={500} bottom>
                    <div className='kris_pic'>
                        <div className='kris_pic1'>
                            <div className='kris_pic1_img1'>
                                <img src={image} alt="" />
                            </div>
                            <div className='kris_pic1_img2'>
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className='kris_m1'>
                            <img src={img} alt="" />
                        </div>
                        <div className='kris_pic2'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='kris_m1'>
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className='kris_cont'>
                        <div>
                            <h2>Anja & Kris</h2>
                            <p className='text-8'>Lorem. Eveniet, facere recusandae est velit unde suscipit earum illum cum laboriosam tempora vel natus provident ex omnis, quisquam laudantium, aut ut. Minus quae dolorum soluta quos blanditiis, commodi sunt eum asperiores facere.</p>
                            <p className='text-9'>Kochten een villa in Alicante in 2019</p>
                            <p className="text-10">Lees over deze koop</p>
                        </div>
                    </div>
                </Bounce>
            </div>
        </div>
    )
}

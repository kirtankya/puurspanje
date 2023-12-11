import React from 'react'
import './albar.scss';
import image from '../../../assets/images/Rectangle 120.png';

export default function Albar() {
    return (
        <div className='albar-main'>
            <div className="container">
                <div className="flex-albar">
                    <div className="text-albar">
                        <h2>Rustig & betaalbaar</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec neque quis mauris commodo volutpat et lobortis augue. Nulla facilisi. Sed eu elit a ligula euismod facilisis sit amet blandit dui. Curabitur lacus nunc, gravida sed neque nec, interdum dapibus nibh. </p>
                        <span>Donec blandit, neque ut iaculis accumsan, turpis dui eleifend turpis, ut porta eros lectus quis ex. Pellentesque posuere dui aliquet ipsum ultrices congue. Ut viverra bibendum mi, non pulvinar velit consectetur vitae.</span>
                    </div>
                    <div className="image-alba">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="flex-albar-main">
                    <h2>Meer informatie hier</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="flex-albar-main-1">
                    <div className="text-albar-main-1">
                        <p>Nederlandstalige makelaar</p>
                        <span className='span'>Nunc quis feugiat arcu. Nunc eu magna scelerisque, luctus est sed, fringilla neque. Etiam a augue eget ligula suscipit rhoncus. Vivamus non est et tortor mollis vehicula ac sit amet sapien. Praesent orci nibh, malesuada sed fringilla in, eleifend ut eros.</span>
                    </div>
                    <div className="text-albar-main-1">
                        <p>Staat altijd voor u klaar</p>
                        <span className='span'>Nunc quis feugiat arcu. Nunc eu magna scelerisque, luctus est sed, fringilla neque. Etiam a augue eget ligula suscipit rhoncus. Vivamus non est et tortor mollis vehicula ac sit amet sapien.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

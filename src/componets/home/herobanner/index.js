import React from "react";
import "./herobanner.scss";
import Fade from 'react-reveal/Fade';

export default function Herobanner() {
    return (
        <div className="herobanner-background">
            <div className="container">
                <Fade delay={500} bottom>
                    <div className="text">
                        <h2>Huis kopen in Spanje?</h2>
                        <h2>Vind uw droomhuis.</h2>
                    </div>
                </Fade>
                <Fade delay={500} bottom>
                    <p>
                        Puurspanje is een award-winning makelaar in de Costa Cálida en Costa
                        Blanca Zuid.
                    </p>
                </Fade>
                <Fade delay={500} bottom>
                    <div className="search_box">
                        <div className="main-flex-itme">
                            <div className="containe">
                                <span>Regio</span>
                                <div className="flex-containe">
                                    <p>Alle regio’s</p>
                                    <i class="bi bi-chevron-down icon-down"></i>
                                </div>
                            </div>
                            <hr />
                            <div className="containe-1">
                                <div>
                                    <span>Van</span>
                                    <div className="flex-containe">
                                        <p>€ 0</p>
                                        <i class="bi bi-chevron-down icon-down"></i>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <span>Van</span>
                                    <div className="flex-containe">
                                        <p>€ 400.000</p>
                                        <i class="bi bi-chevron-down icon-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="button-flex">
                                <div className="button-1">
                                    <div className="button">
                                        <button>
                                            <i class="bi bi-filter icon-filter"></i>
                                            <p>Filter</p>
                                        </button>
                                    </div>
                                </div>
                                <div className="button-2">
                                    <div className="button">
                                        <button>
                                            <i class="bi bi-search icon-search"></i>
                                            <p>Zoeken</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

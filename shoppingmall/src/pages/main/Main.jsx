import React from "react";
import Notification from "../../components/image/Outline/Status/Notification.png";
import ShoppingCart from "../../components/image/Outline/General/Shopping-cart.png";
import image2 from "../../components/image/image2.png";
import "./Main.css";
import Navbar from "../../components/navigator/Navbar";
import "../../components/navigator/Navbar.css"

export const Main = () => {
    return (
        <div className="main">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="rectangle" />

                    <div className="div" />

                    <div className="group">
                        <div className="overlap-group">
                            <div className="text-wrapper">Shopping Mall</div>

                            <div className="group-2">
                            <img className="notification-instance" src={Notification} alt="Notification Icon" />
                            <img className="outline-general" src={ShoppingCart} alt="Shopping Cart Icon" />
                            </div>

                            <div className="overlap-group-wrapper">
                                <div className="div-wrapper">
                                <input className="input" type="text" placeholder="1월 멤버스 데이 최대 30% 쿠폰" />
                                </div>
                            </div>

                            <div className="text-wrapper-2">
                                추천&nbsp;&nbsp;&nbsp;&nbsp;랭킹&nbsp;&nbsp;&nbsp;&nbsp;세일&nbsp;&nbsp;&nbsp;&nbsp;브랜드&nbsp;&nbsp;&nbsp;&nbsp;
                                신상&nbsp;&nbsp;&nbsp;&nbsp;멤버스 데이&nbsp;&nbsp;&nbsp;&nbsp;에너지 위크&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>

                    <img className="image" src={image2} alt="Main banner" />

                

                <div className="group-4">
                    <div className="group-5">
                        <div className="group-6">
                            <div className="overlap-group-3">
                                <div className="text-wrapper-8">
                                    &nbsp;&nbsp;&nbsp;🕐 타임세일
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="group-9">
                    <div className="group-6">
                        <div className="overlap-group-3">
                            <div className="text-wrapper-8">
                                &nbsp;&nbsp;&nbsp;🧥 F/W
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group-10">
                    <div className="group-6">
                        <div className="overlap-group-3">
                            <div className="text-wrapper-8">
                                &nbsp;&nbsp;&nbsp;🔥 F/W
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group-7">
                    <div className="group-6">
                        <div className="overlap-group-3">
                            <div className="text-wrapper-8">
                                &nbsp;&nbsp;&nbsp;🕐 타임세일
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group-8">
                    <div className="group-5">
                        <div className="group-6">
                            <div className="overlap-group-3">
                                <div className="text-wrapper-8">
                                    &nbsp;&nbsp;&nbsp;🕐F/W
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Navbar />
                
                </div>
            </div>
        </div>
        </div>
    );
};
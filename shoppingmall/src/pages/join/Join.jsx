import React from "react";
import "./Join.css";
import Navbar from "../../components/navigator/Navbar";

export const Join = () => {
    return (
        <div className="main">
            <div className="overlap-wrapper">
                <div className="overlap">
                <div className="group4">
                    <div className="text-wrapper1">Shopping Mall</div>
                </div>

                <div className="group1">
                    <div className="text-wrapper2">회원가입</div>
                </div>

                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input type="text" placeholder="이름"></input>
                    </div>
                </div>

                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input type="text" placeholder="이메일"></input>
                    </div>
                </div>

                <div className="group5">
                    <div className="text-wrapper5">이메일 인증 번호 요청
                    </div>
                </div>

                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input type="text" placeholder="이메일 인증 번호"></input>
                    </div>
                </div>

                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input type="text" placeholder="비밀번호"></input>
                    </div>
                </div>

                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input type="text" placeholder="핸드폰 번호"></input>
                    </div>
                </div>
                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input type="text" placeholder="주소"></input>
                    </div>
                </div>
                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input type="text" placeholder="생일"></input>
                    </div>
                </div>

                <div className="group3">
                    <div className="text-wrapper4">회원가입</div>
                </div>
            </div>
            <Navbar />
        </div>
        </div>
    );
};
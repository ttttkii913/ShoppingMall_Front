import React from "react";
import "./Login.css";
import Navbar from "../../components/navigator/Navbar";

export const Login = () => {
    return (
        <div className="main">
            <div className="overlap-wrapper">
                <div className="overlap">
                <div className="group4">
                    <div className="text-wrapper1">Shopping Mall</div>
                </div>

                <div className="group1">
                    <div className="text-wrapper2">로그인/회원가입</div>
                </div>

                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input type="text" placeholder="아이디"></input>
                    </div>
                </div>

                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input type="text" placeholder="비밀번호"></input>
                    </div>
                </div>

                <div className="group3">
                    <div className="text-wrapper4">로그인</div>
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
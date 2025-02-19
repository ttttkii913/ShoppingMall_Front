import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../../components/navigator/Navbar";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const Login = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // 로그인 핸들러
    const handleLogin = async (event) => {
        event.preventDefault(); // 폼 제출 기본 동작 막기

        try {
            // 백엔드에 로그인 요청
            const response = await axios.post(`${API_BASE_URL}/user/login`, {
                userId,
                password
            });

            // 로그인 성공 시 알림
            if (response.data.success) {
                alert("로그인 성공!");
                navigate("/main"); 
            } else {
                alert("아이디 또는 비밀번호가 틀립니다.");
            }
        } catch (error) {
            console.error("로그인 실패:", error);
            alert("로그인 실패! 다시 시도해주세요.");
        }
    };

    // 회원가입 이동 핸들러
    const handleJoin = () => {
        navigate("/join");
    };

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
                        <input
                            type="text"
                            placeholder="아이디"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />                    
                    </div>
                </div>

                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />                    
                    </div>
                </div>

                <div className="group3">
                    <div className="text-wrapper4" onClick={handleLogin}>로그인</div>
                </div>

                <div className="group3">
                    <div className="text-wrapper4" onClick={handleJoin}>회원가입</div>
                </div>
            </div>

            <Navbar />
        </div>
        </div>
    );
};
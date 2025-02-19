import React, { useState } from "react";
import axios from "axios";
import "./Join.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navigator/Navbar";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const Join = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthday] = useState("");
    const navigate = useNavigate();

    // 회원가입 핸들러
    const handleSubmit = async (event) => {
        event.preventDefault(); 

        // 백엔드 API에 데이터 전송
        try {
            const response = await axios.post(`${API_BASE_URL}/user/join`, {
                name,
                email,
                password,
                phone,
                address,
                birthday,
            });

            const { status, message, data } = response.data;
            
            // 응답 처리
            if (status === "success") {
                console.log("회원가입 성공:", message);
                if (data) {
                    console.log("가입한 사용자 정보:", data);
                    alert(`${message}\n이름: ${data.name}\n이메일: ${data.email}`);
                } else {
                    alert(`${message}\n사용자 정보는 제공되지 않습니다.`);
                }
                navigate("/login");
            } else {
                console.error("회원가입 실패:", message);
                alert(`회원가입 실패: ${message}`);
            }
            
        } catch (error) {
            console.error("회원가입 실패:", error);
            alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
        }
    };

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
                            <input
                                type="text"
                                placeholder="이름"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />                    
                        </div>
                    </div>

                    <div className="group2">
                        <div className="text-wrapper3"> 
                            <input
                                type="text"
                                placeholder="이메일"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

                    <div className="group2">
                        <div className="text-wrapper3"> 
                            <input
                                type="text"
                                placeholder="핸드폰 번호"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />                    
                        </div>
                    </div>

                    <div className="group2">
                        <div className="text-wrapper3"> 
                            <input
                                type="text"
                                placeholder="주소"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />                    
                        </div>
                    </div>

                    <div className="group2">
                        <div className="text-wrapper3"> 
                            <input
                                type="text"
                                placeholder="생일"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                            />                    
                        </div>
                    </div>

                    <div className="group3">
                        <div className="text-wrapper4" onClick={handleSubmit}>회원가입</div>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

import React, { useState } from "react";
import axios from "axios";
import "./Join.css";
import Navbar from "../../components/navigator/Navbar";

export const Join = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [authCode, setAuthCode] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthday] = useState("");

// 회원가입 핸들러
const handleSubmit = async (event) => {
    event.preventDefault(); 

    // 백엔드 API에 데이터 전송
    try {
        const response = await axios.post("http://localhost:8080/join", {
            name,
            email,
            authCode,
            password,
            phone,
            address,
            birthday,
        });

        // 응답 처리
        console.log("회원가입 성공:", response.data);
        
        alert("회원가입에 성공하였습니다! 로그인 페이지로 이동합니다.");
        window.location.href = "/login";

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

                <div className="group5">
                    <div className="text-wrapper5">이메일 인증 번호 요청
                    </div>
                </div>

                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input
                            type="text"
                            placeholder="이메일 인증 번호"
                            value={authCode}
                            onChange={(e) => setAuthCode(e.target.value)}
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
            <Navbar />
        </div>
        </div>
    );
};
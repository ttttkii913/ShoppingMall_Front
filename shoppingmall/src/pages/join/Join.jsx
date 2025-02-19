import React, { useState } from "react";
import axios from "axios";
import "./Join.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navigator/Navbar";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const Join = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [authNum, setAuthNum] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthday] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const navigate = useNavigate();

// 회원가입 핸들러
const handleSubmit = async (event) => {
    event.preventDefault(); 
    
    if (!isEmailVerified) {
        alert("이메일 인증을 완료해주세요.");
        return;
    }

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

        // 응답 처리
        console.log("회원가입 성공:", response.data);
        
        alert("회원가입에 성공하였습니다! 로그인 페이지로 이동합니다.");
        navigate("/login");

    } catch (error) {
        console.error("회원가입 실패:", error);
        alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
    }
};


// 이메일 인증 번호 요청 핸들러
const requestAuthCode = async () => {
    if (!email) {
        alert("이메일을 입력해주세요.");
        return;
    }

    try {
        await axios.post(`${API_BASE_URL}/email/send`, { email });
        alert("이메일로 인증 번호가 전송되었습니다.");
    } catch (error) {
        console.error("이메일 인증 요청 실패:", error);
        alert("이메일 인증 요청에 실패하였습니다. 다시 시도해주세요.");
    }
};

// 인증 코드 확인 핸들러
const verifyAuthCode = async () => {
    if (!authNum) {
        alert("인증 번호를 입력해주세요.");
        return;
    }

    try {
        const response = await axios.post(`${API_BASE_URL}/email/check`, {
            email,
            authNum,
        });
        
        if (response.data.success) {
            setIsEmailVerified(true);
            alert("이메일 인증이 완료되었습니다.");
        } else {
            alert("인증 번호가 올바르지 않습니다. 다시 확인해주세요.");
        }
    } catch (error) {
        console.error("이메일 인증 확인 실패:", error);
        alert("이메일 인증 확인에 실패하였습니다. 다시 시도해주세요.");
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
                            disabled={isEmailVerified}
                        />                    
                    </div>
                </div>

                <div className="group5">
                    <div className="text-wrapper5">
                        <button type="button"onClick={requestAuthCode} disabled={isEmailVerified}>
                        {isEmailVerified ? "이메일 인증 완료" : "이메일 인증 번호 요청"}</button>
                    </div>
                </div>

                <div className="group2">
                    <div className="text-wrapper3"> 
                        <input
                            type="text"
                            placeholder="이메일 인증 번호"
                            value={authNum}
                            onChange={(e) => setAuthNum(e.target.value)}
                            disabled={isEmailVerified}
                        />                    
                    </div>
                </div>

                <div className="group5">
                    <div className="text-wrapper5">
                        <button type="button" onClick={verifyAuthCode} disabled={isEmailVerified}>
                            {isEmailVerified ? "인증 완료" : "인증 확인"}
                        </button>
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
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyPage.css";
import Navbar from "../../components/navigator/Navbar";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const MyPage = () => {
    const [user, setUser] = useState({
        userId: 1,
        name: "하영",
        email: "r@naver.com",
        phone: "010-0000-0000",
        birthDay: "2002-08-21",
        address: "서울시 양천구",
        userStatus: "USER",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [newUserInfo, setNewUserInfo] = useState({
        name: user.name,
        password: "",  
        email: user.email,
        phone: user.phone,
        address: user.address,
        birthDay: user.birthDay,
    });

    useEffect(() => {
    
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${API_BASE_URL}/view/info`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.data.status === "success") {
                    setUser(response.data.data);
                    setNewUserInfo({
                        name: response.data.data.name,
                        password: "",  
                        email: response.data.data.email,
                        phone: response.data.data.phone,
                        address: response.data.data.address,
                        birthDay: response.data.data.birthDay,
                    });
                }
            } catch (error) {
                console.error("사용자 정보 요청 실패:", error);
            }
        };

        fetchUserInfo();
    
    }, []);

    const handleSaveChanges = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.put(`${API_BASE_URL}/view/info`, newUserInfo, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.data.status === "success") {
                alert("정보가 성공적으로 수정되었습니다.");
                setUser({
                    ...user,
                    ...newUserInfo,
                });
                setIsEditing(false);
            } else {
                alert("정보 수정에 실패했습니다.");
            }
        } catch (error) {
            console.error("정보 수정 실패:", error);
            alert("정보 수정에 실패했습니다.");
        }
    };

    const handleCancelEdit = () => {
        setNewUserInfo({
            name: user.name,
            password: "",
            email: user.email,
            phone: user.phone,
            address: user.address,
            birthDay: user.birthDay,
        });
        setIsEditing(false);
    };

    return (
        <div className="main">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="group4">
                        <div className="text-wrapper1">Shopping Mall</div>
                    </div>

                    <div className="group1">
                        <div className="text-wrapper2">마이 페이지</div>
                    </div>

                    <div className="group2">
                        <div className="text-wrapper3">
                            <p> 이름 : </p>{isEditing ? (
                                <input
                                    type="text"
                                    value={newUserInfo.name}
                                    onChange={(e) => setNewUserInfo({ ...newUserInfo, name: e.target.value })}
                                />
                            ) : (
                                <b>{user.name}</b>
                            )}
                        </div>
                    </div>

                    <div className="group2">
                        <div className="text-wrapper3">
                            <p> 이메일 : </p>{isEditing ? (
                                <input
                                    type="email"
                                    value={newUserInfo.email}
                                    onChange={(e) => setNewUserInfo({ ...newUserInfo, email: e.target.value })}
                                />
                            ) : (
                                <b>{user.email}</b>
                            )}
                        </div>
                    </div>

                    <div className="group2">
                        <div className="text-wrapper3">
                            <p>전화번호 : </p>{isEditing ? (
                                <input
                                    type="text"
                                    value={newUserInfo.phone}
                                    onChange={(e) => setNewUserInfo({ ...newUserInfo, phone: e.target.value })}
                                />
                            ) : (
                                <b>{user.phone}</b>
                            )}
                        </div>
                    </div>

                    <div className="group2">
                        <div className="text-wrapper3">
                            <p>생년월일 : </p> {isEditing ? (
                                <input
                                    type="text"
                                    value={newUserInfo.birthDay}
                                    onChange={(e) => setNewUserInfo({ ...newUserInfo, birthDay: e.target.value })}
                                />
                            ) : (
                                <b>{user.birthDay}</b>
                            )}
                        </div>
                    </div>

                    <div className="group2">
                        <div className="text-wrapper3">
                            <p>주소: </p>{isEditing ? (
                                <input
                                    type="text"
                                    value={newUserInfo.address}
                                    onChange={(e) => setNewUserInfo({ ...newUserInfo, address: e.target.value })}
                                />
                            ) : (
                                <b>{user.address}</b>
                            )}
                        </div>
                    </div>

                    <div className="group2">
                        <div className="text-wrapper3">
                            <p>상태 : </p> 
                            <b>{user.userStatus}</b>
                        </div>
                    </div>

                    {isEditing ? (
                        <div className="group3">
                            <div className="text-wrapper4" onClick={handleSaveChanges}>
                                저장
                            </div>
                            <div className="text-wrapper4" onClick={handleCancelEdit}>
                                취소
                            </div>
                        </div>
                    ) : (
                        <div className="group3">
                            <div className="text-wrapper4" onClick={() => setIsEditing(true)}>
                                정보 수정
                            </div>
                        </div>
                    )}
                </div>

                <Navbar />
            </div>
        </div>
    );
};

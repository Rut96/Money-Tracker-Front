import React from "react";
import "./PersonalInfo.css";
import avatar from "../../../assets/images/avatar.png";

export function PersonalInfo(): JSX.Element {
    return (
        <div className="PersonalInfo">
            <div className="img-wrapper">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
                <div className="welcome">
                    <h3>Good morning</h3>
                    <h2 className="user-name">Rut Van</h2>
                    <p className="user-date">18 June 2017</p>
                </div>
                <div className="complete-info">
                    <div className="month-complete">
                        <div className="month-complete-fill"></div>
                    </div>
                    <p>Remaining days:</p>
                    <p className="workdays">♥️ 20 Workdays</p>
                    <p className="holidays">💚 10 Holidays</p>
                </div>
            </div>
        </div>
    );
}
import React from "react";
import style from "./Header.module.scss";

export const Header = () => {
    return (
        <div className={style.headStyle}>
            <div>
                <h1>AppCo</h1>
            </div>
        </div>
    );
};
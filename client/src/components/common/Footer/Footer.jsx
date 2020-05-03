import React from "react";
import style from "./Footer.module.scss";

export const Footer = () => {
    return (
        <div className={style.footStyle}>
            <div>
                <h3>AppCo</h3>
                <span>All rights reserved by ThemeTags</span>
                <span>Copyrights © 2019.</span>
            </div>
        </div>
    );
};
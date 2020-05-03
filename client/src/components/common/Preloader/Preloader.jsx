import React from "react";
import style from "./Preloader.module.scss"
import preloaderGIF from "../../../assets/img/Spinner-1s-200px.gif"

export const Preloader = () => {
    return <div className={style.preloader}>
        <img src={preloaderGIF} alt=""/>
    </div>
};
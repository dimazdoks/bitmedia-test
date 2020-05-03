import React, {useState} from "react";
import {Calendar} from "../common/Calendar/Calendar";
import {Statistics} from "../common/Statistic/Statistics";
import style from "./User.module.scss";
import {NavLink} from "react-router-dom";
import {Preloader} from "../common/Preloader/Preloader";

export const User = ({from, to, setFrom, setTo, data, user_name, id}) => {
    const [chooseDate, setChooseDate] = useState({
        from: from,
        to: to
    });

    if (!data) return <Preloader/>;
    else return (
        <div className={style.master}>
            <div className={style.nav}>
                <NavLink to="/" exact>Main page</NavLink>
                <NavLink to="/users-list" exact>User statistics</NavLink>
                <NavLink to={'/user/' + id} exact className={style.currentPage}>{user_name}</NavLink>
            </div>
            <div className={style.chooseDate}>

                <h2>{user_name}</h2>
                <Calendar date={chooseDate.from} setDate={(e) => {
                    setChooseDate({...chooseDate, from: e});
                }} text="From"/>
                <Calendar date={chooseDate.to} setDate={(e) => {
                    setChooseDate({...chooseDate, to: e});
                }} text="to" min={chooseDate.from}/>

                <button className={style.showCharts} disabled={chooseDate.from > chooseDate.to} onClick={() => {
                    setFrom(chooseDate.from);
                    setTo(chooseDate.to);
                }}>Show
                </button>
            </div>


            <div className={style.statistics}>
                <Statistics min={from}
                            max={to}
                            data={data.clicks}
                            label="Clicks"/>
            </div>
            <div className={style.statistics}>
                <Statistics min={from}
                            max={to}
                            labels={data.labels}
                            data={data.views}
                            label="Views"/>
            </div>

        </div>
    );
};
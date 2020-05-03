import React from "react";
import style from "./Calendar.module.scss";

export const Calendar = ({text, date, setDate, min = undefined}) => {
    return (
        <div className={style.calendar}>
            <label htmlFor={text}>{text}:</label>
            <input type="date"
                   id={text}
                   name="trip-start"
                   value={date}
                   min={min}
                   onChange={(e) => {
                       setDate(e.target.value);
                   }
                   }/>
        </div>
    );
};
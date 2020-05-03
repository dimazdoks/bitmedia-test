import React, {useEffect, useState} from "react";
import style from "./Paginator.module.scss";

export const Paginator = ({totalCount, pageSize, currentPage, changeCurrentPage, portionSize}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize));
    }, [currentPage, portionSize]);

    return (
        <div className={style.underPaginator}>
            {/* draw button PREV */}
            <button disabled={portionNumber <= 1} onClick={() => {
                setPortionNumber(portionNumber - 1);
            }}/>

            {/* draw pages */}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, key) =>
                    <span className={(p === currentPage) ? style.currentPage : undefined}
                          key={key}
                          onClick={() => changeCurrentPage(p)}
                    >{p}</span>)}


            {/* draw button NEXT */}
            <button disabled={portionNumber >= portionCount} onClick={() => {
                setPortionNumber(portionNumber + 1);
            }}/>

        </div>
    );
};
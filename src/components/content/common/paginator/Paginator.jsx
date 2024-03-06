import React, { useState } from "react";
import css from './paginator.module.css'

export const Paginator = ({totalItemsCount,pageSize,currentPage,changePage,portionSize=10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let portionCount = Math.ceil(totalItemsCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize
    
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>prev</button>}
            
            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => { return <span className={currentPage === p && css.selectedPage} onClick={(e) => { changePage(p) }}>{p}</span> })}
            
            {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>next</button>}

        </div>
    )
}